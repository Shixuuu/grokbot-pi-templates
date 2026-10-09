---
name: upload-a-teepublic-design
description: "Use this when uploading or publishing a merch design to TeePublic for the owner’s shop."
---

# Upload a design to TeePublic

Use this when publishing merch to TeePublic for this POD shop.

## Assumes
- Signed in to TeePublic in Chrome on this computer (owner’s seller shop).
- Artwork is a print-ready PNG.

## Artwork
- File must be at least **5000×5500** of **actual opaque pixels**. TeePublic ignores outer transparent padding when measuring size; a small graphic on a huge transparent canvas will fail or silently refuse Publish.
- Transparent PNGs are preferred for shirts only if the opaque artwork itself meets the size. Otherwise use a full-bleed composition.
- Do not overwrite leftover test drafts or already-live designs.

## Upload
1. Open https://www.teepublic.com and click **Upload Art** (new design, not an old edit URL).
2. Upload the PNG. In the file picker, type the full path (Ctrl+L) and click **Open**, not just Enter. Wait for the preview.
3. Fill title, description, main tag, supporting tags. Watch autocomplete (e.g. “teacher” can become “teacher gift”). Mature = No unless the art needs it (must click it; it does not stay default).
4. **Configure Other Products: leave ALL items checked** (tees plus hats, stickers, mugs, cases, and the rest) unless TeePublic still errors after you fix the product.
   - If publish alerts “you must choose a default color / sticker background / magnet background”, **set the defaults**. Do not uncheck the product.
   - Working defaults: T-Shirt/Tank/Crewneck/Long Sleeve/Kids = White; Hoodie = Oatmeal Heather; Baseball Tee = Black/White; Kids Hoodie = Natural Heather; Kids Long Sleeve = Black. Stickers/magnets: pick a background color (usually white or the design’s cream).
   - Only disable a product if it still errors after a default is set.
5. Check Terms. Click **PUBLISH** with a real click. Do not submit via injected JavaScript (stale tokens get “The Change You Wanted Was Rejected”).
6. Reload the design edit URL and confirm title + artwork persisted (look for MANAGE / Deactivate). Then check the owner’s public shop grid.

## Gotchas
- The form can wipe on reload; refill after artwork changes or a failed publish.
- Supporting tags widget is flaky; title, main tag, and publish still matter more.
- White/unstyled TeePublic pages: reload once or twice. If the page-level browser driver is down, drive Chrome on the desktop instead.
- Confirm with the owner before publishing only if they asked for a draft; otherwise publishing is the default for this shop.

## Report
Design URL, live vs draft vs pending, which products were enabled, default colors set, and any TeePublic errors.
