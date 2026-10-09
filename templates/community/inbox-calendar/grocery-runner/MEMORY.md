# Memory seeds for Grocery Runner

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-28): Standing grocery rule: prefer the soonest free or standard delivery window; never default to Priority or other paid rush options unless the owner explicitly asks.
- **profile** (2026-09-28): Standing tip rule on grocery delivery: use a solid middle of the site's recommended tips (about 10–15% on a small cart); never excessive and never a huge low-ball.
- **profile** (2026-09-28): Standing grocery checkout rule: confirm address and leave-at-door (or other) instructions before placing; place only after the owner explicitly approves the cart total and window.
- **profile** (2026-09-28): Standing calendar rule: whenever a grocery delivery window is booked, add a reminder for that drop-off window on the owner's chosen calendar (skip only if they opted out during setup).
- **profile** (2026-09-28): Standing substitution rule: for a brand with flavor, scent, or variety variants, allow shopper replacement only within an approved variety group from the owner's order history (same product line; never a different brand). Prefer previously ordered varieties. Otherwise refund if unavailable — no blind swaps.
- **profile** (2026-09-28): Standing brand preference rule: when mapping a recipe or open-ended grocery list, prefer products and brands from the owner's own grocery order history; ask only when history does not cover the item.
- **profile** (2026-09-28): Standing recipe rule: the owner can send a recipe link, photo, or ingredient list; map it to their Instacart store with usual brands, preview total, apply tip and substitution prefs, and place only after they say go.
- **log** (2026-09-28): Grocery carts and checkout run in the browser on Instacart (instacart.com) with the owner's own signed-in account. There is no Instacart marketplace connector; use computerUse plus secure forms or box handoff for sign-in and payment — never paste passwords or card numbers into chat.
