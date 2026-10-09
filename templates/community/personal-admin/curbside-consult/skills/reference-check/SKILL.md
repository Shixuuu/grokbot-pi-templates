---
name: reference-check
description: "Use this when asked to verify a reference list or the citations in an article, slide deck, policy, or draft. It checks each reference against Crossref and PubMed for existence, matching metadata, and retraction, and gives each one an honest verdict."
---

# Reference check

1. Pull out the reference list. Use `pdftotext` for PDFs, `python-docx` for DOCX, and `python-pptx` for PPTX, installing any that are missing. Number each reference as it appears in the source.
2. For each reference:
   - If it has a DOI, fetch `https://api.crossref.org/works/<doi>`.
   - If it doesn't, search Crossref with `curl -sG https://api.crossref.org/works -d rows=3 --data-urlencode 'query.bibliographic=<title + first author + year>'`, then PubMed with `curl -sG .../esearch.fcgi -d db=pubmed -d retmode=json --data-urlencode 'term=<title>[ti]'` (or `<author>[au] AND <journal>[ta] AND <year>[dp]`). Always URL-encode: raw brackets or spaces in a curl URL silently return nothing.
   - Compare the title, first author, journal, year, volume, and pages.
   - Check for retraction:
     - Crossref's `updated-by` / `update-to` entries with type `retraction`, `expression-of-concern`, or `correction`.
     - PubMed publication types `Retracted Publication` or `Retraction of Publication`.
3. Give each reference exactly one verdict:
   - **VERIFIED**: found, and the metadata matches.
   - **MISMATCH**: found, but a field differs. Name the field and give both values.
   - **RETRACTED**, **EXPRESSION OF CONCERN**, or **CORRECTED**: give the notice DOI and its date.
   - **NOT FOUND in Crossref/PubMed**: never call it "fabricated". It may be a book, a web page, a preprint, or a record that isn't indexed.
   - **UNVERIFIABLE TYPE**: a book, web page, or guideline page with no DOI. Check it by fetching the page if you can.
   - **LOOKUP FAILED**: an API error, timeout, or non-JSON reply. The reference is unchecked, so say so.
4. If the user asked whether a citation supports a specific claim, read the abstract (or the full text from Europe PMC if it's open access). Report "supports", "partially supports", or "does not support", and quote the line you based that on. With only an abstract, say so. A reference that is NOT FOUND supports nothing: say it cannot be used as evidence until the owner supplies a DOI, PMID, or copy, and answer the clinical question from what does exist.
5. Output a table with the columns #, reference (short form), verdict, and detail. Then give the counts per verdict and the fixes that matter most.

Keep to 3 PubMed requests per second or fewer. Add `mailto=<owner email>` to Crossref requests only if the owner has given you an email address.
