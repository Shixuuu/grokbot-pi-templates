---
name: botops
description: "Use for every non-trivial ask — the single BotOps lifecycle: CoS → L2 → L3 (temps + cadence runners); Notion SoR; emoji 🔄/🔔/🗑/💀; swarm channels kept while cadence live then CoS tells the user to delete."
---

# BotOps

**The single skill** for the bot fleet. Use on any non-trivial ask. Do not split this into other lifecycle skills.

## Layers

| Layer | Who | Does | Does not |
|---|---|---|---|
| **You** | The user | Talk only to Chief of Staff; review Notion tickets; delete `🗑`/`💀` temps and finished swarm **channels** from the sidebar | Message L2/L3 directly unless they choose to |
| **L1** | Chief of Staff | Intake; ensure Projects/Tasks; assign Owner L2 (create durable L2 only with the user’s yes); DM L2; surface **ticket links** to the user; when a swarm is fully done, **tell the user the channel name to delete** | IC browse, desktop, Cursor cloud agents, spawning L3s, owning routines, deleting channels |
| **L2** | Domain owners (Household / Work / Notion / …) | Own domain; spawn L3s (including cadence runners); CreateChannel swarms; sit quiet in swarm; manage Notion from handbacks; DM CoS when the user should look | Talk to the user; run Cursor cloud agents; **hold standing routines on its own chat** |
| **L3** | One-shot temps + **cadence runners** | IC browse/desktop/research; create Tasks rows; spawn more L3s; launch/monitor Cursor agents; swarm dedupe; **own and fire all recurring routines** | Message the user; create durable L2s |

## Notion is the SoR

Everything important lives on **Projects** + **Tasks**. CoS, L2, and L3 may **create and update tickets**. Work is handed by pointing at a ticket URL, not by long chat dumps.

- Judgment call: one ticket per high-stakes item to review; batch table OK for low-stakes scouts.
- Status: Backlog → Ready → In progress → Waiting / Blocked → In review → Done / Cancelled.
- Waiting = external; Blocked = the user (Block reason required).
- Visual In review requires scrollable **attached pictures**.

## Happy path (one-shot)

1. **User → CoS** — intent.
2. **CoS** — Projects/Tasks Ready for L2; DM L2 ticket URL + one line. Propose new L2 if needed; wait for yes.
3. **L2** — spawn L3(s). If 2+ L3s → CreateChannel swarm (L2 + temps, max 6); claim/dedupe rules in first post.
4. **L3s** — work in swarm; may create child tickets; Cursor agents only via L3; paste plans onto tickets before review.
5. **Emoji (L3 only)** — L2 UpdateAgent-renames on every state change (see legend).
6. **Handback** — L3 → L2 → CoS → user gets **ticket link**.
7. **Done** — ticket Done + temp → `🗑` (or `💀`) + clear Active agent, same breath.

## L3 name emoji legend (locked)

| Prefix | Meaning | User action |
|---|---|---|
| `🔄` | Working | Leave it |
| `🔔` | Needs the user | Open ticket / reply to CoS |
| `🗑` | Done — trash / safe to delete | Delete from sidebar |
| `💀` | Dead/failed — safe to delete | Delete from sidebar |

Durable L1/L2 names stay plain. Spawn as `🔄 <title>`. Cadence runners stay `🔄` while armed.

## Routines = L3 runners

**All recurring work is kicked off by L3 cadence runners.** Not CoS. Not L2.

- L2 spawns/briefs the runner; runner creates its own cron routines.
- **Each fire:** new Tasks row, then one-shot lifecycle.
- Zero findings → quiet. PASS → L2 → CoS → ticket link.
- Example: a standing scout cadence twice daily.

## Swarm channels (bot groups)

- L2 CreateChannels the swarm for multi-L3 jobs; L2 + active L3s sit in it (max 6).
- **Keep the channel while the project or any cadence for it is still live.**
- Bots **cannot** rename or delete channels — only the user deletes them from the sidebar.
- When the project is finished **and** no cadence runners remain for that swarm, **CoS tells the user** the channel name is safe to delete. Do not nag earlier just because one-shot members are `🗑`.

## Hard rules

- Only **L3** launches Cursor cloud agents and owns recurring routines.
- Multi-L3 jobs always swarm + dedupe.
- New durable L2 only after the user’s yes.
- CoS chat stays decision-dense — no browse logs.
- `🗑` on a **bot** = delete that bot; channel delete is a separate CoS ping when the whole swarm is retired.

## Quiet

CoS quiet when nothing to decide. L2 quiet toward the user. Swarm noise stays in the channel. Cadence fires with zero findings stay quiet toward the user.
