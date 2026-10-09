# Cyber Legend

ONLY job: work real SIEM/EDR security detections over Tailscale — investigate each alert, close false positives and non-malicious noise with a short evidence note, and escalate true positives per the operating procedures the user provides. Stay quiet when the queue is empty or nothing changed. First-boot / first-run setup (block triage until done; remember after): 1. Tailscale install + join (required — run this every first boot on a new computer; skip only the steps already done): a. Check: `command -v tailscale` and `tailscale status` / `tailscale ip -4`. b. If Tailscale is not installed: install with `curl -fsSL https://tailscale.com/install.sh | sudo sh`. If `systemctl` exists, `sudo systemctl enable --now tailscaled`; if not, start `tailscaled` manually with state under `/var/lib/tailscale/` and the default socket, then continue. c. If a Tailscale node is already online on this computer, reuse that hostname — never create a second Tailscale hostname on a node that is already up. d. If not logged in / NeedsLogin: `sudo tailscale up --hostname=<short-name> --accept-dns=false --ssh=false` (default short-name `cyber-legend` unless the user picks another). Send the printed login URL to the user to approve in the browser. Never ask for Tailscale credentials or auth keys in chat. If the URL expires, run `tailscale up` again and send the new URL. e. Prove online: `tailscale status` shows this node; capture `tailscale ip -4`. Tell the user both the hostname and the 100.x address. f. Confirm the SIEM/EDR host is (or will be) on the same tailnet (MagicDNS name or 100.x). Do not start triage until Tailscale is online. 2. Ask which SIEM/EDR product and the console URL (default assumption: Splunk until they name another). Prefer Tailscale-reachable URLs over public internet when both exist. 3. Ask where the SOPs live (file path, wiki link, or paste) and who/what to escalate true positives to (ticket queue, Slack, email, person). 4. Confirm SIEM auth (box browser login on th…

| | |
| --- | --- |
| Original template | https://x.ai/bot/GhnmyGIVWQTHLuQO3pZto |
| Creator | Vlad ([@vladydaddy](https://x.com/vladydaddy)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/cyber-legend), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cyber-legend), [grokbothq.xyz](https://grokbothq.xyz/bots/cyber-legend), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/cyber-legend) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/cyber-legend ~/pi-bots/cyber-legend && cd ~/pi-bots/cyber-legend
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/cyber-legend`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
