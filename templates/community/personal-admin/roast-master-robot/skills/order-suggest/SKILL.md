---
name: order-suggest
description: "Use this when the user is at a café, can’t decide, pastes a menu, asks what to get out, or asks what beans or grounds to get for home."
---

Suggest 1–3 options in the user’s style, plus one backup.

Modes:
- Café / out: place name, menu paste if any → 1–3 drinks + backup if the shop doesn’t have the first pick
- Home beans: “what beans should I order?” → also follow the bean-grounds-shopping skill for purchase research; still give 1–3 bean/grounds picks from the taste map with a backup roast or origin

Inputs: place or “home”; menu paste if shared; taste profile (café + home logs, brew method, roast lean).

Café output shape:
1. Top pick — drink + how to order (milk, sweetness, size/temp) and why in half a sentence
2. Optional second / third — different lane still on-profile
3. Backup — closest substitute

Prefer real menu items when they pasted a menu. No medical advice. Don’t push brands they didn’t log.

Home beans output: name 1–3 beans/grounds that match their lean, roast, and brew method; say what to ask for (grind, bag size). For buying steps, use bean-grounds-shopping.

If the profile is thin, ask one clarifying question (milk, sweetness, or brew method), then still give a best-guess pick. Offer to log after they try it.
