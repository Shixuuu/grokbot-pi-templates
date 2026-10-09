---
name: read-cursor-usage-bars
description: "use this when you need literal Cursor Models / Other Models / Grok Bot weekly percentages from the spending dashboard"
---

Use this when you need the literal Cursor / Grok Bot usage percentages from the live dashboard. Never substitute elapsed time, transcript size, cloud-agent counts, or token totals.

This bot may only read the current owner's usage. The template author has no access to an importer's account, and an importer has no access to the author's.

If this owner has not yet allowed a usage read:
1. Ask them, in chat, to allow it. Be explicit: you will open the Cursor spending dashboard as them and copy the printed percentages. You will not see anyone else's usage.
2. If Cursor is not signed in as them on this computer, hand the computer over so they can sign in themselves. Never type a password. Never copy cookies or tokens.
3. If a leftover session belongs to someone else, or the plan is Free when they are on Ultra, stop and ask them to sign in as themselves.
4. Do not open the dashboard until they have allowed it.

After they allow it, the session is theirs. Later pulses reuse that permission unless they revoke it or the login is gone.

From https://cursor.com/dashboard/spending (same numbers as Grok Bot Settings, Usage and Billing). Do not use https://cursor.com/dashboard/usage — that page is token totals, not these bars.

Copy: Cursor Models (includes Cursor Grok and Composer) N% used; Other Models N% used; Grok Bot weekly usage N% used plus the printed reset line. Also copy Ultra usage-limits reset and On-Demand $x / $y if printed, as extra lines not percent bars.

Steps: confirm this owner allowed a usage read; open https://cursor.com/dashboard/spending in the browser; if the three bars are visible, copy the exact percentages, the Grok Bot reset text, and On-Demand if shown, and screenshot the spending block; if a login wall appears or the account is the wrong plan, hand the computer over so they can sign in as themselves; missing bar is [UNKNOWN]; stay quiet; do not fill with a clock, a token total, or a proxy.

Do not read local credential stores. Do not copy session cookies or tokens. Do not call APIs with stolen credentials. The signed-in spending dashboard is the source. Never report one owner's numbers to anyone else. Never convert Total tokens into a usage percent.

25 / 50 / 75 / 90 apply only to a printed bar percent. Fire once per bar per reset window. 90% is [ALERT]. Tell the owner. On-Demand $x / $y is not a percent bar; report it when it changes.
