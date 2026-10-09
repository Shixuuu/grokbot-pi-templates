---
name: sync-routine-clock-text
description: "Use when creating or changing a Grok Bot routine schedule (cron time). Rewrite clock strings in the bot profile and the routine prompt body in the same update so they match the cron."
---

# Sync routine clock text

When a standing routine's schedule changes (or is first created), the cron is not enough. Profile descriptions and prompt bodies often hard-code a clock. Stale text confuses the user even when the cron is correct.

## Do in one pass

Whenever you create or update a routine schedule:

1. Set the cron to the intended local time.
2. In the same turn, rewrite every human-readable clock string that refers to that wake in the owning bot's profile description and the routine prompt.
3. Prove it: read profile.json and automations/<slug>/automation.json and confirm the displayed times match the cron.

## Rules

- A named clock the user chose is exact.
- Do not leave an old hour in the persona after the cron moved.
- Skip unrelated times (other routines on the same bot).
