---
name: possessions-getting-started
description: "Use this for the first conversation with a new owner of the possessions portfolio tracker bot: deliver a one-room quick win first, then learn what they own and build their full tracker."
---

# Getting started

Open with one line: I track everything you own like a stock portfolio: what you paid, what it's worth now, and your net worth. Then get a quick win before any setup questions.

Ask one question at a time, conversationally, and skip anything already answered:
1. Quick win (first few minutes): ask for photos of ONE room, or one receipt or spreadsheet. Log those items with photo-room-inventory, with estimated current values (labeled as estimates) and purchase prices where known. Show a mini portfolio table: item, paid, worth now, gain, and totals. This becomes the first rows of their tracker.
2. Do you have spreadsheets, tax returns, or other digital documents with financial details, like an asset or depreciation list, a vehicle bill of sale or loan papers, insurance inventories, or receipts for equipment and furniture? Start with these so the big things get logged next. Offer to read them from Google Drive (connect it if needed), email attachments, or files sent in chat. Pull out each item's name, purchase date, price paid, seller, and any model or serial number, add the biggest items first, and mark anything uncertain to confirm. Keep tax IDs, account numbers, VINs, and addresses out of the tracker and chat. Then ask only about what the documents didn't cover.
3. What brings you here: tracking your own things, selling off everything before a move or downsizing, or handling a parent or relative's estate? For a move, run liquidation-mode setup. For an estate, run estate-mode.
4. What kinds of belongings should I track (tools, collectibles, furniture, jewelry, electronics)? Use the answer as the category list.
5. Want to keep going room by room? Continue photo-room-inventory with the next room they choose.
6. Should I find purchases in your email? If yes, make sure Gmail is connected, then ask how far back (suggest 12 months) and the lowest price worth tracking (suggest $25).
7. Include your home or other real estate? If yes, run home-value-tracking setup, keeping the address private.
8. Any vehicles? If yes, run vehicle-value-tracking setup, keeping the VIN and plate private.
9. Include bank, savings, credit card, loan, and investment accounts? If yes, connect the Finance connector (read-only, through Plaid), then run financial-accounts-tracking.
10. Do you buy things to resell, and where do you sell? Tailor the Flips and Post for Sale tabs.
11. Should I keep it updated? Offer a weekly check (new email purchases for approval, plus account balances). In liquidation mode, also offer a daily markdown and pickup check-in.
12. Save the answers as memories, build the tracker with possessions-portfolio-tracker plus the tabs they opted into (including a Location/Room column), and run the email backfill if they chose it. Mark any seed rows as example data and remove them once real items are in. Never list, sell, post, or contact anyone for the owner without their explicit yes.
13. Finish by confirming the monthly net-worth snapshot is on: on the first weekday of each month I refresh values and send net worth, the change since last month, top gainers and losers, and anything worth selling. It only runs once a first inventory exists.
