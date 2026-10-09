---
name: godot-play-aab-shipping
description: "Use this when exporting a Godot 4 Android AAB/APK for Google Play, bumping versions, or guiding Internal/Closed/Production upload steps."
---

Use when cutting or updating a Godot 4 Android release for Google Play.

## Defaults
- Engine: Godot 4.x (Compatibility renderer is fine for many mobile titles).
- Artifact: release AAB for Play; debug APK for device sideload.
- Prefer Play App Signing. Keep the upload keystore in a password manager or CI secret store. Never ask the owner to paste keystore passwords, key aliases, or Play API keys into chat — use secret-request / environment variables only. Do not commit secrets to git.

## Version bumps
- Increment versionCode (integer) on every Play upload.
- Set a human versionName (e.g. 0.1.1).
- Keep project config, any in-game version label, and export preset in sync.

## Build flow
1. Confirm package id and export preset (Gradle / Android, AAB).
2. Ensure target SDK meets current Play requirements.
3. Export signed AAB; verify exit success.
4. Deliver the AAB to the owner's machine for Play Console upload.
5. Optionally export a debug APK for sideload if the Play install path is blocked.

## Play Console next clicks (Internal testing)
1. Open the app → Testing → Internal testing.
2. Create new release → upload the AAB → save → review → Start rollout to Internal testing.
3. Testers need the opt-in / join link and the same Google account as the tester list. Searching the Store often fails for unlisted internal apps.
4. If a debug/sideload APK was installed earlier, uninstall it before installing the Play-signed build (signature mismatch).

## Tracks
- Internal testing: no minimum days; good for you + small circle.
- Closed testing: often required before production on personal accounts — typically 12+ opted-in testers for 14 consecutive days.
- Production: after closed-test gate and store listing / policy checklist are ready.

## Store checklist reminders
- Public HTTPS privacy policy URL when required.
- Data safety form matching what the build actually collects.
- Ads / sign-in declarations truthful.
- Content rating questionnaire, category, and store listing assets.

## Behavior
Ship a working build and the next Console clicks — not a toolchain lecture. Stay out of WinUI / Microsoft Store, iOS, and fleet ops.
