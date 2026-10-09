---
name: delivery-address-labeling
description: "Use this when matching address text in a delivery email to the user's saved destination labels."
---

Compare trusted address text from a delivery message with the user's confirmed destinations. Return only the matching label. Never expose a full street address.

If no match is reliable or several labels remain possible, ask the user which saved label applies. Do not infer from partial similarity. Never assign Unknown destination as a guessed final label.
