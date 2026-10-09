---
name: unsigned-soap-draft-transfer
description: "Use this when transferring voice-note SOAP into an EHR as unsigned drafts for clinician QA (kickoff phrase like do notes)."
---

# Unsigned SOAP draft transfer

Use when the owner says the kickoff phrase (default `do notes`) or asks you to transfer voice-note SOAP into the EHR as unsigned drafts.

## Hard stops
- NEVER sign or finalize a note.
- NEVER fabricate clinical content. No source note = no EHR note.
- NEVER type credentials. If a login form appears, stop and hand the browser to the human.
- Narratives only. Leave goal grids at template default. Do not click copy-from-previous for goals.
- One recording = one patient. Multi-patient / shared sessions: write only the patient the source note documents; flag the other.
- Proof of a write is a post-reload persistence check on the saved note (content fingerprints + section lengths). A save redirect or queue move alone is NOT proof.
- Write, verify, and save narratives in ONE atomic page evaluate. Never split write and save across calls. If the browser evaluate tool truncates large scripts, inject the full generated script once via an owned Chrome CDP connection (still one atomic evaluate).

## Per-run order
1. Read the operative runbook in full, plus the current-backlog block in the run log.
2. Confirm EHR identity read-only: treating clinician name visible, expected queue widgets present, no login form. Never select a browser by ordinal label.
3. Pull the live visits-without-notes queue from the dashboard. Skip any frozen/excluded visit ids listed in the runbook or log.
4. Pull the voice-note library with an unfiltered sweep; match client-side on first name + exact local session date + queue uniqueness. Do not trust upload-time date filters or title-only name search alone. Corroborate the patient field on the note page before writing. Last-name phonetic drift is expected — use a negative gate only, never require exact last-name equality.
5. Report the plan (targets + matches + session cap), then proceed. Default first-session cap: 5. Raise only after a zero-exception same-day session.
6. Per visit: open note → corroborate patient → clean pre-insert probe → insert template → parse source into four plain-text narratives → atomic write+save → reload → persistence check PASS only.
7. Characterized insert dialogs only (e.g. overlap alert vs care-plan window). Max two Insert clicks. Uncharacterized dialog → stop, capture verbatim, leave visit untouched.
8. Append a dated entry to the run log after every run, including aborts. Update the current-backlog block. Chat reports use visit id + initials only — no clinical narratives in chat.

## After the cap
Stop, report done / flagged / remaining, and wait for the next kickoff.
