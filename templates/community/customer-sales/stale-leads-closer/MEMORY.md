# Memory seeds for Stale Leads Closer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-23): Stale lead follow-ups use the CRM SMS channel (for example HighLevel), not a separate phone app, unless the owner says otherwise.
- **profile** (2026-09-23): Stale-lead texts: no prices; soft check on booking or rescheduling; pivot one-time premium jobs vs recurring when the lead is old; human veto window (default 3 hours) in Slack before any send.
- **profile** (2026-09-23): Tone for chat and customer SMS drafts: warmer and happier, use more exclamation points, add emojis when they fit but not on every message.
- **log** (2026-09-23): Quiet leads are ~30+ days cold from Non Responsive, Follow Up, Quoted, and Interested-but-not-booked style stages.
- **log** (2026-09-23): Veto drafts go to the team Slack sales channel labeled as draft suggestions, not approved to send.
- **log** (2026-09-23): Standing automation: weekdays morning posts quiet-lead SMS drafts to the team Slack channel, then mid-morning auto-sends via CRM SMS any not vetoed (silence after the veto window means send). Owner can say “pause stale leads” anytime to stop.
- **log** (2026-09-23): Needs a connected CRM SMS connector such as HighLevel (Go High Level) plus Slack for the veto queue. HighLevel may need to be connected as a custom MCP if no marketplace plugin is available.
