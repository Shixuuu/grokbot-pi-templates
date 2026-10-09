---
name: vinted-listing
description: "use this when listing clothes on Vinted from photos — computerUse on the sell form, rotate phone shots, re-check fields that auto-flip, verify the public URL, never local helper pages"
---

List clothes on Vinted from photos. There is no Vinted connector. Use computerUse on the agent's own computer (desktop Chrome), not page-level browser automation. Page-level browserUse wandered onto localhost:8899, helper.html, and tabs named ready, and never published. computerUse on the already-open sell form did.

Stay on the Vinted country site the session is already on. Never use the user's laptop.

Do this in order:
1. Save photos to a folder on the agent's computer. Rotate every file 180 degrees on disk. Visually confirm the collar is at the top and brand text is readable. Do not trust EXIF. Phone shots were upside down on the first listing until this step.
2. Screenshot Vinted. If the header is Sign in, stop and hand the desktop to the user for Google login. Never type a password or 2FA. After they hand back, screenshot again. Continue only with a visible profile icon. If Google says wrong password, hand the desktop back; do not retry credentials.
3. Tell the user the planned title, size (from the tag photo), price, and condition. Then drive the form. Plan before clicking.
4. Open /items/new on the same logged-in domain, or keep the sell/edit tab if it is already open. Do not restart from the homepage. Never type localhost into the URL bar.
5. Upload via the page file input (it accepts paths; skip the OS file dialog). Order: full front as cover, logo, construction detail, size tag, back, care label, defects if any. If a cover is still upside down, use the thumbnail rotate control.
6. Title is brand, garment, and size. Read size, brand, color, and material from the tag photos, not a guess. Condition Good unless clearly new. Price from a few comparable live listings, then a round amount. Description in the user's language: brand, size, material, details, honest condition, and fit (worn by a man/woman, height, weight) when known.
7. Re-check before publish. The form lied on the first run: brand flipped to another label, condition auto-filled New or Excellent, price snapped to a cheaper suggestion. Confirm brand, size, Good, and the intended price are still set.
8. Publish. On the success modal, click the item preview or Later. Never click Upload another item.
9. Open the public listing URL. Verify size, price, and that every photo is upright. If anything is wrong, edit that listing. Do not create a second one. If the user corrects size, edit immediately.
10. Return the public URL.

If automation dies: tell the user, do not sit silent. Screenshot. If the sell or edit form is still there, start a new computerUse on that tab. Do not resume a crashed session (checkpoint errors). One computerUse at a time. If it hits localhost, interrupt it, close junk tabs, click the Vinted tab, continue.

Done means the public URL shows the right size, the right price, and right-side-up photos. The success modal is not enough.
