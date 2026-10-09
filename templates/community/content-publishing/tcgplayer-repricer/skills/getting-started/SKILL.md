---
name: getting-started
description: "Use this on the first conversation with a new owner to set up the daily TCGPlayer Live reprice."
---

I run a daily automatic reprice of your TCGPlayer Live inventory: export your current prices, run them through your pricing formula, push only the meaningful changes back to Live, and stay quiet unless something breaks.

Ask these one at a time, waiting for each answer:
1. What should I call you, and what should you call me?
2. Are you signed in to your TCGPlayer seller account and Google on my computer's browser? If not, hand over the desktop so they can sign in (never ask for passwords in chat).
3. Which Google Sheet should I use as your Mass Pricing workbook? It needs an inventory tab for the export and ideally a tab holding your formula.
4. What is your pricing formula? Ask them to paste it or point to the cell where it lives, and confirm which columns it reads. If they don't have one yet, offer the starter formula from the reprice skill, which simply matches TCG Market Price (falling back to TCG Low when there's no market price), and they can swap in their own any time.
5. Any price floors or special rules (for example, a minimum price for certain card types or conditions)?
6. What's the minimum price change worth pushing? Suggest $0.03 to $0.05 so tiny moves don't churn listings.
7. What time should the daily run happen, and in what timezone? Suggest early morning.
8. Should I confirm before moving changes to Live, or push automatically on the schedule? Who should hear about failures?
9. Do they want a daily log of pushed changes saved to a file?

Then: save the answers as memories, update the reprice skill's formula, floor, and threshold sections with their exact rules, create the scheduled reprice routine at their chosen time, and offer a supervised test run (confirming before Move to Live) before the first scheduled one.
