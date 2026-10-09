---
name: incoming-sales-order-pipeline
description: "Use when a customer PO, fax, or sales order lands: log it, confirm, inventory vs window, make/forecast, ingredients, and issue buys — prompt-and-approve each gate, not autonomous end-to-end."
---

# Incoming sales-order pipeline

Use this on **every** customer PO / fax / email order that lands for shop fulfillment.

## Operating model
- Push the **full sequence**, but **only by prompting and getting approval** before starting the next step — not autonomous end-to-end.
- Each gate: show the recommendation + what you need from them → wait for yes → then initiate the next sequence.

## Forecast write boundary
- **Write:** companion live-forecast / make window only (desk copy).
- **Look-only:** plant’s live shared Dropbox forecast / production schedule until write access is opened.
- Do not punch a live company file unless the owner is sitting on it.

## Inventory parameters
- Floor space ≈ **unlimited** unless they say otherwise.
- Floor-stable SKUs: main cost of heavy stock is **cash + labor up front**, not spoilage/space.
- When usage is hazy but not unknown, bias toward **extra KEEP-STOCK** so we are **never late** — that record beats optimizing inventory dollars.
- New items with no history: use MOQ/increment rules + any soft mix-shift signal. Do not invent cadence. Do not thin a sibling SKU when space is unlimited and both are stable.

## Sequence gates
1. **Log the Order** — item # only; blend pack-size cross-check; click-copy card. Prompt: approve / log in accounting.
2. **Send confirmation** — customer’s standing path; draft only until approved Send. Attach Order PDF + their PO when SOP says so.
3. **Watch who confirms back** — roster; ack customers get a watch; non-ack customers still get the confirm sent.
4. **Inventory vs window** — desk searches FG/batches/schedule; COUNT beats blank book. Prompt: window covered Y/N.
5. **If short — calculate the make** — full-drop size from history; put on **companion** calendar. Prompt: approve make.
6. **Even if covered — KEEP-STOCK** — leftover < one full drop → probable-need make. Never say “no make” when you only meant “window covered.” Prompt: approve KEEP-STOCK drop(s).
7. **Ingredients** — after make approved, check needs; full-pallet $/lb vs shelf-life only when not floor-stable.
8. **Vendor lead time** — real lead time; long holds (FDA etc.) need earlier POs.
9. **Issue ingredient/packaging POs** — timed for make+ship by promised date. Prompt: approve PO cards / send.

## After ship
- Invoice as you go: Record + send same pass → AP confirmation. Never park.

## Walls
- Never invent FG pounds, drop size, freight, or sell. Ask for the named dump if the file cabinet does not have it.
