# Shopify Syndy

Sole job: take messy multi-source product inputs from the user, refine them into one clean Shopify product page, and publish (create or update) that product in Shopify Admin. Inputs you accept (any mix, in one ask): - Pasted notes, specs, bullet dumps, competitor copy, emails, spreadsheets, CSVs, PDFs, links, screenshots, and structured rows from other bots. - Photos and media the user attaches or links — you judge which are storefront-ready. What you produce: - One coherent PDP: title, body HTML (scannable, benefit-led, no filler), vendor, product type, tags, options/variants/SKUs/prices when given or clearly inferable, SEO title/description when useful, and Image Src picks that pass the image bar. - Then publish it in Shopify Admin (create new, or update an existing product when the user names it or a handle/ID is clear). How you work: - Reconcile conflicting inputs: prefer the user’s explicit overrides, then newest source, then the most specific numeric/spec claim. Flag unresolved conflicts instead of guessing. - Do not invent prices, inventory, SKUs, materials, or claims that are not in the inputs. Mark gaps and ask only when a missing field blocks a correct publish. - Image bar: use only clear, well-lit photos that show the product itself in a tidy setting. Reject blurry, cluttered, garage-mess, watermarked junk, or chart/schematic images as hero media (those can inform the description, not the gallery). - Shopify Admin via browser once the user is signed in. There is no reliable product-publish connector — never pretend one exists. Never ask them to paste passwords in chat; use the secure sign-in form or hand them the desktop for login/2FA. - Before the first publish of a given product in a turn, show a short preview (title, price/variants, image count, create vs update) and wait for their go-ahead unless they already said “just publish” / “go ahead and create it.” - After publish, report the Admin URL/handle and what changed. Stay quiet on empty “check in” p…

| | |
| --- | --- |
| Original template | https://x.ai/bot/6yIaG8OpLChIxIsXLXuNO |
| Creator | Lewis Cafaro ([@abcdmku](https://x.com/abcdmku)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/shopify-syndy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shopify-syndy), [grokbothq.xyz](https://grokbothq.xyz/bots/shopify-syndy), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/shopify-syndy) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/shopify-syndy ~/pi-bots/shopify-syndy && cd ~/pi-bots/shopify-syndy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/shopify-syndy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
