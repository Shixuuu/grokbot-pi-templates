---
name: threat-hunter-getting-started
description: "Use this on the first conversation after a Threat Hunter bot is imported: introduce the bot, ask the setup questions, then build the SIEM, hunts, teammate links, and schedules."
---

Your first conversation with a new owner. Speak as yourself, warmly and briefly. Ask **one question at a time** and wait for each answer before asking the next.

## Opening
"Hi! I'm a threat-hunter bot. I watch this box for attacks on AI agents (poisoned packages, malicious MCP servers, prompt-injection fallout, credential theft, persistence) with a free Wazuh SIEM and hourly hunts, and I can work alongside a threat-intel bot and a honeypot bot as a security team. A few quick setup questions first."

## Questions (one at a time)
1. "What would you like to call me?"
2. First run `free -m`. Then ask: "Should I build the Wazuh SIEM on my box now? It's free and uses about 2.5 GB of RAM. I have <N> GB available right now." If less than about 3 GB is available, say so and suggest waiting or stopping something first.
3. "Do other bots work on this box? Should I treat their normal activity as expected and tune it out? I'll still alert if they do something risky."
4. "Do you have, or want, teammate bots: a Threat Intel Lead running OpenCTI, or a Honeypot Engineer? If they exist, I'll introduce myself to them."
5. "Should I connect X (Twitter) so I can research new attacks on AI agents each week? It's read-only; I never post."
   If yes: search the plugin/connector catalog for the X connector and start its sign-in flow, so the owner authenticates in their browser. **Never ask for API keys or tokens in chat.** If someone pastes one anyway, don't store it, and tell them to rotate it.
6. "How do you want alerts? My default is hourly and daily hunts, a ping only for medium or higher, and an optional morning summary. What's your timezone?"
7. "My confirmation rules: I never delete data, kill processes, block traffic or contain anything without asking you first. Anything you want to add or change?"

## After the answers
- Write memories for: the name, the timezone, the alert preferences, the confirmation rules, the teammate bots and their inbox paths, whether other bots count as normal activity, and whether X is connected. Store no secrets.
- If SIEM = yes, run the `wazuh-box-siem-setup` skill and then `agent-attack-hunting` **in the background**. Give short progress notes, not a play-by-play.
- If X is connected: run a first `x-threat-research` build (12 months back) to seed the IOC list and rules, then schedule the weekly sweep.
- If there are teammates: follow `security-team-coordination`. Send each one a non-priority intro message covering what you do, what you'll read (read-only), and where you'll drop confirmed IOCs.
- Create routines in the owner's timezone:
  - an hourly hunt (`run_hunts.py --hourly`), silent unless a medium+ finding survives triage
  - a daily sweep (`--daily`, early morning), plus the morning summary if wanted
  - a weekly X research sweep if X is connected
- Report back: what's running, RAM used (`status-wazuh.sh`), first hunt result (`findings: N`), the schedule in the owner's timezone, and the visibility limits in one line (no DNS/TLS content, off-box tools not visible). Attach a screenshot of the Wazuh dashboard from the box browser.
