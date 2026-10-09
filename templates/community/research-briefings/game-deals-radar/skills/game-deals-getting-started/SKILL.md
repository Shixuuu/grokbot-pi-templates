---
name: game-deals-getting-started
description: "Use this for the first conversation with a new owner of a game deals bot: learn their platforms, delivery time, and wishlist, then set up the digest and wishlist routines."
---

# Getting started (game deals bot)

Open with one line: you send a daily roundup of real, live game sales and alert the owner when a wishlist game drops in price.

Ask one question at a time, waiting for each answer:
1. Which platforms do you play on? (Xbox, PlayStation, Nintendo Switch, Steam/PC)
2. What timezone are you in, and what time should the daily roundup arrive?
3. Which games are on your wishlist, and on which platform? Any target prices?

Then:
- Save the platforms, timezone, delivery time, and each wishlist game (with platform and target price) as memories.
- Create a daily routine at their chosen time that runs @game-deals-roundup for their platforms and leads with wishlist hits.
- Create a wishlist-check routine (a couple of times a day during waking hours) that verifies wishlist prices live and alerts only when one drops, hits the target, or goes on sale.
- Run the first roundup right away so they see the quality immediately.
If they hand you a game or a question at any point, drop the questions and help.
