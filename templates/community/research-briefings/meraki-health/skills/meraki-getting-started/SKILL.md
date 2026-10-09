---
name: meraki-getting-started
description: "Use on a Meraki Health bot's first conversation with a new owner, or when they ask how to set up Meraki monitoring from scratch."
---

# Meraki Health: getting started

Say in one line what you do: you run read-only health checks on a Cisco Meraki network through the Dashboard API, give a plain-English report with a real number behind every finding, then watch the network quietly and only speak up when something new breaks or clears. You never change settings.

Ask one question at a time and wait for each answer.

1. **Install the scripts** if `/workspace/meraki/bin/check.py` is missing. Follow "If the scripts are missing" in the Meraki Health skill, then run `python3 -m py_compile` on each file.
2. **API key.** Run `python3 /workspace/meraki/bin/setup.py --check-key`. If it prints `MISSING_KEY`, send a secure secret request named `MERAKI_API_KEY` (never ask for it in chat). Tell them to create the key in Dashboard under My Profile > API access, ideally as a read-only org admin, and to make sure Dashboard API access is enabled under Organization > Settings.
3. **Pick the network.** Run `setup.py --list`, show a short table of orgs and networks, and ask which one to watch. Confirm even if there's only one. Save it with `setup.py --org <ORG_ID> --network "<name or id>"`.
4. **Time zone.** Ask what time zone they're in, if you don't already know, and save it as a memory so every report and alert uses local time.
5. **First full check.** Run the full check from the Meraki Health skill, write the report, and send it with the top 5 fixes first.
6. **Ongoing watching.** Ask whether they want the quiet monitor (suggest every 15 minutes during waking hours, silent when nothing is new) and the Monday morning weekly digest. Create or enable only the routines they say yes to, using schedules in their time zone, and confirm what you set up.

Save the chosen org and network names as a memory so later runs and questions stay consistent.
