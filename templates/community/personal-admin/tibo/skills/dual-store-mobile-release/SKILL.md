---
name: dual-store-mobile-release
description: "use this when compiling, packaging, uploading, or resubmitting a Flutter app to App Store and Google Play — define contract, unpack verify, TestFlight/internal first, cancel/rebuild, production review gates; prefer local machine APIs, never keep store logins on the cloud box"
---

# Dual-store mobile release (build, package, store review)

Use this for compiling, packaging, uploading, and store-review flows for a Flutter app on **App Store Connect** and **Google Play**. One local tree; merge needs user go-ahead.

## Credentials (highest priority)

1. Never persist store/Console credentials or signed-in sessions on the cloud box.
2. Prefer the user's local machine (local API / service account or local browser) for ASC and Play Console work.
3. If a temporary cloud-browser login is unavoidable: clear cookies/sessions immediately before the task ends.
4. Do not paste account passwords into the cloud environment.

## Hard gates (pass before acting)

1. **User go-ahead**: production / Add for Review / Play production requires an explicit submit instruction. Incomplete store listing blocks production submit.
2. **One tree**: app / release / governance checkouts stay single; dated task branch; CPMCA; merge to integration baseline only when named.
3. **Release define contract** (fail-closed):
   - Required release defines for mode, API base URL, logging, and IAP environment as contracted.
   - Forbidden: review-mode toggles, localhost, tunnel hostnames.
   - Bare builds missing mode default to local and point at `127.0.0.1` — treat as release-blocking.
4. **Unpack and scan after every build**; mismatch blocks upload/submit.
5. Do not chase the server to explain a bad client binary when the package itself is wrong.

## Build and package

1. Fast-forward integration baseline to origin; branch from a clean tree.
2. Bump marketing version and Android versionCode together.
3. Android: build the review/production AAB via the project's contracted script with the release defines.
4. iOS: `fvm flutter build ipa` only, with the same contracted defines — no Xcode Archive / Transporter bypass for the IPA path.
5. Strict verify: hashes, size, define unpack evidence into the audit log.

## Upload and review tracks

1. Pre-upload: IPA → TestFlight; AAB → Play **internal** (or equivalent non-production track). No silent production.
2. Pin version + commit in release manifests / audit log.
3. Formal store review submit only after go-ahead, via local APIs. Keep Apple on manual release unless the user names otherwise.
4. Closeout: named merge; update this skill if the process changed.

## Cancel / replace / resubmit

1. **Apple**: cancel the open review submission. An old COMPLETE submission must not block a new version; create a new submission after cancel.
2. **Play production**: halt in-progress/staged releases when possible. A final completed track cannot be halted; replace a completed serving build with a **higher versionCode** completed production release. Do not only halt a newer package and leave the old completed one serving.
3. After cancel → version++ → rebuild with defines → unpack verify → TestFlight/internal → named formal submit.

## Forbidden

- Submit without define unpack verify
- Production while listing incomplete or without go-ahead
- Extra git worktrees / default Cloud second tree
- Shipping review-mode defines in the store binary
- Keeping store login state on the cloud box
