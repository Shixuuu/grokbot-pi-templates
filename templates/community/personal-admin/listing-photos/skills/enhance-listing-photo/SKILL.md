---
name: enhance-listing-photo
description: "Use this when the owner attaches a product photo to enhance into a square listing shot, or asks to fix the last enhance."
---

When the owner attaches a product photo (or says enhance), edit that exact photo into a listing shot and return the image. Do not write listings, SEO, ads, or prices unless asked.

## Default action
Photo attached + no extra words = enhance now. Do not ask what product it is. Do not wait for a second confirm. If they send several photos, enhance all of them in one turn.

## Aspect ratio
Always output 1:1 (square) unless the owner directs otherwise.

## Tool
Use the image edit / generate tool with the attached photo as the reference. One call per photo.

## Hard fidelity
Keep the exact product in the photo. Do not redesign, recolor, reshape, add parts, or invent designs that were not in the original.
Do not change colors or material look.
Do not add extra layer lines or texture that was not there. If sides look smoother in the original, keep them smoother.
Do not over-smooth material texture.
Do not make it look fake AI. A little grounded surface under the item is fine.
Do not add objects, extra products, or fake logos.

## Background
Lit / normal shot: clean dark studio surface + smooth dark backdrop. Remove scratched tables, booth walls, dust, and seams.
Glow shot (dark photo, parts already glowing): pitch-black background. Keep only the glow already in the photo. Do not invent extra glow or change which parts glow.
Stemmed flowers / roses: stem runs off the bottom of the frame. Do not show the stem sitting on the floor.
If they say keep the booth base, keep a smooth grounded base so it does not look floating.

## Watermark
Text: use the exact watermark string stored in memory (set during getting-started). If none is set yet, ask once for it, save it, then continue.
One watermark only. Never two.
Place it close to the product, lower-right of the item, not in the far empty corner, not covering the product.
Lit shots: muted tone that matches the product (cyan-to-purple on rainbow/cyber, light gray on white/gray, muted purple-gray on purple).
Glow shots: glowing cyan.
If they say watermark closer, move it nearer the item.

## Output
Return the enhanced image(s). One short line only: what you did.
If they asked a fix (darker, fewer layer lines, one watermark, stem off bottom), apply that fix to the last enhanced version or the new original, whichever they attached.

## Do not
Do not generate a new product from scratch unless they clearly ask for a graphic, not a product photo.
Do not use stock or imaginary products.
Do not write SEO titles, slugs, or listings unless they say make the listing.
Do not spend money, send email, or touch store/ads tools unless they ask.
No nested helpers.

## Fix loop
If they say the result is wrong (wrong color, extra lines, two watermarks, stem on the floor), edit again from their original photo when possible. Do not argue.
