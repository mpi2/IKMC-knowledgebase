---
layout: article
title:  "LoxP Screen"
date:   2010-09-09 15:15:42 +0100
---

This is the first step in the KOMP-CSD/EUCOMM production centre QC pipeline.

Two different PCR reactions are performed to verify the 3' downstream loxP and gene identity:

1. Short range PCR (TRPCR) is performed between a universal primer in the 3' arm of the targeting cassette and a primer to the downstream loxP.  The subsequent amplicon is sequenced ( R2R primer [5'-TCTATAGTCGCAGTAGGCGG-3'] ) to verify the gene.

2. Long range PCR (LRPCR) is performed between a universal primer in the 3' arm of the targeting cassette and two different genomic specific primers in the region downstream of the construct region.  The subsequent LRPCR amplicon is sequenced with a primer to the downstream loxP ( LR primer [5'-ACTGATGGCGAGCTCAGACC-3'] ) to verify the gene and LoxP site.

### Possible Outcomes
---
This data originates from the [HTGT database][htgt]. In HTGT this QC test is called "LoxP QC" and can be reported with the following results:

* nd = no PCR or sequencing reads detected
* fail = PCR and/or sequencing read detected, but does not meet pass criteria
* pass = PCR and/or sequencing read meet pass criteria.

### Pass Criteria
---
In order for a ES cell to be called a "pass" for the loxP QC test it has to meet one of the following criteria:

* TRPCR band + valid R2R sequence read
* 1 x GR LRPCR band + valid LR sequence read

This logic is explained in more detail in the following flow chart:

![alt text][image-loxp-QC-pass-fail-logic]

[htgt]: http://www.sanger.ac.uk/htgt/htgt2/welcome
[image-loxp-QC-pass-fail-logic]: /images/LoxP_QC_pass_fail_logic.png "LoxP QC logic"