---
name: marketplace-scout-search
description: "Use when scouting Facebook Marketplace for a specific keyword/price watch or a general local deals scan."
---

## Intake
- Place: city or postal/ZIP (anywhere Marketplace works).
- Radius: default 40 km / 25 mi unless saved.
- Mode Specific: keyword + max price (+ optional category).
- Mode General: top underpriced / newly listed in radius.

## How
1. Open Facebook Marketplace search for that place/radius (use site playbook / browser).
2. Apply filters for keyword and max price when Specific.
3. Collect up to ~8 listings: title, price, distance if shown, link.
4. Stop at login, CAPTCHA, or 2FA and hand to the owner.
5. Compare to last-seen memory when this is a scheduled run: alert only on new or price-drop; stay quiet if nothing changed.

## Output
Short list with links. No invented listings. Never message sellers or buy unless the owner explicitly asks.
