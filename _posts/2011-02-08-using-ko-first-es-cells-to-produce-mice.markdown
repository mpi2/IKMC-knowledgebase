---
layout: article
title:  "Using Knockout-first ES cells to produce mice?"
date:   2011-02-08 15:15:42 +0100
article_categories:
                 - komp
                 - eucomm
                 - sanger-mgp
article_id: 99
---

Question:
I am about to generate KO animals using ES cells from KOMP knockout for a particular gene using the KO first allele promoter driven approach. If I am not wrong, I can use these cells directly to generate a KO animal without any treatment (or breeding) with recombinase (or recombinase-expressing animal) as if the system results in a splicing with lacZ casette with termination of the targeted gene, and concomitantly LacZ is a reporter of the gene expression activity. Please correct me if I am wrong. 

Answer:
The untreated promoter containing allele should indeed function as you indicate, trapping the endogenous transcript and terminating it, resulting in a null allele(KO). However, the promoter will remain active in the locus and could have effects on both the expression of the locus/and or neighboring loci. So best to first cross to a Cre mouse to delete the promoter(see below) 

Question:
The question mainly refers to the potential breeding or this KO first with a Cre recombinase line (general or tissue/time specific). In terms of mouse phenotype this LacZ tagged null allele will be the same as KO first, the only difference is in the genome, but terminated transcripts fused to LacZ are the same...Is that right?

Answer:
Breeding a KO first allele to a universal Cre deleter strain should delete BOTH the critical exon(s) region and the exogenous promoter, yielding a "clean" null allele. The deletion of the critical exon region means that any rare "splicing around" the lacZ cassette will yield out of frame transcripts which would be predicted to be degraded by NMD...You are correct, the lacZ fusion transcript should be identical after treatment with Cre recombinase

Question:
In order to make a real conditional one must to treat first with Flp (transfection of ES cells) and then cross with Cre-specific line...is that again correct?

Answer:
This is indeed correct, the Flp deletes the artificial lacZ containing terminal exon of the targeting cassette, leaving a floxed critical region which can now be deleted by specific exposure to Cre.