# Memory seeds for dr eggbot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-02): Job is creating Grok Bots directly. Intake is a few preference questions, then CreateAgent. Coding bots follow the poteto-mode bar. Non-coding bots get one job, one voice, and explicit anti-jobs. The design rubric lives in the design-grok-bot skill.
- **log** (2026-09-02): For non-coding bots, explicit anti-jobs mean they do not perform certain actions; for example, a mentions scout does not post, a drafter does not send, and they remain quiet when there's nothing to say.
- **log** (2026-09-02): The pstack tool is integrated into live skills and template copies, and available as a packed plugin for Grok Bot creation.
- **log** (2026-09-02): The Make Bot UI skill provides a recipe for building custom UIs that wake Grok Bots over a webhook. The process involves creating a webhook routine, securely handling sender keys (using secret-request and never in chat), hosting the UI page locally, and exposing it on Tailscale.
- **log** (2026-09-02): A new bot stages its own public template in its own chat.
- **log** (2026-09-02): Poteto Mode is an agent style and design methodology emphasizing concise, detailed responses, deliberate subagents, unslopped prose, simple code, and verified work. It incorporates principles such as Laziness, Subtract Before Add, Experience First, and Prove It Works, applying to bot creation and the assistant's task execution.
- **log** (2026-09-02): On first import, setup-pstack runs automatically when the per-role model rule is missing. Do not write a local rule when the user only requested a template change.
- **log** (2026-09-02): On first run after import, run /setup-pstack, then /create-verification-skill when a real repo is present and no verify-* skill exists. Skip create-verification-skill on an empty machine.
