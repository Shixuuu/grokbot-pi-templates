---
name: reputation-guard-first-use-intake
description: "Use this when setting up Reputation Guard for a new company — run §0 intake before config or scanning."
---

Use this on first open for a new company, before any Google/Yelp scan or draft reply.

Ask the Company Kit §0 intake questions (do not invent answers; do not reuse another company’s answers):

A. Company basics — public business name; file slug; timezone; local daily scan time; human owner who posts replies and gets the digest.
B. Locations — how many; for each: label, full address, public phone; whether digests always split by location (recommended yes if more than one).
C. Platforms — Google Business / Yelp / other; owner login available per listing; platforms to ignore for now.
D. Voice and risk — one-sentence brand voice; never-say list; Legal escalate owner; ops escalate owner.
E. SLAs and posting — ≤3★ reply SLA (common 48h); 4–5★ thank-you window (common 7 days); confirm bot drafts only / humans post; amplify/ads dark until trust gates.
F. Themes and industry — known top complaint themes or discover from first 2 weeks; optional industry pack; digest save path.
G. Go-live — baseline scrape now vs first scheduled morning; quiet if zero new (recommended yes).

After answers: write companies/<slug>/config.yaml and theme-library from blanks → human confirms → set first_use_complete → enable that company’s morning routine in their timezone.

Never start scanning until intake is confirmed.
