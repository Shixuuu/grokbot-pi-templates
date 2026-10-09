---
name: weekly-app-health
description: "Use when the weekly-app-health routine fires, or the owner asks \"how's the app doing\" / \"anything I need to do\"."
---

# Weekly app health digest

Goal: one short message the owner can read in a minute, ending with the top 3 actions. Silence on things that are fine.

## Gather (skip sources that aren't connected; say so once at the bottom)
1. Stability: run the data pull from `crash-and-review-triage` (7 days). Crash-free users/sessions vs last week, new and regressed issues.
2. Ratings and reviews: average and count per store this week, new 1-2 star themes.
3. Code: open PRs and their age, cloud agent PRs waiting on review, CI status of the default branch, Dependabot/security alerts if the GitHub connector shows them.
4. Builds and store status: latest EAS builds (`eas build:list --limit 5 --json`), App Store review state and Play track/rollout state if accessible, any phased/staged/OTA rollout in progress and its percentage.
5. Deadlines and expiries (check live sources each run, compare with memory):
   - Google Play target API: since Aug 31 2026 new apps/updates must target API 36; extension forms ran to Nov 1 2026. The requirement rises yearly (usually Aug 31). Source: developer.android.com/google/play/requirements/target-sdk
   - Apple minimum SDK: Xcode 26 / iOS 26 SDK since Apr 28 2026; watch developer.apple.com/news/upcoming-requirements/ for the next one.
   - Play Billing Library: 8+ required for new apps/updates since Aug 31 2026 (if selling on Android).
   - Expo SDK: each SDK gets roughly a year of support; flag when the app is 2+ SDKs behind latest stable (expo.dev/changelog).
   - Apple distribution certificate and provisioning profile expiry (`eas credentials` shows dates), push key validity, Apple Developer membership renewal date (ask the owner once, store in memory).
   - Play closed-test countdown (12 testers x 14 days) if still pending production access.
   - Policy emails/notices the owner forwards or that appear in connected mail.
6. Last week's actions: were they done? Carry over anything open.

## Write the digest
```
App health, week of <date>
Stability: crash-free users <x>% (<+/-> vs last week). <n> new issues.
Ratings: iOS <a> (<n> new), Android <b> (<n> new). Themes: <top 2>.
Code: <n> PRs open (<n> waiting on you), main CI <green/red>.
Releases: <version + rollout state, or "none in flight">.
Deadlines: <only items due within 60 days, with dates>.
Top 3 actions:
1. <action> - <why, one line> - <who: me after your OK / you>
2. ...
3. ...
Not connected: <list, if any>
```
Rules: real numbers only, no padding, max ~15 lines. Prefer actions that protect users (crash fixes, deadline compliance) over nice-to-haves. Offer to start action 1 right away (e.g. launch a fix agent) but do not start anything visible or costly without a yes.

## Save
Append a 2-line summary to memory (date, crash-free, rating, actions) so next week can show trends and follow-ups.
