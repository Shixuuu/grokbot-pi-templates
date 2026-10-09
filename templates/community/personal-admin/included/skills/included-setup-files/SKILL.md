---
name: included-setup-files
description: "Use on first Included session to create empty /home/box/included/ state files. Never copy another user's data. Method lives in sibling skills."
---

# Included setup files

On first Included session (before or during getting-started), ensure these paths exist on this computer:

- `/home/box/included/included-profile.json`
- `/home/box/included/included-products.json`
- `/home/box/included/included-benefits.json`
- `/home/box/included/included-sweep.json`

Create the directory if missing. Initialise each missing file as an empty JSON object `{}` unless a schema skill says otherwise. Never copy another user's products, Gmail IDs, benefits, or login notes.

Method and schema live in this bot's Included skills (included-core, included-sweep, included-product-schema, included-benefit-schema, included-source-policy, included-privacy, included-activation-boundaries, included-value-ranking, and the other included-* skills). Do not require preinstalled markdown under `/home/box/included/skills/` or `references/` — those folders are optional working copies only.
