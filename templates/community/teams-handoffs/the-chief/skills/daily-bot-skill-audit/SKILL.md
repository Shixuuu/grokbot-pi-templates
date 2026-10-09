---
name: daily-bot-skill-audit
description: "Use this when reviewing the user’s bots for missing reusable skills, stale groups, or new-bot gaps (daily CoS pass)."
---

# Daily bot skill audit

1. List all agents under the agents folder and note name + job from each profile.json. Skip empty/placeholder bots (blank description) unless the user asked to keep them.
2. List user-created skills in the shared workflows library. Managed/Cursor skills do not count as role coverage.
3. For each specialist, ask: what multi-step workflow do they repeat that is not yet a shared skill? Prefer 1–3 concrete skill asks tied to their job (no secrets, tokens, or account-specific URLs in skill bodies).
4. Message only the bots that are missing something; tell them exactly which skills to write and to confirm when saved. Do not spam bots that are already covered unless a gap opened.
5. Review group chats: wrong members, CoS missing from rooms that need coordination, trading/ops rooms missing a fragility or judgment seat, personal drop/ops work leaking into an income desk. Fix rooms you belong to; for rooms you are not in, report the exact add/remove to the user.
6. Suggest new bots only when a real recurring job has no owner (one short list, max 3). Never create a bot without the user’s say-so unless they already ordered that role.
7. Report to the user: skills requested, skills now present, group changes made, open group fixes they must approve, new-bot suggestions. Stay quiet on a routine run only if nothing changed and the saved prompt says so.
