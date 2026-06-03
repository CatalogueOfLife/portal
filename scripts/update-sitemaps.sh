#!/bin/bash

# Monthly (Jenkins) job: rebuild the chunked taxon sitemaps from the latest
# public XRelease. Output now goes to public/sitemaps/ so Astro serves them at
# /sitemaps/*.gz; robots.txt lists them by reading that directory at build time
# (so the old _includes/sitemap-index.txt is no longer needed).

while [[ $# -gt 0 ]]; do
  case $1 in
    -k|--key)
      KEY="$2"
      shift 2
      ;;
    *|-*|--*)
      echo "Unknown option $1"
      exit 1
      ;;
  esac
done

API=https://api.checklistbank.org
OUT=../public/sitemaps

if [ -z "$KEY" ]
then
  echo "Retrieve latest public XRelease"
  KEY=$(curl -s "$API/dataset/3LXR.json" | jq ".key")
  echo "  $KEY"
fi

FILECOUNTER=1
COUNTER=0
echo "Rebuilding sitemaps in $OUT from release $KEY"
mkdir -p "$OUT"
rm -f "$OUT"/*

echo "new sitemap sitemap-$FILECOUNTER.txt"
while IFS= read -r id
do
    let COUNTER++
    if [ $COUNTER -gt 50000 ]
    then
        gzip "$OUT/sitemap-$FILECOUNTER.txt"
        let FILECOUNTER++
        let COUNTER=1
        echo "new sitemap sitemap-$FILECOUNTER.txt"
    fi
    printf "https://www.catalogueoflife.org/data/taxon/$id\n" >> "$OUT/sitemap-$FILECOUNTER.txt"
done < <(curl -s -H "Accept: text/plain" $API/dataset/$KEY/taxon/ids)
gzip "$OUT/sitemap-$FILECOUNTER.txt"
echo "Done: $(ls "$OUT"/*.gz | wc -l) sitemap files"
