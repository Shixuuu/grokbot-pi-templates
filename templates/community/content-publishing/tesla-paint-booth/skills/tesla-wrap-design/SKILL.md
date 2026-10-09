---
name: tesla-wrap-design
description: "Use this when designing a custom Tesla Paint Shop wrap from a text prompt or an uploaded image and delivering a Preview plus a USB/app-ready Wraps zip."
---

# Tesla Paint Shop wrap design

Design the wrap in chat. Never send the user to another site to design it.

## 1. Car and template
- Ask which Tesla they drive: model, year and trim. Never assume a car. If they have more than one, use the default they chose for "my car".
- The model and year pick the template; never mix templates.
- Use the official flat UV template from Tesla's public repo (github.com/teslamotors/custom-wraps). Model 3, Model Y, Model Y L, Model S and Model X templates are 1024x1024. Cybertruck is 1024x768. Some trims, such as Model 3 2024+ Performance, Model Y 2025+ Standard and Performance, and Model S 2025 Plaid, have their own templates.
- A photo of a car is only a preview. The car file is the flat template PNG.

## 2. How to make it
After the car is known, ask once: upload an image, or type a prompt. Skip the question if they already did one.
- Upload: keep their pattern, colors and layout, fitted to the template. Ask once whether it's a flat graphic or a photo of a car.
- Prompt: use their text as the design. Don't add a second theme.
- Finish: gloss, satin, matte or color-shift. Ask only if it's missing; default to satin.
- Use original art unless the user owns the rights or supplies the asset.

## 3. Build
- Paint body panels only. The wrap's transparency must match the template mask exactly. Leave glass, sensors, cameras and the charge-port door edge clear.
- Before placing any text, logo or figure, work out that template's panel orientation from Tesla's example wraps in the same folder: which edge of each panel faces the front of the car, which faces the roof, and whether the hood or trunk is flipped. Rotate and mirror decals so they read correctly on the car, per side.
- Size decals to fit inside their panel with a small margin so nothing is clipped. Tell the user when the panel shape limits how big a decal can go.
- Build tiled patterns from one continuous grid so no seams or stripes appear inside a panel.

## 4. Preview and approval (required before any file)
- Make a three-quarter Preview of the finished wrap on the user's model, labeled "Preview". Darken the body of a car render, lay the pattern over it, and place each decal with a perspective mapping from its real panel in the car file.
- Before sending, check that the Preview matches the flat file: same placement, orientation and size, no floating pieces, no stock paint showing.
- Send the Preview alone and ask the owner to approve it or request changes. Don't build or send the final PNG or zip until they approve. Re-preview after every change.

## 5. Deliver (after approval, one reply)
- Output exactly what the car accepts per Tesla's spec. The car file is a PNG at the exact template size, under 1 MB. Name it with letters, numbers, spaces, underscores and dashes only, 30 characters max (for example ModelY-EmberShift.png).
- A zip holding only a folder named exactly Wraps with that PNG inside.
- With the zip, only these steps:
  1. Phone: Tesla app 4.59.0 or later, Creations, Wrap, Upload.
  2. USB: exFAT, FAT32, MS-DOS FAT, ext3, or ext4. Not NTFS. No map or firmware files.
  3. Copy the Wraps folder to the stick root.
  4. Data port. Toybox, Paint Shop, Wraps. Up to 10 files.
  5. On-screen skin only. It does not change the paint.
