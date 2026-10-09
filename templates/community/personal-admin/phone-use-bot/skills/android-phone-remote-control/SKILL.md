---
name: android-phone-remote-control
description: "Use this when an assistant needs to see and control the user's Android 11+ phone from the box desktop (mirror its screen and tap through apps) over Tailscale with Wireless debugging and scrcpy, or to troubleshoot or tear down that connection."
---

# Android phone remote control (Tailscale + Wireless debugging + scrcpy)

Works only on Android 11+. iPhones cannot be remote-controlled this way.

## 1. Tailscale on the box
- Check `sudo tailscale status`. If the box is already on the user's tailnet and the phone shows up, skip to step 2.
- Install if needed: `curl -fsSL https://tailscale.com/install.sh | sudo sh`.
- There's no systemd, so start the daemon by hand: `sudo mkdir -p /var/lib/tailscale && sudo nohup /usr/sbin/tailscaled --state=/var/lib/tailscale/tailscaled.state --socket=/run/tailscale/tailscaled.sock >/workspace/tailscaled.log 2>&1 &`
- Run `sudo tailscale up --hostname=grokbot-computer --timeout=8s`. It prints a login.tailscale.com/a/... link. Send it to the user to approve.
- The user installs the Tailscale app on the phone and signs in to the same account.
- Verify with `sudo tailscale status` (the phone appears as an `android` row) and `sudo tailscale ping -c 2 <phone 100.x IP>`. The connmark/iptables health warnings are harmless.

## 2. Pair adb
- Install adb: `sudo apt-get install -y adb`.
- On the phone, the user goes to Settings > About phone and taps Build number 7 times, then opens Developer options > Wireless debugging and turns it on.
- The user taps "Pair device with pairing code" and sends the code, the pairing IP:port, and the main-screen IP:port. The two ports are different. A screenshot works well, and the code expires within about a minute, so act immediately.
- Run `adb pair <ip>:<pairPort> <code>`, then `adb connect <ip>:<connectPort>`. Confirm with `adb devices`, which should show `device`.
- The connect port changes whenever Wireless debugging restarts. Reconnect with `adb connect` using the new port. Re-pairing is usually unnecessary.

## 3. Mirror with scrcpy
- scrcpy is not in Debian apt. Download the static release: find the latest tag via the redirect of `https://github.com/Genymobile/scrcpy/releases/latest`, then `curl -fsSL -o scrcpy.tar.gz https://github.com/Genymobile/scrcpy/releases/download/<tag>/scrcpy-linux-x86_64-<tag>.tar.gz`, `mkdir -p /workspace/scrcpy`, and `tar xzf scrcpy.tar.gz -C /workspace/scrcpy --strip-components=1`.
- Launch it on the agent's own desktop display: `cd /workspace/scrcpy && ADB=/usr/bin/adb DISPLAY=$DISPLAY nohup ./scrcpy -s <ip>:<connectPort> --no-audio --max-size=1024 --video-bit-rate=4M --window-title="Phone" --stay-awake >/workspace/scrcpy.log 2>&1 &`
- An XDG_RUNTIME_DIR warning is harmless. Confirm with Screenshot that the window appears.
- Drive the phone by delegating to a computerUse subagent. Tell it the window title, that clicks become taps, and that the circle button is Home.

## 4. Limits
- Banking and some other apps use secure-screen protection and show black in scrcpy. Do not try to bypass it. Use the site in phone Chrome, in a normal tab.
- Never enter codes, move money, submit forms, or send messages unless the user explicitly asked for it.

## 5. Tear down (on stop, or when done)
- `for p in $(pgrep -x scrcpy); do kill $p; done` then `adb disconnect <ip>:<port>`. Verify with `adb devices` and `pgrep -x scrcpy`.
- Tell the user they can fully revoke access by turning off Wireless debugging on the phone and removing the box device from the Tailscale admin page.
