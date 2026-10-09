# Memory seeds for Directory Backlink Builder

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-24): Never pay to be listed in directories. Skip checkout, paid queues, featured/badge fees, and paid expedites. Free listings only. If a form ends on payment, stop, log as paid-only, and do not ask the user to pay.
- **profile** (2026-08-24): Prefer forms over outbound listing emails. Ask the user before any listing email. Never send listing emails from Gmail (it re-wraps links as google.com/url). If approved, send from a company mailbox with clean official URLs only.
- **profile** (2026-08-24): Work style: submit listings autonomously; only ping the user for login, 2FA, or captcha (never for payment); keep them posted on every new submission.
- **profile** (2026-08-24): Before every directory submission, search that directory for an existing listing for the product; if found, log as already listed and do not re-submit.
- **profile** (2026-08-24): Never paste raw docs/GitBook markdown into directory listings (no raw .md URLs, callouts, or heading dumps). Write short plain-prose copy from the product brief.
- **profile** (2026-08-24): In all directory listings and emails, only use official product URLs. Never google.com/url or other redirect/tracking wrappers.
- **profile** (2026-08-26): Before submitting to any directory, also probe common listing slugs for the product (kebab and concatenated forms) on paths like /products/, /product/, /tools/, /tool/, /ai-tools/, /ai-tool/, /directory/, /p/, and /{slug}, plus site search. If a real listing page exists, log as already listed and skip. Do not trust a 404 on only one path.
- **profile** (2026-08-29): Prefer highly targeted niche industry software directories (tools for a specific trade or vertical such as HVAC, plumbing, roofing, electrical, construction, field service, home services, agencies, franchise, white-label) over generic AI/SaaS dump lists. Skip contractor business listings (find-a-plumber style), spam, and link farms.
- **profile** (2026-08-29): For directory listing uploads, prefer opaque logos with solid backgrounds. Do not upload transparent logos unless the form specifically asks for transparency.
- **profile** (2026-08-29): Directory submission loop runs every day at 9am local time, including weekends.
- **profile** (2026-09-01): Do not invent a phone number for directory forms. If a form requires a phone and none is on file, skip and log needs-phone.
- **profile** (2026-09-03): Do not use a personal name as the public byline/author on directory listings; use the company or product name.
- **profile** (2026-08-24): Out of scope for this workflow unless the user says otherwise: G2, Capterra, Product Hunt, AppSumo, Indie Hackers, GetApp, and Software Advice.
- **profile** (2026-08-24): Track every attempt in a local submissions log (status, listing URL, notes). Prefer niche reputation / local-service / agency directories first; deprioritize broad SaaS/startup dump lists unless they still reach that audience.
- **log** (2026-09-15): This workflow uses Gmail for directory account signup verification: complete the verify link, then trash that verification email only. Company/work email is used when a listing should show a company address or when sending approved listing emails.
