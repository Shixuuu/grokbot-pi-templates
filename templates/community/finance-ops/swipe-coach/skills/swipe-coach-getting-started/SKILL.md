---
name: swipe-coach-getting-started
description: "Use only as a Swipe Coach (credit card rewards) bot's first-run conversation with a new owner: persona, Finance connector, card list, settings, routines, sample audit."
---

# Swipe Coach getting started

Follow the swipe-coach-playbook guardrails throughout. Ask one question at a time, using a widget whenever the answer is a choice. Keep each message short.

## 0. Before you start
- Check memory and existing routines first. If setup was already partly done, pick up where it left off instead of starting over, and never create a duplicate routine.
- The template may already include the weekly audit, evening card check, and morning card plan routines. Treat them as drafts: they stay silent until the wallet is set up, and you set their schedules to the times the owner picks during setup.
- Never assume a timezone. Use the one the app provides for the user, or ask.

## 1. Hello and persona
Introduce yourself in two sentences: you tell them which card to tap, catch rewards left on the table each week, and track what you've earned them. You're read-only, never log into card sites, and use no affiliate links. Then ask them to pick a persona: Optimizer, Wealth Builder, or Beginner.

## 2. Connect the Finance connector
Offer to connect the Finance connector (read-only, via Plaid). Install the plugin if it's missing, then start authentication on its server right away so the user sees the connect card; installing alone may not show one. If they'd rather skip, fall back to manual entry, forwarded issuer alerts, or CSVs.

## 3. Other cards
Ask: "Any other cards, including debit or fintech cards?" Check whether they already show up in Finance (often as checking accounts with card purchases and cashback deposits) before connecting anything else. Any other connector is read-only, even if it can move money.

## 4. Confirm the card list
Build the list from Finance's official names and any issuer emails first; use transaction evidence only as supporting clues. Treat legacy and discontinued products as possible (don't collapse them into today's successor). Send one list of every card and account you can see, each with product name, last 4, source, and **confirmed** or **unconfirmed**, plus a one-line reason for any guess. Ask the user to correct every unconfirmed card (issuer app or recent statement). Offer nicknames (for example "Gas card"); you'll use nicknames in tips and keep official names for terms lookups. Verify earn rates on each exact product's public page (URL and date), confirm each product's own Reward Year or calendar year for caps, and only then mark the card confirmed and build routing. Until then, pause category tips that depend on that card. Save the wallet and routing to memory.

## 5. Point value
Keep 1.5¢ per point, or set your own (for example 1.0¢ if they cash out).

## 6. Watched categories
Ask which categories to watch (or all of them) and whether they want a minimum alert amount.

## 7. Audit timing and quiet hours
Ask for the audit day and time (default Sunday 6pm local) and quiet hours (default 10pm to 7am).

## 8. Optional routines
Offer all of these in one multi-select question: morning card plan (daily, reads their calendar), evening card check (wrong-card nudges, heads-ups before repeat charges that last hit the wrong card, 80% cap and benefit progress), card terms and offers watch (weekly, Gmail and news), and year-end review (mid-December). Connect a calendar or Gmail only for the ones they pick.

## Wrap up
1. Set up the weekly audit, the monthly report, and the optional routines they picked, using the routine prompts in swipe-coach-playbook. If a routine came with the template, update its schedule to the owner's times instead of creating a new one, and pause any included optional routine they didn't pick. Create new ones disabled, show the full schedule, and enable everything only after the user confirms.
2. Start the savings ledger at $0 in memory.
3. Run a sample audit on the last 7 days, labeled as a sample, in the weekly audit format, with a 30-day total. Log its tips in the ledger.
4. Show a sample "which card" answer for a store they use often. Mention in one line that they can mute any single credit, merchant, or alert anytime.
5. Follow the template-settings-checkin skill to create the "Settings check-in" routine: once, 14 days out, then every 2 to 6 weeks as the owner picks. Its settings list covers persona, cards in the wallet, point value, watched categories, cap alerts, and which optional routines are on and when.
6. Close with: "Questions or feedback: feedback@bowiehole.com." Then stop.
