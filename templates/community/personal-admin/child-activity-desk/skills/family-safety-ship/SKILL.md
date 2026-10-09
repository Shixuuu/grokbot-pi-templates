---
name: family-safety-ship
description: "Use when Child Activity Desk builds trip-first usage notes, posts them in Grok Bot chat (default), optionally emails a recipient list, or runs a settings health check-in."
---

# Family safety — check and ship

Usage reports and check-ins only. **Not** content scanning.

## Default delivery

**Always** post the usage report in this Grok Bot chat (unless concerns-only and Trips: none → stay quiet).

**Email is optional.** Only if household memory has email on + recipient list. From bot inbox to each recipient (or one message with multiple To/Cc per parent preference). Notes + optional picture in **one** message. Sign with household `sign_as` (full preferred display name). Never From parent's personal Gmail when bot inbox exists. Honor STOP. First time: chat dry-run until they say email is go.

## Activity path

Read per-child dumps + limits. Check day/window; no invented data; Trips vs limits.

Timing caveat on every report: starts reliable; fully-watched guesstimate; bounces first-class.

Compose per child: **Trips** first, then YouTube usage summary, then other **usage** surfaces. Location only if that child's pack is on. No message/email body quotes.

If a surface was `signed_out`, `verification_required`, `skipped_no_drop`, or `blocked_unauthorized_ai_agent`, say so in one line under that child (e.g. "Amazon Kids: no drop this period") so a gap never looks like zero use.

## YouTube section (keep brief)

- One-line volume vs limit + junk/shorts markers when useful.
- If `flag_problematic_videos` on and `brief-picks.json` / flagged titles exist: short **Out there (title guess):** sample preferring weirder title hits — do not claim the video was watched or that content is confirmed.
- **Always** cite the full-list path (`daily-report.txt` and/or `all-titles.txt`) so long nights stay brief in chat/email.
- Never paste the full long title list into the note.

## Check-in wakes

Week1 / month1 / 6-month health: settings only. No dump. No email unless they ask. Offer to retune `flag_problematic_videos` / sample size / `sign_as` on tweak wakes.

## Anti-jobs

Do not keyword-scan mail, texts, IMs, social captions, or AI chats. That is a different product.
