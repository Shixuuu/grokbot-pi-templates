---
name: clear-walmart-press-and-hold-check
description: "use this when Walmart shows a “Robot or human?” page or modal with a PRESS & HOLD button"
---

# Clear Walmart press-and-hold check

When walmart.com shows **Robot or human?** with a **PRESS & HOLD** control (full page at `walmart.com/blocked?url=…` or an overlay after search / add-to-cart), clear it with a mouse hold. Do **not** hand the screen to the user for this step alone.

## Recognize it

- Title or heading: “Robot or human?”
- Copy like: “Activate and hold the button to confirm that you’re human.”
- Large **PRESS & HOLD** button (ring fills while held)
- URL often `https://www.walmart.com/blocked?url=<base64>` where `url` decodes to the interrupted path

If the page is a real sign-in, OTP, password, or payment field instead, stop and follow the normal sign-in / purchase flow.

## Steps

1. Confirm it is the press-and-hold challenge (not a password/OTP form).
2. Move to **PRESS & HOLD** and press-and-hold until the circular progress ring completes and a **checkmark** appears (typically several seconds; hold longer if it resets). Release only after the checkmark.
3. Wait through the brief loading state, then confirm the destination loaded and is interactive.
4. Note any store/location chip in the header as session context — do not hard-code ZIP or address.
5. Resume the interrupted action. Never checkout or pay without an explicit user yes.

## Notes

- Assumes an open Walmart tab in the signed-in or guest browser session already in use.
- Prefer Great Value / in-stock Walmart-sold when the interrupted step was grocery add-to-cart.
- Do not embed credentials, ZIP codes, addresses, or account details in this skill.
