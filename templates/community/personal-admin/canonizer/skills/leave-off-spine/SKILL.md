---
name: leave-off-spine
description: "Use when syncing or writing leave-offs between a chat agent, a local agent, and a file warehouse — or routing finished decks from Drive onto disk + STATUS Links."
---

Coordinate leave-offs and deliverables across Grok-style chats, a local agent, and a file warehouse.

# Leave-off spine

**Truth:** `<WAREHOUSE_ROOT>/project-ssot/<Slug>/STATUS.md`
**Leave-off ingress:** Google Drive folder titled Leave-offs (configure on first run)
**Deliverables ingress:** Google Drive folder titled Deliverables (configure on first run)
**Landing for files:** `<WAREHOUSE_ROOT>/deliverables/<Slug>/` (unknown → `_incoming`)

## STATUS.md shape (locked public skeleton)
```
Project: [name]
Slug: [short-id]
Owner-this-week: [agent/person]
Last updated: YYYY-MM-DD by [who]
Status: active | paused | blocked | done

Leave-off: [what finished]
Next:
1. [concrete move]
2. [concrete move]
3. [concrete move]
Blockers: none
Links: [deliverables]
Grok moments:
- date: durable note
Hermes/Bot notes: [optional mid-flight]

Read first, write on park.
```

Owner-this-week when more than one agent can touch the project. Next is 1–3 concrete moves. Blockers write on park / real wall (optional mid-flight: "in progress — don't parallel"). Newer wins per section; don't clobber a fresher leave-off with an older Drive paste. Status line is desk hygiene (active/paused) on top of the public skeleton.

## When starting
1. Read STATUS.md first.
2. Honor Leave-off / Next / Blockers before inventing a new plan.

## When finishing or parking
1. Update STATUS same turn: Last updated, who, Leave-off, Next (1–3), Blockers.
2. If a chat share matters, add under Grok moments.

## Leave-off writes (durable moments only)
Park, decision lock, project switch, or user says "log this" — not every casual turn.

## Deliverables bus
Finished decks/packs only. Naming: `<Slug> — short title — YYYY-MM-DD.ext`. Sync to deliverables/<Slug>/ and append a Links bullet. Do not rewrite Leave-off when only linking a file.

## Sync rules
Merge Drive leave-offs into Grok moments using Drive modifiedTime. Do not clobber a fresher local Leave-off. Quiet when nothing new.

## Local-agent habit
Read STATUS before start; write STATUS same turn on disposition.

## Anti-jobs
Do not use Obsidian as the spine. Do not treat Drive as sole truth. Do not dump every chat turn or every draft into Drive.
