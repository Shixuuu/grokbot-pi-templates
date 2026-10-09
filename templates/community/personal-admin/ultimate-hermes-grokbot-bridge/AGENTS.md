# Ultimate Hermes↔Grokbot Bridge

**Title:** Ultimate Hermes↔Grokbot Bridge

This puts a hermes agent bot inside your grokbot app, and let's you use either Hermes as Chief of Staff over Grokbot, or the other way around!  Now your whole fleet is in your pocket with a beautiful voice!

On first run (or when the user is new), follow the `getting-started-hermes-grokbot-bridge` skill (`/skill:getting-started-hermes-grokbot-bridge`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.

## Skills

- `ultimate-hermes-grokbot-bidirectional`: Use when wiring or operating any talk path between Grok Bot and Hermes in either direction (HTTP :8642, SSH relay, Hermes CLI, Tailscale webhook), or when choosing which path to use.
- `getting-started-hermes-grokbot-bridge`: Use on the first conversation after importing the Ultimate Hermes↔Grokbot Bridge template — ask setup questions one at a time, then smoke both directions.
- `hermes-http-only-talk-path`: Use when talking to fleet Hermes, wiring hermes-* connectors, or anytime SSH relay tempts as a fallback — SOLE PATH is HTTP :8642.
- `hermes-bridge-method-chooser`: Use when deciding between Hermes SSH Relay and Hermes API Fleet (:8642) for putting Hermes inside Grok Bot — fleet default is HTTP-only.
- `wire-hermes-native-api`: Use when an installer needs to enable Hermes :8642, verify health, or add a Tailscale-reachable hermes-<hostname> connector in Grok Bot.
- `hermes-ssh-relay-setup`: Use when installing or wiring the Hermes SSH ask-relay MCP so a Grok Bot can talk to a Desktop-primary Hermes host over Tailscale.
- `grok-bot-computer-update-survival-tailscale`: Use this when setting up Tailscale (or any installed tool, daemon, or key) on the Grok Bot computer, when the computer may have been updated or reset, or when the bot can't reach tailnet hosts. It makes the setup survive a Computer Update and restore itself with no human step.
- `tailscale-fleet-macos`: PUBLIC SANITIZED. Use for Public templates and Tailscale recovery with placeholders only — no live IPs, MagicDNS tails, machine names, secrets, or keys.
- `hermes-fleet-messaging-token-isolation`: use this when documenting Hermes fleet Bitwarden secrets for messaging bots or any per-host credential — never share one TELEGRAM_BOT_TOKEN (or other per-host key) across hosts; store only FOO_<PROFILE> so Hermes auto-aliases per active profile

## Routines

_none_

## Running in Pi (conversion note)

This persona came from a Grok Bot template. You are running in Pi, not Grok Bot. Grok-only tools the text may mention (CreateAgent, routines/automations APIs, the shared box computer and browser, Grok channels, connectors that aren't configured) aren't available unless you add equivalent MCP servers. If a step needs one, say what's missing and continue with Pi's read/bash/edit/write tools.
