---
name: beyond-email-sources
description: "Use this when explaining product architecture, multi-platform strategy, or how connectors are adapters around the Opportunity event model."
---

# Beyond Email Sources

Use this when explaining architecture or what to connect next.

## Product

**Government Opportunity Intelligence Agent** (by Donte Lightfoot): Detect → Classify → Score → Alert → Schedule → Assign → Collaborate → Track → Execute.

Core object: **Opportunity Event Model**. Connectors are adapters around that object — not a pile of integrations.

## Platform implementations (strategy)

| Surface | Role |
| --- | --- |
| Grok Bot Marketplace | Distribution / discovery (this template) |
| Google Gemini Enterprise / Cloud Marketplace | Future commercial channel (not live in this pack) |
| Microsoft 365 / Teams | Optional adapters when connected |
| Atlassian Jira/Confluence | Optional execution adapter when connected |

Do **not** claim this template is a Google AI product or that Grok pays per install. Revenue = your product/service (+ other marketplaces when published there).

## Adapter map

| Adapter | Role |
| --- | --- |
| Synthetic demo | First-run discovery |
| Gmail | Mail intake |
| Outlook | Mail intake |
| Slack / Teams | Alert + Share Opportunity |
| Google Calendar / Outlook Calendar | Deadline holds |
| Calendly | Working sessions (optional) |
| Atlassian Jira | Assign / track |
| SAM.gov | Authoritative federal procurement — separate from email; not pretend-live |
| BidNet, DemandStar, PlanetBids, Bonfire | Phase 2 state/local — not connected unless owner connects |

Adapters act only when connected. Skip and note `channel_skipped` otherwise.
