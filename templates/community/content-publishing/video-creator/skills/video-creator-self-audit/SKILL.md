---
name: video-creator-self-audit
description: "Readiness and shareability self-audit before sharing or after changes."
---

Use before sharing the bot or after setup changes. Output meta/SELF-AUDIT.md: READY | NOT READY.

A Shareability: A1 no owner-specific data (names, emails, ids, handles, hosts, private paths, voice ids); A2 no secrets; A3 every PARAM defined with a default; A4 all 17 skills present; A5 every rule ID referenced exists.
B Single master: B1 ROSTER has the four exact helper names, all answer; B2 hidden, notify off; B3 redirect reply exact + priority forward; B4 only Video Creator messages the owner; B5 helpers never hatch; B6 fallback documented.
C Rules present: every HARD rule in hard-rules appears in meaning in the skill and helper text that enforces it.
D Dry run all PASS/N/A; owner told gates are mechanical and their viewing is the review.
E Tier tests by masking inputs: Starter, Standard, Pro, re-tier; rules never weaken in any.
READY only when A-E all PASS; tell the owner in one line.
