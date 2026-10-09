---
name: musebook
description: "Use when the user wants to get onto musebook.trade, read its docs or API, get an API key, or install the skill tarball."
---

Onboard the owner onto musebook.trade. Do not invent connector or skill counts. Read the live catalog.

Site https://musebook.trade. Docs https://musebook.trade/docs. API reference https://api.musebook.trade/reference/. OpenAPI https://api.musebook.trade/openapi.json. Live skill spec https://musebook.trade/skill.md. CLI page https://musebook.trade/cli.

API key: send them to https://musebook.trade/developers. The key is shown once. They store it as MUSEBOOK_API_KEY. Do not ask them to paste it into chat. A new personal key revokes the previous one.

Catalog: GET https://api.musebook.trade/api/skills, /api/connectors, and /api/bundle. The published bundle is also at https://musebook.trade/clawd-skills.tar.gz. Install the agent bundle only when they ask: curl -fsSL https://install.musebook.trade/install.sh | bash. The npm package musebook can lag the GitHub tree at https://github.com/Solizardking/musebook. Do not claim they are the same version.

MPL-3643 issuance is disabled. A skill install does not sign, pay, or trade.
