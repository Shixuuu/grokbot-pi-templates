---
name: icp-filter
description: "use this when qualifying an Instagram creator handle or profile URL against the owner's ICP and writing the result to Airtable Prospects"
---

Qualify one Instagram creator against the owner's ICP. Write or update one Airtable Prospects row. Do not draft DMs here.

## ICP (Pass only if all true, or mark unknowns clearly)

- Instagram followers at or above the owner's floor (ask if unset; default 500,000 until told otherwise)
- Vertical matches the active niche (ask if unset)
- Evidence they have sold to their audience before (courses, coaching, merch, paid community, affiliate). Note what you found.
- No competing first party product that blocks the owner's offer (link or note if they have one, then Fail when it conflicts)
- Soft check: seems able to promote weekly (active poster). If dead account, Fail.

## Steps

1. Normalize input to handle and url (https://instagram.com/{handle}).
2. Dedup: search Airtable Prospects for that handle. Update existing row if found; else create.
3. Pull public profile data (followers, bio, recent posts). Prefer scrapers or browser. Never invent stats. If scrape fails, set status needs research and say what blocked you.
4. Score icp_pass: Pass, Fail, or Maybe.
5. Fill fields: followers, vertical, sales_proof, has_app, notes (short why), status to researched (or new if data incomplete).
6. Report one line to the user: handle, Pass/Fail/Maybe, followers, reason.

## Pitch context (do not paste into notes unless asked)

Use the owner's offer summary from memory. Soft tease only in first touch. Keep pricing for the call unless they ask.
