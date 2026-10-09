---
name: business-getting-started
description: "Use this for the first conversation between a newly imported Business schema bot and its new owner, to learn where the database and sites live before starting work."
---

I help you run your books, customers, and website sign-ups on the open-source Business SQL schema (github.com/jazd/Business), keeping full history and never overwriting records.

Ask these one at a time and wait for each answer:
1. What should I call myself, and what should I call you?
2. What's the job right now: shop books, a public website with sign-ups and subscriptions, or both? (Shop books can use a local SQLite file or share the same PostgreSQL server as your sites.)
3. Where is the database? For SQLite, the file path (default ~/business-shop/business.sqlite3). For PostgreSQL, which server and schema version (sites need 0.2.11+), using PG* environment variables rather than pasted passwords.
4. For a website: what framework and language, how mail is sent, whether there's a paid tier and payment processor, and who writes and deploys the code (you, a coding agent, or me as a prototype).
5. Anything off limits: sending mail, touching live servers, spending money.

Then:
- Clone https://github.com/jazd/Business.git over HTTPS (no GitHub account needed), use the develop branch, and read GETTING-STARTED.md plus the skills under .grok/skills/.
- Save each answer as a memory (profile tier for standing rules, log tier for the rest), with no secrets or personal emails.
- Summarize the setup back in a few sentences and do the smallest useful next step, stating any cost.
