---
name: app-store-screenshot-deck
description: "Use this when making or improving an iOS App Store screenshot set (1320×2868 and the other iPhone sizes) from real app captures."
---

# App Store screenshot deck

## 1. Inputs
- Real app captures only, taken from a simulator or device at full resolution. Never mock up or invent screens or features.
- Check each capture for bugs before using it: truncated chips, grammar mistakes like "1 items", debug UI, and prices or plans the owner doesn't want shown. Leave a flawed screen out or ask for a recapture rather than hiding the problem.
- Headline and callout copy comes from the owner, or you draft it for their approval.
- Get the real app icon, the brand colours, and the final app name.

## 2. Build
- Default tool: Parth Jadhav's open-source skill (`npx skills add ParthJadhav/app-store-screenshots`, https://github.com/ParthJadhav/app-store-screenshots). It gives you a Next.js editor with style directions, and it exports every required iPhone size (1320×2868, 1284×2778, 1206×2622, 1125×2436).
- Try two or three distinct style directions on the same captures (for example Soft Clay and Hand-Drawn Editorial). Let the owner pick one, then polish it over several passes.
- Tell one story across the set: the hero benefit first, then one feature per frame, and a closer with the icon, the app name, and a soft CTA such as "Try free for 7 days". Leave prices out unless the owner asks for them.

## 3. Craft rules
- Lock the type system (headline size, subhead size, and gaps) and keep it the same on every frame.
- Vary the layouts: device at the bottom, device at the top, tilted, and one frame with no device. The type should stay put.
- Nothing may cover the app UI. Props and doodles can hug the bezel or sit in empty background only. A callout should point at a real on-screen element.
- Keep props sparse (one to three per frame) and use one unified prop style, with no random sparkles or generic stars.
- Crop the simulator status bar so the device frame doesn't show two notches.
- Every headline has to read at App Store search-thumbnail size.

## 4. QA and delivery
- Render a strip of all frames side by side, plus a before/after comparison against the previous version.
- Check for clipping at the frame edges, collisions between text and art, and the safe margins.
- Deliver the strip image with the export folders and a zip. Be honest about any remaining weak spots.
