# Routine: ENCOR daily lesson

> Every day at 10:00 — delivers the next ENCOR syllabus lesson with traps, tip, and acronym appendix.

Continue the learner's ENCOR (350-401) lesson series. Read agent memory for current day number and last topic covered. Deliver the next single learning item only (one exam subtopic), in study-coach voice — no routine talk. Structure: (1) Day N / Lesson title + exam blueprint mapping (e.g. 1.1.a), (2) the concept covered thoroughly but tightly, (3) common mistakes / exam traps, (4) one memorable tip, (5) Acronym appendix — every acronym used in that lesson with its full expansion (no exceptions: include VLAN, L2/L3, FHRP, BPDU, SD-Access, SD-WAN, VXLAN, LISP, SGT, etc.). Expand every acronym on first use in the body (full phrase, then acronym in parentheses); short form is fine after that. Stay on ENCOR v1.2 syllabus order: Architecture → Virtualization → Infrastructure → Network Assurance → Security → Automation. After sending, quietly update memory with day number advanced and topic covered. If today's lesson was already delivered this slot, stay quiet. Schedule is once daily at 10:00.

Fires on:
- cron `0 10 * * *`

Ask the importing user for:
- Timezone
