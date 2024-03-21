require "jekyll"
require 'uri'
require 'net/http'
require 'net/https'
require 'json'


module GetReleaseMetadata
  class GetJsonGenerator < Jekyll::Generator
    safe true
    priority :highest

    def generate(site)
      md = site.config['metadata']

      mdb = md.clone
      mdb['private']=true # the xcol currently is only ever private
      site.config['metadata_base'] = mdb

      # swap RELEASE and XRELEASE once we go live!
      releaseKey = generateOneRelease(md, 'RELEASE')
      puts "Using release key #{releaseKey}"
      site.config['react']['datasetKey']

      releaseKey = generateOneRelease(mdb, 'XRELEASE')
      puts "Using base release key #{releaseKey}"
      site.config['react_base']['datasetKey']
    end

    def generateOneRelease(md, origin)
      api = md['api']
      key = md['key']
      user = md['user']
      pass = md['pass']
      priv = md['private']

      if !key
        warn "No project key".yellow
        return
      end
      if !api
        warn "No api configured".yellow
        return
      end

      rels = load(URI("#{api}/dataset?releasedFrom=#{key}&sortBy=created&origin=#{origin}&private=#{priv}&limit=2"), user, pass)
      md['current'] = rels['result'][0]
      releaseKey = md['current']['key']
      addAgentLabels(md['current'])

      md['sources'] = load(URI("#{api}/dataset/#{releaseKey}/source"), user, pass)
      md['sources'].each { |d| addAgentLabels(d)}            

      md['previous'] = rels['result'][1]      
      if md['previous']
        puts "Previous release key #{md['previous']['key']}"
      else
        puts "No previous release key"
      end
      return releaseKey
    end


    def addAgentLabels(d)
      if d['creator']
        d['creator'].each { |a| addAgentLabel(a)}            
      end
      if d['contributor']
        d['contributor'].each { |a| addAgentLabel(a)}            
      end
      if d['publisher']
        addAgentLabel(d['publisher'])
      end
      if d['contact']
        addAgentLabel(d['contact'])
      end
    end

    def addAgentLabel(a)
      label = StringIO.new
      if a['family']
        label << a['family']
        if a['given']
          label << ", "
          label << a['given']
        end
        if a['orcid']
          label << ' <a href="https://orcid.org/'
          label << a['orcid']
          label << '"><img alt="ORCID logo" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" width="16" height="16" /></a>'
        end
      end

      if a['organisation'] or a['address']
        if !a['orcid'] and a['family'] and a['given'] and a['given'][-1] != "."
          label << "."
        end
        label << " <i>"
      end
      if a['organisation']
        if a['department']
          label << a['department']
          label << ", "
        end
        label << a['organisation']
      end
      if a['address']
        label << ", "
        label << a['address']
      end
      if a['organisation'] or a['address']
        label << "</i>"
      end

      if a['note']
        label << " - <i>"
        label << a['note']
        label << "</i>"
      end
      a['label']=label.string
    end

    def load(uri, user, pass)
      puts "Reading JSON from #{uri}"
      Net::HTTP.start(uri.host, uri.port,
        :use_ssl => uri.scheme == 'https', 
        :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|

        req = Net::HTTP::Get.new uri.request_uri
        if user
          req.basic_auth user, pass
        end
        resp = http.request req # Net::HTTPResponse object

        if resp.code != "200"
          warn "Bad JSON response #{resp.code}: #{resp.message}"
          next
        end
        return JSON.parse(resp.body)
      end
    end
  end
end

