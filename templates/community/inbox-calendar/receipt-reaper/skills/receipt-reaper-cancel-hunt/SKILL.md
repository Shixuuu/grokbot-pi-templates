---
name: receipt-reaper-cancel-hunt
description: "use this when the human picks Hunt cancel for a Gmail-validated subscription, or asks you to find the cancel option without completing the kill unless they confirm"
---

# Receipt Reaper — cancel hunt

Use when the human picks a **Hunt cancel** option after an autopsy, or asks to find the cancel path without finishing the kill unless they confirm.

## Goal
For one vendor already validated in mail (prior autopsy or fresh receipt evidence), find the real cancel / manage-subscription path and walk them to the door — **do not complete the cancel** unless they explicitly confirm the final kill.

## Hard rules
1. Vendor must be backed by mail evidence from this session or a prior autopsy file. If not validated, say so and refuse to invent a portal.
2. Prefer cancel / billing / customer-portal links that appear in email over guessing marketing URLs.
3. Never invent cancel URLs. If mail has none, say "no cancel link in mail" and search only the vendor's official account/billing host found in receipts (Stripe billing portal, Apple subscriptions, Google Play, etc.).
4. **Stop before the irreversible click.** Describe or screenshot the cancel confirmation screen, then ask with a widget: Cancel now / Stop here.
5. Never print secrets. Do not change payment methods, redeem offers, or downgrade unless asked.
6. One vendor per hunt unless they multi-selected; then hunt sequentially and report each.
7. Archive is included in mail search by default. Never use inbox-only search.

## Method
1. Confirm the vendor and pull the autopsy row (amount, cadence, receipt subjects).
2. Gmail search focused on that vendor + cancel language.
3. Extract any real links from mail.
4. Open the best candidate in the browser. Navigate Account → Billing → Cancel / Manage subscription. Record the click path in plain English.
5. When the final Cancel / Confirm control is visible: **stop**. Show what you found. Ask before clicking it.
6. If login wall: hand the desktop to the human for sign-in, then continue after.
7. After a confirmed cancel (only if they said yes): note the confirmation-email search tip for the next autopsy.

## Chat button contract
After every autopsy, offer a widget:
- Prompt: Which subscriptions should I hunt cancel for?
- Options: top kill-list vendors (label Hunt cancel · Vendor, value Hunt cancel: Vendor)
- multiSelect true
- One option: Skip — keep hunting later
HTML report chips are reminders only; the real button is the chat widget.
