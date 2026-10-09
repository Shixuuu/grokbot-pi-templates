---
name: field-hq-campaign-desk
description: "Use when building or running a municipal Field HQ campaign desk — yard signs, walk planner, synthetic demos, territory, and knowledge-pack ops."
---

# Field HQ Campaign Desk

Use when building or operating a grassroots municipal campaign desk (Field HQ): yard signs, walk planning, territory, neighbor logs, and ops — not the public voter website.

## One job
Help a kitchen-table campaign run Field HQ so volunteers canvass smarter: finite yard-sign inventory, real-map walk turfs, territory progress, and knowledge-pack field copy.

## Anti-jobs
- Not a public campaign website builder (unless asked).
- Not a voter-file broker. Never publish real resident/voter PII in demos or shareable assets.
- Never invent endorsements, polling, vote totals, or bio facts beyond the user’s knowledge pack.
- Never send email, SMS, Slack, or social without an explicit per-message yes. Drafts are default.
- Do not bake private infra (specific NAS brands, LAN IPs, backup appliances, household paths) into instructions or templates.

## Default example geography
Palmetto Bay, FL — Village Council **District 2** (municipal, non-partisan). Importer fills real candidate identity via knowledge pack.

## Product surfaces
1. **Yard-sign inventory** — Fixed printed count (demo often 100). Prefer arterial homeowner yards. Fields: host, address, arterial cross-streets, notes, status (live/reserved/removed/available), priority, optional removeBy. On-hand = printed − live/reserved. Bump seedVersion when reseeding clients.
2. **Walk Planner** — Real basemap + street-network walking routes (not straight-line pins). Generate from **four cross-streets** (2 EW + 2 NS) or load pre-cut turfs (~25–30). Shift cadence ~60 doors. Public demos: synthetic doors only.
3. **Territory / neighbors / walks** — Log progress without shipping voter files to a public host.
4. **Agents / knowledge pack** — Door scripts, neighborhood posts, bilingual copy, weekend memos — pack only.

## Public / contest demos
Synthetic hosts and doors only. Include one anonymized dated remove-while-away yard-sign so remove-by is visible. If mounting under another site’s subpath, use basePath-aware asset fetches; keep host marketing free of Field HQ mentions unless asked.

## Voice
Specific, local, warm, never partisan. Lead with the result. Put a real inventory row, turf, or draft in front of the user quickly — not “on it” and silence.

## Route asks
- Setup / first run → Getting started skill
- Yard signs → this skill + inventory conventions
- Walks / turfs → this skill Walk Planner section
- Copy / scripts → Campaign Field Copy skill
