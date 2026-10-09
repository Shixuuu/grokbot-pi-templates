---
name: mypeople-counterparty-vetting
description: "Use when the owner wants to vet a business they are actively dealing with (vendor, investor, partner, landlord, buyer, contractor) before signing or paying: company records, licenses, court cases, liens, sanctions, domain age, news, and a ranked red-flag list."
---

# Counterparty vetting (business records, not people-hunting)

The trust rules in your profile apply. Specific to this job:
- If the deal is unclear, ask "Which deal is this for?" and run nothing until they answer.
- No username or email sweeps of a person (no Blackbird or Maigret here). A principal named in the deal is checked only in professional and regulatory records: registry officer roles, licenses, court cases, securities registration, sanctions lists.
- No paid court systems without the owner's yes. No scanning their website or network; domain age and normal DNS only.
- A registered agent or business office address is fine; a home address is dropped.
- Common names: attribute a record only when two identifiers match (name plus city, license number, or company). Otherwise label it "possible match, unconfirmed".

## Inputs
Exact legal name and trade name, state, website, license number, principals named in the deal papers, and the deal type. Read what the owner already has before asking.

## Checks (cite every source; US and New York examples shown)
1. Company record: the Secretary of State business search where it is registered and where it operates. New York's active-entities dataset is queryable: `https://data.ny.gov/resource/n9v6-gdp6.json?$where=upper(current_entity_name) like '%NAME%'` (cite https://data.ny.gov/d/n9v6-gdp6). Cross-check https://opencorporates.com/ for status, officers, and companies sharing an agent or address.
2. Licenses: the state licensing board for the trade (contractor, liquor, food service, cannabis, real estate, money transmission). Compare type, status, and expiry with what they claim.
3. Courts and liens: federal cases on https://www.courtlistener.com/ (browser; it blocks scripts); state case search (New York: NYSCEF and WebCivil in the browser); UCC filings at the Secretary of State; county property records for a property in the deal. Never search anyone's home.
4. Money: SEC EDGAR Form D filings (`https://efts.sec.gov/LATEST/search-index?q=%22NAME%22&forms=D`); https://brokercheck.finra.org/ and https://adviserinfo.sec.gov/ for anyone selling investments; sanctions at https://sanctionssearch.ofac.treas.gov/ and https://sam.gov/search/?index=ex.
5. Domain: `./run.sh domain <their-domain> --no-crt` for age, registrar, and email security. History: https://web.archive.org/. Do not run theHarvester, Shodan, or SpiderFoot against a counterparty.
6. News: web search the name with lawsuit, fraud, complaint, license revoked, attorney general; https://www.bbb.org/.
7. Social media (logged-out web search and public pages only). Find the business's own public accounts: LinkedIn company page, X, Instagram, Facebook, YouTube, GitHub, Google and Yelp business listings, and similar. For principals named in the deal, look ONLY at professional profiles and pages (LinkedIn profile, company bio, conference or speaker pages, publications), which counts as the professional-record check the rules above allow. Never look at a principal's personal accounts, and still no username or email sweeps of a person (no Blackbird or Maigret).
   - An account is confirmed only when at least two identifiers match: the name plus employer, city, a website, email, or phone the owner gave, or a link from an already-confirmed account. A matching handle or a search-engine summary alone is not evidence.
   - For each confirmed account, list platform, handle, link, what it shows publicly (business facts only), and rough activity level (for example "posts weekly", "last post 2023", "dormant").
   - Every other candidate goes in as unconfirmed, with one line on why it could not be confirmed.
8. Analysis: observable public behavior only, and every point carries at least one source link.
   - Reputation: public complaints, disputes, bad reviews, and people publicly criticizing them. If none turn up, say "none found" and list the searches you ran.
   - How they present professionally across their site, listings, and accounts.
   - Whether it lines up with what they told the owner about the deal.
   - Green flags and red flags for this deal.
   - Label self-reported claims (their own site, bio, or posts) as self-reported. Anything public sources can't settle is "unverified" and becomes a fix item (ask for a document or verify it before signing). A confirmed account or record that contradicts what they told the owner is severity 3.

Hard limits for checks 7 and 8 (the trust rules still win on any conflict):
- Logged-out web search and public pages only. No logins.
- No scrapers or bulk tools such as Apify. No people-search or reverse-phone sites.
- No contacting anyone.
- No personality-type diagnoses or psychological labels. No comments on appearance.
- No family, kids, partner, home, or photo-location details.
- Leave both sections out of any copy meant to be shared with the counterparty.

## Findings (format: `python3 report.py -h`)
One item per red flag. Its fix says what to do before signing: ask for a document, verify something, or walk away.
Put check 7 in the findings file's "social" key and check 8 in its "analysis" key (shape in `python3 report.py -h`). report.py won't write a vetting PDF without both, or with an analysis point that has no source.
- Severity 3, ease 2: sanctions or exclusion hit; license missing, expired, or wrong type; liens on the assets being sold; active lawsuits, judgments, or regulator actions; pressure for upfront cash, wires to a personal account, gift cards, or crypto; someone selling investments who is not registered; a confirmed account or record that contradicts what they told the owner.
- Severity 2, ease 3: company not found, inactive, or formed long after the history it claims; name, address, or officer mismatch with the deal papers; brand-new domain or no web history; a claim that public sources leave unverified.
- Clean checks are "ok" items. Put the rating in the scope line: Clear, Verify further (list what to confirm), or Caution. Suggest a lawyer for contract or license questions. Then run mypeople-report.
