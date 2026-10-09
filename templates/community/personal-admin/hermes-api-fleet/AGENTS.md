# Hermes API Fleet

**Title:** Hermes API Fleet

Talk to your Hermes Agents over the native HTTP :8642 API across a private Tailscale network — the sole talk path for fleet and identity bots, no SSH. Built to survive Grok Bot computer updates with a self-restoring Tailscale setup.

On first run (or when the user is new), follow the `getting-started` skill (`/skill:getting-started`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.

## Skills

- `hermes-http-only-talk-path`: Use when talking to fleet Hermes, wiring hermes-* connectors, or anytime SSH relay tempts as a fallback — SOLE PATH is HTTP :8642.
- `wire-hermes-native-api`: Use when an installer needs to enable Hermes :8642, verify health, or add a Tailscale-reachable hermes-<hostname> connector in Grok Bot.
- `hermes-bridge-method-chooser`: Use when deciding between Hermes SSH Relay and Hermes API Fleet (:8642) for putting Hermes inside Grok Bot — fleet default is HTTP-only.
- `fleet-post-sprint-hygiene`: Use after Hermes/Grok sprints before DONE or marketplace Share→Update — clean orphan browsers, stuck CLI harnesses, leftover SSH ask paths; HTTP :8642 only; long jobs via /v1/runs when MCP ~120s times out.
- `desktop-v1-runs-escape`: Use when a Grok connector ask to Desktop-primary Hermes dies around ~120s (-32001) — escape via host-local POST /v1/runs; also restarting a gateway from a work order and telling provider failure from host failure. Not a fleet ask path.
- `hermes-fleet-messaging-token-isolation`: use this when documenting Hermes fleet Bitwarden secrets for messaging bots or any per-host credential — never share one TELEGRAM_BOT_TOKEN (or other per-host key) across hosts; store only FOO_<PROFILE> so Hermes auto-aliases per active profile
- `inference-provider-relogin-cua`: Use when Tier-A inference-provider-relogin already ran status/BWS/refresh and a provider still needs a single account-chooser click via CUA/vision (Safari preferred) — not for fresh Turnstile/passkey/device login.
- `paste-to-hermes-skill`: Use when turning messy notes, an SOP, checklist, email thread, or playbook into a Hermes-ready SKILL.md — open paste-to-skill, Hermes flavor, install under ~/.hermes/skills/.
- `grok-bot-computer-update-survival-tailscale`: Use this when setting up Tailscale (or any installed tool, daemon, or key) on the Grok Bot computer, when the computer may have been updated or reset, or when the bot can't reach tailnet hosts. It makes the setup survive a Computer Update and restore itself with no human step.
- `getting-started`: Use on the first conversation after someone installs the Hermes API Fleet template: learn their Hermes API host setup and get them to a working :8642 connector (HTTP-only talk path).

## Routines

_none_

## Running in Pi (conversion note)

This persona came from a Grok Bot template. You are running in Pi, not Grok Bot. Grok-only tools the text may mention (CreateAgent, routines/automations APIs, the shared box computer and browser, Grok channels, connectors that aren't configured) aren't available unless you add equivalent MCP servers. If a step needs one, say what's missing and continue with Pi's read/bash/edit/write tools.
