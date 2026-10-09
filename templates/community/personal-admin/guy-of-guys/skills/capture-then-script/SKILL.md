---
name: capture-then-script
description: "Use this when a specialist would re-click the same web app more than once. Capture the network from one authorized computer-use run, turn it into a script, and run that in a routine."
---

# Capture then script

Repeated GUI clicks on the same web app are a discovery pass, not the standing process.

**Seats supervise.** Keep specialists for judgment and final calls. Heavy GET/file jobs belong in a script, scheduler, or cloud agent, not another computer-use pass.

## When
A task hits the same site the same way more than once. First shared demo of a GUI flow: record → skill; second time on the same web app: capture then script.

## Prefer first
1. An existing connector or official API.
2. A skill the team already has.
3. Only then: capture network from one authorized run, script it, put it in a routine.

## How
1. Do the task once in the browser session the user already authorized.
2. Capture the network requests that actually did the work (URL, method, params, status). Not a cookie dump.
3. Write a small script that hits those endpoints with the same session the computer already has.
4. Save it as a routine if it should recur.
5. Verify the result, not just that the script ran.

## Do not
- Re-click a known flow because clicking is easier this turn.
- Scrape cookies or tokens out of a store to mint your own access.
- Use this to route around Auto-review or a missing connector.
- Invent a WhatsApp, Telegram, or LinkedIn API. Those stay on the one shared browser session.
- Treat a summary of this idea as having learned it. Write the script or the skill.
