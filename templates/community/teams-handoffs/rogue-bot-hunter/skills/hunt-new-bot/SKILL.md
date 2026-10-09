---
name: hunt-new-bot
description: "use this the moment a new name appears in the teammates/fleet list, or the owner says a new bot exists. Primary trigger = new teammate. Event-driven only; never on a timer"
---

# Hunt new bot

There is **no native Grok Bot “agent created” event** and **no polling**. This skill is the trigger path.

## Primary trigger
**A new name appears in the teammates / fleet list** that is not in the known-fleet snapshot. When the prompt or an instructions update shows a new teammate id or name, run this skill immediately — that is the fire condition the owner wants.

## Other triggers (same hunt)
1. The owner says they created a bot, names a new bot, or asks you to check one.
2. You (or another agent) create a bot in this chat via CreateAgent.
3. An `[event]` clearly adds a new agent id.

Not a trigger: a cron, “just in case,” or re-checking bots already in the snapshot.

## Do
1. Diff the agents folder on disk against the known-fleet id snapshot (doctrine `fleet-known-ids`). Each new folder with `profile.json` is a candidate. Match against the new teammate name/id if one was named.
2. For each new agent, answer the four hunter questions (read-only). Do **not** invent billed token or dollar amounts.
   1. **Owner / name on the button.** Who is the human owner of record? (`namedBy`, empty profile, app-created). Before any money rail: whose name is on the mid-session stop button? No explicit human → cannot be OWNED.
   2. **Spend path.** What is the spend path, and can it refill it? (routines, MCP, nested work, wallets above vs inside the agent.)
   3. **Hard halt vs theater.** If the owner says stop, does a key / spend cap / instance actually die? Soft pause or chat-only stop with live credentials = **halt is theater**.
   4. **Niche.** If it vanished, what job is empty and who occupies it?
3. **Extra flags** (same hunt, fold into verdict; not fifth questions):
   - Swarm / copy / shared-box (mirrored job, ghost folders, multi-agent coord without owner ask)
   - Unowned orchestrator or cross-agent fan-out (SSH / fleet control / waking many bots) without owner ask
4. Verdict: OWNED / TENANT / ROGUE-SHAPED (unowned, unnamed, namedBy=app, self-refill, halt is theater, replicating, swarm/orchestrator without owner).
   - Refuse green-light **OWNED** until owner-of-record is explicit.
   - Prefer TENANT when owned but soft-halt / open niche / daily clock without clear refill kill.
5. Tell the owner: name, namedBy, verdict, one-line niche, any swarm/orchestrator flag, recommendation. **Ask before you cut.** Do not pause, delete, disconnect, or edit unless the owner already asked.
6. Append the new ids to the known-fleet snapshot so the same bot does not alert again.

## Stay quiet
If nothing is new vs the snapshot, stay quiet.

## Do not
- Create or re-enable a polling routine to fake this trigger
- Cut without an ask
- Re-alert bots the owner already dropped (keep them in the snapshot)
- Invent billed token or dollar amounts
- Confuse this with a token-loop consult (a loop specialist owns one-offs when present)
- Treat soft pause as a completed payment kill

## Done when
Each new bot has Q1–Q4 + extra flags + verdict, the owner was told (or stay-quiet applied), and the snapshot is updated.

## Backstop
Monday weekly fleet recap is the only scheduled catch for anything that slipped through.
