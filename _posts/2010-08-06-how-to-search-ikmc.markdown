---
layout: article
title:  "How Can I Search the IKMC Database?"
date:   2010-08-06 15:15:42 +0100
---
The search box offers many methods of searching the IKMC database.
You can specify multiple search terms separated by spaces or commas. Each of these terms will be used to match genes in the database. The search terms are case insensitive, so "PAX6" is treated the same as "Pax6" by the search.

The search box makes assumptions about the terms. These assumptions are:

* The term is an MGI ID if it starts with the letters MGI
* The term is an Ensembl ID if it starts with the letters ENSMUSG
* The term is a Vega ID if it starts with the letters OTTMUSG
* The term is an NCBI ID if it is a number
* The term is a genomic region if it fits the pattern "chrX:####-####" where X is a valid chromosome, and #### are valid start and stop coordinates
* Otherwise, the term is assumed to be a gene symbol or a gene name

### Searching symbols

If you enter a gene symbol or a gene name, the system will perform a "begins with" match against all current gene symbols. It will also perform a "begins with" match against current names, old symbols, old names and synonyms. All matches will be displayed in alphabetical order by gene symbol. You may also search for multi-word terms by grouping the term in quotes. See the exact usage in the examples section.

### Wildcard searches

You may include asterisk (*) wildcards anywhere in your search term to indicate you want partial matches.

For example, if you wanted to find all genes that contained the term skeletal you could search for "*skeletal*" and it would return all genes that contained the word "skeletal" in the gene name (or old name or symbol or synonym).

### Search genomic coordinates

Searching by genomic coordinates will return all genes that are entirely within the region specified. If a partial overlap on either end is made, the gene will be excluded. When searching by coordinates, the results will be in coordinate order.

### Example Searches:

| You want to find... | Search for... |
| --- | --- |
| all genes that contain pax | *pax* |
| all genes that start with zfp | zfp |
| all bone marrow genes | "*bone marrow*" |
| the Ensembl gene ENSMUSG00000031633 | ENSMUSG00000031633 |
| all genes named kit or genes named adam | kit, adam |
| all genes on chromosome 7 | chr7: |
| all genes on chromosome 5 between 115767675 and 115816986 | Chr5:115767675-115816986 |
