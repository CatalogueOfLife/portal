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

      puts "Building changelog ..."
      api = site.config['metadata']['api']
      key = site.config['metadata']['key']
      origin = site.config['metadata']['origin']
      limit = site.config['changelog']['limit']
      log = []
      site.config['changelog']['entries'] = log

      # iterate over all releases and produce a changelog for each version change
      # TODO: include deleted releases
      rels = load(URI("#{api}/dataset?releasedFrom=#{key}&sortBy=created&origin=#{origin}&private=false&limit=#{limit}"))
      puts "Found #{rels['total']} releases"
      rels['result'].each_with_index do | d, idx |
        prev = rels['result'][idx+1]
        unless prev.nil?
          log.append( prepareChange(api, d, prev) )
        end
      end
    end

    def prepareChange(api, d, prev)
      k1 = d['key']
      k2 = prev['key']
      puts "  Change: #{k1} vs #{k2}"
      chg = {}
      chg['d']=d
      chg['prev']=prev
      imp  = load(URI("#{api}/dataset/3/import/#{d['attempt']}"))
      impPrev = load(URI("#{api}/dataset/3/import/#{prev['attempt']}"))
      chg['imp']     = imp
      chg['impPrev'] = impPrev
      # usagesCount,species/genera/families changed taxaByRankCount & extinctTaxaByRankCount

      # source changes
      source     = load(URI("#{api}/dataset/#{k1}/source"))
      sourcePrev = load(URI("#{api}/dataset/#{k2}/source"))
      chg['sources'] = source.length()
      # map from key to source
      src = {}
      sourcePrev.each do | s |
        src[s['key']]=s
      end
      source.each do | s |
        src[s['key']]=s
      end
      # diff sources
      srcKeys1 = source.map { |s| s['key'] }
      srcKeys2 = sourcePrev.map { |s| s['key'] }
      removed = srcKeys2 - srcKeys1
      added   = srcKeys1 - srcKeys2
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

