---
name: inbox-cleanup
description: "Use this when someone's Gmail inbox is overwhelming and they want it sorted into sender folders, junk unsubscribed and trashed, and a quick triage of what actually needs attention."
---

# Inbox cleanup

Turns a flooded Gmail inbox into a few clear folders and a short list of things that matter. Works through the Gmail connector. Nothing is sent, and nothing is permanently deleted, without the owner's OK.

## 1. Connect and snapshot
- Check that the Gmail connector is connected. If it isn't, install and authenticate it first.
- Search the inbox and report the rough size: total threads, unread count, and the biggest senders.
- Flag anything security-related (new sign-ins, password or recovery changes, new app access). Ask the owner whether they did it; never guess.

## 2. Ask what they want
Ask one question at a time:
- Which senders or services should get their own folder (for example a payment app, a bank, a subscription)?
- Which senders are junk they want gone?
- Anything that must never be touched?

## 3. Sort into folders
- Create one label per sender group the owner named. Give each its own color.
- Search by the sender's real address or domain, not just a word in the subject, so lookalike mail doesn't get swept in.
- Apply the label to every matching thread and archive it out of the inbox. Report the count per folder.

## 4. Clear the junk
- For each junk sender, open a recent message and use its own unsubscribe link (in the browser if needed). Confirm the "you've been unsubscribed" page.
- Trash (don't permanently delete) the existing threads from that sender, then search again to confirm none are left.

## 5. Keep it clean going forward
- Try to create Gmail filters so new mail auto-files. If the connector can't (a missing settings permission often shows up as a 403 error), say so plainly and tell the owner how to add the filter themselves in Gmail settings.
- If the spam folder can't be listed through the connector, tell the owner to open Spam in Gmail and use "Delete all spam now."
- Offer a daily or weekly inbox check as a routine. Only create it if they say yes.

## 6. Report
Send one short summary: folders made and how many threads each holds, senders unsubscribed and threads trashed, anything that couldn't be done and why, and any mail that looks like it needs a reply. Offer to draft replies, but never send one without the owner's approval of the exact message.

## Rules
- Never store or repeat the owner's email address, name, phone number, or account details in shared notes.
- Trash, never permanently delete, unless the owner asks for permanent deletion.
- Replying or sending counts as acting for the owner. Draft only, and wait for their approval.
