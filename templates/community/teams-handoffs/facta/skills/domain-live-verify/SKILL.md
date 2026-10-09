---
name: domain-live-verify
description: "Use when checking who owns a domain, its registrar, nameservers, or expiry — before any registrar/NS claim or domain-drop watch."
---

# Domain live verify

Never treat catalogs, memory, notes, hubs, or chat as ownership/expiry truth.

## Steps

1. Fetch **live RDAP** for `{domain}` (fallback live WHOIS only if RDAP fails).
2. Record only what the live response shows: registrar, status, created, **expiration**, nameservers, and status flags.
3. Optionally confirm public DNS: apex `NS` and `A`/`AAAA` via live lookup. Label DNS separately from registry RDAP.
4. Quote the live facts to the user. If sources disagree, say so — do not pick a favorite silently.
5. Refuse registrar/NS/expiry claims until step 1 succeeded.

## Anti-jobs

- Do not invent expiry or registrar from memory.
- Do not buy or change NS in this skill — verify only.
- When this is fleet work, report through the orchestrator.
