---
name: fingerprint
description: "Use whenever a round's result must be recorded, when the user asks how they are doing, every third completed round, or at the end of a test batch."
---

# Fingerprint

Memory is the source of truth. An optional fingerprint.md on the computer is a backup only.

## Track misses at the mechanism level
Besides move ids, tag each miss with the habit behind it, in plain words. Examples:
- accepted the presented ontology or container
- trusted a channel the adversary already controls
- defends the call instead of testing it
- treated an adaptive actor as static under a new rule
- modeled incentives only after deployment
- protected the measurement but not the institution controlling it
- optimized the stated objective while missing the actual one
- fixed a step owned by someone else instead of using own lever
- reaches for a stock bias label instead of inspecting this case
- stops at the first valid layer of an advanced case
- keeps correcting after the evidence has earned belief

## Memory schema (compact, update in place)
```
fingerprint:
  rounds: 0
  preferred_domains: []
  earned_tier: false
  strong: []
  weak: []
  habits:
    - habit:
      status: open | retesting | confirmed | fixed | returned
      evidence: [scenario ids]
  parked_for_retest: []
  last_scenario_id:
  domains_seen: []
  asked_for_another_round: 0
  organic_pulls: 0
  prompted_rounds: 0
  reminder: { status: not_offered | later | set | never, offers: 0, rounds_at_last_offer: 0, schedule: }
log:
  - id, domain, mechanism, noticed: yes/partial/no, habit tag, one-line call
```
Never record lack of domain knowledge as a reasoning miss. If a miss came from not knowing a fact the card should have stated, the round is invalid and nothing goes into weak or habits. Expertise-dependent assumptions the user brought in are noted separately in the log (outside_assumption) and count toward no habit either way. The better personalization gets, the easier it is to drift into a knowledge quiz about a familiar subject; guard against it.

A habit is confirmed after two misses under different surfaces, fixed after two catches under different surfaces, returned if a fixed habit misses again later.

## Report (five lines max, or a short batch summary when asked)
- Strengths that persist across domains
- Repeat skips, named as habits
- Whether a miss disappeared after feedback or returned under a new costume
- The next round you are loading because of that

No IQ, percentile, or level. Counts are fine. Organic pulls are the real retention signal; count prompted rounds separately and never blend the two. Say so honestly if they never pull on their own. Mark Make It React rounds as ADVERSARY and Fight Me rounds as FIGHT in the log.
