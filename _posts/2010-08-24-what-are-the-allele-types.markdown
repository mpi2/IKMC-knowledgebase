---
layout: article
title:  "What are the IKMC allele types?"
date:   2010-08-24 15:15:42 +0100
article_categories: 
                 - ikmc
                 - komp
                 - eucomm
                 - sanger_mgp
article_id: 89
---

Summary of all IKMC allele types
------
The wild-type is represented as a transcript with three exons. The 'floxed' exon (the exon that will be deleted for the null allele) is exon number 2.

![alt text][image-wildtype]

### EUCOMM, KOMP-CSD Targeted mutations
EUCOMM and KOMP-CSD make both promoter-driven and promoterless alleles, which are termed 'knockout first' or 'pre-conditional'. They are initially null, but can be made into conditional alleles by application of Flp recombinase - this will excise the cassette between the FRT sites. The null can be recovered by application of Cre recombinase.

![alt text][image-eucomm-komp-csd-ko-first-promoter]
![alt text][image-eucomm-komp-csd-ko-first-promoterless]


EUCOMM and KOMP-CSD also inadvertently produce targeted promoter-driven and promoterless alleles which are null and non-conditional. These alleles have lost the loxP site three-prime of the floxed exon (exon 2), and so cannot be converted to conditional alleles.

![alt text][image-eucomm-komp-csd-noncond-promoter]
![alt text][image-eucomm-komp-csd-noncond-promoterless]

KOMP-CSD also produce targeted deletions

![alt text][image-eucomm-komp-csd-deletion]

### KOMP Regeneron targeted mutations
Regeneron make lacZ-tagged, promoter-driven deletions

![alt text][image-komp-regeneron-deletion]

### NorCOMM targeted mutations
![alt text][image-norcomm-deletion-lacz]
![alt text][image-norcomm-deletion-promoter]

### EUCOMM gene-traps
![alt text][image-eucomm-gene-trap]

### TIGM gene-traps
![alt text][image-tigm-gene-trap-neo]
![alt text][image-tigm-gene-trap]

[image-wildtype]: {{ site.baseurl }}/images/wildtype.png "Wildtype Allele"
[image-eucomm-komp-csd-ko-first-promoter]: {{ site.baseurl }}/images/eucomm_komp_csd_kofirst_promoter.png "EUCOMM & KOMP-CSD Promoter-Driven Conditional Knock-out"
[image-eucomm-komp-csd-ko-first-promoterless]: {{ site.baseurl }}/images/eucomm_komp_csd_kofirst_promoterless.png "EUCOMM & KOMP-CSD Promoterless Conditional Knock-out"
[image-eucomm-komp-csd-noncond-promoter]: {{ site.baseurl }}/images/eucomm_komp_csd_noncond_promoter.png "EUCOMM & KOMP-CSD Promoter Driven Non-Conditional"
[image-eucomm-komp-csd-noncond-promoterless]: {{ site.baseurl }}/images/eucomm_komp_csd_noncond_promoterless.png "EUCOMM & KOMP-CSD Promoterless Non-Conditional"
[image-eucomm-komp-csd-deletion]: {{ site.baseurl }}/images/komp_csd_deletion.png "EUCOMM & KOMP-CSD Deletion"
[image-komp-regeneron-deletion]: {{ site.baseurl }}/images/komp_regn_deletion.png  "KOMP Regeneron Deletion"
[image-norcomm-deletion-lacz]: {{ site.baseurl }}/images/norcomm_deletion_lacz.png  "NorCOMM Deletion with LacZ"
[image-norcomm-deletion-promoter]: {{ site.baseurl }}/images/norcomm_deletion_promoter.png  "NorCOMM Promoter Driven Deletion"
[image-eucomm-gene-trap]: {{ site.baseurl }}/images/eucomm_gene_trap.png  "EUCOMM Gene Trap"
[image-tigm-gene-trap]: {{ site.baseurl }}/images/tigm_gene_trap.png "TIGM Gene Trap"
[image-tigm-gene-trap-neo]: {{ site.baseurl }}/images/tigm_gene_trap_neo.png "TIGM Gene TRAP with NEO"
