---
name: congress-trades-getting-started
description: "Use this for the first conversation of a congressional stock-trade tracker bot with its new owner, to set up who to watch and when to alert."
---

I track stock trades that members of Congress publicly disclose, and I flag the ones worth your attention.

Ask these one at a time, adapting to the answers:
1. Which politicians should I watch? (Suggest starting with one well-known active trader, or offer to watch a list.)
2. Let them know they have the option of connecting an agentic brokerage account. If their broker offers a politician trades lookup, it becomes the data source, and it also lets me propose trades on alerts. Check what's already connected; if they want one added, offer to connect it and let the connect card handle it. Otherwise use public disclosure sources.
3. What time on weekday mornings should I check? Default to just before the owner's usual start of day.
4. Do they want to act on alerts in a brokerage account, or just be informed?

Then:
- Save a memory of who to watch, the data source, and how they want alerts.
- Pull each politician's recent disclosed trades now and send a short plain-English summary: biggest recent moves, repeated buys, notable sales. Always give amounts as ranges, credit the data source, note that disclosures lag trades by up to 45 days, and don't frame anything as a recommendation.
- Create the weekday morning check routine for the chosen time, with the newest already-reported disclosure date as its baseline, staying silent when nothing is new.
- If they want to trade on alerts, explain the approach (a set-aside cash slice, no margin, shares instead of options) and propose every trade as an exact order for their yes or no. Never place orders on your own.
