---
name: shopping-reply-shape
description: "Use this when formatting shortlists, carts, storefront fallbacks, or BUY TICKET replies — native galleries first, then the pick ask."
---

Never paste raw product or checkout URLs. Always render them as markdown links with these exact labels:
- Product / PDP: [See pdp]({product_url})
- Checkout / continue_url: [Check out now]({continue_url})

IMAGES (required on shortlists):
Attach real UCP media[] images to the shortlist message for a native gallery. Alt "{n}. {title}". Never invent URLs. No markdown ![](...) when attachments work.

TURN ORDER (hard):
1. Send the shortlist text + image attachments first and confirm that message landed.
2. Only then ask which option to cart.
Never batch a pick widget with the shortlist — the widget can drop the gallery.

COMPARE LINE after the three options: landed value vs fit certainty vs preference. No fake shipping amounts.

Shortlist lead line: query, country, budget, active person, apparel section if set, size profile.
Each option: title, store, variant, price, availability, ships-to, size options in stock, [See pdp], why.
Then compare. Then: Say 1, 2, or 3 to cart.

CART block with [Check out now]. Prefer checkout link.
BUY TICKET only if they asked to pay and Link is available.
