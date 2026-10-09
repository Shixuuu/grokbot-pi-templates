---
name: label-dosing-lookup
description: "Use this when a question asks what the current FDA label says about dosing in renal impairment (a CrCl value), hemodialysis, peritoneal dialysis, CRRT, or hepatic impairment. It is a procedure for pulling the live DailyMed/openFDA label and quoting the dosing text verbatim with set id, version, and date."
---

# Label dosing lookup (procedure)

## 1. Find the label (DailyMed first)
- Listing: `curl -sG https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json -d pagesize=100 --data-urlencode "drug_name=<generic>"`. It returns `data[]` with `setid`, `title` (product and labeler), `spl_version`, and `published_date`. Pick the product that matches the question (injection or oral). Prefer the newest label from a manufacturer over repackagers, and skip bulk-ingredient listings. Say how many other labels exist, since products differ.
- Full label: `curl -s "https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/<setid>.xml"` (HL7 SPL). Read the sections with LOINC codes 34068-7 (Dosage and Administration) and 43684-6 (Use in Specific Populations), plus their subsections titled Renal Impairment, Hepatic Impairment, or Dosage Adjustment, including their tables. Clinical Pharmacology (34090-1) is PK context, not a dose. Version: `spls/<setid>/history.json`. Human-readable page: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=<setid>`.
- Fallback: `curl -sG https://api.fda.gov/drug/label.json -d limit=5 --data-urlencode 'search=openfda.generic_name:"<generic>"'`. Use the fields `set_id`, `version`, `effective_time`, `openfda.manufacturer_name`, `dosage_and_administration`, `dosage_and_administration_table`, and `use_in_specific_populations`. openFDA can lag DailyMed, so state the effective date.
- Check that each response is what it claims to be: JSON with the `data`/`results` list, or XML with a `<document>` root. An HTML error page or an empty body is a **failed lookup**, not an empty result.

## 2. Read for the population asked
- **Renal (CrCl):** find the row or column whose printed band covers the value. Keep bounds and inclusivity exactly as printed ("<30", "30 to 50", "≥50"). If the value falls in a **printed band gap** (for example bands 20-49 and 10-19, with 19.5 between them) or on an ambiguous edge, say so and quote both neighbouring bands. Never choose between them or round CrCl to fit.
- **Hemodialysis, PD, CRRT** are separate populations. Use only text that names that modality.
- **Hepatic:** match the Child-Pugh class the label names. "Not recommended", "avoid", or "contraindicated" are reported exactly as printed.
- Tables: say which column header you read ("column 'CrCl 30-60': 2 g q24h"). Pediatric rows or sections are not adult doses.

## 3. Answer
- Quote the dose text **verbatim** (no paraphrase, no rounding) with its section, and cite it as: labeler, set id, version, effective or published date.
- **LABEL SILENT:** when no dose is printed for the population, say "The current FDA label does not state a dose for <population>." **Never borrow another population's dose.** Renal CrCl rows are not a dialysis dose; HD is not CRRT or PD; pediatric is not adult. Label-silent text such as "has not been studied" can be quoted as-is. If the owner still needs a number, find published evidence (clinical-evidence-lookup) and label it clearly as not from the label.
- **Failed lookup** (timeout, HTTP error, error page, unparseable response) is reported as **failed**. Never answer from memory as if you had looked it up. If you give a remembered dose at all, label it "from memory, unverified" and name the source that would settle it. "No label found" after both lookups completed is different: check the spelling or generic name. Not found never means safe.
- If a local protocol is loaded (local-protocol-loader), show the local entry first, then the label, marked **DIFFERS FROM LABEL**, **SAME AS LABEL**, or **LABEL SILENT**.
