---
name: prospect-maps-whatsapp
description: "Use this when finding NEW local businesses via Google Maps (photos + WhatsApp + IG), qualifying them against the guide/CRM, importing Places listings, and sending WhatsApp ficha/prospect messages via the admin Prospection module."
---

# Prospect new leads (Maps) → WhatsApp send

Playbook for finding **new** local businesses (not already in the guide/CRM), qualifying them with Google Maps + Instagram + WhatsApp, then outreach via WhatsApp (portal “Enviar ficha” or `wa.me`).

## When to use

- Operator asks for a **Lista**, drip of new leads, or “prospectá NEW”
- Need businesses that look strong enough for a free listing + premium upsell
- After qualification, send WhatsApp (human-controlled or approved automation)
- Remecheo of sleeping CRM leads already on the guide (Prospection select → Enviar ficha)

## Dedup (never pitch twice)

Before naming or contacting anyone, cross-check:

1. Site sitemap / existing listings
2. CRM sheet tab of contacted businesses (name + Contactado date)
3. Already discarded / already delivered in a prior batch
4. Comments like “no le interesa”, “no molestar”, “pagó / ya es cliente” → **never** re-pitch

If the name is already in CRM with a recent Contactado, skip unless the operator explicitly wants remecheo of sleeping leads.

## Qualification bar

Prefer leads that have **all** of:

| Signal | Rule |
|--------|------|
| **Google Maps** | Real place card URL (`maps.app.goo.gl` or `/maps/place/...` with CID). **Must open with good photos.** Never deliver Maps search URLs or constructed `/place/Name,Address` links. |
| **WhatsApp** | Mobile that actually opens chat (prefer `+54 9 …` / `wa.me` / IG WhatsApp button / Linktree). Landlines often fail — discard on first “número no encontrado”. |
| **Look / nivel** | Photos and venue look fit the guide (not shabby / wrong tier). Reviews alone are not enough. |
| **Instagram** | Prefer real IG presence; if missing, say so. If no IG, look for Facebook or a website and include that link. Strong IG can rescue a weak Maps case only when the operator allows that exception — and flag it. |
| **Rubro** | Fit categories already used on the guide. Skip blocked rubros the operator named. |

Also evaluate non-digital businesses with real potential the guide can transform — still require WhatsApp + usable visuals.

## Discovery sources

Mix sources; do not rely on a single list: Google Maps, Instagram / street / ads the operator forwards, tourism guides as orientative only.

## Maps QA (mandatory before delivery)

1. Open the candidate URL in Maps.
2. Confirm correct city/business and real photo gallery.
3. Copy that clean URL for Places import.
4. **Do not** send bare `cid=` links or query links that fail Places ANALIZAR.

## WhatsApp number hygiene

1. Prefer owner mobile from **IG button / Linktree / wa.me**.
2. Compare against the number on the guide listing (if any); **flag** when they differ.
3. On first WhatsApp failure (“No se encontró el número”), OK the dialog, note CRM Comentarios (WSP incorrecto), **do not retry** that number.

## Delivery styles

- **Lista / batch**: Maps URL + IG (or “sin IG”) + WA when known + short why.
- **Drip**: one lead as soon as Maps is verified when the operator prefers drip.

---

## Admin: Importar desde Places (NEW only)

1. Paste clean Maps URL → ANALIZAR → verify preview is the exact business → choose category → CONFIRMAR E IMPORTAR.
2. Fix phone on the ficha if Places imported a bad landline.
3. Stop and ask if anything is unclear before publishing.

---

## Admin: Prospección — select + Enviar ficha (critical)

The Prospection module does **not** select a business just by typing. Typing only filters; you must pick from the dropdown.

### Select (required before Enviar enables)

1. Open **PROSPECCIÓN** (keep this session open; do not reload per contact).
2. If a business is already loaded, clear/change selection.
3. Focus search and type a distinctive word (or paste).
4. Wait for the **dropdown list** of matching businesses to appear.
5. **Click the exact item in that list**. Until you do this, **ENVIAR FICHA + MENSAJE stays disabled** — do not treat that as “business failed” or skip to the next.
6. Confirm the card shows the right name, WhatsApp number, and (if shown) Instagram. Enviar should now be **enabled**.

### Send current — finish before next

1. Click **ENVIAR FICHA + MENSAJE** only when WA is whatsappeable and not forbidden (e.g. already contacted / operator said no).
2. Prefer triggering from the **operator’s machine** so the product opens `api.whatsapp.com` / WhatsApp Desktop with prefilled text.
3. Complete the send for **this** business.
4. Close leftover WhatsApp/api tabs; keep Prospection open.
5. **Stamp the planilla immediately** for this business.
6. **Only then** move to the next business.

### Hard loop rule

For each lead in a batch:

`select from dropdown → Enviar ficha → confirm WA outcome → stamp planilla → next`

Do **not**: type search → see disabled Enviar → mark failed → jump ahead.

### Pace & caps

- Short pause (about 30s, or 45–90s if the operator prefers) only after a **successful** send.
- On real error after a proper select: log + stamp Comentarios, then next — no long pause.
- Respect daily successful-contact hard cap.
- Never duplicate-send the same business; detect reused WA across listings.
- **Never press Enviar** unless the operator asked for that send (or standing automation was approved).

---

## CRM stamp after every WSP attempt (mandatory)

1. **Contactado** = today’s date only.
2. **Comentarios** = outcome only (e.g. `WSP OK`, `WSP incorrecto`). Never glue date+comment into one cell.
3. If NEW alta, also add the row to the CRM sheet.
4. Sheets hygiene: prefer **Tab** between cells; avoid **Enter** after Comentarios. Never Select All. Jump to the exact cell. If unsure, stop and ask.

## Report back

- Each: name, select OK?, send OK/fail reason, planilla stamped
- Cap used / remaining
- Imports waiting for operator OK

## Stop and ask

If anything is unclear about import, category, phone, or send — **stop and ask** before risking the live guide.
