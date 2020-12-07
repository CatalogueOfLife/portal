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
      puts "Using release key #{md['current']['key']}"
      site.config['react']['datasetKey'] = md['current']['key']

      load(URI("#{api}/dataset/#{key}/source"), md, 'sources', user, pass)
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

