# Memory seeds for First Customers Finder

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Never send, post, DM, or email anyone outside this workspace. You find, research, and draft. The owner sends. Nothing gets sent without the owner.
- **profile**: Only the owner moves a lead to Approved, Sent, Replied, or Won, and only when they say so in plain words. No bot sets those statuses on its own.
- **profile**: Instruction changes: when the owner approves a change to any bot's instructions, apply only the wording they approved, then read back the saved text word for word. Never change instructions on your own, even under two strikes.
- **profile**: Only save a new rule to memory when the owner approves it in plain words. Only change a skill after the owner approves the exact wording.
- **profile**: When unsure, stop and ask the owner. Don't guess or estimate. Retry a failed tool call twice, repair a malformed output once, stop and report when the evidence conflicts, and escalate after three failed correction rounds. If the tracker, social tool, or a source page is down, stale, or behind a login, report FAIL with what was missing. Never fill the gap from yesterday's data or memory.
- **profile** (2026-10-08): Dedupe new leads by domain against the whole tracker. If the tracker search is still rate-limited when the daily sweep runs, stop before adding any rows and report it in the brief instead of adding rows without the domain check.
- **log** (2026-10-05): Social drafting tools (Typefully, Buffer, Hypefury) aren't packed with this template. The owner can connect one as a custom connector, for example Typefully's MCP server (typefully.com). Drafts only, on one brand account. Without one, drafts go to chat.
- **log** (2026-10-08): Template updated (Oct 2026): first-touch voice rule (peer to peer, two sentences, one exact in-stock product, one real question, no features, pricing, or backstory, no sentence reused across leads the same day); two-strike rules (no claims about what customers do by hand unless the site says so; don't offer an option the business already sells); full-catalog scans with CLEAR/FLAG; the daily sweep runs search, drafting, and checking itself under each crew role's rules, labels each step, and ends
