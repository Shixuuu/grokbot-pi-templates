---
name: ig-dm-outreach-crm-stamp
description: "Use this when prospecting or remecheoing businesses via Instagram Direct (ig.me) and updating a Google Sheets CRM — includes send hygiene and how to avoid stamp spill errors."
---

# IG DM outreach + CRM stamp

Reusable playbook for remecheo **via Instagram Direct**, then logging Contactado + Comentarios in a spreadsheet CRM without corrupting neighboring rows.

## When to use

- Outbound remecheo / upsell where WhatsApp fails or IG is preferred
- Batch of N leads with verified Instagram handles
- Must update a planilla/CRM sheet after each successful send

## Preconditions

- Operator account logged into Instagram (web or desktop) that will send the DMs
- Same prospect message body that would go in WhatsApp, ready to copy
- Spreadsheet CRM open (or reachable), with columns at least: **Tarea** (name), **Contactado** (date), **Comentarios**
- Daily contact cap known (do not exceed)

## Hard rules

1. **No IG → skip** to the next lead. Do not invent handles. Open `https://ig.me/m/<username>` once; if there is no DM composer, discard and continue.
2. **Instagram cannot prefill text** — Meta has no `?text=` for `ig.me`. Always: clipboard message → open DM → paste → send.
3. **Normalize username**: trim, strip leading `@`, lowercase, extract from profile URL if pasted.
4. **Close IG tabs** after each send. Keep the CRM / admin tab open.
5. **Pace**: short pause only after a successful send. On skip/error, go straight to the next lead.
6. **Never re-send** the same business in the same campaign window.
7. **CRM write discipline**: Contactado = **date only**; Comentarios = **channel note only** (e.g. `IG DM @handle`). Never concatenate into one cell. Prefer Tab; avoid Enter after Comentarios (spill to next row). Never Select All.

## Send flow (one lead)

1. Build message: free listing link + premium/prospect body + soft CTA (sin saludo if that is the standing rule).
2. Put full message on clipboard.
3. Open `https://ig.me/m/<username>` in a new tab.
4. Wait for Instagram Direct composer.
5. Focus the message box → paste → Send.
6. Confirm the thread shows your message fragments (listing URL, brand name, price line).
7. Close the Instagram tab(s).
8. Stamp CRM.

If DM fails → mark SKIP_NO_IG / error, do **not** stamp as contacted, continue.

## CRM stamp (safe method)

1. Find the row by a **unique** substring of the business name.
2. **Contactado** → today's date only.
3. Commit with **Tab** — not Enter if Enter moves to the row below.
4. **Comentarios** → `IG DM @handle` (or append carefully).
5. Leave with **Tab** / click away.
6. After a batch, verify: intended rows stamped; **zero** spill to neighbors.

### Cleanup if spill happened

Clear **Comentarios only** on wrongful rows (select cell → Delete, no Enter). Re-verify spill = 0.

## Suggested batch shape

- Start with 1 test send + human OK when the channel is new.
- Then batches of ~5; respect daily cap (IG counts toward the same daily contact budget as WhatsApp unless told otherwise).

## Report back

- Sent list: name + `@handle` + OK/SKIP
- Cap used / remaining
- Planilla: stamped N / spill 0
- Anything unclear → stop and ask
