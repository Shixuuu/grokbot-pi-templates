---
name: facebook-marketplace-item-listing
description: "Use this when publishing a Facebook Marketplace item from an approved pack: paste full DESCRIPTION, last line must include the pack footer before Publish or edit-save, unique photo, skip Boost. Missing footer = do not Publish."
---

# Facebook Marketplace item listing

Publish one Marketplace **item** from an approved pack. Caller supplies copy, category, location, and the unique photo. Do not bake in a vehicle, city, account, listing URL, or a batch cap.

## Inputs

- Approved pack, verbatim: title, price, location (city + country), **full** description including freight lines and footer
- Category as the pack/form requires (vehicle parts: **Car parts**)
- Unique photo for this SKU (not another listing's photo)
- Human yes to publish

Stop if any of those are missing. Do not invent, paraphrase, or truncate copy.

## Path

1. Have the approved pack and a unique photo for this SKU.
2. Open `https://www.facebook.com/marketplace/create/item` in **one** tab on the existing session. Close leftover tabs and chat popups first.
3. **Title and price — clear, then paste. Never append.** Click the field (not the address bar). Select-all, delete, paste pack title / type only pack price digits. Read back: extra digits or leftover words = not the pack. If wrong, clear-paste **once** more, then **stop**. Do not start another runner.
4. Set location from the pack. Set category as the pack/form requires (vehicle parts: Car parts).
5. Paste the **full DESCRIPTION** (not a truncated body). Read back the **last line**: it must include the pack footer. If the footer or freight lines are missing, **do not Publish**. Same check before **edit-save**.
6. Add the unique photo. **Next**.
7. Before Publish (or edit-save): last line of DESCRIPTION still includes the pack footer. Confirm location + copy match the pack. **Publish**. **Skip Boost**.
8. Close the tab. Record the public item URL. Stop.

Listing 2+ of this type: same URL, same fields, paste the next pack. Do not rediscover, recategorise, or click-hunt.

If the create form reloads or wipes: refill from the pack **at most twice**. After two wipes, **stop**.

## Hard stops

- **One listing runner per SKU.** If one is running, do not start another. Stop means stop: no second fill on the same form.
- One tab only. No DevTools, no debugger, no address-bar typing. No CDP, Playwright, xdotool, shell-driven Chrome, or injecting clipboard into the browser from the shell.
- Extra digits or leftover words in title/price = **stop**, not another runner. Do not Publish.
- Missing pack footer (last line of DESCRIPTION) or freight lines = **do not Publish** and **do not edit-save**.
- After two form wipes, stop. Do not loop. Do not open DevTools to inspect why.
- Duplicate-listing banner = **not live**. Unique photo then retry, or abandon.
- A draft is not live. Do not message buyers. Do not Boost or spend.
