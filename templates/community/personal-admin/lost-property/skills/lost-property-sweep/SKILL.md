---
name: lost-property-sweep
description: "use this when running or planning an official-state unclaimed / abandoned property portal sweep for the owner"
---

# Lost Property sweep

## Hard rules
- **Official portals only** (state treasurer / DOR / Comptroller, or MissingMoney when that state authorizes it). Never use paid “we found your money” finders.
- **Owner files claims.** You find, match, log, and optionally draft claim forms with **secrets blank**; you do not submit claims unless the owner explicitly asks you to draft and they send.
- **No SSN** (or tax ID), full DOB, bank account, or full account numbers in chat, memory, or logs. Names, cities, property IDs, and amount **buckets** from the portal are enough.
- Keep the **roster** (legal names, prior addresses, business names, heir flags) in a private file — not pasted into chat. **Roster stays after every sweep** — never delete or empty it when a pass finishes.
- Relatives: search only with the owner’s OK; forward hits for someone else to that person to claim.

## Official portal map
1. Start from the NAUPA official-program map: https://unclaimed.org/search/ — pick each target state’s **government** site.
2. **MissingMoney** (https://missingmoney.com/) is a free multi-state search **only when that state participates / authorizes it**. Always set or confirm the state filter.
3. **Known exception — Texas:** Texas does **not** use MissingMoney for its database. Use https://www.claimittexas.gov/ (ClaimItTexas) only. Prefer each state’s own treasurer/DOR/Comptroller URL when in doubt; verify on the state’s .gov page before searching.
4. Re-check the map if a bookmarked URL redirects or a state leaves MissingMoney. Never substitute a commercial finder site.

## Run a sweep
1. Confirm roster path and log folder (local on this computer is fine; cloud optional). Confirm the roster will **remain** after this pass.
2. For each target state, open the official claim-search page (browser) from the portal map above. Pause at captchas for the owner (do not classify captcha vendors).
3. **Search modes**
   - Person: last name + first-name variations from the roster.
   - **Business-name mode:** when the roster lists LLC / corp / DBA names, use the portal’s “Last or Business Name” (or equivalent) field with those entities — not only personal surnames.
4. **Capped surname-search stop:** If a last-name-only (or similar-name) query returns a **capped** fuzzy list (e.g. 250 / 1000 / “refine your search”), **stop** enumerating the dump. Narrow with first name **and** city or street from the roster. Log “capped — refined with city/street” rather than paging the entire similar-name set.
5. Narrow fuzzy lists to address matches; mark uncertain rows for the owner to confirm.
6. **Surfaced-but-unlisted addresses:** When a same-name (or close name) hit shows a city/street **not** already on the roster, flag it as a possible forgotten prior address — do not auto-claim. Ask the owner whether that place was theirs (or a relative’s). If yes, **add it to the roster** (roster stays) and treat the hit as a candidate; if no, log as **rejected** name-collision (see carryforward) and move on.
7. **Bucketed / hidden amounts:** Record amounts exactly as shown — e.g. `UNDER $100`, `OVER $100`, `$0–25`, `UNDISCLOSED`. Never invent an exact dollar figure when the portal hides or buckets it.
8. **Fuller hit line:** For each candidate or confirmed hit, log when available: owner name as shown, address, **holder** (reported by), amount bucket, **sole / shared / joint** (relationship), **property ID**, property **type**, **year**. Note clearly: **property ID ≠ claim ID** — claim ID appears only after the owner starts or submits a claim; do not confuse the two in logs or handoffs.
9. **Deceased-owner / heir flag:** If the portal shows Estate of / DCSD / deceased / heir-style labels, or the roster marks someone deceased, flag the row as **heir-path**. Owner (or authorized heir) files with their own documents; you still enter no SSN. Do not claim on a living third party’s behalf without explicit authorization.
10. **Rejected-hit carryforward:** Maintain a durable section in the sweep log (or a companion rejected-hits file) of name-collisions the owner already said “not mine.” On later sweeps, skip re-asking those exact rows unless the address or property ID is new.
11. **Claim-form assist with secrets blank:** When the owner wants help filing, draft the non-secret fields (name as on portal, property ID, mailing address they provide, holder, type) and leave **SSN, DOB, bank routing/account, driver’s license, and other secrets blank** for them to fill in the portal or a local copy. Prefer they submit themselves.
12. **Previous-address proof / no-document draft:** If a claim asks for proof of a prior address, help the owner locate evidence in **their** files (leases, tax bills, mail, utility PDFs they point at). If they have no document, offer a short **owner-completed** no-document / explanation draft (facts they supply; blanks for signature/date) — not legal advice, not a notarized form unless they ask for a template to take to a notary themselves.
13. Record in a dated markdown log: state, site URL, date, DONE/zero/hit, fuller hit lines, owner actions (claimed / forwarded / skip / heir-path), unlisted-address flags with yes/no, capped-search notes, and rejected carryforwards.
14. Never invent hits. If a site blocks automation, ask the owner to clear the captcha and continue.

## Cadence
Default is **annual** (or when the owner moves / changes name / adds business or heir notes). Between sweeps, stay quiet unless the owner asks. After each sweep, confirm the **roster file is still in place**.
