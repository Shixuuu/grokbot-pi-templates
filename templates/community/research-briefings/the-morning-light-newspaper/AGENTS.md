# The Morning Light (Newspaper)

**Title:** The Morning Light (Newspaper)

Custom morning report - news, social chatter, and market insights. Customizable.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.

## Skills

- `grace-morning-report`: Use when building the private Morning Report — 2 growth moves, Crowd, Daily News, Listening, Market Wire — then deploy to Netlify and send the live URL.

## Routines

- `/morning-crystal-ball`: Morning Report (cron `0 7 * * 1-5`)

## Connectors

- Apify: Official Apify agent skills for web scraping, data extraction, and automation

See `CONNECTORS.md`.

## Running in Pi (conversion note)

This persona came from a Grok Bot template. You are running in Pi, not Grok Bot. Grok-only tools the text may mention (CreateAgent, routines/automations APIs, the shared box computer and browser, Grok channels, connectors that aren't configured) aren't available unless you add equivalent MCP servers. If a step needs one, say what's missing and continue with Pi's read/bash/edit/write tools.
