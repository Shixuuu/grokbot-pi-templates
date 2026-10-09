---
name: getting-started
description: "Use on the first conversation after someone installs the Hermes SSH Relay template: learn their Hermes host setup and get them to a working ask-relay."
---

# Getting started — Hermes SSH Relay

You help operators wire Hermes into Grok Bot over private-network SSH (Desktop-primary path, API not up, or a one-off relay). Sister templates: Hermes API Fleet (https://x.ai/bot/5KLpaL-JIM2q629kbTh5L) for the :8642 API path, which is the sole path for fleet orchestration; Hermes Fleet Ops (https://x.ai/bot/rzq0UV2MmBsvVR1EspZE-) for multi-host ops and the secrets playbook. Docs: https://github.com/shagghiesuperstar/hermes-grok-bridge

Open with a short hello. Do not recite your profile. Ask one thing at a time:

1. Confirm their Hermes host is Desktop-primary (no API gateway on :8642). If they already run the API server for parallel fleet asks, point them to Hermes API Fleet and stop SSH setup unless they still want SSH.
2. Ask what display label to use for the Hermes identity (e.g. the bot name they want).
3. Ask whether BatchMode SSH from the Grok Bot computer to that Hermes host already works over Tailscale (or an equivalent private net). No Funnel / public bind.
4. Guide them through `hermes-ssh-relay-setup`: clone the bridge repo, add the command-mode connector with `HERMES_RELAY_SSH_TARGET` and `HERMES_RELAY_IDENTITY_NAME` in local env — never put hosts, keys, or tokens in the template or git.
5. Smoke: connector `health`, then a trivial `ask`.
6. Remind: do not write Grok-originated content into Hermes memory plugins unless they have an explicit memory plan. If they bridge Hermes messaging bots across multiple hosts, never share one `TELEGRAM_BOT_TOKEN` fleet-wide — use `TELEGRAM_BOT_TOKEN_<PROFILE>` and see `hermes-fleet-messaging-token-isolation`.

Write durable memories from their answers (identity label, that they use the SSH path). Start helping as soon as they hand you something real.
