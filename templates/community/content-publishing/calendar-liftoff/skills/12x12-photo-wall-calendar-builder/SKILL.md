---
name: 12x12-photo-wall-calendar-builder
description: "Use this when someone wants a custom, print-ready 12x12 wall calendar PDF built from a theme, subject, or year, and then wants help finding a printer and ordering a single copy."
---

# 12x12 photo wall calendar builder

Turn a short prompt (a theme, a subject, a year, a style) into a print-ready 12x12 inch wall calendar PDF, then help order one printed copy.

## 1. Brief (ask only what you can't infer)
- Theme or subject, and the calendar year (default: next year).
- Week start (Sunday or Monday), which country's holidays to show (default: the user's country), and the cover title text.
- Whether it's just for personal use or for sale. Selling changes which photo licenses are acceptable.
- Their own photos, or photos you find for them?

## 2. Photos: one for the cover and one per month (13 total)
- Resolution: 12 in at 300 DPI plus bleed is about 3,700 px per side. Only use images whose square crop is at least that big. Never upscale; a softer, bigger original beats a sharp small one.
- Rights: prefer public-domain photos (for example, government agency archives) and CC BY / CC BY-SA. Skip anything marked non-commercial if the calendar might be sold. Record the title, creator, license, and source URL for every photo in a CSV, and add a credits page.
- Watch for trademarks: avoid building the cover title or branding around someone else's trademark, and flag visible logos.
- Show the user a contact sheet of the 13 picks before building.

## 3. Build the PDF (Python on the computer: reportlab for layout, Pillow for images, poppler for checks)
- Page order, 26 pages: cover, then for each month a full-bleed photo page followed by a date-grid page, then a credits/back page. Check the printer's own page count and order rules first.
- Size: 12 x 12 in trim plus bleed. Printers differ (for example 12.25 in with 0.125 in bleed, or about 12.29 in), so use the chosen printer's exact page size. Keep all text at least 0.5 in inside the trim so it clears trimming and the binding holes.
- Grid page: large month title, weekday header, day numbers, holidays marked, and small previous/next-month minis. Use vector text.
- Color: RGB with sRGB photos unless the printer asks for CMYK. Bake gradients into the images instead of using PDF transparency.
- Verify with pdfinfo (page count, page box sizes), render a few pages at low DPI to eyeball them, check file size against the printer's limit, and confirm every placed photo is at least about 300 effective DPI.
- Deliver the full PDF plus a small preview PDF or contact sheet in chat.

## 4. Find a printer
- Search current print shops that accept a customer-supplied PDF for a 12x12 wall calendar and will print a single copy (many have 25-copy minimums or don't offer 12x12 at all).
- Compare paper and finish, binding, published PDF specs, price for one copy, promo codes, shipping cost and speed, and total delivered cost. Give a short recommendation with links.
- Re-export the PDF to the winner's exact specs (page size, bleed, color mode).

## 5. Order (the user stays in control)
- If an account is needed, fill the non-secret fields and let the user type their own password through a secure form. Never ask for it in chat.
- Upload, choose one copy plus paper and binding, enter the shipping address the user confirms, apply any promo code, and go only as far as the page showing the final total with tax.
- Read back the itemized total and delivery estimate, then get an explicit yes before any payment. Payment itself is the user's step.
