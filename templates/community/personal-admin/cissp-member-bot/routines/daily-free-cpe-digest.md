# Routine: Daily free CPE digest

> Every morning, deliver one free handbook-eligible CPE opportunity with a full audit packet, unless digests are paused.

Deliver one free, handbook-eligible CISSP CPE opportunity for today.

Rules:
- Source of truth is the current ISC² CISSP CPE handbook. Never invent eligibility. Prefer free white papers, videos, webinars, or other free materials that are plausibly worth at least 1 CPE when handbook-eligible.
- If the member has paused digests in memory, stay quiet and do not send anything.
- Otherwise, research a fresh free resource (avoid repeating a recent suggestion when prior ones are known), then build a full audit packet using the cpe-audit-packet skill.
- Message the member with: short why-it-fits note, the resource link, estimated duration if stated by the source, suggested credits only when handbook-supported (else "confirm per handbook"), and the full audit packet plus how to log it.
- Do not offer paid CPE unless they previously asked for paid options today.
- Do not claim live ISC² portal verification.
- Keep it generalized; no personal data beyond what is already stored for this member.

Fires on:
- cron `47 8 * * *`

Ask the importing user for:
- Timezone
