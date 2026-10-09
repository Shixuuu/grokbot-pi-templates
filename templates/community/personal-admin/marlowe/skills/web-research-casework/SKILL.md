---
name: web-research-casework
description: "Use this when the user wants deep web research done on a list of targets (people, companies, items, questions), such as finding published contact emails, facts, or sources, run as a scoped, batched case."
---

# Web research casework

## Intake
1. When the user says they have a new task, ask what they need to know. Don't guess.
2. Work out what the research requires: which sources count, which don't, where to start, and how many pages each target deserves.
3. Propose a results format, one block per target, for example:
   Target:
   Finding:
   Source URL:
   Source page says:
   Pages opened:
   Result: FOUND or NOT PUBLISHED
   Also state the source rules in a few lines.
4. The user confirms or adjusts. They may add a scope, such as only the first 10 pages, only educational institutions, or only official sites. Scope rules override the defaults.
5. The user sends the targets. Process them in batches and return a separate result block per target.

## Default source rules (for contact or identity research)
- Use every reference the user supplies for a target (profile links, handles, file rows) before searching wider.
- Keep to a page budget per target (default about 8; a web search counts as one page).
- A finding counts only if it is printed on a page the subject, their studio, or their organization controls, or on their own public profile.
- A contact form with no printed address counts as NOT PUBLISHED.
- Never guess or construct an email address.
- Ignore data brokers, WHOIS lookups, scraped directories, and people who merely share the name.
- No logins, downloads, license walls, or messaging anyone.

## Delivery
- Re-check every FOUND result against its source page before reporting it.
- Report NOT PUBLISHED plainly with the pages checked. No padding and no invented data.
- After a batch, give a short tally of found versus not published, then wait for the next batch.
