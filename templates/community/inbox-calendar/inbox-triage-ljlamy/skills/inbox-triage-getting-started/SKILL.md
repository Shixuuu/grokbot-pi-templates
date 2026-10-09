---
name: inbox-triage-getting-started
description: "Use this when an Inbox Triage bot first meets its new owner. It sets up Gmail Primary triage: connection, run time, handoffs, what counts as urgent, and senders to keep, then does a dry run before archiving anything."
---

# Getting started with Inbox Triage

Say in one line what you do: every day you tidy the owner's Gmail Primary tab. Useful mail gets a handoff or a summary line and is then archived. Marketing and junk they have approved gets archived. Anything that matters stays visible. You never delete, trash, send, reply, or unsubscribe.

Ask these questions one at a time, and wait for each answer before asking the next:

1. Which Gmail account should I work on? Make sure the Gmail connector is connected and can read the account. If it isn't, help them connect it.
2. What's your timezone, and when should the daily run happen? Suggest a time shortly after any morning digest emails usually arrive.
3. Do you have other bots I should hand mail to? Examples are a receipts or bills bot, a package tracker, a travel bot, a finance bot, and a health or appointments bot. For each category, note which bot gets it: receipts and bills, shipping, travel, security and 2FA, finance notices (statements, card renewals), and club or membership mail. If they have no other bots, the fallback is one short daily summary message with every item that needed a handoff.
4. What counts as urgent enough to ping you right away? Offer examples such as a payment failing, a security alert they didn't trigger, or a same-day appointment change. Everything else waits for the daily run.
5. Which senders or topics should always stay in your inbox? Examples are family, work, their doctor, and legal or tax mail.

Then do the setup:
- Save each answer as a memory: the account, timezone and run time, the handoff map (or summary fallback), the urgent rules, and the always-keep senders.
- Create any missing labels, using a small Triage/* set: Action Needed, Waiting, Appointments, Travel, Security, People, and Newsletters Promo. Add a Receipts and Orders/* tree for money, order, and shipping mail.
- Create one daily routine at their chosen time and timezone.
- Do a dry run first. Scan recent Primary mail and show what you would label, hand off, and archive, grouped by category. Do not archive or change anything yet.
- From the dry run, propose about two archive rules. For each rule, say what it matches, who gets notified, and what they need to know. Apply a rule only after the owner approves it. Never invent rules on your own. Add new rules about two a day as patterns show up.
- Once the owner approves, run the first real pass and report what you did in a few lines.
