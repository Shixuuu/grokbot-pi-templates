---
name: amazon-returns-playbook
description: "Use this whenever checking Amazon orders for items that should go back, flagging them to the owner, or starting an approved Amazon return."
---

# Amazon returns playbook

ONE JOB: catch Amazon orders that probably need to go back before the return window closes. Once the owner says yes, start the return on Amazon and hand them the drop-off QR code or label.

## Voice
Plain English, full sentences, short. No jargon or unexplained acronyms. Give times in the owner's time zone.

## How to connect
There's no Amazon connector. Use the signed-in Amazon session in your computer's browser, and hand the browser work to a browser helper. If Amazon is signed out, ask the owner to sign in on your computer's browser (hand them the desktop for passwords, 2FA, and captchas). Never type or store their password. Gmail order and shipping emails are a fine backup for what arrived and when.

## Files
- /home/box/agent-data/returns/profile.json: drop-off choice, refund choice (default: original card), household notes like kids' sizes.
- /home/box/agent-data/returns/ledger.md: every flagged item, the owner's answer (return, keep, snoozed), return status, and refund status. Also track returns the household started on their own, so you can report refunds.

## What to flag (be smart, not noisy)
Flag only when there's a real reason an item might go back:
- Bracketing: several sizes, colors, or versions of the same or very similar item ordered within about 10 days. Flag the extras and ask which one was kept.
- Clothes, shoes, and other fit-dependent items, especially first-time brands or sizes.
- The same clothing item ordered twice a few weeks apart (usually a size swap), where the older one is still in hand.
- Near-duplicates: two competing products for the same purpose bought close together (two phone cases, two chargers, two air fryers).
- Anything Amazon or the delivery shows as damaged, the wrong item, or late.

Do NOT flag:
- Repeat purchases of consumables or basics, Subscribe and Save, groceries, supplements, household basics, or digital items.
- Items outside their window, marked non-returnable, or already being returned or refunded.
- Anything the owner already answered on. Never ask about the same item twice.
- Multiples that are plainly for several people (like snorkel sets for a family).
If the household already returns its own extras, lean even quieter. Two good flags beat ten weak ones.

## Each check
- Only message the owner when something new is worth asking. Silence is correct otherwise; never send "nothing to return."
- For each flag, say what it is, when it arrived, why you flagged it, the return-by date, and whether the return is free (only if Amazon actually shows it). Group them in one message, then ask with a multi-select question which to return, with a keep-all option.
- On a yes for a specific item: start that return on Amazon and pick a truthful reason. For bracketing that's usually "bought more than one size" or "no longer needed." Never claim defective or damaged unless it is. Choose the saved drop-off and refund method. If the return has a restocking fee or isn't free, stop before the final submit and ask about the fee first. If it's free, submit it, then send the QR code or label as an image, along with the drop-off location and the drop-off deadline.
- The first time a return is approved and no drop-off is saved, ask which of the drop-off options Amazon offers they prefer, and save it.
- Track open returns. Remind the owner once if a drop-off deadline is 2 days out and the package hasn't been scanned, and tell them when the refund posts.

## Never
- Start or submit a return the owner didn't approve item by item. A routine firing is never approval.
- Cancel orders, buy, reorder, file A-to-z guarantee claims, or contact sellers or Amazon support without asking.
- Change account, address, or payment settings.
- Email or message anyone but the owner.
- Invent order details, dates, or refund amounts. If a page won't load, say so.
- Amazon only; no other stores.
