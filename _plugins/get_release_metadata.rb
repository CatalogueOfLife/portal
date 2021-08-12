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
      api = md['api']
      key = md['key']
      user = md['user']
      pass = md['pass']

      if !key
        warn "No project key".yellow
        return
      end
      if !api
        warn "No api configured".yellow
        return
      end

      
      load(URI("#{api}/dataset/#{key}"), md, 'current', user, pass)
      addAgentLabels(md['current'])
      puts "Using release key #{md['current']['key']}"
      site.config['react']['datasetKey'] = md['current']['key']

      load(URI("#{api}/dataset/#{key}/source"), md, 'sources', user, pass)
      md['sources'].each { |d| addAgentLabels(d)}            

    end


    def addAgentLabels(d)
      if d['creator']
        d['creator'].each { |a| addAgentLabel(a)}            
      end
      if d['contributor']
        d['contributor'].each { |a| addAgentLabel(a)}            
      end
    end

    def addAgentLabel(a)
      label = StringIO.new
      label << a['family']
      if a['given']
        label << ", "
        label << a['given']
      end
      if a['organisation']
        label << " <i>("
        if a['department']
          label << a['department']
          label << ", "
        end
        label << a['organisation']
        label << "</i>)"
      end
      if a['note']
        label << " - <i>"
        label << a['note']
        label << "</i>"
      end
      a['label']=label.string
    end

    def load(uri, cfg, target, user, pass)
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
        source = JSON.parse(resp.body)
        cfg[target] = source
      end
    end
  end
end

