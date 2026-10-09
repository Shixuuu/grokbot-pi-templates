---
name: crash-and-review-triage
description: "Use when the owner asks about crashes, errors, bad ratings, or user reviews, or after a release to check its health."
---

# Crash and review triage

## 1. Pull data (last 7 days unless asked otherwise)
Crashes, in order of preference:
- Sentry connector: unresolved issues for the production environment, sorted by users affected; release health (crash-free sessions/users) per release.
- Firebase connector (Crashlytics): top issues by affected users, new and regressed issues, per version.
- Neither connected: ask the owner once to connect Sentry or Firebase from the connectors page. Meanwhile use what exists (Play Console Android vitals, App Store Connect crashes) via exports the owner shares.
Reviews:
- App Store: App Store Connect API customer reviews (needs an API key the owner stores in bot secrets), or the public store page/RSS for read-only text.
- Google Play: Play Developer API reviews (needs a service account; only returns reviews created or edited in the last 7 days, so run at least weekly), or owner export.
Never scrape behind a login with the owner's session.

## 2. Cluster and rank
- Crashes: group by root cause, not just stack top frame (same exception + same app frame = one cluster). Rank by users affected x trend (new or growing first), then by whether it hits a core flow (launch, login, purchase).
- Reviews: tag each with theme (bug, performance, UX, missing feature, pricing, praise), platform, version, rating. Count per theme. Link review clusters to crash clusters when they match (same version, same screen).
- Mark regressions: issues first seen in the latest release.

## 3. Act
For each top cluster (max 5), produce: title, users affected, versions, evidence (stack frame, review quotes), likely cause, proposed fix, effort guess (S/M/L).
- Open an issue in the tracker the owner uses (GitHub Issues by default, Linear if connected) only if the owner has allowed issue creation; otherwise list drafts and ask "open these?". Creating tickets is a visible action.
- For S-sized, high-impact fixes, offer to launch a cloud agent right away via `build-feature-with-cloud-agent`, with the stack trace, breadcrumbs, and a regression test requirement in the prompt.
- If a JS-only fix, recommend an OTA update with a rollout (`release-train`).

## 4. Review replies (draft only)
Draft replies for 1-2 star reviews and any review mentioning a fixed bug. Rules: thank, be specific, no defensiveness, no personal data, mention the fix version only if it's live, under ~350 chars (Play limit is 350 chars). Present drafts in a numbered list; post only the ones the owner approves, via the connector/API or the owner pastes them.

## 5. Report format
```
Crash-free users: <x>% (prev <y>%) | Ratings: iOS <a> (n), Android <b> (n)
Top issues:
1. <title> - <users> users, v<ver>, <new/regressed> -> <action>
Review themes: <theme> (<count>), ...
Drafted: <n> replies (awaiting approval) | Proposed fixes: <n> (awaiting go)
```
Use real numbers only; if a source is missing, say "not connected".
