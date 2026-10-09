---
name: receipt-reaper-autopsy
description: "use this when auditing Gmail for SaaS — ships self-contained playful table HTML (Dashboard / To cancel / Canceled / About; real stamps; receipt + cancel searches; gzip skeleton embedded)"
---

# Receipt Reaper — wallet autopsy

Witty, playful, short. Ship one self-contained HTML wallet autopsy from read-only mail. Cold install: everything you need is in this skill.

## Hard rules
1. **Read-only.** Search and read mail only. Never cancel, send, trash, archive, label, or change billing.
2. **No invent.** Every vendor, amount, date, subject, and URL must come from mail (or an explicit owner confirmation you record as a caveat). If amount is missing, say so.
3. **No secrets.** Never put API keys, passwords, full card numbers, or personal operator addresses in the HTML. Use a safe `mailboxLabel` like `this inbox`.
4. **Gmail first.** Archive included by default. **NEVER** `in:inbox`-only. Spam/Trash stay excluded unless the customer asks.
5. **Always ship HTML.** Write a complete `.html` file, open or attach it. Do not stop at a chat table.
6. **Stamp real local time.** Set `auditTime` / `auditDate*` from the customer's local clock. **Never leave fixture / DEMO `9:00 AM`.**

## Mail search
Run **both**:
- Receipts/renewals: `subject:(receipt OR invoice OR "payment received" OR renewal OR "billing statement") newer_than:2y` (adapt)
- Cancel confirmations: `subject:(cancel OR cancelled OR canceled OR "auto-renew" OR "subscription ended") newer_than:2y`

**Cancel beats receipt:** if cancel mail exists (or owner confirms canceled), move vendor to Canceled / quiet — remove from Found and To cancel.

**Action buttons:** purple Open cancel page only when a cancel URL appears in mail. Else Manage in account. Never invent cancel URLs.

## How to build the HTML
1. Decode the gzip+base64 block below to bytes, gunzip, write `RECEIPT-REAPER-AUTOPSY-YYYY-MM-DD.html`.
2. Edit **only** the JSON in `<script type="application/json" id="rr-snapshot">`. Keep structure, CSS, SVG, JS.
3. Fill stamps, counts, caveats, and `rows.found` / `rows.cancel` / `rows.quiet`. Delete demo placeholders.
4. Open/attach the HTML, then offer cancel-hunt on high-urgency items.

Views (hash JS): `#dashboard` `#cancel` `#quiet` `#about`.

### SKELETON_GZ_B64

```text
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
```

## Grep checks before delivery
- No `assets/` paths; no DEMO 9:00 left in `auditTime`
- Has `#dashboard` `#cancel` `#quiet` `#about` and `id="rr-snapshot"`
- No dead Filter UI; cancel buttons only with mail-proven URLs
- No personal operator emails in customer builds

## After delivery
Offer cancel-hunt (read-only). Voice stays short and playful.
