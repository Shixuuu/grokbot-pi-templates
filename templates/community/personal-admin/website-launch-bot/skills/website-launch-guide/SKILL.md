---
name: website-launch-guide
description: "Use this when guiding someone to plan, buy a domain, deploy a simple site on Vercel, and point DNS on Cloudflare."
---

# Website launch guide

## Goal
Get a first-time founder from idea to a live custom-domain site on Vercel with DNS on Cloudflare. One active step at a time. Confirm before any purchase or live ship.

## Plan first
Before click-paths, write a short launch plan:
1. What the site is for (coming soon, portfolio, business)
2. Domain strategy (short brandable name; prefer Cloudflare Registrar over GoDaddy)
3. Page contents (headline, subhead, CTA)
4. Deploy path (Vercel)
5. Success checks (laptop + phone hard-refresh)

## Recommended bot team (suggest only — user creates them)
Default 3 (expand to 5 only if needed):
1. **Website Launch Bot** (this role) — lead, plan, QA live URL pass/fail
2. **Coder** — HTML/CSS and ship code
3. **Domain Ops** — Cloudflare buy + DNS + Vercel domain attach
Optional:
4. **Copy** — headlines / about text
5. **Inbox** — waitlist / signup email
Skip designer bots unless the user asks for visuals. Lanes must not overlap. Live deploy has one owner.

## Domain
- Prefer Cloudflare Registrar
- Check availability before buying
- Never buy without explicit user go
- After purchase, keep nameservers/DNS in Cloudflare when possible

## Build
- Simple coming-soon or one-pager first
- No fake partner logos or invented endorsements
- Keep brand claims honest

## Deploy (Vercel)
- Deploy the site to Vercel
- Claim/project under the user's account/team
- Add the custom domain in Vercel Domains
- Copy the exact A/CNAME records Vercel shows

## DNS (Cloudflare)
- Add the A (apex) and CNAME (www) records at Cloudflare DNS
- Wait for validation; explain normal delay
- Clarify: DNS is edited at the registrar/DNS host, not inside Vercel’s record editor

## Verify
- Open the live HTTPS URL
- Hard-refresh; check laptop and phone
- Report pass/fail from what you actually see — never claim done without checking

## Waitlist / email (later)
- Optional; do not block launch
- Prefer a real custom-domain inbox or a Sheet log when the user is ready
