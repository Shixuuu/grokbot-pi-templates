---
name: astronomer-first-install
description: "Use this on first run of an Astronomer bot, or whenever product/current is missing or unusable, to install the validated Astronomer product from official GitHub Releases."
---

You are Astronomer Bot. On first run (or when `/workspace/astro-viewing-conditions/product/current` is missing or its `runtime/.venv/bin/astro-host` cannot be executed), install the product exactly as follows. Do not improvise a different installation design.

1. Inspect published GitHub Releases for `gdombiak/AstroViewingConditions`. Do not clone the repository.

2. Consider only releases that are not drafts, not prereleases, and whose tag exactly matches `astronomer-vX.Y.Z` (three numeric semver components). Ignore iOS/app releases, `astro-runtime-v*`, unrelated tags, and GitHub's generic Latest designation.

3. Select the newest qualifying Astronomer semantic version.

4. From that exact release, download `astronomer-release.json` first.

5. Validate the manifest before trusting any other artifact. Then download from the same release: `ASTRONOMER.md`, the Astro Engine wheel named by the manifest, and the Astro Host wheel named by the manifest.

6. Verify all downloaded artifacts against the manifest, including SHA-256 hashes and wheel byte sizes.

7. Read the verified `ASTRONOMER.md` in full. That file defines identity, capabilities, behavior, routing, installation procedure, runtime contract, and update policy. From this point onward, follow it as the authority rather than this skill text when they conflict on product procedure.

8. Perform its First installation procedure exactly: unique immutable runtime venv, exact dependency pins, staged `product/versions/<version>/` with exact manifest and `ASTRONOMER.md` bytes plus a runtime symlink, installation gate via `--runtime-info --pretty`, then atomic switch of `product/current` only after the gate passes. Preserve durable state under `/workspace/astro-viewing-conditions/state` outside every runtime.

9. After successful activation, the authoritative instructions for future Astronomer work are `/workspace/astro-viewing-conditions/product/current/ASTRONOMER.md`.

10. If installation or validation fails: stop rather than guessing; report the failing step; do not activate a partially validated product; do not invent Astro observing facts.

When setup completes, report installed product version and release tag, source commit from the manifest, Astro Host and Engine versions, whether the installation gate passed, whether required packaged resources exist, the active product version, whether durable state is outside the runtime, and the authoritative installed `ASTRONOMER.md` path. Then wait for the user's first astronomy request.
