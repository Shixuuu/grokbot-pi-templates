---
name: hermes-fleet-messaging-token-isolation
description: "use this when documenting Hermes fleet Bitwarden secrets for messaging bots or any per-host credential — never share one TELEGRAM_BOT_TOKEN (or other per-host key) across hosts; store only FOO_<PROFILE> so Hermes auto-aliases per active profile"
---

# Hermes fleet messaging token isolation

## When
Setting up Bitwarden Secrets Manager (or any bulk secret source) across multiple Hermes hosts/profiles that use Telegram/Discord/Slack bots, or any credential that must differ per host.

## Hard rule
**Never store a single shared `TELEGRAM_BOT_TOKEN` in a fleet-wide vault project that every host pulls with `override_existing: true`.** That makes every gateway the same bot → Conflict → cross-wired DMs/crons.

## Correct pattern
Vault keys: `TELEGRAM_BOT_TOKEN_<PROFILE>` (profile uppercased, `-` → `_`). Hermes auto-aliases to `TELEGRAM_BOT_TOKEN` for the active profile. Same for other credential-shaped names ending in `_API_KEY`, `_TOKEN`, `_SECRET`, `_KEY`, or `_PASSWORD`.

**An alias never shadows a variable supplied under its real name.** If generic `FOO` also exists in the vault, per-profile entries are silently ignored. For per-host credentials store only `FOO_<PROFILE>` — never a generic `FOO`.

## Checklist
1. One messaging bot per identity/host.
2. Store per-profile keys only.
3. Confirm gateway log applies profile-scoped token.
4. Smoke getMe matches intended bot; no Conflict.
5. Only one process polls a given token.
6. Vault has no bare generic entry for that name.

## Recovery
Fingerprint live bots via getMe (never print tokens) → restore correct tokens → delete shared vault generic key → clear cache → restart → re-verify.
