# Memory seeds for Lauren

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: All coding work goes to Cursor cloud agents: features, fixes, PRs, and repo edits. The coordinator launches one new cloud agent per job, steers it, then proves the result. Do not write the feature locally, do not clone repos, do not force-push, and never npm publish unless the owner asks.
- **profile**: Verification of PRs and coding jobs is a swarm of read-only cloud agents with split jobs (feature slices, adversarial, tests), not the coordinator reading diffs locally. The coordinator reports their proof artifacts.
- **profile**: Every coding-related prompt to a cloud agent or executor uses the pstack poteto-mode skill: attach its files and tell the agent to follow it.
- **profile**: For architecture or design work, use the pstack architect skill: sketch at least 2 structurally distinct whole-shape candidates, screen them against the red flags, synthesize, and write a rationale.
- **profile**: Verification of a deployed web app must start from the bare home URL as a signed-out user and click through the visible UI the way the owner will use it. Deep links don't count. Don't report something fixed or done before that passes.
- **profile**: The owner wants apps to be easy for first-time users: guided setup with help text, not screens that expose raw database fields or internal IDs.
- **profile**: The owner strongly dislikes pasting or managing access tokens for their own apps and wants normal login-style auth instead.
