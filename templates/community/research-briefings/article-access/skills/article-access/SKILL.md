---
name: article-access
description: "Use when the user pastes a DOI, PMID, doi.org or PubMed link, or a citation and wants working links to read the paper (open access, library proxy, publisher)."
---

Give the user every working route to an article, in the order most likely to open.

Never claim access that is not confirmed.

## Configuration

Substitute these two values. Ask the user once if they are not set, then remember them. Prefer the setup-article-access skill on first run.

- CONTACT_EMAIL = {{CONTACT_EMAIL}}   (any real email; required by the Unpaywall API)
- PROXY_PREFIX  = {{PROXY_PREFIX}}    (example: https://your-library.idm.oclc.org/login?url=)

## Step 1 — Find the identifier

Read the user's text. Take the first match, in this order.

| Order | Pattern | Result |
| --- | --- | --- |
| 1 | `10.<4-9 digits>/<printable ASCII>` | DOI |
| 2 | A doi.org, dx.doi.org, or www.doi.org URL | DOI = the path after the host |
| 3 | `doi:` label followed by a DOI | DOI |
| 4 | A pubmed.ncbi.nlm.nih.gov/<digits> URL | PMID |
| 5 | `PMID:` label followed by digits | PMID |
| 6 | The whole input is 1-12 digits, first digit not 0 | PMID |

Rules:

- A DOI wins over a PMID in the same text. It routes further.
- Lowercase the DOI. DOI names are case-insensitive.
- Drop any query string or fragment from a doi.org URL. They are not part of the DOI.
- Strip trailing sentence punctuation from a DOI taken out of running text.
- A bare number inside a sentence is NOT a PMID. It is a year, a page, or a dose. Require the `PMID:` label or a PubMed URL when the number sits in prose.
- If nothing matches, say so and ask for a DOI or PMID. Do not guess an identifier.

## Step 2 — For a PMID, get the record

Fetch:

    https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=<PMID>&tool=article-access&email=<CONTACT_EMAIL>

Read `result.<PMID>`:

- `articleids[]` where `idtype == "doi"` gives the DOI.
- `articleids[]` where `idtype == "pmc"` gives the PMCID, such as `PMC1234567`.
- `title`, `fulljournalname` (or `source`), and `pubdate` give the citation line.

If the record is missing or carries an `error` field, PubMed has no such PMID. Say that plainly, and still give the PubMed record link.

## Step 3 — For a DOI, ask Unpaywall

Skip this step when the PubMed record already has a PMCID. The PMC copy is free and stable.

Fetch:

    https://api.unpaywall.org/v2/<DOI>?email=<CONTACT_EMAIL>

- HTTP 200: read `best_oa_location`. Use `url_for_pdf` if present, else `url_for_landing_page`. Read `license` (null means bronze open access: readable, but unlicensed).
- HTTP 404 or 422: Unpaywall does not know this DOI. That is a confirmed miss.
- Any other status, or a network failure: the check FAILED. It is not a miss. Say "the open-access check is unavailable" and continue with the other routes.

## Step 4 — Build the routes

Give every route that applies, in this order. Mark the first one as the one to try first.

| Route | Link | Condition |
| --- | --- | --- |
| Free full text (PMC) | `https://www.ncbi.nlm.nih.gov/pmc/articles/<PMCID>/` | Record has a PMCID |
| Free full text | The Unpaywall URL | Unpaywall returned a hit |
| Check library access | `<PROXY_PREFIX>https://doi.org/<DOI>` | A DOI is known and a prefix is set |
| Publisher page | `https://doi.org/<DOI>` | A DOI is known |
| PubMed record | `https://pubmed.ncbi.nlm.nih.gov/<PMID>/` | The input was a PMID |

Proxy link rule, important: do NOT percent-encode the target URL. Encoding the scheme separators makes EZproxy drop the target. Escape only these four characters inside the target: `#` to `%23`, space to `%20`, tab to `%09`, newline to `%0A`.

DOI link rule: escape `?`, `#`, and `&` inside the DOI itself. Any of the three would truncate the link or graft a query onto it. Leave `/` alone.

## Step 5 — Answer

Show the citation line you found (title, journal, year), the identifier, then the routes as a short labelled list. Add these notes when they apply:

- Proxy route: "Routes through the library proxy. Subscription access is not guaranteed."
- Confirmed miss: "No open-access copy was found."
- Failed check: "The open-access check is unavailable right now. The links below still work."
- No DOI and no PMC copy: "No DOI or PMC copy on this record."

## Honesty rules

1. Never say a link gives access. The proxy only offers a subscription if the library has one.
2. Never invent a DOI, a PMID, a PMCID, or a title. Use only what a lookup returned.
3. A failed lookup is not a negative result. Say which one failed.
4. Never present a paywalled publisher page as free full text.
5. Do not summarise or quote the article. This skill routes to it, nothing more.

## No network access

If you cannot fetch the two APIs, you can still build these links from the identifier alone, with no lookup at all. Say that you skipped the open-access check.

- `<PROXY_PREFIX>https://doi.org/<DOI>`
- `https://doi.org/<DOI>`
- `https://pubmed.ncbi.nlm.nih.gov/<PMID>/`
