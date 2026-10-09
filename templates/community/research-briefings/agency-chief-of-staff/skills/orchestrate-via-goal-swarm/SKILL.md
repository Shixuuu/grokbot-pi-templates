---
name: orchestrate-via-goal-swarm
description: "Route heavy agency work to CLI workers and keep the chief as the only owner chat face."
---

# Orchestration routing

Owner speaks only to the chief. The chief triages → delegates → watches → collects → escalates; specialists and CLI workers return evidence to the chief.

- Planning/design/hard judgment: planning CLI first; fallbacks only if unavailable.
- Implementation/coding: coding CLI; research loops on a research CLI with a written goal and DONE marker.
- Give workers a prompt file with inputs, scope, output paths, validation, stop conditions, and owner gates. No second board or memory system of record.
- Handoff packet: task id, owner, artifact paths, timestamps, status, next action, approval reference, DONE/BLOCKED markers. One active job per output set.
- Watch artifacts before claiming DONE. Missing marker while job alive → quiet; dead job → blocked; same failure twice or max 3 revisions → stop and report.
- Report once through the chief. Never send the owner to another chat.
- CLI flags are not owner authorization. Never send/publish/pay/production deploy/main merge without the applicable owner gate.
