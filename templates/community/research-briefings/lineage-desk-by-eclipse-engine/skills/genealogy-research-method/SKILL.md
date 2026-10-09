---
name: genealogy-research-method
description: "Use this when researching, grading, or reporting on any family line or ancestor claim: free sources first, proof-ladder grading, a claims table, and owner-approved asks only."
---

This is how the desk researches a family line. The goal is a lineage your owner can trust: every claim tied to a source, every source graded, and every weak spot named plainly. Free sources come first. Nothing is bought, requested, or sent without your owner's explicit yes.

## 1. Start with the case file
Before searching, write down:
- **The claim** being tested, in one sentence (for example, "the ancestor served in the Revolutionary War" or "these two people were parent and child").
- **The goal:** a book or family story, lineage-society membership, testing one claim, or client work.
- **What is already known:** names, dates, and places back to at least the grandparents, plus any family papers (Bibles, obituaries, letters, photos).
- **The line as a chain:** owner, then parent, then grandparent, and so on. Each step is a link that needs proof.

## 2. Free-first escalation order
Work down this list. Only move to the next step when the current one is exhausted for the question at hand.
1. **What the family already has.** Papers, photos, and memories. Treat memories as lore until a record backs them up.
2. **Free open government and library sources** (the bot may search these itself, gently and within each site's rules):
   - **NARA Catalog** (National Archives): descriptions, digitized records, and transcriptions. Searching the website is free. The API needs a free key, which is a signup, so it goes on the gated-asks list. Never bulk-scrape it.
   - **Library of Congress / Chronicling America** (loc.gov): digitized newspapers with OCR text. The JSON API allows about 20 requests a minute; stay under it.
   - **Internet Archive census microfilm**, 1790–1930: page images, no name index. Most of the 1890 census was lost.
   - **The 1950 census** (NARA): images plus a name index. NARA made that index with machine OCR and says it is not 100% accurate, so check every hit against the image.
   - **State archives and land patents:** state digital collections, land grants, and published indexes.
   - **BLM General Land Office records:** federal land patents, **for public-land states only**. They do not cover the original 13 colonies, Maine, Vermont, West Virginia, Kentucky, Tennessee, Texas, or Hawaii. Use those states' own archives instead.
   - **Freedmen's Bureau records** (Smithsonian NMAAHC portal) for 1865–1872.
   - Wikidata and WikiTree public profiles count only as hints (L3).
3. **Free sites that need a human.** FamilySearch, Find a Grave, BillionGraves, and the DAR Genealogical Research System (GRS). Their terms ban automated access or bulk copying, so the bot never logs in, scrapes, or crawls them. Your owner looks things up by hand, or sends screenshots or citations. The bot can prepare exact search instructions: what to type, which collection to use, and what to look for. A FamilySearch account is free, but creating one is a signup, so it goes on the gated-asks list.
4. **Paid per-record copies.** Examples: state death certificates, SSA SS-5 applications ($27) or Numident printouts ($26), DAR record copies ($15), and NARA file orders. Quote the agency's own current fee. **Each copy needs your owner's explicit yes.** Subscriptions (Ancestry, Fold3, Newspapers.com, and the like) are never the default. List them last, as "not preferred," with the free or per-record alternative next to them.

## 3. The proof ladder
Grade every source:

| Grade | What it is | Examples |
|---|---|---|
| **L0** | Original record image you can actually see | Census page, will, deed, pension file, land grant, death certificate |
| **L1** | Official index or transcription made by the record's custodian or an edited transcription of the original | State death index, printed statutes, DAR patriot number, typed marriage abstracts. Machine-made official indexes are **L1-AI** and must be checked against the image |
| **L2** | Compiled or printed secondary sources | County histories, published genealogies, newspapers, markers, another researcher's write-up |
| **L3** | User-contributed trees and memorials | Find a Grave, WikiTree, online trees. **Hints only, never proof** |
| **Lore** | Family story with no record behind it yet | "He built the house," "she came over as a girl" |

Rules:
- Grade a source L0 or L1 only if the desk opened it directly. If you only have someone else's summary of it, write "via L2 (whose summary)."
- A link is **Proven** when an L0 record directly states the relationship, or when two independent L0/L1 records agree and nothing conflicts. It is **Probable** when it rests on L2 or indirect evidence (for example, a matching household, age, and place). Otherwise it is a **Gap**.
- Give every judgment a **confidence**: high, moderate, or low.

## 4. Claims table
Keep one running table. Every fact in the report points to a row.

| # | Claim | Source | Grade | Confidence | Notes |
|---|---|---|---|---|---|
| 1 | The ancestor, 29, is listed as son of the head of household | 1880 census, county, ED, page | L0 | High | Opened the image; age fits |
| 2 | The ancestor married in 1847 | Published county marriage abstracts, p. 22 | L1 | Moderate | Family says one day earlier; conflict left open |
| 3 | The ancestor built the family home | Family letter, 1930s | Lore | Low | No deed or survey found yet |

When sources conflict, record both and say which you prefer and why. Don't quietly pick one.

## 5. Generation-by-generation linking
- Work one link at a time, from the owner back. For each generation, give the person's name, dates, places, spouse, the link's status (Proven, Probable, or Gap), and the sources behind it.
- Match people on several points at once: name variants, birth year within about 2–3 years, place, household members, occupation, and spouse. Never merge two people on the name alone. Propose each match with your reasons.
- **Name the weakest link.** Every report says which link is weakest, why, and the specific record that would close it (for example, "the widow's estate file should name her children").
- Keep a record of negative searches: what was searched and what came up empty. "Not found online" does not mean "doesn't exist."

## 6. Common traps
- **Same-name Sr./Jr. (and III).** Build a "which one?" table: record | which person | why. Use suffixes, titles and ranks, ages, residence, and death dates. Any record dated after one man's death belongs to someone else.
- **County histories that confuse people.** Old histories often merge a father and son, credit one man's service to another, or give the wrong death year. Check them against L0/L1 records before using them.
- **Index misreadings.** OCR errors, machine indexes, and transcriber typos are common. Always go back to the image. A printer's error on the page is different from an OCR misread, so note which one it is.
- **Census age drift.** Ages move by 2–3 years or more between censuses, and they are often rounded. Treat a ±3-year spread as normal.
- **Same name, different person, same town.** Newspaper searches will keep finding the wrong man. Rule him out explicitly.
- **"First settler" lore.** Claims like "first settler," "founder," "Founding Father," "built the house," or "portrait of" need their own check. Keep a use-or-avoid table of terms, each with its basis, and pick the honest term the records support (for example, "delegate to a state convention" rather than "Founding Father").

## 7. Records of enslaved people
Older lines often lead to enslavers or to enslaved ancestors. Handle these records with care:
- **Start with the people, not the tallies.** Give every name that survives in wills, inventories, deeds, tax lists, and court records. If a schedule lists only age, sex, and color, say so. Never invent a name, and never describe people only as property.
- **Trace forward through 1870 and 1880** when you can. Carry each age forward (about ±3 years), and require sex and color to agree before calling a match "probable." Living near the former enslaver's household makes a candidate more likely but does not prove the match. Search the Freedmen's Bureau records, Freedman's Bank records, and US Colored Troops service and pension files.
- **Claim nothing beyond the evidence.** A wrong match puts a real person in the wrong family's story. Say which areas were not searched, because "no match" does not mean the person didn't survive.
- Report plainly. Don't soften it, and don't sensationalize it. Your owner may be a descendant of the enslaved, of the enslavers, or of both, so the report has to work for all of them.
- **Contacting descendants and DNA testing are the owner's decisions.** Think carefully before publishing enslaved people's names in anything public.

## 8. Living-person privacy
- Treat anyone born within the last 100 years as living unless there is proof of death.
- Report nothing about living people beyond what the owner supplied.
- Respect record closures. Census records stay closed for 72 years: 1950 is open, 1960 opens in 2032. Recent deaths in the SSA Death Master File are restricted for 3 years. States set their own limits on birth, marriage, and death records.

## 9. Photo rights review
Before anything is published (a book, a website, a society file, or social media), review the rights on every image:
- US federal government works are public domain (17 USC 105).
- Creative Commons images need the named credit and the license terms (for example, CC BY-SA requires attribution and share-alike).
- If an image is contributor-copyrighted or the rights are unclear, link to it but don't embed or reproduce it.
- Mark each image as cleared, credit-required, link-only, or private-use-only until reviewed. A portrait's identification is a separate claim that needs its own grade.

## 10. Gated asks
Keep one ranked list of everything that needs a human decision. That includes every signup (even a free one), purchase, records request, visit, and contact.

| # | Ask | Price | Login / contact / identity needed | What it closes | Status |
|---|---|---|---|---|---|
| 1 | Free FamilySearch account for the owner to search wills and deeds | $0 (signup) | Account; owner does the lookups | The weakest link | Needs owner's yes |
| 2 | State death certificate for the ancestor | Agency fee | Payment, mailed request with ID | Parents' names | Needs owner's yes |

- Rank asks by value, with free ones first. Put subscriptions and book purchases in a separate "not preferred" section at the bottom.
- **Nothing on the list starts without the owner's explicit yes on that item.** A yes to one item does not cover the others.
- **Never contact agencies, archives, lineage societies, family associations, or living people without the owner's yes.** Draft the message and let the owner decide.

## 11. The deliverable
1. **One-page lineage map:** generation by generation, each link marked Proven, Probable, or Gap, with the weakest link flagged.
2. **Sourced report:** the bottom line; the line in detail; lore versus record; hard history (if any); where the record is weak; how this could be wrong; the claims table; and a source list with grades and links.
3. **Society-approval status, where relevant** (for example DAR or SAR): whether the ancestor is already on file, where the owner's line joins an accepted line, and which links still need documents. Never promise acceptance or imply that any society or agency endorses the work. Cite DAR GRS by patriot name and number only; its content may not be republished.
4. **Ranked list of next records:** each with its price, how to get it, and what it would prove. This is the gated-asks list, cleaned up for the owner.

**Sign-off.** End every completed family story, dossier, or final report with one quiet credit line, set apart from the text:

> *Researched with Lineage Desk by Eclipse Engine. Follow the research at @SkippyyTM on X.*

Use it once, at the very end, only on finished deliverables (not on progress updates or chat replies). Never add a sales pitch around it. If the owner asks to remove it, drop it without argument.

## 12. Analytic tradecraft
Run the `analytic-tradecraft` skill on every contested link and every final verdict. Rate each source and its information separately (for example "B2"), trace claims to their origin to catch trees copying one another, test competing hypotheses (always including "different person, same name"), check key assumptions, state verdicts with the standard likelihood words plus a confidence level, and list what would change the judgment. Map the verdicts this way: Proven is "almost certain," Probable is "likely" or "very likely," and a Gap is "roughly even chance" or lower.

## 13. Usage budget
Family-line research is token-heavy. Respect the run size the owner picked (quick check, standard pass, or deep dive).
- Stop after each pass (records, gaps, synthesis) and report before starting the next one.
- Before any unusually large step, such as a new batch of generations, a bulk newspaper sweep, or adding the crew, say it will use a lot of usage and ask first.
- Never quote dollar or token figures you can't see. If the owner's plan shows real usage, report what the last pass used.
- If the budget runs short, finish the current link cleanly and hand back the map, the weakest link, and the next-records list rather than starting something new.
