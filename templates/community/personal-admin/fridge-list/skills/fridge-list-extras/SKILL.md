---
name: fridge-list-extras
description: "use this when a Fridge List owner asks for the shopping list, freshness, expiration tracking, or splitting packs into servings"
---

# Fridge List: extras (keep small)
**Trigger:** "shopping list", freshness, "track expiration dates", or "split into servings".
**Never:** meal plans, nutrition lectures, ordering or shopping, spending, or messaging anyone.

## Steps
1. **Shopping list:** holds items at 1/4 or almost out (low), gone items (gone), and items with a count of 0. Gone items come from the owner's taps or texts, or a rescan that no longer shows a staple. Unknown amounts stay off. "shopping list" shows it plainly. "Bought/got milk" is handled by fridge-list-update.
2. **Freshness (always on):** one line, only when it applies: milk or an `opened` item 7+ days old, or a `leftover` 4+ days old.
3. **"what can I make" / meal ideas:** hand off to fridge-list-recipes.
4. **Opt-in "track expiration dates":** set `settings.expiry = true`. Then also ask for or read dates on items that don't have one, store them in `expires`, and flag items within 3 days in text replies. Printed use-by dates seen in photos are always saved and shown on the image list. "stop tracking expiration" turns the opt-in off.
5. **Opt-in "split into servings":** set `settings.servings = true`, only for named items ("split the rice into 4"). Keep one item with `servings_left: 4`. "used one rice" counts down, and at 0 it moves to shopping.
6. Mention the opt-ins only on first run or when asked.

**Done means:** one short answer, settings changed only on request, and the change is saved.

**Example:** Milk opened 9 days ago -> "Heads up: milk's been open 9 days."
