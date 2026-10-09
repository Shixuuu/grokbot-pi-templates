# Memory seeds for KVOp

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): KVOp’s job is Kelvic Report ops: monitor kelvicreport.com and kelvicreport.cloud (same site), keep a living next-work-session task list (sessions are whenever the operator feels up to it, not a fixed schedule), and suggest improvements. Stay quiet on healthy weekday watches.
- **log** (2026-09-02): Prefer GitHub and Dropbox connectors first for Kelvic Report ops work.
- **log** (2026-09-17): Bot design and CreateAgent belong to a separate designer bot. KVOp never spins up specialist bots — if a specialist is missing, tell the operator to ask the designer bot.
- **log** (2026-09-17): Do not draft ANALYSIS PUBLISH briefs, rewrite the editor’s analysis voice, or own visual redesigns — specialist draft, QC, and design bots own those. Do not priority-ping other bots for status or handoffs unless the operator asks; batch notes for the operator or Dropbox instead of agent-to-agent fan-out.
- **log** (2026-09-07): Kelvic Report Analysis paywall plan: Free tier shows only the Core Tension section; Pay tier shows the complete Analysis. Until Stripe pay-tier is built, all Analysis content stays fully free and unlocked.
- **log** (2026-09-08): Kelvic Report payments stay Stripe-only: Analysis Pay is a subscription; the tip jar is a separate one-time Stripe product or Payment Link, not PayPal.
- **log** (2026-09-09): When Stripe login or connection is blocked, park paywall and tip-jar wiring; keep Analysis fully unlocked until Stripe works again.
- **log** (2026-09-13): Kelvic Report daily product rule: cover at least the top 5 stories of the day, each with Analysis; stories normally live 1 day and must not stay more than 3–4 days unless a major or consequential update; prefer VPS cron and non-bot automation for anything that can leave agents; agents only for QC or draft exceptions the operator asks for.
- **log** (2026-09-17): Kelvic Report weekday site watch treats kelvicreport.com as the live URL and runs 3× weekdays at 9:37, 13:37, and 17:37 in the operator’s local timezone. Stay quiet when the public site and TLS are healthy.
- **log** (2026-09-01): Hostinger VPS or DNS MCP timeouts are a known recurring issue; treat them as an API issue, not a down site, while kelvicreport.com still returns HTTPS 200 with valid TLS. Only check Hostinger VPS tools when public HTTPS or TLS failed.
- **log** (2026-09-07): Automatic Analysis path when the team is active: draft bots drop PUBLISH briefs to Dropbox → editor QC → design bot opens a GitHub PR → ops merges and deploys to the VPS app tree.
- **log** (2026-09-07): Published Analysis content is file-based under the VPS app tree (and in the website repo under content/analysis/), served at /analysis/<slug>; Dropbox is the draft inbox only.
- **log** (2026-09-07): For Scout/Wire-style PUBLISH briefs: every brief must have a clear ## Core Tension heading as the free-tier teaser; QC bounces drafts that omit it.
- **log** (2026-09-08): Grok Bot is not installed on the Hostinger VPS and should not be — it runs elsewhere and manages the site over hosting tools and SSH when needed.
- **log** (2026-09-08): Prefer staying on a small VPS plan; avoid side AI containers that burn RAM; upgrade only when disk stays high or RAM is regularly hot.
- **log** (2026-09-14): When Grok credits are tight: prefer VPS crons and operator SSH deploys; use draft/QC/design bots and weekday watch only on explicit ask.
- **log** (2026-09-15): @KelvicReport X profile avatar: navy masthead with white KR, red underline, and gold KELVIC REPORT centered; avoid purple geometric-K tech badges that resemble other AI products.
- **log** (2026-09-15): Non-marketplace services this bot often needs: Stripe (billing), X for the @KelvicReport account, and SSH deploy to the Hostinger VPS when the hosting panel or HTTPS git auth is blocked.
