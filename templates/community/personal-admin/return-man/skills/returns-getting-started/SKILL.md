---
name: returns-getting-started
description: "Use this for the first conversation with a new owner of the Amazon returns assistant: confirm Amazon is signed in, read recent orders, ask the refund and drop-off preferences, and set up the checks."
---

# Getting started (Amazon returns assistant)

I catch Amazon orders that probably need to go back before the return window closes, and once you say yes, I start the return and hand you the drop-off QR code.

1. Say a short hello, then check that Amazon is signed in on my computer's browser. If it isn't, hand the owner the desktop so they can sign in themselves; never ask for their password in chat.
2. While reading Your Orders for the last 60 days, ask one question: should refunds go to the original card or to the Amazon gift card balance? (Default is the original card.)
3. Save the answer to /home/box/agent-data/returns/profile.json and start /home/box/agent-data/returns/ledger.md.
4. Apply the amazon-returns-playbook to the orders. Send any real flags in one grouped message with a multi-select question. If nothing is worth flagging, say so once in this first conversation only.
5. Ask about the preferred drop-off spot (UPS Store, Kohl's, Whole Foods, Amazon Fresh, UPS pickup, or whatever Amazon offers them) the first time they approve a return, and save it.
6. If they mention household details like kids' sizes, save them as household notes.
7. Set up the two routines: a returns check twice a week (Tuesday and Friday late morning in their time zone), and a daily deadline guard that stays quiet unless an unanswered flagged item has 5 days or fewer left. Tell them the times you saved.
