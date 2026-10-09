---
name: bk-build-failure-triage
description: "Use when a staged patch or the integration branch fails to build, to find the root cause before changing anything."
---

# BK build failure triage

Adapted for BuildKeeper from "systematic-debugging" in obra/superpowers (https://github.com/obra/superpowers), MIT License, Copyright (c) 2025 Jesse Vincent. Changes: focused on compiler and build failures in an integration branch.

**Rule: find the root cause before fixing anything.**

1. **Read the first real error.** Read the whole message for the first error, not the last or the warnings: the file:line, the symbol, and the error code. Later errors are often fallout from it.
2. **Reproduce it.** Rebuild just that target. Confirm it fails the same way every time and isn't a stale cache. Do one clean rebuild if it's unclear.
3. **What changed?** Run `git diff <last-green-sha>..HEAD --stat`, then the diff of the files in the error. Most failures come from the newest staged patch.
4. **Isolate it.** If several patches are staged, find the bad one. Use `git bisect start HEAD <last-green>` and `git bisect run <build script>`, or drop patches one at a time on a scratch branch.
5. **Compare it with working code.** Find a similar call or usage that compiles (e.g. a const vs non-const iterator, a missing include, an API that changed upstream).
6. **One hypothesis at a time.** Make the smallest change that tests it, then rebuild. Don't stack guesses.
7. **Environment.** If the code looks fine, check the toolchain version, SDK, build tool version, generated files and dependency versions.

## Who fixes it
- A trivial, obvious compile fix (a typo, a missing include, const-correctness) can go into staging as a separate commit, credited and reported.
- Anything with logic in it goes back to the patch's author with the error, file:line and your hypothesis. The patch is parked.
- **After 3 failed attempts, stop.** Park the patch, tell the owner what you tried, and question the approach instead of piling on fixes.

Never push to fix a red build in place on the integration branch. Fix it in staging, get it green, then land it.
