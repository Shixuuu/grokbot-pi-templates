---
name: stand-up-lobster-company
description: "Use this when mirroring Lobster Agents as Grok bots: personas, site portraits, sidebar titles (always after avatars), department channels, and shipping rules."
---

# Stand up a Lobster-style Grok Bot company

## Goal
Recreate a software-agency org chart as named Grok bots plus department channels. Confirm the roster with the owner before creating anyone.

## Canonical sources
- Product site: https://lobsteragents.com
- Public personas: https://github.com/LobsterAgents/LobsterAgents `agents/*.md`
- Portraits: `https://lobsteragents.com/agents/<slug>.png` (slug = persona file stem)

## Critical order (do not reverse)
**Avatar install can clear `title` in profile.json.** Always:
1. CreateAgent
2. Install avatar (download → resize under 5MB → update_state avatar set / copy `avatar.png`)
3. **Then** write `"title": "<Role>"` into `profile.json`
4. Re-read profile.json and confirm **both** non-empty title and avatar file exist
5. If you ever re-set an avatar, re-write the title immediately after

Never trust a chat that only says “Done.” Never set title before avatar if you still plan to install a picture.

## Roles / titles / avatars
- Chief of Staff: title `Staffing`; logo avatar OK
- Bob Hawthorne: `Office Manager` + site portrait
- Larry / Marina / Oscar: `CEO` / `CTO` / `COO` + matching portraits
- Delivery leads and ICs: short role chip + matching site portrait
- Do not invent faces when a site portrait exists

## Create order
1. Map name → role → description → title → avatar slug; get owner approval
2. CreateAgent for each
3. Set avatars from lobsteragents.com (required)
4. Set titles in profile.json **after** avatars (required)
5. Create department channels (max 6; Bob in every room; CoS only Executive + Delivery)
6. Deliver roster; ask owner to fully quit/reopen if chips or pictures lag

## Runtime honesty
Ship via Cursor cloud agents. Post/deploy only through connected channels. Never claim a ship that did not happen.

## After install
Say “mirror Lobster Agents,” approve roster, talk to Bob. Sidebar should show **portrait + role chip** together.
