---
name: family-safety-sources
description: "Use when Child Activity Desk dumps per-child application/device usage into fact folders. Usage only — not message or post content scanning. Includes official parent-hub links, auth/block handling, and YouTube brief artifacts."
---

# Family safety — source adapters

Dump **usage** for enabled surfaces per child. Facts: apps opened, videos started, playtime, parental-hub activity. **Never** scrape message bodies, email bodies, SMS, DM text, social captions, or AI chatbot transcripts.

Layout: `/workspace/family-safety/{{child_slug}}/`. Overnight: each non-paused child → that child's enabled surfaces only.

Item fields when possible: `started_at`, `published_duration`, `inferred_watch` (`bounce`|`partial`|`likely_full`|`unknown`), `title`, `channel`/`app`, `hub_url`.

## YouTube artifacts (when YouTube enabled)

After the My Activity dump, write under the child folder:

- `daily-report.txt` / `daily-report.json` — **full** list (always)
- `all-titles.txt` — one title per line (always)
- When household `flag_problematic_videos` is on: soft title-heuristic tags → `out-there-candidates.json` + `brief-picks.json` (prefer flagged titles for a short sample; fill remaining slots from the rest; default sample size ~8)

Title heuristics are **not** content scanning of video bytes or comments — title/channel strings only. False friends are OK to under-flag rather than over-alarm.

## Tier 1 usage hubs
- YouTube — https://myactivity.google.com/product/youtube — starts ground truth; bounce/likely_full guesstimate
- Family Link — https://families.google.com/familylink/
- iOS Screen Time drop-folder — https://support.apple.com/ht208982
- Amazon Kids — https://www.amazon.com/parentdashboard/ · https://parents.amazon.com/intro — **drop-folder only** (see below)
- Meta Family Center / Quest — https://familycenter.meta.com/
- GameChanger — https://gc.com/ (if enabled)
- Gmail narrow — new contacts / security only (**no body scan**)

## Tier 2 usage hubs
- Xbox — https://account.microsoft.com/family
- PlayStation Family — https://www.playstation.com/en-us/ps-family-app/
- Nintendo Parental — https://www.nintendo.com/us/mobile-apps/parental-controls/
- Discord Family Center — https://discord.com/safety-family-center (**no DM contents**)
- Roblox Parental — https://en.help.roblox.com/hc/en-us/articles/30428248050068-Parental-Controls-FAQ
- Steam Families — https://help.steampowered.com/en/faqs/view/054C-3167-DD7F-49D4
- TikTok / Snap / IG — parent hubs for usage/settings; screenshot lane if app-only; **not** full caption wiretaps

## Location (optional secondary)
Find My https://www.icloud.com/find · Samsung Find https://www.samsung.com/us/apps/samsung-find/ — sparse last-seen only.

## Auth and block handling

- Record the result for each surface in the dump: `ok`, `signed_out`, `verification_required`, `skipped_no_drop`, or `blocked_unauthorized_ai_agent`. Tell the parent in the next report; never fill a gap with guesses.
- **Amazon Parent Dashboard:** automated (Playwright/MCP) loads of `/parentdashboard/activities/household-summary` return Amazon's "unauthorized AI agent" Conditions of Use wall. Record `auth_status: blocked_unauthorized_ai_agent`. No overnight automated Amazon dumps, no Continue-and-retry, no user-agent spoofing or other workarounds. Amazon Kids is parent-owned or drop-folder until the parent explicitly approves a Conditions-of-Use-compliant path.
- **Google hubs (YouTube My Activity, Family Link):** sessions expire often. On a sign-in page, record `signed_out` and skip; don't try to log in from a dump.

## Rules
Signed-in sessions. No passwords. No email from dump. Skip disabled. Never invent.
