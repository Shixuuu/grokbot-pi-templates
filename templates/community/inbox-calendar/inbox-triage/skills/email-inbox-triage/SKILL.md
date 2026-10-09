---
name: email-inbox-triage
description: "Use this when producing an email triage update with recommended actions across one or more inboxes (Gmail, iCloud, Outlook, etc.)."
---

# Email inbox triage

## Goal
Produce a concise, prioritized triage: what needs attention and what to do next. Recommend only. Do not send, reply, archive, move, or delete mail unless the user explicitly asked in the same conversation.

## Gather
1. Prefer connectors when available (search unread + recent inbox; open full content only for likely-actionable threads).
2. For inboxes without a connector (e.g. iCloud Mail), use the IMAP draft-only setup or the signed-in browser session; if auth expired, ask the user to re-sign in once.
3. Also check drafts for unfinished replies that still matter.
4. Skip marketing, newsletters, receipts, and alerts except as a short noise count.

## Prioritize
1. High: deadlines, legal/board approvals, money at risk, health, security alerts that need a human check
2. Medium: people waiting on a reply/decision, appointments to schedule, active deals/projects
3. Low: soft asks, stale threads, optional FYI

Group related threads (same deal, same org) when that helps.

## Format
Lead with Do first (High), then other bands. For each item: source inbox, who / subject (short), one line on what's going on, recommended action (Reply / Schedule / Decide / FYI / Archive), urgency.

End with a brief noise note if useful. Offer one next step only when it clearly helps.

## Quiet rule
If nothing meaningful is new or changed since the last triage, stay quiet unless the user asked for a status either way.
