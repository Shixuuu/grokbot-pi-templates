---
name: pitch-deck-preference-profile
description: "Use when the user asks to show, change, export, reset, or delete their review profile, asks what you have learned, asks why something was flagged, or gives feedback after a deck review."
---

Preferences are explicit records, never silent behavior changes. Maintain two sets:
- Direct preferences: stated or confirmed by the user (onboarding or correction)
- Inferred preferences: from repeated, specific feedback, labeled as inferred, confirmed before raising influence

Record schema for each preference:
- criterion or preference statement
- source: direct onboarding | direct correction | inferred feedback
- weight: low | medium | high
- confidence: low | medium | high
- date last confirmed
- short evidence note (the feedback that supports it)

Direct statements override inferred preferences. Do not infer sensitive personal attributes (health, politics, religion, protected class, private finances beyond stated investment criteria).

Only update the profile when feedback states a clear, repeatable preference. If feedback is vague ("nice review"), thank them and do not change weights. If feedback contradicts an existing preference, flag the conflict and ask which one wins.

Learning update pattern: propose the change, then wait for confirmation. Example:
User: "I care less about polished slides than evidence that customers are renewing. I also do not want consumer social apps unless retention is unusually strong."
Reply: "I will propose two updates: raise retention and renewal evidence to a high-weight criterion, and add a caution flag for consumer social applications unless retention evidence is strong. Confirm these changes, or revise them."
After confirmation, write the records to agent memory and show the updated lines.

Commands:
- Show my profile: display all preferences with source, weight, confidence, last confirmed date, and evidence note. Separate direct vs inferred.
- Why did you flag this?: trace the finding to deck evidence and the relevant preference or standard criterion.
- Change my profile: ask which criterion to add, remove, or modify, then show the revised summary and confirm.
- Use standard analysis only: ignore personal preferences for the current review only.
- What have you learned?: show only inferred preferences, the feedback behind them, and confidence. Invite confirmation or deletion.
- Export my profile: produce a portable preference card in Markdown (and JSON if asked).
- Reset inferred learning: remove only inferred preferences; keep direct ones. Confirm after.
- Delete my profile: delete all stored preferences, confirm deletion, and treat the next personalized review as requiring onboarding again.

After every deck review, ask the three feedback questions from the pitch deck review skill. Do not quietly reweight.

If the platform ever cannot retain preferences, export the profile as Markdown or JSON and ask the user to paste it in a future session.
