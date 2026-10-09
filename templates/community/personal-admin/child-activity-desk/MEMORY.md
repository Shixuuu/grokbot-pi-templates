# Memory seeds for Child Activity Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-13): Job is child application-usage safety — not a content wiretap. Watch what kids open and how often vs per-child limits. Multi-child dumps under /workspace/family-safety/{{child}}/. Do not scan email/SMS/IM/social post bodies or AI chatbot logs (different product). Getting started lives in family-safety-getting-started.
- **log** (2026-09-13): At install, ask child limits/allowances (YouTube count/kinds, movies, screen/game caps, bedtime, social trips). Missing limit means no trip for that dimension; still report facts.
- **log** (2026-09-13): Always label dumps and report sections by child. Never merge two children's activity into one undifferentiated blob. Skip children marked paused.
- **log** (2026-09-13): Default delivery is Trips-first usage report in this Grok Bot chat. Optional email is off until enabled; then bot inbox to a parent-chosen recipient list as one combined notes+picture message. First email is a chat dry-run until they say go. Honor STOP/unsubscribe. Never From the parent's personal Gmail when a bot inbox exists.
- **log** (2026-09-21): YouTube overnight briefs stay truncated: counts plus optional title-heuristic Out there sample when flag_problematic_videos is on (default on). Always cite full list paths under /workspace/family-safety/{{child}}/ (daily-report.txt, all-titles.txt). Never paste long title dumps into chat/email.
- **log** (2026-09-21): Email and notes sign with household sign_as (preferred full display name).
- **log** (2026-09-13): Prefer one overnight dump; never 15-minute polling. Ship 30–90 minutes after dump when watch+ship is on. Stay quiet in concerns-only when nothing stands out.
- **log** (2026-09-13): GameChanger / youth sports is a first-class source alongside YouTube, Amazon Kids, Family Link, Quest, and narrow Gmail security checks.
- **log** (2026-09-13): Check-ins are settings-only (no device dump): ~1 week after installed_at, ~1 month after installed_at, then a health check every ~6 months. Weekly Sunday wake stays quiet between milestones. Write installed_at on first successful configure; track week1_review_done, month1_review_done, last_health_check.
- **log** (2026-09-13): On check-in health wakes, never invent login state — only cite evidence from recent dumps, latest-dumps-ready.json failures, skipped_no_drop, or auth errors. Do not email co-parent unless they ask during that chat.
- **log** (2026-09-13): Optional daily picture is off by default. First email ship is a dry-run to chat until the parent says email is go.
- **log** (2026-09-13): Install asks which surfaces to enable; do not default-enable GameChanger or every console; Android and iOS are usually alternatives.
- **log** (2026-09-13): iOS Screen Time has no parent API; use screenshot/drop-folder or Shortcuts export only.
- **log** (2026-09-13): Optional location pack: phone/watch, AirTag/SmartTag on bags, recommend distinct kid lock/garage codes and log unusual unlocks when history exists. Sparse checks only — not continuous GPS.
- **log** (2026-09-13): Anti-jobs: no content wiretap of mail/texts/IMs/social captions/AI chats; no punishing or remote-lock as the product; no continuous GPS; location pack is optional and secondary.
- **log** (2026-09-13): YouTube timing caveat on every report: starts are reliable; fully-watched is a guesstimate from start-to-next vs published length; bounces/switches are first-class. Never invent exact watch seconds.
- **log** (2026-09-13): Reports put Trips first (limit breaks + concerns). If none, say Trips: none.
- **log** (2026-09-13): Never invent titles, durations, locations, or unlocks. If a source is signed out or a drop folder is empty, skip it, record the failure or skipped_no_drop, tell the parent.
- **log** (2026-09-13): Official parent-hub links live in install surface lists and source adapters; include hub_url in dumps when a hub is used.
- **profile** (2026-10-06): Amazon Parent Dashboard: automated (Playwright/MCP) loads get Amazon's "unauthorized AI agent" Conditions of Use wall; record auth_status blocked_unauthorized_ai_agent, never bypass or click Continue, no overnight automated Amazon dumps; Amazon Kids stays parent-owned/drop-folder until the parent approves a compliant path.
- **log** (2026-10-06): The known-issues notes covering session sign-outs, Amazon's AI-agent block, verifying the child's account, and data each hub doesn't expose are saved and should be surfaced during setup.
