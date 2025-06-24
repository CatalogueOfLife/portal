#!/bin/bash


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

if [ -z "$KEY" ]
then
  echo "Retrieve latest public release"
  KEY=$(curl -s "$API/dataset/3LR.json" | jq ".key")
  echo "  $KEY"
fi



FILECOUNTER=1
COUNTER=0
echo "Rebuilding sitemap index files from release $KEY"
rm -f ../sitemaps/*

echo "new sitemap sitemap-$FILECOUNTER.txt"
echo "Sitemap: https://www.catalogueoflife.org/sitemaps/sitemap-$FILECOUNTER.txt.gz" > "../_includes/sitemap-index.txt"
while IFS= read -r id
do
    let COUNTER++
    if [ $COUNTER -gt 50000 ]
    then
        gzip "../sitemaps/sitemap-$FILECOUNTER.txt"
        let FILECOUNTER++
        let COUNTER=1
        echo "new sitemap sitemap-$FILECOUNTER.txt"
        echo "Sitemap: https://www.catalogueoflife.org/sitemaps/sitemap-$FILECOUNTER.txt.gz" >> "../_includes/sitemap-index.txt"
    fi
    printf "https://www.catalogueoflife.org/data/taxon/$id\n" >> "../sitemaps/sitemap-$FILECOUNTER.txt"
done < <(curl -s -H "Accept: text/plain" $API/dataset/$KEY/taxon/ids)
gzip "../sitemaps/sitemap-$FILECOUNTER.txt"
