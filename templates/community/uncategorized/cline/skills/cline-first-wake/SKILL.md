---
name: cline-first-wake
description: "use on first import to install and verify Cline CLI + Cline Desktop on a Linux machine and hand ClinePass sign-in to the user."
---

# Cline first-wake (Linux)

Run once after import. Goal: Cline CLI and Cline Desktop installed and verified, then the user signs in with ClinePass. Never sign in for the user and never paste keys into chat.

## 0. Check the machine (read-only)
`uname -a`, `cat /etc/os-release`, `node -v`, `npm -v`, `which cline`, `ls ~/.cline`, `echo $DISPLAY`. The CLI needs Node.js 20+ (22 recommended). If Node is older or missing, install Node 22 with the distro's usual method (for example NodeSource or nvm) and say which one you used.

## 1. Cline CLI
1. `npm install -g cline`. The package is `cline`. Ignore any doc page that says `@anthropic-ai/cline`.
2. Verify with `which cline`, `cline --version`, `cline --help`, and `cline doctor`.
3. Save the real flag list with `cline --help > ~/cline/cli-help.txt` (create `~/cline/` first). Treat this file as the source of truth for flags, because the docs mention `--yolo`, `--act`, `--team-name`, `--no-teams`, and `-y` inconsistently.
4. Update later with `cline update`.

## 2. Cline Desktop
1. Get the latest Linux build from https://github.com/cline/cline/releases (tags look like `desktop-vX.Y.Z`). Debian or Ubuntu uses the `_amd64.deb`, and Fedora or RHEL uses the `.rpm`. There is no AppImage. Linux builds are beta, and some doc pages still say macOS and Windows only.
2. Debian or Ubuntu: download to `/tmp`, then run `sudo apt-get update` and `sudo apt-get install -y /tmp/Cline_<ver>_amd64.deb`. apt pulls in dependencies such as `libwebkit2gtk-4.1-0` and `libayatana-appindicator3-1`.
3. Verify with `dpkg -s cline` and `which cline-app`. The Desktop binary is `cline-app`, so it doesn't clash with the CLI.
4. Launch it on YOUR OWN desktop display: `DISPLAY=$DISPLAY cline-app &` (use the value from step 0, never a hardcoded one). On a shared machine, other agents' displays are separate, so the user won't see the window there. Take a screenshot to confirm it renders.

## 3. ClinePass sign-in (the user does it)
- ClinePass is a Cline subscription provider, with model ids like `cline-pass/<model>` (for example `cline-pass/glm-5.3`) and 5-hour, weekly, and monthly usage limits.
- The easiest path is Desktop: open `cline-app` on your display, hand the user the desktop, and have them pick ClinePass and sign in. On Linux the CLI shares Desktop's login, so the CLI is signed in afterward too.
- The CLI path is `cline`, then `/settings`, then ClinePass, or `cline auth`. The CLI's provider id is `cline-pass`, which the docs don't list. Sign-in may open a browser.
- Don't try to complete OAuth yourself.
- Afterward, verify with `cline --auto-approve false --json "Reply OK" | jq -r 'select(.type=="run_result")|.text'`. Credentials live under `~/.cline/data/settings/`. Never print or copy that folder.

## 4. Safe defaults
- Create `~/.cline/rules/` with one global rule. It says: ask before destructive commands, sudo, deleting files, pushing to remotes, or touching secrets, and work only inside the given project folder.
- Report what was installed (versions, paths), whether Desktop renders, whether sign-in works, and anything that failed.

## Rules
- The CLI auto-approves every tool by default. Always pass `--auto-approve false` unless the user has explicitly cleared a sandboxed task.
- Never run `cline doctor fix`. It kills every running Cline process, including other agents' sessions.
- Never set up Telegram or Discord connectors without `--allowed-user-id`, because otherwise anyone can run tasks on the machine.
- On a shared machine, the Cline login in `~/.cline` is visible to every agent there. Tell the user that once.
