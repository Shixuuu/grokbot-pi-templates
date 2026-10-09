---
name: card-rewards-playbook
description: "Use this when setting up card rewards, refreshing a Link wallet, or choosing which card and booking path to use before a purchase."
---

# Card rewards playbook

Use this on first setup, whenever the wallet changes, and before paying for a purchase.

## 1. Retrieve the user's cards

Read the cards and bank accounts in the connected Link wallet. Summarize each as brand, nickname, last four, and whether it is the default. Never show full card numbers. If Link is not connected, ask to connect it before continuing.

If the wallet has changed since last time (new card, removed card, new default), treat this as a refresh and redo the rewards lookup for anything new or unknown.

## 2. Identify rewards for each card

For every card, look up the current official rewards. Capture earn rates, as applicable:

- Base earn rate on all other spend
- Bonus categories and multipliers
- Bank or issuer travel portals and what they pay (for example 5x flights or 10x hotels when booked in-portal)
- Other issuer earn properties (entertainment, shops, dining portals)
- Redemption value (cash vs points vs miles) so two cards can be compared in dollars
- What does not earn (cash-like transactions, gift cards, etc.)

Prefer issuer pages over recaps. Note the date of the lookup. Keep fees, perks, credits, and subscriptions for internal comparison if they change which card wins; do not present them in the rewards summary.

## 3. Present earn rates, then the playbook

Clearly show what each card earns across categories. Keep this concise and rewards-only: multipliers and cash-equivalent earn, nothing else. Do not mention perks, annual fees, statement credits, lounge access, subscriptions, or other benefits.

Do this as a readable per-card breakdown, not a buried list. Cover, as applicable for cards the user actually holds:

- Everyday / all other spend
- Groceries
- Dining
- Gas
- Transit
- Streaming
- Direct airline and hotel bookings
- Issuer travel portals (flights, hotels, cars, vacation rentals, activities)
- Issuer extras (entertainment, shops)

Immediately after the rewards summary, show the proposed playbook. Do not wait for them to confirm the rates first.

## 4. Draft when to use which card

Right after the category earn summary, build a proposed playbook. For each common buy, name one primary card. Always consider:

- Categories: groceries, dining, gas, transit, streaming, etc.
- Domains / merchants: booking on the airline or hotel site vs Amazon vs a random store
- Issuer portals: Capital One Travel, Chase Travel, Amex Travel, Robinhood travel, and any other portal tied to a card the user actually holds. Compare portal earn plus any annual travel credit against buying direct on another card.
- Exceptions: statement-credit redemptions that pay less, foreign transaction fees, category caps already used, a portal fare that is not the same ticket, and cases where paying with a one-time Link virtual card would miss issuer-portal earn because the merchant would not see the real card.

Default everyday spend should be the best uncapped cash-equivalent rate unless a portal or category clearly wins.

When presenting the draft or a purchase pick, name the single best option. Do not recommend alternatives or justify the choice unless the top options are close.

## 5. Verify with the user before saving

Show the draft playbook (in the same turn as the earn summary) and ask them to confirm or correct it. Explicitly ask about:

- Category overrides they care about
- Merchant or domain exceptions
- Which portals they will actually use
- Credits or benefits already used this year
- Any card they do not want charged

Do not save rules they have not verified. After they confirm, store the playbook in this assistant's memory (not shared account-wide unless they ask). Keep last-four identifiers only.

## 6. Use it on every purchase

Before paying:

1. Re-read the saved playbook and current Link cards.
2. Price the item at the merchant and, when a held card has a relevant portal, price that portal too. Still price that portal even if a prior run hit a login wall, timeout, or failed lookup.
3. Pick one path (merchant + card). Say that pick. Do not recommend alternatives or provide a justification unless the top options are close.
4. Get a go-ahead on a real charge.
5. If the winning path requires charging a specific issuer card (portal 5x/10x), do not substitute a Link virtual card without telling them they would lose that earn.

**Past failures do not exclude a path.** A declined sign-in, login wall, canceled booking, failed lookup, timeout, skipped auth, or other blocker on a previous purchase does not remove that card, issuer portal, or merchant from later ones. This applies to every card and every portal, not one issuer. Each new purchase starts fresh: still evaluate every card and portal the playbook names. If the winning path needs a login this time, ask for it on this purchase. Do not silently fall back to another card because an earlier attempt failed. Only skip a card or portal when the user has verified they do not want that card charged or will not use that portal.

If they skip verification, do not invent a playbook. Use only verified rules plus a live lookup, and say what is still unverified.
