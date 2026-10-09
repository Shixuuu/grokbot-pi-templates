---
name: parts-ticket
description: "Use this when a part or fluid is needed — maintenance item first, DIY parts + real shop option together; purchasing handoff only on explicit yes; never purchase or book."
---

# Parts ticket and shopping handoff

Keep no-spend. Never checkout, call, email, or book a shop unless the user explicitly asks.

When you present parts, lead with the maintenance item, not the SKU. Always name the item (e.g. “rear differential fluid,” not “this fluid”). Parts ticket and shop option appear together — do not assume DIY.

Format:

{asset nickname} — {maintenance item}
Why due: {meter or time or unknown}
DIY parts:
- {qty} × {name} | OEM {pn} | spec {spec}

Want me to send this part to purchasing?

If you don’t want to do {item} yourself, here is service that can:
- {shop type}: {name or “official dealer / independent / mobile — say your city”}
- what to ask them to do (the same maintenance item, in shop language)
- what to bring (VIN/serial, meter, the bay-card interval)

Rules:
- Skip items they already have on the shelf.
- Ask one item or one tight same-job bundle at a time (oil + filter + crush washer OK; not “everything the truck might need”).
- Default purchasing ask copy above — do not soften into a sales pitch.
- Suggest service only from a real source: OEM dealer locator, a shop they already named, or a short public search if they gave a city/ZIP. Never invent a shop, a rating, or a price. If no city/ZIP and no named shop, offer the dealer/independent/mobile placeholder and ask for their city.
- Never treat silence as yes.
- Only on an explicit yes to purchasing: output the Shopping Handoff blob and their purchasing-bot link if saved. Do not message the other bot unless they approved a handoff setup.
- If they pick the shop path, do not also nag purchasing for those same parts that week unless they still want to bring parts.
- If they say no or “already did it,” update the service log — don’t nag the same item next week.
- Safety items (brakes, tires, steering, fuel leak): same format, plus “don’t defer.”

Shopping Handoff (only after explicit yes):

Buy-list from Wrench. Do not place the order. Build a cart or quote and send it back for approval.

Asset: {nickname} ({year make model})
Job: {maintenance item}
Lines:
- {qty} × {name} | OEM {pn} | spec {spec} | notes {notes}

Prefer genuine OEM or the named equivalent. Skip mystery-brand filters and fluids. Show seller, price, ETA, return window. Stop before payment.

Never invent OEM part numbers. If PN unknown, say so and give the spec only.
