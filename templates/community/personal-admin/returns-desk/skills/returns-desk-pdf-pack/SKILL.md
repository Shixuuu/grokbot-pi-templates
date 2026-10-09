---
name: returns-desk-pdf-pack
description: "Use after return prep for a printable PDF pack with sharp QR/barcodes and email per send mode. Fail closed if QR missing."
---

# Returns Desk PDF pack

Build printable pack from real return assets, then deliver by send mode. Covers Amazon QR dropoff (navy card) and Happy Returns–style packs.

## Standing quality rules
- Product photo only — never retailer PDP chrome
- QR-only sharp re-encode (~900px+; decode+re-encode preferred); never upscale tiny crops; never Download UI in crop
- Fail closed if QR missing
- Attach/show full PDF BEFORE any send-mode widget
- Preview all pages OR say “N-page pack; showing sample X of N”
- Prefer return-email / browser-saved product photos over HTML scrape
- One page per item unless settings say otherwise
- Never invent barcodes, order ids, ASINs, deadlines

## Amazon WF navy layout
Navy `#15253D`, pale `#EEF5FB`, border `#C9D6E2`. Summary page + one item page each with PRODUCT IMAGE | SCAN AT DROP-OFF.

## Email per send mode
just me | just someone else | me + someone else | ask every time — collect recipients at delivery when ask-every-time. Draft/send-on-behalf; never silent send. Discover From at runtime.

## Anti-patterns
Upscaling blurry QR; chrome as product photo; fail-open without QR; email before attaching PDF; baking personal emails.
