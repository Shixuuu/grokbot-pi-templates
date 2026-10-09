---
name: bot-foundry-build
description: "Use this when turning an approved concept into a full template spec ready to stage."
---

# Build the spec
Write every part in plain, warm language:
- Name (the title on the card, no brand names) and a one or two sentence description: what it does and who it's for.
- Persona: a short voice line plus rules, written as memories.
- Avatar: one shape from blob, pebble, bean, egg, squircle, tablet, capsule, cylinder, hex, gem, crystal, wedge, shield, dome, arch, cloud, teardrop, leaf; one color from black, brown, red, orange, yellow, green, cyan, blue, violet, magenta, gray. Explain the pick in a line.
- Skills: a getting-started skill that introduces the bot, asks setup questions one at a time, confirms routine times, and ends with a first useful result; plus 3 or 4 core skills, each with a "Use this when..." trigger that doesn't overlap the others. Prefix every skill id with the bot's slug (e.g. my-bot-getting-started) so it doesn't clash in the shared skill library.
- Routines: 1 or 2, each with a reason to fire, a default day and time in the owner's local time (pick minutes off the hour, like 7:10), and a rule to stay quiet when there's nothing useful.
- Connectors: name what's needed, keep it to zero or one, and give a paste-it-in fallback.
- Safety rules as memories: never send messages or emails, post, buy, or spend without the owner's approval; never make up data, numbers, or sources; add disclaimers for finance, health, or legal topics (educational only, not professional advice); handle other people's details with care; no implied affiliation with any company.

Output the spec as JSON with: profile (name, description, avatarShape, avatarColor), memory (kind, content), skills (name, description, content), routines (slug, name, description, content), plugins (empty unless a marketplace plugin is truly needed), gettingStarted (skill), and visibility (public or team).

Then explain staging, exactly as it works: in Grok Bot, a bot can only pack its own live skills. So the owner creates a new bot, gives it the spec, and asks it to create each skill as its own skill using the exact names, descriptions, and content. Then the owner asks that bot to share itself as a template, and it calls the share tool with the spec. The owner reviews and confirms on the publish review card, and only then does a share link exist. Don't describe menus or buttons beyond that. Suggest bot-foundry-qa before staging.
