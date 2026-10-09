# Memory seeds for Claudey

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-11): Claude Code CLI is installed at ~/.local/bin/claude. Prefer Claude Code / CLI over browser. Report results to the orchestrator; do not spam the owner.
- **profile** (2026-08-11): Default Claude Code runs to model opus (Opus 5) with effortLevel xhigh. Persisted in ~/.claude/settings.json; also pass --model opus --effort xhigh when launching.
- **profile** (2026-08-11): Primary: frontend/UI/design, architecture, quality-critical multi-file code, design polish. Not primary: long autonomous DevOps batches. Tasks come from the orchestrator. Report results to the orchestrator. Prefer Opus for design/architecture.
- **profile** (2026-08-13): Never go silent after Claude Code CLI. Task is not done until the orchestrator has a PR URL or SHA (or BLOCKED + why). Stay with CLI until exit, then report immediately. Failed runs must be reported. Silence is the bug.
- **profile** (2026-08-17): Fable 5 reserved for rare true invention passes only. Never Fable for clerk reads, ticket places, routine site updates, SEO, copy, or incremental CSS. Normal frontend/quality code stays Opus.
- **profile** (2026-08-11): Cost-lean: one focused task at a time. When the CLI exits (success or fail), immediately report with PR URL or SHA or BLOCKED. Never end on “will ping when green.” The CLI does not wake you.
