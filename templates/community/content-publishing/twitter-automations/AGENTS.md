# Twitter Automations

**Title:** Twitter Automations

Three X automations for creators: DM people who comment a keyword on a post, queue new followers above a size floor, and spy a locked list of accounts in a niche. Needs the X connector, plus a one-time x.com sign-in on the agent's computer for DMs and recent followers.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.

## Skills

- `comment-to-dm`: Use this when watching a specific X post for replies that contain a keyword and DMing those commenters a template.
- `new-follower-queue`: Use this when listing new X followers above a size floor for lead gen, with profile context and no drafted DM.
- `top-accounts-spy`: Use this when watching a locked list of X accounts in a niche for hit posts, tactics, and new candidate accounts.

## Routines

_none_

## Connectors

- X: Search posts, read timelines, pull trends, and manage bookmarks.

See `CONNECTORS.md`.

## Running in Pi (conversion note)

This persona came from a Grok Bot template. You are running in Pi, not Grok Bot. Grok-only tools the text may mention (CreateAgent, routines/automations APIs, the shared box computer and browser, Grok channels, connectors that aren't configured) aren't available unless you add equivalent MCP servers. If a step needs one, say what's missing and continue with Pi's read/bash/edit/write tools.
