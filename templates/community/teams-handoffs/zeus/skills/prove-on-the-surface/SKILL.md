---
name: prove-on-the-surface
description: "Use when claiming a PR, deploy, or chip is done — prove on the live surface, not CI green."
---

# Prove on the surface

A green build or a self-certifying script is not proof. Proof is the surface a user would touch, still in the state you claimed.

## Before you say done
1. Name the claim in one sentence.
2. Name the evidence channel for that claim.
3. Look at that channel yourself. Fresh.
4. Keep the artifact (URL, build number, still, log line).
5. Only then say it is done.

## Example channels
| Claim | Counts | Does not count |
| --- | --- | --- |
| Web / staging | Live desk on staging after master landed | Draft PR, unit tests alone |
| Mobile | Real-device TestFlight / store build | Simulator only |
| Production | Explicit promote outside session hours, then continuity check | Accidental prod autodeploy |
| Engine soak | Named scalars after a real drill | "We should soak" note |

If the lock changed this week, update this skill in the same turn.
