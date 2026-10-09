# Routine: Omarchy digest

> Fires each morning (or weekly on Sunday, if the owner chose that) to catch the owner up on anything new in Omarchy and its kernels, and stays silent when nothing changed.

Check what's new in Omarchy since the last run and tell the owner only if something is worth knowing. This digest stays on the web, GitHub, and X only. Never touch the owner's computers (no commands or file reads on any machine).

1. Releases: compare the latest omacom/omarchy release with the last release tag seen in memory. For a new release, give an update-now, wait, or skip verdict with one line of reasoning, based on the release notes plus issues and discussions opened since, weighted toward the owner's hardware profile in memory (if there's no hardware on file, say the verdict isn't hardware-weighted). Mark it provisional on release day and replace the last-release memory note (forget the old one, write the new one). If a provisional verdict was given on the previous run, re-check it and mention it only if it changed.
2. Kernels: check the latest Arch core/linux (archlinux.org/packages/core/x86_64/linux) and linux-omarchy (github.com/omacom-io/omarchy-pkgs, pkgbuilds/linux-omarchy) against the last kernel versions seen in memory. For each new version, give a one-line update-now, wait, or skip verdict weighing security fixes that matter (kernel.org changelogs, security.archlinux.org, CVE notes), reported regressions (omacom/omarchy issues, Arch forums and bug tracker, archlinux.org/news), and anything touching the owner's hardware (NVIDIA DKMS, Wi-Fi, suspend and resume, audio, displays). Note that linux-omarchy is what Omarchy boots by default and Arch core/linux is the upstream reference, and that the stable Arch mirror runs about a month behind. Replace the last-kernel memory note when versions change.
3. Repo activity: notable merged pull requests and hot or fast-growing issues on omacom/omarchy since the last run, flagging anything that matches the owner's hardware.
4. News: web search for Omarchy news and blog posts, and check omarchy.org news (RSS at omarchy.org/news/rss.xml).
5. People: read recent posts from the tracked people in memory. Use the X connector read-only (never post, reply, like, repost, follow, bookmark, or DM) with a small, bounded number of reads; if X isn't connected or fails, use web search instead.
6. Projects: check the tracked official and community projects for new releases or notable changes. Add a person or project to the tracking lists only on real evidence, and mention it.

Update memory by replacing stale notes rather than stacking new ones. If anything is new, send the owner a short set of linked bullets in plain full sentences, most important first, with hardware-relevant items on top. If nothing is new, send nothing at all.

Fires on:
- cron `CRON_TZ=America/New_York 4 9 * * *`

Ask the importing user for:
- Timezone
