---
name: bot-ops-wire
description: "Use this when composing or parsing bot-to-bot messages in a multi-bot fleet: the compact Fleet Wire v2 envelope, acts, domains, shared-browser mutex, and change loop."
---

# Bot ops wire (Fleet Wire v2)

A compact, machine-first dialect for bot↔bot traffic. Humans always get plain English; a lead bot (or the owner) expands wire when a human needs it. Never invent private dialects. Changes go through the change loop below.

## Envelope
```
FROM>TO prio [ACT/]DOM.verb [obj] [k=v…] [| body] [→ next]
```
- **FROM/TO:** roster tag. TO may be `*` (all bots) or a list `A,B`.
- The first ` | ` splits head and body. One line preferred, two max. URLs go at the end.
- **obj** = first bare arg: the lane or object (`@handle`, a site, an episode or ticket id).
- **k=v** for numbers: `likes=8 follows=2`. Omit empty keys.
- **→ next** = the follow-on step. One act per line; a second action goes in `→ next`.
- **Case:** acts and CHR verbs UPPER; other verbs lower.

## Priority
| Mark | Meaning |
|---|---|
| `!` | Wake/act now; blocks someone |
| `.` | FYI; no wake needed |
| `?` | Reply expected next turn; no wake |
If ACT is omitted: `!` or `?` ⇒ REQ, `.` ⇒ RPT.

## Acts
| Act | Meaning |
|---|---|
| ACK | Understood / will do. Send at `.` unless it unblocks someone |
| NACK | Reject or can't; reason after `\|` |
| REQ | Need an action or resource from TO |
| RPT | State delta or result |
| BLOCK | Stopped; needs a human, auth, or judgment (route via the lead) |
| HOLD | Paused until a named condition (`HOLD/CHR` = waiting on the browser) |
| KILL | Lane is dead permanently |
| GO | Lead-only gate approval |

**Outcome token** (first word of the body on RPT/FREE): `done` `live` `part` `skip` `abort`.

## Roster
Your fleet's roster lives in its standing sync doc (tags, names, ids). Tags are 1–4 chars and unique. Subagents and automations sign as their **parent's tag**. A new bot gets a tag only once it actually sends or receives wire.
Example roster used below: `R` = lead/gatekeeper · `W` = wire owner · `A` `B` `C` = workers · `*` = all.

## Domains
| DOM | verbs | notes |
|---|---|---|
| CHR | CLAIM FREE STOP | shared-browser mutex; obj = lane |
| WIRE | idea patch push primer onboard drift | the dialect itself |
| TPL | stage live restage sync | public templates / shared bot copies |
| X (example) | engage post promo dm edit | social; obj = @handle |
Add product domains (site, publishing, docs, money ops…) via `WIRE.idea`. Keep money-specific verbs in that bot's own skill, never in the shared lexicon.

## CHR: shared-browser mutex
1. `CHR.CLAIM <lane> <purpose>` before touching the shared browser. Never CLAIM "just in case".
2. Everyone else sends `HOLD/CHR` (or stays silent) until FREE.
3. `CHR.FREE <lane> | <outcome> k=v` the moment the pass ends. **Exactly one FREE per CLAIM.**
4. **Only the CLAIM/FREE owner logs its own line** in the fleet's CHR log (newest at the bottom, local time prefix, the wire line verbatim).
5. **STOP is lead-only.** A CLAIM stale for more than 30 min with no progress → the lead sends `CHR.STOP` and reassigns.

## Change loop
1. Any bot → lead: `A>R ? REQ/WIRE.idea <pain> <proposed tag/verb>`
2. The lead gates it: `R>W ! GO/WIRE.patch vN` or `R>A . NACK/WIRE.idea | reason`
3. The wire owner updates this skill and the standing sync doc, then broadcasts `W>* ! WIRE.push vN | <summary>` (`!` once per version).
4. Every active bot replies `. ACK/WIRE.push vN` or `. NACK/WIRE.push vN | reason`.
5. On material drift from a published template copy, the wire owner tells the lead `!` to restage it.

## Rules
1. Deltas only: what changed, what's blocked, what you need. No turn narratives.
2. Numbers over adjectives: counts, ids, URLs, times.
3. **Never in wire:** secrets, passwords, OTP codes, money amounts, positions, bank or account details, email addresses, private case facts. Use neutral tokens (`sales=0`, `route=alerts→owner`).
4. Auth walls, 2FA, captcha, KYC, and spend = `BLOCK` → human, via the lead.
5. Humans get plain English. Never paste wire into human chats or public surfaces.
6. If something is ambiguous, add one plain-English clause after `|`.

## Anti-patterns → fix
- Prose mutex ("grabbing the browser", "FREEd it") → the `CHR.*` line verbatim.
- Status tails ("others HOLD until FREE", "may CLAIM") → delete; the mutex implies it.
- Null filler (`blockers=none`, `replies=none`) → omit the key.
- Padding over ~160 chars → put the detail in a file and send its path.
- Logging someone else's CLAIM/FREE, or a second FREE for one pass → owner logs once.
- Mixed envelopes or two acts in one line → one act; the rest goes in `→ next`.
- `!` on a plain ACK → `.`.
- Undefined tokens or tags → define them via `WIRE.idea` first.

## Examples
```
A>* ! CHR.CLAIM @brand engage-mid
A>* . CHR.FREE @brand | done likes=8 follows=2 reply=<url>
B>R . HOLD/CHR | skip site deploy; A holds since 13:03
R>A ! X.engage @brand pm → CHR.FREE
C>R ! BLOCK/CHR.CLAIM dashboard | sign-in wall; needs human
A>R ? REQ/WIRE.idea add DOC.sync for shared docs
R>W ! GO/WIRE.patch v3
W>* ! WIRE.push v3 | DOC.sync added
B>W . ACK/WIRE.push v3
```
