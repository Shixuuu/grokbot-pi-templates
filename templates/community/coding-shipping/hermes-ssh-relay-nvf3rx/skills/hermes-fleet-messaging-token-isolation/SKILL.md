---
name: hermes-fleet-messaging-token-isolation
description: "Use this when documenting Hermes fleet Bitwarden secrets for messaging bots or any per-host credential — never share one TELEGRAM_BOT_TOKEN (or other per-host key) across hosts; store only FOO_<PROFILE> so Hermes auto-aliases per active profile."
---

# Hermes fleet messaging token isolation

## When
Setting up Bitwarden Secrets Manager (or any bulk secret source) across multiple Hermes hosts/profiles that use Telegram/Discord/Slack bots, or any credential that must differ per host.

## Hard rule
**Never store a single shared `TELEGRAM_BOT_TOKEN` (or other messaging bot token) in a fleet-wide vault project that every host pulls with `override_existing: true`.**

That pattern makes every gateway the same bot → Telegram `getUpdates` Conflict → one host "wins," others go silent, and crons/DMs cross-wire (host B's cron replies appear as host A's bot).

## Correct pattern (Hermes-native)
Hermes auto-aliases profile-scoped credential secrets:

- Vault keys: `TELEGRAM_BOT_TOKEN_<PROFILE>` (profile name uppercased, `-` → `_`)
- Active profile `work` → `TELEGRAM_BOT_TOKEN_WORK` is applied as `TELEGRAM_BOT_TOKEN`
- Profile name `default` does **not** get a suffix alias — use an unsuffixed local `.env` value, or run a named profile.

Shared vault is still fine for secrets that **should** be identical (provider API keys, etc.).

## Per-host secret aliasing gotchas
- Aliasing applies only to credential-shaped names (ending in `_API_KEY`, `_TOKEN`, `_SECRET`, `_KEY`, or `_PASSWORD`). A vault secret `FOO_<PROFILE>` is applied as `FOO` for the active profile.
- **A generic `FOO` in the same project blocks the alias.** An alias never shadows a variable some source supplies under its real name, so every host silently gets the generic value. For per-host keys (messaging tokens, a per-host memory API key), store only `FOO_<PROFILE>` entries and delete the generic `FOO`.
- Bitwarden secrets apply **after** `~/.hermes/.env` with `override_existing: true` by default, so a stale vault value beats `.env`. Fix the vault value; don't disable override.

## Checklist
1. One Telegram bot per messaging identity / host (BotFather).
2. Store `TELEGRAM_BOT_TOKEN_<PROFILE>` per profile in Bitwarden — **not** bare `TELEGRAM_BOT_TOKEN` in a shared project.
3. Confirm on gateway start: log line `applied profile-scoped TELEGRAM_BOT_TOKEN_… as TELEGRAM_BOT_TOKEN`.
4. Smoke: `getMe` username matches the intended bot; no `Conflict: terminated by other getUpdates`.
5. Only **one** process may poll a given bot token (no second gateway/sidecar on the same token).
6. For every per-host credential, confirm the vault has no generic entry with the bare name.

## Recovery if already broken
1. Fingerprint each host's live bot via Telegram `getMe` (never print tokens).
2. Restore correct tokens from pre-sweep `.env` backups.
3. Delete the shared vault `TELEGRAM_BOT_TOKEN` (and any other generic per-host key); create per-profile keys.
4. Clear `bws_cache.json` Telegram entries; restart gateways gracefully; re-verify.
