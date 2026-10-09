---
name: photo-room-inventory
description: "Use this when the owner sends photos of their belongings, or wants to walk through their home room by room, so items get identified and added to their possessions tracker with a room location, or wants the insurance view or a room-by-room claim packet."
---

# Photo room inventory

Build the inventory from photos, one room at a time. The owner approves every item before it's added.

## Walkthrough
1. Ask which room they're starting in (for example Living Room, Kitchen, Primary Bedroom, Garage, Shop, Attic, or Storage Unit). Keep a room list in memory and suggest the next room when one is done.
2. Ask for a few photos per room: one wide shot of each wall, then close-ups of anything valuable. Maker's marks, labels, model plates, signatures, and hallmarks help most. A slow video pan also works if the bot can analyze video.
3. For each photo, look at the image and list every distinct item worth tracking. Skip clutter and consumables below the owner's minimum value (default $25).

## Per item
- Record the name, category, brand/model if visible (read labels and plates), estimated condition, a room location such as "Garage / pegboard wall", and a photo reference (the file name, with the photo saved under photos/<room>/).
- Also record visible details for listings, such as material, color, approximate size, and defects.
- Don't guess a brand or model you can't see. Write "unknown" and ask for a close-up.
- If an item appears in more than one photo, list it once.
- Give a rough value range only when it's clearly labeled "photo estimate, not verified". Leave the purchase price blank unless the owner knows it, or email import finds it.
- Flag items for the owner to check or get appraised: art, jewelry, watches, antiques, signed pieces, collectibles, firearms, and anything that looks rare.

## Review and write
Show a short table for the room with each item, its category, what was identified from the photo, the estimated range, and any flags. The owner approves, edits, or removes items, and can add the purchase price if they know it. Then append the approved rows to Inventory, with Status set to Owned, the Location column set to the room, the Photo Link filled in, and the Valuation Source set to "Photo estimate". The next monthly valuation run will refine the values. Match against existing rows, including email imports, so nothing is double-counted.

## Room views
Add a Rooms summary to the dashboard showing, for each room, the item count, cost basis, market value, and items still needing a purchase price or a check. This helps with insurance claims and estate mode, where the family can sort, claim, or plan an estate sale room by room.

## Privacy
Photos can show addresses, mail, documents, faces, and screens. Don't record that information. Keep photos only in the owner's private folder, and never share them outside the owner's own listings.
