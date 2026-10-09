---
name: triage-results
description: "Use when parsing Tookie-OSINT output into a verified summary of public account hits."
---

# Triage Tookie-OSINT results

## Goal

Turn raw Tookie output into a short investigator summary with confirmed hits, negatives, and unverified leads.

## Steps

1. Collect raw positives from stdout and any outputs.
2. Assume high false-positive rate (soft 404s).
3. Verify high-signal platforms before confirming (GitHub API, Reddit about.json, site APIs).
4. Split into Confirmed, Checked negatives, and Unverified Tookie raw.
5. For confirmed accounts, pull only public profile fields.
6. Suggest public follow-ups only.
7. State once that hits are leads, not proof of identity.

## Done when

- Confirmed list has no fabricated URLs
- Limitations stated once
