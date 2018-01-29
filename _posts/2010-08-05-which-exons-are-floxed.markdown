---
layout: article
title:  "Which Exons Are \"Floxed\" by My Conditional Knockout?"
date:   2010-08-05 15:15:42 +0100
article_categories:
                 - ikmc
                 - komp
                 - eucomm
                 - eummcr
article_id: AUG21UAG
---

You can find this out yourself by following these steps:

1. Type the name of a particular gene into the search window at [www.knockoutmouse.org][link_knockoutmouse] . For instance, searching for the gene 'Prmt1' will lead to this page: [http://www.knockoutmouse.org/search_results?criteria=Prmt1][link-knockoutmouse-search-example]

    ![alt text][image-prmt1-flox1]


2. You find the targeting allele structure by choosing the 'Details' link on this page. This leads you to: [http://www.knockoutmouse.org/genedetails/MGI:107846][link-knockoutmouse-gene-details]

    ![alt text][image-prmt1-allele-details]

    The green sites are the Frt sites, which allow you to remove the targeting cassette in order to generate a conditional allele. The red triangles are loxP sites, which allow you to excise the critical exon. The critical exon is defined by the EUCOMM design team. It is the optimally most 5' located exon that, when deleted causes a frame shift in the protein coding transcript. All exons have a ID number, which can be searched on the ENSEMBL web page: [www.ensembl.org/Mus_musculus/Transcript/Exons][link-ensemble-exons].


3. On the ENSEMBL page you are first informed that Prmt1 produces 8 different transcripts, 5 of which are protein coding. USUALLY, the first transcript is the longest ("most complete") transcript. You can see on Page 3 that Prmt1 has 11 exons. The first contains 5'UTR, the eleventh contains the 3'UTR.

    ![alt text][image-prmt1-ensembl-exons]


4. Also on ENSEMBL page you see a list of the exons of Prmt1. The exon 4 is OTTMUSE00000231382 and exon 5 is OTTMUSE00000240475. Those are the two exons, which are "floxed" in the EUCOMM Prmt1 allele.

[link_knockoutmouse]: https://www.knockoutmouse.org
[link-knockoutmouse-search-example]: https://www.knockoutmouse.org/search_results?criteria=Prmt1
[link-knockoutmouse-gene-details]: https://www.knockoutmouse.org/genedetails/MGI:107846
[link-ensemble-exons]: https://www.ensembl.org/Mus_musculus/Transcript/Exons?db=vega;t=OTTMUST00000048689
[image-prmt1-flox1]: {{ site.baseurl }}/images/prmt1_flox1.jpg "Gene Search"
[image-prmt1-allele-details]: {{ site.baseurl }}/images/prmt1_allele_details.jpg "Allele Structure"
[image-prmt1-ensembl-exons]: {{ site.baseurl }}/images/prmt1_ensembl_exons.jpg "Ensembl"
