#!/bin/bash

FILECOUNTER=1
COUNTER=0
echo "Rebuilding sitemap index files"
rm -f ../sitemaps/*

echo "new sitemap sitemap-$FILECOUNTER.txt"
echo "/sitemaps/sitemap-$FILECOUNTER.txt.gz" > "../_includes/sitemap-index.txt"
while IFS= read -r id
do
    let COUNTER++
    if [ $COUNTER -gt 50000 ]
    then
        gzip "../sitemaps/sitemap-$FILECOUNTER.txt"
        let FILECOUNTER++
        let COUNTER=1
        echo "new sitemap sitemap-$FILECOUNTER.txt"
        echo "/sitemaps/sitemap-$FILECOUNTER.txt.gz" >> "../_includes/sitemap-index.txt"
    fi
    printf "https://www.catalogueoflife.org/data/taxon/$id\n" >> "../sitemaps/sitemap-$FILECOUNTER.txt"
done < <(curl -s -H "Accept: text/plain" https://api.checklistbank.org/dataset/3LR/taxon/ids)
gzip "../sitemaps/sitemap-$FILECOUNTER.txt"
