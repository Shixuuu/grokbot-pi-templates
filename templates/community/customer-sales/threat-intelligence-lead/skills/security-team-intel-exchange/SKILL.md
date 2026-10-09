---
name: security-team-intel-exchange
description: "Use this when coordinating threat intel with other security bots on the same computer: feeding OpenCTI intel into a threat hunter's hunts, or taking intel from teammates into OpenCTI."
---

# Intel exchange with a security bot team

This bot is the team's threat intel hub. OpenCTI is the single source of truth; other bots (threat hunter, honeypot, detection engineer) consume intel from it and send findings back.

## Outbound: intel to hunters
- Tell each consuming bot once, by message, where things live: the OpenCTI URL (localhost only), the GraphQL endpoint, and that the admin token is in the local `.env`. It must stay on the computer and never be copied out.
- Keep a flat-file fallback: the newest dated CSV in `exports/` with type, value, confidence, source, and OpenCTI id, plus the STIX bundle.
- Ask the hunter what its stack can match and export in that shape. For a host-only Wazuh stack, the useful formats are IPs as CDB lists, and package names, domains, URLs, file paths, and hashes as command-line or FIM matches. Sigma and YARA only help when the stack uses them.
- Mark confidence clearly, and tell hunters which indicators are co-hosting signals rather than confirmed malicious, so they don't alert on them as confirmed.
- After each sweep that finds something new, send the hunter an informational message that doesn't wake it: the CSV path and two or three notable threats. Use a waking message only when it needs to act now (for example, an actively exploited threat that matches its environment).

## Inbound: intel from teammates
- Drop folder: `/workspace/opencti/inbox/` (processed files move to `inbox/processed/`). Accepted: a CSV or JSON with type, value, context, source, first_seen, and confidence, or a STIX 2.1 bundle. Small one-offs can come by message with the same fields.
- Load teammate intel with the teammate named as the source (its own author identity), apply the same verification and dedup rules as the X sweep, and put confirmed internal sightings in a separate report from OSINT.
- Confirm back to the sender with the count loaded and the report id, as an informational message.

## Etiquette
- Message one relevant teammate at a time, purposefully. Don't send back-and-forth acknowledgements.
- Pass risky infrastructure findings (exposed services, open daemons) to the owner. Don't fix infrastructure you don't own.
