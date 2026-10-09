---
name: shopping-price-watch
description: "Use when the user chooses to wait: create/verify a purchase-specific price watch. Companion research skill embeds the full playbook including section 6."
---

# Shopping price watch

Use with the companion skill “Shopping research and buying decision” (same Bot). That skill embeds the full instructions — do not require an external SHOPPING-ASSISTANT.txt file.

When the user chooses to wait on a purchase:
1. Read section 6 (“IF FLEXIBLE: CREATE AND VERIFY A PRICE WATCH”) from the Shopping research and buying decision skill body (or this Bot’s matching enabled skill text).
2. Create one purchase-specific routine + dossier under `/workspace/shopping-assistant/` for profile/watch state only.
3. Verify the routine (enabled, next run, live price check, labeled setup notification). Never claim monitoring without that check.
4. Do not create a watch without a real purchase brief. Do not purchase unless the user explicitly asks.

Default cadence: daily 09:00 in the user’s confirmed timezone, weekly market re-evaluation, finite review horizon (30 days if unspecified). Quiet no-deal runs when the platform supports them.
