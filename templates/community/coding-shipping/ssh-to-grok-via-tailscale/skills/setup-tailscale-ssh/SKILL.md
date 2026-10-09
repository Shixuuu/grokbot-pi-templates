---
name: setup-tailscale-ssh
description: "Use when this bot is first created, on first run, after Update Grok Bot's Computer wiped Tailscale, or whenever the user wants Tailscale SSH into Grok Bot's computer. Installs or restores Tailscale, enables SSH, sets boot autostart, backs up login state and SSH host keys, sets up self-heal and key-expiry routines, offers an SSH ACL, and gives the post-setup reminders."
---

# Setup Tailscale SSH on Grok Bot's computer

Run this immediately on first run, after a computer update, or whenever asked. Skip getting-started questions; this is the assignment. Default node name is `grok-bot`.

## How Update Grok Bot's Computer works (why this kit exists)
Update is not a patch: the platform starts a brand-new instance and migrates only `/home/box` (files, configs, chat data, browser logins). Everything installed at the system layer is gone: apt/npm/pip packages, `/opt`, `/usr/local/bin`, `/var/lib/tailscale`, Docker images, and any patch to the boot script `/usr/local/bin/start-sand-box`. The boot hook itself is wiped, so nothing can bring itself back after an update. The answer is: keep the whole recovery kit in the home dir, and have a scheduled routine run it.

## Fast path: recovery kit already exists
If `~/.tailscale/bootstrap-tailscale.sh` exists, just run `sudo ~/.tailscale/bootstrap-tailscale.sh`. It is idempotent: reinstalls tailscale + iptables, reinstalls the autostart wrapper, restores login state from `~/.tailscale/state/tailscaled.state` (same node, same IP, SSH on, no re-login) and SSH host keys from `~/.tailscale/state/ssh/` (clients' known_hosts stays valid), re-hooks boot autostart, starts the watchdog, and applies the node name from `~/.tailscale/tailscale.conf`. Only if no state backup exists does it print a `https://login.tailscale.com/...` URL to send the user. Then make sure the routines exist and go to "After it works".

## First-time setup: build the kit in `~/.tailscale/`
1. `~/.tailscale/tailscale.conf` with `TS_HOSTNAME=grok-bot` (lowercase letters, digits, hyphens; use the name the user wants). Keeps the node name stable instead of the VM's random default like `grok-bot-vm-12345678`.
2. `~/.tailscale/tailscaled-autostart`: wrapper that starts `tailscaled` if not running (state `/var/lib/tailscale/tailscaled.state`, socket `/run/tailscale/tailscaled.sock`, port `41641`), then bare `tailscale up` so saved prefs incl. SSH stay intact (retry with `--ssh` if bare up fails). `--watch` mode restarts the daemon if it dies (lock so only one watchdog runs), and copies the state file to `~/.tailscale/state/tailscaled.state` and `/var/lib/tailscale/ssh/ssh_host_*_key` to `~/.tailscale/state/ssh/` whenever they change. Backups must be owned by `box` (files 600, dirs 700): the update's home-dir migration silently skips root-owned files, so a root-owned backup is lost. The migration also resets directory modes to 755, so the watchdog re-applies `chmod 700` to the backup dirs on every loop. Before starting the daemon, restore missing host keys from that backup.
3. `~/.tailscale/bootstrap-tailscale.sh` (run as root, idempotent, never kills a healthy `tailscaled` or other services' processes):
   - install tailscale via `curl -fsSL https://tailscale.com/install.sh | sh` (fallback: pkgs.tailscale.com apt repo) plus `iptables`;
   - install the wrapper to `/usr/local/bin/tailscaled-autostart`;
   - if `/var/lib/tailscale` is empty and no daemon is running, restore state and SSH host keys from the backup;
   - hook the wrapper into `/usr/local/bin/start-sand-box` between marker comments (backup the original, atomic replace, `bash -n` check; place it before any other autostart hook that waits for a Tailscale IP);
   - start the watchdog;
   - if `NeedsLogin`, run `tailscale up --ssh --hostname=$TS_HOSTNAME` in the background and print the login URL; if `Running` and the hostname differs from the config, `tailscale set --hostname=$TS_HOSTNAME`.
4. Run it, send the user the login URL if one is printed (never invent URLs, never ask for an auth key unless a URL is impossible), and after login confirm the state and host-key backups exist and are owned by `box`.

systemd is not available (PID 1 is `tini` / `pod-daemon`), so never rely on `systemctl enable`. Prefer Tailscale SSH over classic `sshd`; the local Linux user is `box`. The state backup is the node's identity: keep it private and never share or upload it.

## Verified behavior of a real update
After an actual Update Grok Bot's Computer the kit worked end to end: the self-heal check reran the bootstrap within minutes, Tailscale was reinstalled at the latest version, and the node came back with the same name, IP, key expiry and SSH host keys, no login. Known side effect: backup dirs come back at 755 (the watchdog fixes that).

## Self-heal routine (required)
Read the `routines` skill, then create a routine named "Auto-restore Tailscale" on `@every 5m` (the minimum interval) if neither this bot nor another of the user's bots already has one doing the same job (two bots running the bootstrap at once is pointless). Its prompt: check whether `tailscale` is installed and `tailscaled` + the `tailscaled-autostart --watch` watchdog are running; if all healthy, stay completely silent. If anything is missing (typically right after Update Grok Bot's Computer), run `sudo ~/.tailscale/bootstrap-tailscale.sh`, verify BackendState is Running with the configured hostname and SSH on, confirm the SSH host keys were restored (not regenerated), and message the user once with the result; if a login URL is printed, send that.

## Key expiry reminder (required)
Tailscale node keys expire (about 180 days by default); after that `ssh box@grok-bot` stops working and restoring the backup won't help. Create a weekly routine "Tailscale key expiry reminder" (Monday morning, inside weekday hours) that reads `Self.KeyExpiry` from `tailscale status --json` and stays silent unless expiry is 21 days away or less, then tells the user the date and to open login.tailscale.com/admin/machines and choose Disable key expiry for the node (or re-authenticate). Also suggest disabling key expiry right after setup.

## Lock down SSH with ACL (recommend, the user applies it)
The default tailnet policy lets any of the user's devices SSH in as any user, including root. Offer this `"ssh"` block for the Access controls page (login.tailscale.com/admin/acls/file), with the user's own login email in `src`; the user edits the policy themselves since a mistake can lock them out:
```json
"ssh": [
  {"action": "check", "src": ["<your-login-email>"], "dst": ["autogroup:self"],
   "users": ["box", "autogroup:nonroot"], "checkPeriod": "12h"}
]
```
Effect: only the user's own devices, no direct root (use `sudo`; box has passwordless sudo), and a browser confirmation every 12h. `"accept"` instead of `"check"` skips the confirmation. Verify afterward with `sudo tailscale debug netmap` (SSHPolicy shows `holdAndDelegate` for check mode and `"root": ""` when root is denied).

## After it works, always tell the user
1. How to connect: from any device on the same tailnet, just run `ssh box@grok-bot` (MagicDNS short name; use the `TS_HOSTNAME` from `~/.tailscale/tailscale.conf` if it was changed). The full name `box@grok-bot.<tailnet>.ts.net` or the Tailscale IP also works.
2. Update Grok Bot's Computer moves the bot to a fresh machine and wipes the system install and boot hook, but the kit in `~/.tailscale/` survives and the 5-minute routine reruns it automatically: same name, IP, SSH and host keys, no re-login. They can also run `sudo ~/.tailscale/bootstrap-tailscale.sh` or just ask this bot. Update is different from updating the Grok Bot app, and from Reset Grok Bot's Computer (rolls back to a snapshot; rarely needed).
3. If a fresh login ever happens (no backup), the old node shows offline in the admin console (login.tailscale.com/admin/machines). Delete it so the name isn't taken (otherwise the new one becomes `name-1`). The old IP can't be recovered.
4. They also need Tailscale on their own device, **or** they can use Tailscale web SSH at `https://console.tailscale.com`.
5. CLI install on their own machine, then `tailscale up` with the same account:
   - macOS (Homebrew): `brew install --cask tailscale`
   - Linux: `curl -fsSL https://tailscale.com/install.sh | sh`
   - Windows (winget): `winget install Tailscale.Tailscale`
   GUI download: https://tailscale.com/download

## Changing the node name later
Edit `TS_HOSTNAME` in `~/.tailscale/tailscale.conf` and rerun `sudo ~/.tailscale/bootstrap-tailscale.sh`. Tailscale names are lowercase.
