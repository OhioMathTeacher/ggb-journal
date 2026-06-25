# OJS ↔ PDF Metadata Reconciliation

Generated during the back-issue import. Each article's metadata was harvested from the legacy OJS
site **and** cross-checked against the text of the PDF itself. Below are the 17 articles (of 89)
where an automated check flagged a possible discrepancy worth a human glance.

**Resolved:** `v13n1-campuzano` — OJS listed *The University of Queensland*, but the PDF byline reads
*Griffith University, Australia*. The PDF (article of record) wins; the article page uses Griffith.

**The rest are mostly false positives**: the affiliation is simply footnoted lower in the PDF (not on the
title line where the check looked), or an author's name has extra/accented parts. Listed for verification.

| Article | OJS affiliation(s) | Flag |
|---|---|---|
| `v10n1-garcia` (189) | Elisa Soriano Fischer School; Consejería de Educación de la Comunidad de Madrid | AUTHOR_MISSING:garcia; AFFIL?[cerisola]:"Consejería de Educación de la Comunidad de Madrid" |
| `v11n1-bastos` (206) | IFCE; IFCE; URCA; IFCE | AFFIL?[bastos]:"IFCE"; AFFIL?[alves]:"IFCE"; AFFIL?[oliveira]:"URCA"; AFFIL?[sousa]:"IFCE" |
| `v13n1-campuzano` (265) | The University of Queensland | AFFIL?[campuzano]:"The University of Queensland" |
| `v3n1-bolognese` (46) | Upper Arlington Schools | AFFIL?[bolognese]:"Upper Arlington Schools" |
| `v3n1-callon` (58) | Oakwood High School | AFFIL?[callon]:"Oakwood High School" |
| `v3n1-foos` (63) | Toledo Public Schools | AFFIL?[foos]:"Toledo Public Schools" |
| `v3n1-martinezcruz` (48) | CSU Fullerton; Ball State University | AFFIL?[martinez cruz]:"CSU Fullerton"; AFFIL?[contreras]:"Ball State University" |
| `v3n1-martinezcruz-1` (50) | CSU Fullerton; Ball State University | AFFIL?[martinez cruz]:"CSU Fullerton"; AFFIL?[contreras]:"Ball State University" |
| `v3n1-noyes` (60) | Ohio Virtual Academy | AFFIL?[noyes]:"Ohio Virtual Academy" |
| `v5n1-caniglia` (73) | Kent State University | ABSTRACT?(37%) |
| `v5n1-flores` (67) | University of Delaware; Anadolu University | AFFIL?[flores]:"University of Delaware"; AFFIL?[yanik]:"Anadolu University" |
| `v7n1-campe` (148) | Independent Consultant (formerly Instructor, Education Studies Program, Yale University) | AFFIL?[campe]:"Independent Consultant (formerly Instructor, Education Studies Program, Yale University)" |
| `v7n1-soots` (147) | Ivy Tech Community College; Ball State University | AFFIL?[shafer]:"Ball State University" |
| `v7n1-wassie` (149) | Bahir Dar University; Bahir Dar University | AFFIL?[wassie]:"Bahir Dar University"; AFFIL?[zergaw]:"Bahir Dar University" |
| `v7n1-williams` (144) | Florida Atlantic University; Utah State University | AFFIL?[williams]:"Florida Atlantic University"; AFFIL?[brown]:"Utah State University" |
| `v8n1-cerisola` (175) | IES Pradolongo; Consejería de Educación de la Comunidad de Madrid | AUTHOR_MISSING:romero; AFFIL?[romero]:"Consejería de Educación de la Comunidad de Madrid" |
| `v9n1-edwards` (180) | Miami University; University of New England | AFFIL?[edwards]:"Miami University"; AFFIL?[quinlan]:"University of New England" |

_Flag legend: `AFFIL?` = OJS institution not found on PDF title page; `AUTHOR_MISSING` = OJS author surname not found on page 1 (usually an accent/name-form difference); `ABSTRACT?` = low word overlap (often because the PDF abstract spans a page break)._
