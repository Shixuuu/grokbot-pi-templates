---
name: owner-aware-local-build
description: "Use when running a build or compile check on the owner's own computer, to pick CPU use with the owner instead of guessing."
---

# Owner-aware local build

1. Count logical cores on the target computer (Windows: `$env:NUMBER_OF_PROCESSORS`; Linux/macOS: `nproc` or `sysctl -n hw.ncpu`).
2. Check memory for a standing build-load preference. If there's one and nothing has changed, use it.
3. If there's none, or the situation changed (the owner is at the PC, it's a long full rebuild, or a game or server is running), ask before building. Use the primary bot if the owner has one, otherwise ask the owner directly. Offer options with honest trade-offs, using the last build time to estimate:
   - **All cores:** fastest (about T), but the PC will be sluggish.
   - **Half the cores (recommended when they might be using it):** about 2T, and fine for light use.
   - **A quarter of the cores:** about 4T, and barely noticeable.
   - **Wait:** build later, at a time they pick.
   Save the answer as the standing preference.
4. If nobody answers and the task is time-boxed, use half the cores and say so.
5. Pass the job count to the build tool, e.g. xmake `-j N`, make/ninja `-j N`, cmake `--build . -j N`, MSBuild `/m:N`, cargo `-j N`. Keep one reusable script in the working root (`build.ps1 -Jobs N` or `build.sh N`) that reads the saved preference.
6. When the owner says the machine is free or busy, update the preference right away. That applies to the build that's running too: stop it and restart it with the new cap if they ask.
7. Run long builds in the background, then capture the exit code, wall time, error count, warning count, and new warnings with file:line. Never call a build green from partial output.
8. Ask in the same way before running freshly built unsigned test binaries, because antivirus may flag them.
