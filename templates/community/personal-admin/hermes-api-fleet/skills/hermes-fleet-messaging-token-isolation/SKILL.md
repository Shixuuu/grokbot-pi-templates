---
name: hermes-fleet-messaging-token-isolation
description: "use this when documenting Hermes fleet Bitwarden secrets for messaging bots or any per-host credential — never share one TELEGRAM_BOT_TOKEN (or other per-host key) across hosts; store only FOO_<PROFILE> so Hermes auto-aliases per active profile"
---

# Hermes fleet messaging token isolation

## When
Setting up Bitwarden Secrets Manager (or any bulk secret source) across multiple Hermes Macs/profiles that use Telegram/Discord/Slack bots.

## Hard rule
**Never store a single shared `TELEGRAM_BOT_TOKEN` (or other messaging bot token) in a fleet-wide vault project that every host pulls with `override_existing: true`.**

That pattern makes every gateway the same bot → Telegram `getUpdates` Conflict → one host “wins,” others go silent, and crons/DMs cross-wire (e.g. host B’s cron replies appear as host A’s bot).

## Correct pattern (Hermes-native)
Hermes auto-aliases profile-scoped credential secrets:

- Vault keys: `TELEGRAM_BOT_TOKEN_<PROFILE>` (profile name uppercased, `-` → `_`)
- Active profile `work` → `TELEGRAM_BOT_TOKEN_WORK` is applied as `TELEGRAM_BOT_TOKEN`
- Same for every other named profile
- Profile name `default` does **not** get a suffix alias — use an unsuffixed local `.env` value, or run a named profile.

Shared vault is still fine for secrets that **should** be identical (provider API keys, etc.).

## Profile alias rules (verified in Hermes source)
- Aliasing applies only to credential-shaped names ending in `_API_KEY`, `_TOKEN`, `_SECRET`, `_KEY`, or `_PASSWORD`. A vault secret `FOO_<PROFILE>` is applied as `FOO` for the active profile (`agent/secret_sources/registry.py`: `_profile_alias_target`, `_Applier.apply_source`).
- **An alias never shadows a variable that some source supplies under its real name.** If a generic `FOO` also exists in the vault, every host gets the generic value and the per-profile entries are silently ignored. For any per-host credential (messaging tokens, per-host memory API keys), store only `FOO_<PROFILE>` entries and never a generic `FOO`.
- Bitwarden applies **after** `~/.hermes/.env` with `override_existing: true` by default, so a stale vault value silently beats `.env`. Fix the vault value; do not turn override off.

## Checklist
1. One Telegram bot per messaging identity / host (BotFather).
2. Store `TELEGRAM_BOT_TOKEN_<PROFILE>` per profile in Bitwarden — **not** bare `TELEGRAM_BOT_TOKEN` in a shared project.
3. Confirm on gateway start: log line `applied profile-scoped TELEGRAM_BOT_TOKEN_… as TELEGRAM_BOT_TOKEN`.
4. Smoke: `getMe` username matches the intended bot; no `Conflict: terminated by other getUpdates`.
5. Only **one** process may poll a given bot token (no second gateway/sidecar on the same token).
6. For every per-host credential, confirm the vault has no generic entry with the bare name.

## Recovery if already broken
1. Fingerprint each host’s live bot via Telegram `getMe` (never print tokens).
2. Restore correct tokens from pre-sweep `.env` backups.
3. Delete shared vault `TELEGRAM_BOT_TOKEN`; create per-profile keys.
4. Clear `bws_cache.json` TG entries; restart gateways; re-verify.
