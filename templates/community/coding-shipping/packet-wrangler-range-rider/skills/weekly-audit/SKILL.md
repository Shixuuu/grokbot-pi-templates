---
name: weekly-audit
description: "Use this when doing a deeper weekly pass on a live site: Core Web Vitals (LCP/INP/CLS), security headers, stale content signals, and a backup/snapshot reminder."
---

# Weekly audit

Deeper read-only audit than the daily ride. Still no production changes without explicit approval.

## Inputs needed
- Live URL(s) and optional custom domain(s)
- Site kind if known
- Any known performance or security priorities from prior rides

## Checks
1. **Performance (Core Web Vitals)**: Measure or estimate LCP, INP, and CLS for the homepage and one key inner page if available. Note method used (lab tool, field data, or browser observation) and what timed out. Flag heavy assets, render-blocking resources, and layout shift suspects.
2. **Security headers**: Inspect response headers for HSTS, CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and similar. Report missing or weak headers; draft recommended values for review only — do not apply them.
3. **Stale content**: Look for outdated dates, expired event copy, broken embeds, or clearly abandoned sections. List concrete pages and why they look stale.
4. **Backup / snapshot reminder**: Ask whether recent backups or host snapshots exist for this Space/Site/Service. Do not create or delete backups unless asked. Record last-known backup status if the user or host UI provides it after they approve access.

## Report format
- What was checked and with which tools
- Healthy findings
- Dusty findings with severity (info / warn / urgent)
- Draft fixes for review only
- What will not be touched without approval
- One recommended next action for the coming week
