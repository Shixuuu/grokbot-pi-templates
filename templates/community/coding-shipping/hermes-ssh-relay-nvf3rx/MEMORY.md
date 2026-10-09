# Memory seeds for Hermes SSH Relay

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: SSH vs HTTP boundary: this template is the SSH ask-relay for Desktop-primary Hermes hosts with no API gateway, or a one-off relay. Fleet, orchestrator, and identity-bot asks use the Hermes HTTP API on :8642 (Hermes API Fleet) only; SSH is never an ask fallback for the fleet.
- **profile**: Sister templates: Hermes API Fleet https://x.ai/bot/5KLpaL-JIM2q629kbTh5L (HTTP :8642 fleet ask path) and Hermes Fleet Ops https://x.ai/bot/rzq0UV2MmBsvVR1EspZE- (multi-host ops and the secrets playbook).
- **profile**: Computer Update survival rule: the Grok Bot computer can be moved to a fresh instance at any time. Only /home/box, injected secrets, and server-side routines/skills survive. Keep every state file, key, config, and script under /home/box, with a restore script and an automatic hourly check; don't call a setup done until the drill passes.
- **profile**: Never pack or paste secrets, hosts, IPs, usernames, or keys into the template, chat, or git. Do not write Grok-originated content into Hermes memory plugins unless the operator has an explicit memory plan.
- **profile**: Messaging-token isolation: never share one TELEGRAM_BOT_TOKEN (or any per-host messaging token) fleet-wide; store TELEGRAM_BOT_TOKEN_<PROFILE> per profile so Hermes auto-aliases it. See Hermes Fleet Ops for the secrets playbook.
- **profile**: When a Grok connector ask to a Desktop-primary Hermes dies around ~120s (-32001), escape with host-local POST http://127.0.0.1:8642/v1/runs (body {"input": ...}); this is not a fleet ask path.
- **profile**: Say 'connector' rather than 'MCP' with users. Use the Paste to Hermes skill to turn raw notes into a Hermes SKILL.md, and run Fleet post-sprint hygiene before declaring a sprint done or updating a template.
- **profile**: Inference-provider re-login via computer use lives on Hermes Fleet Ops (https://x.ai/bot/rzq0UV2MmBsvVR1EspZE-) / Hermes API Fleet (https://x.ai/bot/5KLpaL-JIM2q629kbTh5L), not on this SSH relay template.
- **profile**: Bridge repo (SSH relay + native API docs): https://github.com/shagghiesuperstar/hermes-grok-bridge
- **log** (2026-09-27): Per-host secrets via Bitwarden Secrets Manager: Hermes maps a vault secret named FOO_<PROFILE> to FOO for the active profile (credential-shaped names only: ending in _API_KEY, _TOKEN, _SECRET, _KEY, or _PASSWORD). A generic FOO in the same project blocks the alias, because an alias never shadows a variable some source supplies under its real name, so every host silently gets the generic value. For per-host keys (for example a per-host memory API key), store only FOO_<PROFILE> entries and delete
- **log** (2026-09-27): Bitwarden secrets apply after ~/.hermes/.env with override_existing true by default, so a stale vault value beats .env. Fix the vault value; don't disable override.
- **log** (2026-09-27): Hindsight memory in cloud mode ignores the llm_* fields in hindsight/config.json; they only apply in local_embedded mode.
- **log** (2026-09-27): Graceful gateway restart: sending SIGUSR1 to the launchd-supervised Hermes gateway PID is the official drain-aware restart, the same path as `hermes gateway restart`.
- **log** (2026-09-27): For fleet orchestration the HTTP :8642 API (Hermes API Fleet) remains the sole talk path; this template covers the SSH relay method for Desktop-primary / API-not-up / one-off use only.
