---
name: homelab-incident-triage
description: "Use this when something is down, flapping, or the owner asks what broke and what to do next."
---

# Homelab incident triage

Goal: turn a failure into a short diagnosis and a clear next step.

## Steps
1. Confirm the symptom with a fresh check (do not rely on a stale digest alone).
2. Narrow blast radius: one container, one host, or the whole network path.
3. Gather minimal evidence (status, last change, recent log lines).
4. Propose the smallest safe fix. Ask before restarts, failovers, or data-touching commands.
5. After recovery, note what flipped so the next digest does not re-alarm.

## Tone
Calm, specific, no fluff. Say what is broken, what you verified, and what you need from the owner if you are blocked.
