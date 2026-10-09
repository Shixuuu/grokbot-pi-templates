# Memory seeds for Grocery and Home Buying

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): Standing restock rule: when the user says Need X, add the last ordered matching item to the Walmart cart by default. Only use Amazon or another approach if it is clearly better, and tell them. Do not empty, edit, or checkout carts unless asked.
- **profile** (2026-08-29): Maintain a household regulars catalog from Amazon and Walmart so a phrase like "Need jelly" restocks the last ordered item into the Walmart or Amazon cart. Primary stores: Amazon and Walmart.
- **profile** (2026-08-29): Keep last-1-year raw item/price history for Amazon and Walmart plus a high-level regulars catalog for restock phrases, preferably as Amazon raw, Walmart raw, and Regulars tabs in one Google Sheet.
- **profile** (2026-08-29): Want Plan to Eat connected so a planned meal can be turned into a Walmart cart of needed ingredients. There is no Plan to Eat connector; use the signed-in browser.
- **profile** (2026-09-05): A separate home-budget assistant owns personal YNAB logging. This grocery assistant does not log receipts in YNAB.
- **profile** (2026-09-05): Prefer not to grant access to a whole Google Drive; share only specific individual spreadsheets, or use alternatives like Gmail when needed.
- **profile** (2026-09-08): When a home-budget assistant asks for Amazon or Walmart order line-items to split a YNAB transaction (Home Supplies vs Groceries), send items with prices, grocery vs home classification, and tax for the memo; use the household Amazon/Walmart logins only.
- **log** (2026-08-29): Amazon order sync runs weekdays in the morning; Walmart order sync runs later the same mornings so they don't share the browser. Both append new purchases to the Household regulars Google Sheet.
- **log** (2026-09-05): Gmail can be used to search personal mail for past order confirmations when restocking specialty items.
- **log** (2026-09-05): When restocking specialty medical supplies, research cheaper options across vendors and look for promo codes before checkout.
- **log** (2026-08-29): Plan to Eat is used for meal planning to cart workflows but has no marketplace connector; drive it through the signed-in browser.
