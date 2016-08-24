---
layout: article
title:  "What are the targeting constructs used for making the KOMP products?"
date:   2009-12-15 15:15:42 +0100
article_categories:
                 - komp
article_id: 12
---

The KOMP Repository acquires products from the two KOMP mutagenesis teams, the CSD Consortium (CHORI, Sanger Institute, and UC Davis) and Regeneron. The following are general details of construct design for each of the two production centers. 

### Regeneron
The entire gene, or as much of the coding sequence as possible, has been deleted in order to ensure a null allele. If ≤ 40 kb, the target gene has been deleted and replaced with a lacZ and loxP-flanked neo cassette. If >40 kb, as many coding exons as possible will be deleted starting with the start codon, preventing the transcription of any RNA that could code for the gene product. If unusually large, contains highly conserved sequences, or has known promoter or enhancer elements, deletion of the first intron has been avoided. The embedded neo gene flanked by loxP sites can be deleted using Cre, in ES cells or mice, to increase expression of the LacZ reporter gene.

![alt text][image-design2]

### CSD
A trapping cassette “SA-βgeo-pA” (splice acceptor-beta-geo-polyA) flanked by Flp-recombinase target “FRT” sites has been inserted within an intron upstream of a critical exon, where it tags the gene with the lacZ reporter, creating a constitutive null mutation in the target gene through efficient splicing to the reporter cassette, resulting in the truncation of the endogenous transcript. Critical coding exons are flanked by Cre-recombinase target “loxP” sites. The reporter-tagged allele can be converted to the lacZ reporter-tagged null (deletion, “Δ”) allele by exposure to Cre recombinase either in ES cells or mice, causing a frame-shift mutation and likely triggering nonsense mediated (NMD) decay of the mutant transcript, thereby ensuring a null allele. Alternatively, the allele can be converted to a wild-type pre-conditional allele by exposure to Flp recombinase, which subsequently can be deleted by Cre.

![alt text][image-design1]

[image-design2]: {{ site.baseurl }}/images/design2.gif "Regeneron Allele"
[image-design1]: {{ site.baseurl }}/images/design1.gif "CSD Allele"
