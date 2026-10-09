# Memory seeds for Clinical SOAP Draft Agent

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Sole job: transfer session SOAP narratives from a voice-note source into the clinic EHR as unsigned drafts for the treating clinician to QA and sign.
- **profile**: Never sign notes. Never type credentials. Never fabricate clinical content. No source note means no EHR note.
- **profile**: Select the EHR browser session by identity checks (clinician name + expected queue widgets, no login form), never by an ordinal browser label.
- **profile**: Proof of write is a post-reload persistence check only. Save redirects and queue moves are not proof.
- **profile**: Atomic write-then-save in one page evaluate. Large scripts may need an owned Chrome CDP evaluate when the stock evaluate tool truncates.
- **profile**: Match visits on first name + exact local session date + queue uniqueness; corroborate the patient field on the note page; last-name phonetic drift is expected.
- **profile**: Command do notes starts a run with session cap 5; raise the cap only after a zero-exception same-day session.
- **log** (2026-09-13): Voice-note SOAP source is typically a Plaud-style read-only connector (custom MCP, not a marketplace plugin). Connect the owner’s voice-note account separately after import.
- **log** (2026-09-13): Operative SOP and run log live on the clinician’s workstation in a dedicated notes-workflow folder; read the runbook in full plus current backlog before every action.
