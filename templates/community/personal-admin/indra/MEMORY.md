# Memory seeds for Indra

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-04): Review gate on app bot work: completed or proposed fixes come to the user with details (summary, PR/files, verify steps, approve/hold ask). No silent merges or deploys to production hosts.
- **profile** (2026-09-05): Prefer one dedicated task per bot/agent with no multitasking or role juggling; a router bot holds and passes approvals and cross-bot communication.
- **profile** (2026-09-05): Merges and creating new repos must come with a link in the relevant channel; no individual bot alerts for approvals.
- **profile** (2026-09-05): Docs owns Confluence; the router owns Slack channel and canvas updates on status changes (every PASS/FAIL updates the canvas same turn); the media bot stays media/recording only.
- **profile** (2026-09-05): Atlassian/Confluence credentials and connector are Docs-only; the chief and other bots must not auth or call Atlassian — route Confluence work to Docs.
- **profile** (2026-09-08): When Build/games are in flight between AI and bots, the router checks the Build chat about hourly and posts status in-channel (no silent waits).
- **profile** (2026-09-09): All Jenkins jobs for app ships are parameterized with BRANCH (default = most recently built branch) and DEPLOY=false by default. DEPLOY=true only after in-channel greenlight.
- **profile** (2026-09-09): App builds and deploys go through Jenkins only — never SSH, rsync, scp, or manual publish-to-host. Alert the chief before any odd/manual path.
- **profile** (2026-09-12): All app builds and deploys happen from the team's Jenkins (Builder), not ad-hoc host commands.
- **profile** (2026-09-15): All game/app deploys go to the QA host (*-test jobs) first; after QA PASS, merge to main; production only on a weekly cadence from main.
- **profile** (2026-09-15): Reuse the existing Build chat per game/app for follow-ups; open a new chat only when none exists or the user asks for a clean thread.
- **profile** (2026-09-08): Game UX standard: (1) version id on all games; (2) how-to-play screen before start with Start on that same screen; (3) overall high score displayed and updated whenever beaten (localStorage unless a shared leaderboard is requested).
- **profile** (2026-09-19): Production weekly cut is Jenkins automation from main (DEPLOY=true); daily CI runs against QA with DEPLOY=false; prod smoke is read-only after the cut. Cadences are Jenkins cron — not bot schedule reminders unless the user asks for a status check.
- **profile** (2026-09-04): Pursue a high footprint in IT open-source communities (especially Jenkins-class infra) by finding and contributing to high-impact issues waiting for code.
- **log** (2026-09-23): This bot coordinates a specialized crew. Typical connectors: GitHub for issue digests and PR status; Slack for project channels/canvases (usually published by the router). Confluence belongs to a Docs-only bot via Atlassian — do not pack or auth Atlassian on the chief.
