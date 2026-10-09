---
name: grok-bot-computer-update-survival-tailscale
description: "Use when setting up Tailscale (or any installed tool, daemon, or key) on the Grok Bot computer, after a possible Computer Update/Reset, or when the bot can't reach tailnet hosts. Makes setup survive an update and self-restore with no human step."
---

# Grok Bot computer update survival (Tailscale)

A Grok Bot Computer Update can happen at any time, even without the operator. It wipes installed software, running processes, and everything outside /home/box (/var/lib, /etc, /tmp, /var/run). Everything under /home/box, injected secrets, and server-side routines and skills survive. Stock Tailscale keeps state in /var/lib/tailscale, so a plain install loses its node identity (and usually its IP) on every update.

Rule: never leave state, keys, configs, or scripts outside /home/box. Anything installed needs a restore script under /home/box plus an automatic check that runs it.

## One-time setup
1. Pick a persistent folder, e.g. /home/box/agent-data/infra/ with scripts/ and tailscale-state/.
2. In the Tailscale admin console, mint a reusable, tagged auth key (e.g. tag:bot-controller). Tagged nodes have no key expiry. If Tailnet Lock is on, pre-sign the key or sign the node once from a signing node; never put Lock signing keys on the Grok Bot computer.
3. Store the key as an injected secret TAILSCALE_AUTHKEY_SIGNED via the secure secret request. Never paste it into chat.
4. Start tailscaled with persistent state under that folder, then tailscale up with the auth key and advertise tags. If the node was already up with state elsewhere, stop it, copy that state into the folder, and restart so it keeps the same IP.
5. scripts/restore-tailscale.sh (idempotent, never echoes secrets): install Tailscale if missing; start tailscaled with persistent state if not running; fast path exit 0 if BackendState is Running and not locked out; else require TAILSCALE_AUTHKEY_SIGNED starting with tskey-auth- (exit 10 NEED_SECRET if absent) and run tailscale up; exit 20 NEED_LOCK_SIGNATURE if locked out.
6. scripts/detect-fresh-box.sh: exit 0 when restore is needed (binary missing, daemon down, backend not Running, or locked out).
7. Hourly, every-day routine: run detect; if needed, run restore and re-verify. Silent when healthy. Report RESTORED (with IP) or BLOCKED (NEED_SECRET means a secure secret request; NEED_LOCK_SIGNATURE means ask a signing node). No weekday-only schedules; updates happen on weekends too.

## Prove it (uninstall drill)
Run once after setup and after changes, at a quiet time:
1. Record tailscale ip -4.
2. Simulate an update (stop daemon + remove package).
3. Run detect (expect exit 0), then restore (expect exit 0).
4. Pass = same IP as step 1, lock status shows the node signed, and a known tailnet host answers.
5. Keep a manual fallback so a failed drill never leaves the bot offline.

## Fleet lessons
- Tailscale grants between tag:hermes-node hosts must include tcp:8642 if a fleet-health aggregator host probes the other nodes; otherwise the health guard shows false RED.
- After dismantling any direct mesh (Thunderbolt bridge or similar), audit for leftover bridge IPs in Hermes provider/peer URLs and tailscale serve targets.

## Recovery guidance
Recover a wedged computer with Update Grok Bot's Computer (keeps files and logins). Avoid Reset unless nothing else works; it restores an older snapshot.

## Done checklist
Every file under /home/box? Something automatic reinstalls/restarts it after an update? Drill passed? If any answer is no, say so plainly instead of calling it done.
