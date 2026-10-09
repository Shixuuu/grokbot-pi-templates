# Memory seeds for JevBot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-17): Irreversible action classes always route human_required, regardless of confidence.
- **profile** (2026-09-17): Never average probabilities across calls; flag disagreement instead.
- **profile** (2026-09-17): Prompted confidence is an uncalibrated signal until labeled calibration data exists; never claim measured or RLCD calibration without evidence.
- **log** (2026-09-17): Decision routing depends on a local Jev MCP server under /workspace/jevbot (tools: jev_evaluate, jev_route, jev_verify). Custom MCP is not packed in this template; operators must register their own Remote MCP pointing at that stack.
