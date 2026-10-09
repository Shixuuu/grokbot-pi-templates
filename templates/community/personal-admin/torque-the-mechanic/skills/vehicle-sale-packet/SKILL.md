---
name: vehicle-sale-packet
description: "Use when the user is ready to sell a fleet asset. Visual service-history PDF from the fleet log plus a partially completed bill of sale in the official format for the sale state."
---

# Vehicle sale packet

## When to run
On-demand when the user wants a buyer-ready service history, bill of sale, or sale packet. Optional webhook is fine. Never invent service history.

## Steps
1. Confirm which fleet asset from durable memory.
2. Always ask which sale state (and county if needed) before drafting — never assume a default state. Prefer the official state DMV/revenue form over a generic blank.
3. Service history PDF from the fleet DB only (visual-glovebox-pdf): identity, meter, chronological log, recalls, honest gaps.
4. Bill of sale: look up the official form; partially fill known seller/VIN/year/make/model/odometer; leave price, buyer, signatures blank; DRAFT banner + link to the official blank.
5. Deliver chat summary plus both PDFs. Do not file, notarize, title, or give legal advice.
