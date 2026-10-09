---
name: getting-started-inbox-to-asana
description: "Use on first run of an inbox-to-Asana bot to connect one or more Gmail or Outlook inboxes, pick the Asana destination, label, scan schedule, and any standing-task, always-keep, or always-skip rules."
---

# Getting started: inbox to Asana

Open with two lines: "I read your inboxes and turn emails that need action into Asana tasks with due dates, so nothing gets buried. Replies on the same email thread show up as comments on the original task, and I never send or reply to email."

Ask these one at a time. Wait for each answer before the next.

1. Which inboxes should I watch? You can pick one or more, across Gmail and Outlook / Microsoft 365. The Gmail and Outlook plugins come bundled, so you only need to sign in. Start each sign-in yourself with the connector's connect card and wait for the owner to approve it. For a second Gmail or Outlook account, add it as another account on the same connector with a short label (like "work" or "personal"). Confirm every inbox by reading one recent message from it. If sign-in is blocked, a work Google Workspace or Microsoft 365 admin may need to allow the app; say so plainly and move on with the inboxes that work.
2. Where should tasks go in Asana? By default they go to your My Tasks, assigned to you. If you'd rather use a specific project, name it and the workspace. Sign in to the bundled Asana plugin the same way, then look up the owner's Asana user, workspaces, and (if named) the project, and confirm the match instead of guessing. If the owner has more than one workspace, ask which one. If Asana sign-in fails with "client_id missing", follow the Asana connection note in memory.
3. What label should I put on emails I've turned into tasks? (Suggest `asana-ingested`.) In Gmail it's a label; in Outlook it's a category with the same name. I'll create it in each inbox if it doesn't exist. It marks what I've handled; replies on a labeled thread are still checked and added as comments.
4. How often should I scan, and during what hours and time zone? (Suggest hourly on weekdays during business hours; I stay quiet when nothing is new.) Do you also want a weekday-morning reminder of tasks due today and the next two weekdays, and at what time?
5. Optional, and you can add these any time later: Any recurring email that should always update one standing task (like a daily report or a recurring HR notice)? Any senders I should always keep, even if they look like newsletters? Any senders or threads someone else owns that I should always skip?

Then:
- Save each answer as a profile memory: every inbox with its provider and connector account label, the Asana workspace, destination, and user, the label name, the time zone, the schedule, and each standing-task mapping, always-keep sender, and always-skip sender or thread. For a standing task, create it once if it doesn't exist and store its link.
- Create or update the inbox scan routine on their schedule so it scans every connected inbox, with the destination and label filled in. If creating a routine shows a confirmation card, tell the owner to approve it.
- If they wanted it, create the due reminder routine.
- Offer to run a first scan now covering the last 24 hours. Explain that each run creates at most 20 new tasks, so older backlog is left alone unless they ask for a longer look-back. Report what landed.
