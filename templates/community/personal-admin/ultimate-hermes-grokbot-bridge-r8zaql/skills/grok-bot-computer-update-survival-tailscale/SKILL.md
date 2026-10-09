---
name: grok-bot-computer-update-survival-tailscale
description: "Use this when setting up Tailscale (or any installed tool, daemon, or key) on the Grok Bot computer, when the computer may have been updated or reset, or when the bot can't reach tailnet hosts. It makes the setup survive a Computer Update and restore itself with no human step."
---

# Grok Bot computer update survival (Tailscale)

## Why
The Grok Bot computer can be moved to a fresh instance (Computer Update) at any time. Installed software, daemons, and everything outside `/home/box` are wiped. Injected secrets and `/home/box` survive. Tailscale’s default state in `/var/lib/tailscale` is lost on every update.

**Rule:** never leave state, keys, configs, or scripts outside `/home/box`. Anything installed needs a restore script under `/home/box` plus an automatic check.

## One-time setup
1. Persistent folder e.g. `/home/box/agent-data/infra/` with `scripts/` and `tailscale-state/`.
2. Mint a reusable tagged auth key in Tailscale admin; if Tailnet Lock is on, pre-sign it. Never put Lock signing keys on the Grok Bot computer.
3. Store key as injected secret `TAILSCALE_AUTHKEY_SIGNED` via secure secret request — never paste into chat.
4. Start `tailscaled` with `--state` and `--statedir` under the persistent folder; then `tailscale up` with the auth key and advertise tags.
5. Save idempotent `scripts/restore-tailscale.sh` (install if missing, start daemon, fast-path if Running, else `tailscale up`; exit 10 NEED_SECRET / 20 NEED_LOCK_SIGNATURE).
6. Save `scripts/detect-fresh-box.sh` (exit 0 when restore needed).
7. Create hourly every-day routine: detect → restore → FAIL LOUD on NEED_SECRET / NEED_LOCK_SIGNATURE; silent when healthy.

## Prove it (drill)
Record IP → kill tailscaled + remove package → detect → restore → IP must match; lock signed; known host answers.

## Checklist before calling setup done
Everything under `/home/box`? Automatic restore? Drill passed? If any no, say so plainly.
