---
name: clinical-evidence-lookup
description: "Use this when a clinical question needs live, citable evidence: PubMed or Europe PMC literature, FDA drug labels, trial registries, LactMed, or LiverTox. It covers how to query each free public API and how to report lookups that fail or come back empty."
---

# Clinical evidence lookup

Every claim you cite comes from a lookup you actually ran in this conversation. Use `curl` from Shell. None of these APIs need a key. **Always URL-encode queries** with `curl -sG URL --data-urlencode "term=..."`: raw spaces, quotes, and PubMed tags like `[pt]` or `[dp]` in a URL break curl (it treats `[...]` as a glob) and return nothing, which is a failed lookup, not an empty result.

## Sources, in the order to try them

1. **PubMed (NCBI E-utilities)**
   - Search: `curl -sG https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi -d db=pubmed -d retmode=json -d retmax=20 -d sort=relevance --data-urlencode 'term=<query>'`
   - Titles and journals: `esummary.fcgi?db=pubmed&id=<pmid,pmid>&retmode=json`
   - Abstract: `efetch.fcgi?db=pubmed&id=<pmid>&rettype=abstract&retmode=text`
   - Useful filters: `AND (guideline[pt] OR meta-analysis[pt] OR randomized controlled trial[pt])`, `AND 2020:3000[dp]`. Use `"Retracted Publication"[pt]` to check for retractions.
   - Keep to 3 requests per second or fewer.
2. **Europe PMC**, when PubMed errors or times out, or when you need full text:
   `curl -sG https://www.ebi.ac.uk/europepmc/webservices/rest/search -d format=json -d resultType=core -d pageSize=20 --data-urlencode 'query=<query>'`
3. **FDA labeling**
   - DailyMed set ids: `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=<drug>`
   - openFDA sections: `curl -sG https://api.fda.gov/drug/label.json -d limit=1 --data-urlencode 'search=openfda.generic_name:"<drug>"'`. The fields are `dosage_and_administration`, `use_in_specific_populations`, `boxed_warning`, `drug_interactions`, and `contraindications`.
   - Cite the set id and label version or effective date. Outside the US, also try the owner's regulator where free (EMA EPAR/SmPC, UK eMC) and say which label you used.
4. **ClinicalTrials.gov v2**: `curl -sG https://clinicaltrials.gov/api/v2/studies -d pageSize=10 --data-urlencode 'query.term=<query>'`
5. **LactMed and LiverTox** are on the NCBI Bookshelf. Search the web for "LactMed <drug>" or "LiverTox <drug>", then fetch the ncbi.nlm.nih.gov/books page and cite its last-revised date.
6. **Society guidelines** (IDSA, AHA/ACC, CHEST, SCCM, ADA, ACOG, AAP, KDIGO, NCCN, and others): web search, then fetch the society's own page or the journal article. Don't rely on a secondary summary site. Before calling any guideline current, search for a newer edition (society site plus PubMed, last 2 years); guidelines are replaced without notice on older pages.

## Rules for reporting

- Check each response is real JSON/XML with the expected fields. If a lookup errors, times out, returns HTML, or returns an error payload, say it failed and name the source; retry once or try the next source. Never answer from memory as though you had looked it up.
- An empty result means "not found in <source>". It is never evidence that something is safe, absent, or fabricated.
- If a label gives no dose for a situation, say the label is silent. Don't borrow a dose from another population.
- Name the guideline year every time. Flag a guideline older than 5 years, and name any newer version that supersedes it.
- Keep PMIDs and DOIs exactly as the lookup returned them. Never write one you didn't retrieve.
- Separate the evidence (study type, n, effect size in absolute terms when available) from expert opinion, and label opinion as opinion.
