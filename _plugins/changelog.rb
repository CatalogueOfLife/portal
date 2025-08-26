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
      excludes = site.config['changelog']['exclude']
      log = []

      # first read all local files and then look for newer releases since the last one
      keys = []
      rels = {}
      Dir.each_child(Dir.pwd) do |fn| 
        key = File.basename(fn, File.extname(fn)).to_i
        puts "Found #{key}"
        if excludes.include? key
          puts "  excluded"
        else
          keys.append(key)
          file = File.open("#{fn}")
          rels[key]=JSON.load(file)
        end
      end

      # now look for all releases since
      relKeys = load(URI("#{api}/dataset/keys?releasedFrom=#{pkey}&private=false&inclDeleted=true"))
      relKeys.each do | key |
        unless keys.include? key or excludes.include? key or key < 2242 # the first 20.12 release!
          keys.append(key)
          puts "Load new release #{key}"
          rel={}
          d = load(URI("#{api}/dataset/#{key}"))
          d.delete('source') # remove some heavy dataset props
          rel['dataset']   = d
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
      prevAnnual=nil
      prevX=nil
      prevXAnnual=nil
      keys.sort.each do | key |
        r = interpret(key, rels[key])
        if r['extended']
          if r['annual']
            log.append( prepareChange(r, prevXAnnual) )
            prevXAnnual = r
          else
            log.append( prepareChange(r, prevX) )
          end
          prevX = r
        else
          if r['annual']
            log.append( prepareChange(r, prevAnnual) )
            prevAnnual = r
          else
            log.append( prepareChange(r, prev) )
          end
          prev = r
        end
      end

      # finally set and reverse log entries
      site.config['changelog']['entries'] = log.reverse
    end


    def interpret(key, r)
      r['key']      = key
      r['attempt']  = r['dataset']['attempt']
      r['extended'] = r['dataset']['origin'] == 'xrelease'
      r['annual']   = r['dataset']['version'].start_with?("Annual")
      r['srcCnt']   = r['sources'] ? r['sources'].length : "unknown"
      return r
    end


    def prepareChange(rel, prev)
      k1 =  rel['key']
      chg = {}
      chg['rel']=rel

      if prev.nil?
        puts "  First: #{k1}"
        chg['prev']=nil
        chg['removed'] = []
        chg['added']   = rel['sources'] ? rel['sources'].sort_by{|s| s.fetch('alias', '')} : []
        chg['hasChange'] = true
        # publisher
        chg['premoved'] = []
        chg['padded']   = rel['publisher'] ? rel['publisher'].sort_by{|s| s.fetch('alias', '')} : []
        chg['hasPubChange'] = true

      else
        k2 = prev['key']
        puts "  Change: #{k1} vs #{k2}"
        chg['prev']=prev
        # map from key to source
        src = {}
        prev['sources'].each do | s |
          src[s['key']]=s
        end
        rel['sources'].each do | s |
          src[s['key']]=s
        end
        # diff sources
        srcKeys     =  rel['sources'].map { |s| s['key'] }
        srcKeysPrev = prev['sources'].map { |s| s['key'] }
        removed = srcKeysPrev - srcKeys
        added   = srcKeys - srcKeysPrev
        chg['removed'] = removed ? removed.map { |k| src[k] } .sort_by{|s| s.fetch('alias', '')} : []
        chg['added']   = added ? added.map { |k| src[k] } .sort_by{|s| s.fetch('alias', '')} : []
        chg['hasChange'] = removed || added
        # publisher
        pubs = {}
        pKeys=[]
        pKeysPrev=[]
        if prev['publisher']
          prev['publisher'].each do | s |
            pubs[s['id']]=s
          end
          pKeysPrev = prev['publisher'].map { |s| s['id'] }
        end
        if rel['publisher']
          rel['publisher'].each do | s |
            pubs[s['id']]=s
          end
          pKeys = rel['publisher'].map { |s| s['id'] }
        end
        premoved = pKeysPrev - pKeys
        padded   = pKeys - pKeysPrev
        chg['premoved'] = premoved ? premoved.map { |k| pubs[k] } .sort_by{|s| s.fetch('title', '')} : []
        chg['padded']   = padded ? padded.map { |k| pubs[k] } .sort_by{|s| s.fetch('title', '')} : []
        chg['hasPubChange'] = premoved || padded
      end
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

