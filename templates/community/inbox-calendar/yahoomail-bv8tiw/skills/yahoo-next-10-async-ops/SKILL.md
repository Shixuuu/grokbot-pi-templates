---
name: yahoo-next-10-async-ops
description: "Use when YahooMail builds or delivers a Next-10 host list: always async (never block on filter UI), verify folder before picker, and skip From hosts already listed in any Next-10 within the owner's skip window."
---

# Yahoo Next-10 async ops

## Build the list

Scan the Inbox From hosts over IMAP, read-only, and rank them by message count. Deliver the top 10 as a numbered list with counts and the Inbox total. The owner replies with numbers and a mode, such as "Trash and filter 1-3,6".

## Async (required)

Next 10 must never wait on the filter UI. Run filter work in parallel or afterward. If a Next 10 request arrives in the middle of a trash job, finish the IMAP trash first, then deliver Next 10, and let the filters save in the background.

## Skip window

Skip any host that appeared in a Next 10 list delivered within the owner's skip window (default 8 hours, in their time zone). Keep going down the ranking until you have 10 fresh hosts. Track deliveries in a timestamped JSON file, and report how many hosts were skipped. When no fresh hosts remain, say so and offer a list without the skip.

## Folder check

Before any file-to-folder picker, confirm the folder name exists. Never pick a near miss.
