require "jekyll"
require 'uri'
require 'net/http'
require 'net/https'
require 'json'


module ChangeLog
  class ChangeLogGenerator < Jekyll::Generator
    safe true
    priority :highest

    def generate(site)

      Dir.chdir("_data/releases")
      puts "Building changelog from data dir #{Dir.pwd}"

      api = site.config['metadata']['api']
      pkey = site.config['metadata']['key']
      log = []
      site.config['changelog']['entries'] = log

      # first read all local files and then look for newer releases since the last one
      keys = []
      rels = {}
      Dir.each_child(Dir.pwd) do |fn| 
        key = File.basename(fn, File.extname(fn)).to_i
        puts "Found #{key}"
        keys.append(key)
        file = File.open("#{fn}")
        rels[key]=JSON.load(file)
      end

      # now look for all releases since
      relKeys = load(URI("#{api}/dataset/keys?releasedFrom=#{pkey}&private=false&inclDeleted=true"))
      relKeys.each do | key |
        unless keys.include? key
          keys.append(key)
          puts "Load new release #{key}"
          rel={}
          d = load(URI("#{api}/dataset/#{key}"))
          d.delete('source') # remove some heavy dataset props
          rel['key']       = key
          rel['dataset']   = d
          rel['attempt']   = d['attempt']
          rel['metrics']   = load(URI("#{api}/dataset/3/import/#{d['attempt']}"))
          rel['sources']   = load(URI("#{api}/dataset/#{key}/source"))
          pub = load(URI("#{api}/dataset/#{key}/sector/publisher"))['result']
          unless pub.nil?
            pub.each do | p |
              metrics = load(URI("#{api}/dataset/#{key}/sector/publisher/#{p['id']}/metrics"))              
              cnt = metrics['datasetCount']
              p['datasets'] = cnt
              p['metrics'] = metrics
            end
            rel['publisher'] = pub.reject { |p| p['datasets'] == 0 }
          end
          rels[key]=rel
          # store on fs
          json = JSON.generate(rel)
          File.write("#{key}.json", json)
        end
      end

      # sort keys
      prev=nil
      keys.sort.each do | key |
        r = rels[key]
        unless prev.nil?
          log.append( prepareChange(r, prev) )
        end
        prev = r
      end
    end


    def prepareChange(rel, prev)
      k1 =  rel['key']
      k2 = prev['key']
      puts "  Change: #{k1} vs #{k2}"
      chg = {}
      chg['rel']=rel
      chg['prev']=prev
      # usagesCount,species/genera/families changed taxaByRankCount & extinctTaxaByRankCount

      # map from key to source
      src = {}
      rel['sources'].each do | s |
        src[s['key']]=s
      end
      prev['sources'].each do | s |
        src[s['key']]=s
      end
      # diff sources
      srcKeys     =  rel['sources'].map { |s| s['key'] }
      srcKeysPrev = prev['sources'].map { |s| s['key'] }
      removed = srcKeysPrev - srcKeys
      added   = srcKeys - srcKeysPrev
      chg['removed'] = removed ? removed.map { |k| src[k] } .sort_by{|s| s.fetch('alias', '')} : []
      chg['added']   = added ? added.map { |k| src[k] } .sort_by{|s| s.fetch('alias', '')} : []
      return chg
    end


    def load(uri)
      puts "Reading JSON from #{uri}"
      Net::HTTP.start(uri.host, uri.port,
        :use_ssl => uri.scheme == 'https', 
        :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|

        req = Net::HTTP::Get.new uri.request_uri
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

