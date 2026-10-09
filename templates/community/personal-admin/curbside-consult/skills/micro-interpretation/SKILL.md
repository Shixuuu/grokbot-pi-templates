---
name: micro-interpretation
description: "Use this when interpreting culture and susceptibility results: intrinsic (expected) resistance, AmpC-inducible organisms, whether a blood-culture or other isolate is a likely contaminant or a pathogen, and how to handle MIC breakpoints. It gives compact rules and says what must be looked up live."
---

# Microbiology interpretation

Rules of engagement:
- **Breakpoints come from memory unless they are looked up.** CLSI M100 is a subscription source. EUCAST breakpoint tables are free (eucast.org) and FDA STIC pages are free. Quote a breakpoint only with its source and version, or label it "from memory, unverified". Never compare MICs across drugs as if a lower number means a better drug.
- The lab's reported S/I/R and any cascade or suppression rules come first. The owner's antibiogram (local-protocol-loader) informs empiric choice, not definitive therapy.
- Check the current IDSA AMR guidance live (clinical-evidence-lookup): it is updated regularly, a newer version supersedes the older ones, and the version and year should be cited.

## Expected (intrinsic) resistance
Source: EUCAST Expected Resistant Phenotypes v1.2 (2023). A reported "S" for one of these is suspect: recheck the identification and AST, and do not use the drug.

| Organism | Expected resistant to |
|---|---|
| Enterobacter cloacae complex, Klebsiella aerogenes, Citrobacter freundii | ampicillin, amoxicillin-clavulanate, ampicillin-sulbactam, cefazolin/1st-gen cephalosporins, cefoxitin |
| Hafnia alvei | ampicillin, amoxicillin-clavulanate, colistin |
| Citrobacter koseri | ampicillin |
| Serratia marcescens | ampicillin, amoxicillin-clavulanate, ampicillin-sulbactam, cefazolin, cefoxitin, cefuroxime, colistin/polymyxin B, nitrofurantoin |
| Morganella morganii, Providencia spp. | ampicillin, amoxicillin-clavulanate, ampicillin-sulbactam, 1st-gen cephalosporins, tetracyclines, colistin, nitrofurantoin |
| Proteus mirabilis | tetracyclines, colistin, nitrofurantoin (P. vulgaris/penneri also ampicillin, cefazolin, cefuroxime) |
| Klebsiella pneumoniae | ampicillin |
| Pseudomonas aeruginosa | ampicillin, amoxicillin-clavulanate, ampicillin-sulbactam, cefazolin, cefotaxime, ceftriaxone, ertapenem, TMP-SMX/trimethoprim, tetracyclines, tigecycline, chloramphenicol |
| Stenotrophomonas maltophilia | carbapenems, aminoglycosides, most beta-lactams incl. piperacillin-tazobactam, trimethoprim alone, fosfomycin, tetracycline (doxycycline/minocycline vary) |
| Acinetobacter baumannii | ampicillin, amoxicillin, amoxicillin-clavulanate, cefazolin, cefotaxime, ceftriaxone, aztreonam, ertapenem, trimethoprim, fosfomycin, tetracycline, doxycycline |
| Enterococcus spp. | all cephalosporins, aminoglycosides at low level (use the high-level synergy screen only), TMP-SMX (in vivo); E. faecalis also clindamycin |
| E. gallinarum, E. casseliflavus | vancomycin (vanC, low level) |
| Streptococci, all | aminoglycosides (low level) |
| Staphylococci | ceftazidime |
| All gram-positives | aztreonam, colistin/polymyxin B |
| Listeria monocytogenes | all cephalosporins |
| Leuconostoc, Pediococcus, some Lactobacillus | vancomycin (Erysipelothrix too, per standard references; not in the EUCAST table) |
| Gram-negatives in general | vancomycin, daptomycin, linezolid, clindamycin |
| Anaerobes | usually aminoglycosides, aztreonam, colistin/polymyxin B; Clostridium ramosum and C. innocuum also vancomycin |

## AmpC (inducible chromosomal): per IDSA AMR guidance (2026 version at time of writing; confirm live)
- Basal AmpC explains the expected resistance above (ampicillin, amoxicillin-clavulanate, ampicillin-sulbactam, 1st-gen cephalosporins, cephamycins).
- **Moderate risk of clinically significant AmpC production:** E. cloacae complex, K. aerogenes, C. freundii, H. alvei. For invasive infection, ceftriaxone, cefotaxime, and ceftazidime are not suggested even when reported S (resistance can emerge on therapy); continuing ceftriaxone may be reasonable in non-severe infection with source control and clinical improvement. **Cefepime** is suggested when its MIC is ≤ 8 (S or SDD) and no ESBL is present; carbapenems when an ESBL is also present. Piperacillin-tazobactam and ceftolozane-tazobactam are not suggested for serious infection. Uncomplicated cystitis: treat per AST.
- **Low risk (< 5%):** Serratia marcescens, Morganella morganii, Providencia. Treat per AST; consider cefepime for high burden or limited source control (endocarditis, CNS). The old SPICE/ESCPM-style mnemonics mix the moderate- and low-risk groups; don't use them.
- An ESBL or carbapenemase result changes everything. Look up current guidance rather than using these rules.

## Contaminant or pathogen
- **Blood cultures:** CoNS (other than S. lugdunensis), Cutibacterium, Corynebacterium (non-diphtheriae), Bacillus (non-anthracis), Micrococcus, and viridans streptococci are often contaminants. Surveillance definitions (NHSN) require the same commensal from **≥2 separate blood draws** plus symptoms. That is a surveillance rule, not a clinical one. Favour a true pathogen if there are multiple positive sets, short time to positivity, a prosthetic valve, intravascular device, or implanted hardware, neutropenia, or a matching clinical picture. Repeat cultures before antibiotics when feasible.
- **Always treat as real in blood:** S. aureus (source search and ID consult per guidance), S. lugdunensis, beta-hemolytic streptococci, S. pneumoniae, Enterobacterales, Pseudomonas, Candida (never a contaminant; eye exam and line decision per guidance).
- **Urine:** Candida and low-count or mixed flora in catheterized or asymptomatic patients usually mean colonization. Asymptomatic bacteriuria is not treated except in pregnancy and before urologic procedures that breach the mucosa (check current IDSA). S. aureus in urine without a catheter: look for bacteremia.
- **Respiratory:** Candida, CoNS, enterococci, and viridans streptococci in sputum are almost never pathogens.
- **Wounds and superficial swabs:** growth is not infection. Deep tissue or bone is more reliable than a surface swab.

## Answer format
Organism and specimen → contaminant or pathogen with reasons → expected resistances that apply → drugs that are active per AST and appropriate for the site (CNS, urine, bone, lung penetration) → caveats (AmpC, inoculum, source control). Cite the guidance and version that was looked up live.
