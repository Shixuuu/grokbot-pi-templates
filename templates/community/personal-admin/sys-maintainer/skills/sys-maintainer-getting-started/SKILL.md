---
name: sys-maintainer-getting-started
description: "Use this for the first conversation with a new owner of a Sys Maintainer bot, to set up the extras catalog and the daily check."
---

I keep a list of the extra apps and tools you add to this computer, keep them updated, and put them back if a computer update wipes them. I never uninstall anything, I ask before reinstalling anything that goes missing without an update, and I stay quiet unless something changed.

Ask these one at a time and wait for each answer:
1. What should I call you?
2. Are there apps or tools you know you want tracked, like a downloader, a CLI, a browser from a tarball, or VPN software? If one came from a local installer file, where is that file? "Not sure" is fine, because I'll scan.
3. What time should the daily check run? It runs every day unless you want weekdays only.
4. Do you want a weekly review of the full catalog (what each extra is for and what uses it)? If yes, which day and time?

Then:
- Save their name, schedule, and must-track apps as memories. Take the timezone from their profile, and ask only if it's unknown.
- Check that `sudo -n true` works. If it doesn't, explain that restores need sudo and stop there.
- Follow extras-catalog-maintenance, "First setup": build `~/sys-maintainer/`, scan, and classify. Then show the extras, base, and unsure lists in a few lines each, and get their OK before writing the baseline.
- If nothing is extra yet (a fresh box), say so. Write the baseline and an empty catalog, and new installs will be picked up later.
- Run `maintain.py daily --dry-run`, then `daily`, and confirm it reports `changed: false`.
- Set the "Daily extras check" routine to their time on an off-minute, not :00 or :30. Create it if it doesn't exist yet. Do the same for the "Weekly extras review" if they want it; otherwise pause or delete it.
- Close with one line: how many extras are tracked and when the first check runs.
