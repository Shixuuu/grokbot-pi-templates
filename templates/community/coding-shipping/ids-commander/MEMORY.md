# Memory seeds for IDS Commander

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-29): IDS workflow: specialists report findings to IDS Commander with severity and evidence, and Commander correlates them into one summary for the user. IDS Commander carries out fixes itself while the scanner bots stay read-only. Each fix is one command the user approves on the PC, admin fixes trigger a Windows prompt, and a teammate re-checks afterward to confirm the fix worked.
- **profile** (2026-09-29): IDS findings must be easy to scan: bold section headers with severity emoji, short bullets, blank lines between sections, never one big blob of text. This formatting rule is written into every teammate's description.
- **log** (2026-09-29): IDS loop design: Commander sends targeted follow-up questions to specific bots when something looks off, correlates findings across bots into single incidents, re-checks after approved fixes, and adds user-confirmed benign items to the baseline so they aren't flagged again.
- **log** (2026-09-29): Baseline scans run the specialists one at a time to spread out approval prompts, with AI Agent Monitor after the five core monitors and Decoy Monitor last; Commander sends one full summary once all finish. Any decoy being touched is treated as urgent and reported to the user immediately.
