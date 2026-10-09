---
name: document-safety-screen
description: "Use this when reviewing any clinical document (job aid, order set, protocol, policy, slides, handout, note template) for Joint Commission do-not-use items, ISMP error-prone abbreviations and dose designations, and tall-man lettering. It is a checklist procedure; findings are candidates to confirm in context."
---

# Document safety screen (procedure)

**Get the text:**
- PDF: `pdftotext -layout FILE.pdf -`, page by page with `-f N -l N` so each finding has a page.
- .docx and .pptx: unzip and read `word/document.xml` or `ppt/slides/slideN.xml`, or install python-docx or python-pptx.
- .doc and .ppt: `soffice --headless --convert-to docx`.
- If no text comes out (a scanned PDF), render pages with `pdftoppm -r 150 -png` and read them by eye. Say that you did. If you cannot read it, the document is **NOT checked**, never "clean".

Go line by line (also search the text with regexes) for the following.

## Joint Commission Do Not Use list
- **U, u** → "unit". **IU** → "International Unit".
- **Q.D., QD, q.d., qd** → "daily". **Q.O.D., QOD, q.o.d., qod** → "every other day".
- **Trailing zero** (5.0 mg) → 5 mg. **Lack of leading zero** (.5 mg) → 0.5 mg.
- **MS, MSO4, MgSO4** → "morphine sulfate" or "magnesium sulfate".
- Scope: all orders, preprinted forms, and medication-related documentation, handwritten or free-text electronic. A trailing zero is allowed where precision is required (lab results, lesion sizes on imaging, catheter or tube sizes). Vendor hard-coded EHR text and manufacturer labels are outside the rule.

## Key ISMP error-prone items (ISMP list, 2024)
- **Units:** µg → mcg; cc → mL; ml and l → mL and L; ng/Ng may read as mg or nasogastric → "nanogram"; household units (oz, tsp, tbsp) → metric mL; apothecary units (drams, minims, grains) → metric.
- **Formatting:** number running into a unit (10mg → 10 mg); drug name running into a dose (propranolol20 → propranolol 20 mg); large numbers without separators (100000 units → 100,000 units in the US; where a comma is the decimal separator, use a space or words); M or K for million or thousand; a period after an abbreviated unit (mg.); "1/2 tablet" → "half tablet"; Roman numerals → Arabic; numbers inside drug names (5-fluorouracil) → full name.
- **Routes and frequency:** SC, SQ, sub q → SUBQ or "subcutaneously"; IN, IT, IJ → spell out; AD/AS/AU and OD/OS/OU → "right/left/each ear/eye"; OD for "daily" → "daily"; "Qhs" (read as qhr) and "Qn" (read as qh) → QHS or qhs; TIW, BIW → "3 times weekly", "2 times weekly"; q1d → "daily"; q6PM → "daily at 6 PM"; D/C (discharge or discontinue); SSRI, SSI (sliding scale); UD → "as directed"; x1 → "for 1 dose"; per os → PO or "orally"; OJ.
- **Symbols:** ">" and "<" → "more than", "less than"; arrows; "/" separating doses (read as 1); @ → "at"; & and + → "and"; the degree sign for hour; Ø; # for pounds.
- **Drug-name abbreviations** (APAP, AZT, CPZ, DTO, HCT, HCTZ, MTX, NoAC, OXY, PCA, PIT, PNV, PTU, T3, TAC, TNK, tPA, TXA, ZnSO4, AT II / AT III, DOR/TAF/TDF, "Na bicarbonate") → full generic name. Stemmed or coined names ("nitro" drip, "Magic mouthwash"). Ratio strengths (1:1000 epinephrine → 1 mg/mL), except combination local anesthetics (lidocaine with epinephrine 1:100,000).

## Tall man (ISMP list with FDA-approved names, 2023; short high-risk set)
- ALPRAZolam / LORazepam / clonazePAM
- busPIRone / buPROPion
- chlorproMAZINE / chlordiazePOXIDE
- DOBUTamine / DOPamine
- glipiZIDE / glyBURIDE
- hydrALAZINE / hydrOXYzine
- HYDROmorphone / morphine; oxyCODONE / OxyCONTIN
- NIFEdipine / niCARdipine
- predniSONE / prednisoLONE
- risperiDONE / rOPINIRole
- sulfaSALAzine / sulfADIAZINE
- traMADol / traZODone
- vinBLAStine / vinCRIStine
- cefTRIAXone / ceFAZolin / cefoTEtan / cefOXitin
- DULoxetine / FLUoxetine / PARoxetine
- metFORMIN / metroNIDAZOLE
- PENTobarbital / PHENobarbital
- dexAMETHasone / dexmedeTOMIDine; droPERidol / droNABinol

A name from the list written without its tall-man capitals is a candidate. For the full list, fetch the current ISMP list live (ismp.org).

## Report
- Every item is a **candidate to confirm in context**. For example "AS" may mean aortic stenosis, "MS" multiple sclerosis, and a trailing zero may be a lab value. Quote the line (page, line, or slide), the matched text, the suggested fix, and the source (TJC or ISMP), grouped by severity. Say which candidates you dismissed and why.
- **ALL-CAPS text is a blind spot for tall-man checking.** Tall-man letters cannot be seen in capitals. Name those lines and recommend mixed case.
- Outside the US, a comma decimal ("0,5 mg") is local convention, not an error; judge separators by the document's locale.
- A table *about* abbreviations (a do-not-use policy) will trip every rule. Treat it as discussion, not error.
- No findings does not mean the document is safe. Doses and clinical content still need checking against sources (label-dosing-lookup, the local protocol). If the document contains patient identifiers, stop and follow the PHI rule first.
