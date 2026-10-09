---
name: connection-mapper
description: "Use this when the user names two people, groups, or companies and wants every primary (direct) and secondary (one-intermediary) potential connection between them mapped into Obsidian notes, or when they suggest an intermediary to test between two subjects already mapped."
---

# Connection mapper

Build an Obsidian map of every potential connection between Subject A and Subject B (each a person, group, or company). The goal is to surface possible relationships and conflicts of interest for research, not to prove them. Be sensitive rather than specific: include every link you can source, however loose, label it by type and strength, and never hide one.

## Step 0: Let the user choose what to search
Before researching, send two multi-select question widgets (each allows at most 6 options), so no effort is spent on connection types the user doesn't want. Search only the types they pick. If they dismiss both, search everything.

Question 1, "Which money and power connections should I search?"
1. **Investments and financial interest**: shared investments, and one side invested in, owning, or profiting from a company the other owns, runs, or is involved with.
2. **Boards, officers, and ownership chains**: board seats and officers at every company either touched, plus parent companies of parent companies up to the top, and the major shareholders at each level.
3. **Employment and hiring**: coworkers, partners, and who likely hired whom.
4. **Political donations**: federal and state donations, PACs, and shared recipients.
5. **Who profits from their causes**: for each side's stated causes, policies, or advocacy, the top 10 companies or people that would profit, then check those against the other side.
6. All of these.

Question 2, "Which personal and public connections should I search?"
1. **Nonprofits and foundations**: shared boards, donors, and grants.
2. **Schools, Greek-letter societies, and clubs**: fraternities, sororities, secret and honor societies, and clubs, with chapters and years.
3. **Family and personal relationships**: spouses, relatives, and close associates.
4. **Photos together and shared events**: pictures of both subjects together, galas, conferences, and trips.
5. **News, X, and documents**: news articles, posts across all of X, court records, and documents that mention both.
6. All of these.

## Definitions
- **Primary connection:** A and B are directly linked.
- **Secondary connection:** A links to an intermediary X, and X links to B. X can be a person, company, fund, nonprofit, school, or society.
- **Strength labels** on every link: `verified` (primary document says it), `reported` (reputable secondary source), `alleged` (inferred, single weak source, name-only match, or an inferred who-profits link). Unprovable links are kept and labeled `alleged`, never deleted.

## Step 1: Confirm the subjects
Resolve each name to one entity (full legal name, aliases, company CIK or ticker, birth year or role for people). If a name matches several real entities, ask which one before researching.

## Step 2: Build each subject's first-degree network (selected types only)
Do this for A and for B separately. Record every connection with its source URL, date range, and a short quote.

- **Investments and financial interest.** On SEC EDGAR, look up the CIK at `https://www.sec.gov/cgi-bin/browse-edgar?company=<name>&owner=include` and run full-text search at `https://efts.sec.gov/LATEST/search-index?q="<name>"`. Send a descriptive User-Agent header and stay under 10 requests per second. Read Forms 3, 4, and 5, Schedules 13D and 13G, 13F holdings, Form D related persons, and S-1 or 10-K ownership tables. Flag any case where one side holds a stake in, lends to, or earns from something the other side owns or runs.
- **Boards, officers, and ownership chains.** Use DEF 14A proxy statements for every year of overlap and list every director and named executive. For each company, walk up the parents (Exhibit 21 subsidiary lists, 10-K "parent" disclosures, OpenCorporates, Wikidata "parent organization" and "owned by") until you reach the top owner. Record the major shareholders at each level from 13D, 13G, and 13F filings and proxy ownership tables.
- **Employment and hiring.** Use Wikipedia, Wikidata, official bios, and news. For hiring, the appointment 8-K or proxy shows the CEO, chair, and nominating committee at the time. The hirer is `reported` if the filing names them and `alleged` if inferred.
- **Political donations.** Search FEC individual contributions (`https://api.open.fec.gov/`, `DEMO_KEY` works for light use) by name, employer, and city, plus state databases through FollowTheMoney or OpenSecrets. List shared recipients and shared PACs. Matching names without a matching employer or city are `alleged`.
- **Who profits from their causes.** Identify each side's causes and positions (for example, more mental health care for prisoners). List the top 10 companies or people that would profit (for that example, prison healthcare contractors, telehealth and pharmaceutical suppliers, and their owners and investors), with a one-line reason and a source for each. Then check each beneficiary against the other side's network. Label these `alleged` unless a document ties them together.
- **Nonprofits.** Use ProPublica Nonprofit Explorer Form 990 officer, director, and grant lists. Officers who aren't directors are labeled as officers.
- **Schools and societies.** Use Wikipedia categories, Wikidata "member of" and "educated at," chapter histories, yearbooks, and alumni pages. Record school, chapter, and years so overlaps stand out.
- **Family.** Use Wikipedia, obituaries, wedding announcements, and court records.
- **Photos together.** Search Wikimedia Commons, Getty and AP captions, news articles, event pages, and X media for images where both subjects appear. Download each image into the vault's attachments folder and keep only images whose caption or source identifies both people. Record the photographer or source, date, event, and license. Never generate or edit photos, and never guess who is in one.
- **News, X, and documents.** Search news and all of X (not the owner's own posts) for posts mentioning both names or one name with the other's companies. Save the post link, author handle, date, and quote. Before large X searches, check X usage credits and estimate the cost with the user. Also check court records (CourtListener) and document dumps.

## Step 3: Find the connections
- **Primary:** anything that directly names or ties both A and B.
- **Secondary:** intersect the two first-degree networks, including parent companies, top shareholders, donation recipients, and who-profits beneficiaries. Every shared X is a secondary connection. Also check each of A's contacts against B's filings and vice versa.
- Rank the strongest first, but keep all of them.

## Step 4: Write the Obsidian files
Create a folder `Connections/<A> and <B>/`, with images in `Connections/<A> and <B>/attachments/`. Write it into the user's vault on their connected computer, or send a zip they can drop in.

Every entity note uses a Wikipedia-style layout.
1. **Top section (infobox).** Put a right-floating infobox callout at the very top:
   ```
   > [!infobox]
   > # Name
   > ![[portrait.jpg|250]]
   > | | |
   > |---|---|
   > | Born | ... |
   > | Occupation | ... |
   > | Known for | ... |
   > | Education | ... |
   > | Societies | ... |
   > | Boards | ... |
   > | Parent company / owners | ... (for organizations) |
   ```
   Then write a two- or three-paragraph lead summary like a Wikipedia intro, then a **Photos** gallery of pictures with other subjects, each captioned with who, when, where, and source.
2. **Connections.** Group them by the selected types. Each is a `[[wikilink]]` with type, strength, dates, a quote, and a source link.
3. **Sources.** A numbered reference list at the bottom with every URL and filing, including accession numbers for SEC filings.

Also write:
- The hub note `<A> and <B>.md`: frontmatter (subjects, date run, types searched, counts), a summary, a **Primary connections** table, a **Secondary connections** table (A-to-X link, X, X-to-B link, types, strengths), a photo gallery of the two together, a **Who profits** section, and sources.
- `<A> and <B>.canvas`: a JSON Canvas with A and B on opposite sides and intermediaries in the middle. Label edges by type and color them by strength (green verified, yellow reported, red alleged). Show photos as image nodes beside the people in them.
- `.obsidian/snippets/infobox.css` for the infobox. It floats right, is about 300px wide, and uses a light border and a small table font. Tell the user to turn it on under Appearance, CSS snippets.
- If a note for that entity already exists, add to it instead of overwriting it. Never delete existing vault content, and back up any note before editing it.

## Step 5: Intermediary mode
When the user suggests an intermediary X for an existing A and B map, send the same type-selection questions (their earlier picks are the default), run Step 2 for X, and look for primary and secondary links from A to X and from X to B. Add the results to the hub note under **Suggested intermediary: X** and update the entity notes and canvas. Say plainly whether a path from A through X to B was found and how strong each hop is.

## Step 6: Report back
Tell the user the number of primary and secondary connections, the strongest few in a sentence each, what was labeled alleged and why, how many photos were found, which sources were unavailable, and where the files are. Suggest intermediaries worth testing next, based on the entities that appeared in both networks most often.

## Rules
- Cite a source for every link and photo, and never invent a fact, date, relationship, or image.
- Name-only matches are labeled `alleged` with a note saying so.
- Honor any names the user asks to keep out of the map. Quoted source text can keep them.
