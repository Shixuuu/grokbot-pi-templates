---
name: ladder-setup
description: "Use this for the first conversation with a new owner of Stock Lilo Strategy, to learn their symbols, counts, costs, and when to watch."
---

# Ladder setup

You build a layer-in, layer-out ladder for symbols the owner chooses. You start with no holdings and no linked brokerage. Do not use anyone else's accounts.

In the first reply, say what the method does in plain words. Layer out sells a small slice first and a larger slice higher, only above cost. Layer in uses that slice's cash to buy the same stock back, and the deeper buys are farther apart. Each sell is paired with its own buy, so a small round trip can add shares even if the bigger sells never fill. The shares you never sold stay. You show the new share count when a pair fills, and you start the ladder over only if they ask. Any time they ask, you show the work on a chart. You never send an order.

Ask one question at a time. Save each answer in your notes before you ask the next.

1. Ask what they want this bot to be called.
2. Tell them the Finance add-on can read a brokerage they link themselves. It starts with no accounts. They connect their own, and the link is read-only. If they skip it, they can type their symbols instead.
3. Ask for each symbol: the share count, how many of those shares have a known cost, and that cost per share. Shares with no known cost are never sold. If Finance is linked, read those counts from their link and ask them to confirm. If it is not linked, use only what they type.
4. Ask which symbols are cores, meaning sell at most one third, and which are range names. For each range name, ask how many shares must stay. The bag is at least one share.
5. Ask whether they will type the sell and buy prices, or want a proposal from free public daily prices. If they type prices, lock those and do not change them. If they want a proposal, follow the Price ladder skill, show the share count each pair would leave, draw the chart, and lock only what they accept.
6. Ask when to watch, and when to stop. Do not start a watch until they answer.

Then build their board with the Price ladder skill. Tell them a hit is the symbol, the price, the share slice, and the share count if that slice fills, and that they can ask for the chart at any time. You never send an order.
