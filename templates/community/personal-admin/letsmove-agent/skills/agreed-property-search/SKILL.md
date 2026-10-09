---
name: agreed-property-search
description: "Use when searching homes or properties in agreed countries and areas against the user’s saved preferences, when running first-time property-search setup, or when setting up recurring or on-demand email digests of matching listings."
---

# Agreed property search

Search live property listings only against preferences the user has already agreed. Email matches to their chosen mailbox on the cadence they asked for.

## First-time installation or setup

On first conversation, or whenever memory has no property preference set, run setup before any search. Agree and save each item to memory as it lands. Do not invent filters.

Collect, in a short conversational order (skippable only when the user already answered earlier):

1. **Countries** in scope, then **areas or regions** within them
2. **Property types** allowed and excluded
3. **Must-haves:** beds, baths, garage, EPC, price ceiling or band, and any other hard filters
4. **Status rules** (for example exclude under offer, sold, sold STC, reserved, withdrawn)
5. **Portals** for those countries (national boards plus regional solicitor portals when relevant)
6. **One sending mailbox** — connect and authorise a single email connector if missing
7. **Destination email** for digests
8. **Cadence:** on demand, named clock times, or every N hours (default waking hours unless they explicitly include nights or weekends)

When setup is complete, create the matching routine(s) for scheduled or every-N-hours delivery, confirm what you saved, then run one first search if they want.

Keep separate preference sets as separate named briefs. Do not mix two searches in one run.

## Later runs

Load the active preference set from memory. If something critical is still missing, ask once and save it. Then search and deliver as below.

## Mailbox

1. Confirm one sending mailbox is connected and authorised.
2. Confirm the destination address the user selected at setup.
3. If auth fails twice on send, pause any related routine and tell the user to reconnect that mailbox. Do not keep failing silently.

## Search run

1. Use only the active agreed preference set for this run.
2. Query the agreed portals with live search URLs. Open listing pages and verify price, beds, baths, garage, EPC, status, and other must-haves on the page.
3. Do not invent listings, prices, features, or EPC ratings. Skip anything that fails a filter.
4. Diff against the last saved baseline for that preference set: **NEW**, **CHANGED** (material price or status), **GONE** (only within current geographic scope), **STILL_LIVE**.
5. Write a dated report and a small summary JSON under the workspace for that run.

## Delivery

- **Quiet when nothing changed:** if NEW=0 and no material CHANGED/GONE the user cares about, do not email and do not chat-ping.
- **When there is something to send:** email the digest to the selected address from the set-up mailbox. Subject names the preference set, match count, and date. Each row needs address/area, type, key filters, price, status, portal, and URL.
- **Chat:** when an email went out, tell the user once, briefly, with the count and the best few links.
- **Cadence:** honour what was agreed at setup (on demand, scheduled clock times, or every N hours).
- Cap noise: one digest per run; do not re-notify the same unchanged NEW list on the next tick.

## Do not

- Widen countries or areas beyond the agreed set
- Treat out-of-scope geographies as GONE after a scope shrink
- Email or chat when the run found nothing actionable
- Store or request mailbox passwords in chat; use the connector’s secure auth flow
- Search before first-time setup has agreed countries, areas, must-haves, mailbox, destination email, and cadence
