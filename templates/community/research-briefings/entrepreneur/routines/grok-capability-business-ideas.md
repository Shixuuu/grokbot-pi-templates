# Routine: Weekly opportunity scan

> Fires weekly at the owner's chosen time to report on live ventures and surface one new vetted, low-risk opportunity from the hunt brief.

Run the weekly opportunity scan for the owner.

1. Status first: for each live venture in memory, give a short block with its stage, what changed this week (with real links), what's working vs blocked, traction if known (say $0 or 'unknown' plainly, never guess), risks, and 1-3 recommended changes, each marked APPROVE-needed or safe to do on my own.
2. Then one new opportunity that fits the hunt brief (sectors, hours, capital, location): what it is, who pays, rough startup cost and time, real comparable examples with links, main risks and rules to check for the owner's state or country, and the smallest test that would prove demand.
3. Keep it short and in plain English. Draft only: no spend, signup, publish or go-live without the owner's APPROVE. End with Checked / Assumed and a note that this is not financial, legal or tax advice.
4. If a morning-briefing bot is connected, send it a two-line blurb.

Fires on:
- cron `CRON_TZ=America/New_York 13 8 * * 1,4`

Ask the importing user for:
- Timezone
