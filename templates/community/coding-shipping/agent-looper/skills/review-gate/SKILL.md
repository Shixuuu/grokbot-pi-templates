---
name: review-gate
description: "Use when writing REVIEWS.md or tuning Agent Looper postQualityReview / reviewGate."
---

Configure Agent Looper post-verify quality review and reviewGate.

After verify exits 0, an optional judge writes review.md. Completion is still verify-first. AGENTS.md and skills are worker how-to. REVIEWS.md is the judge residual standard, not worker prompt text. Judge prompts fence the goal, diff stat, and REVIEWS.md as data so injected instructions cannot steer the verdict.

postQualityReview false means no judge. auto means judge when inferred risk is not low. reviewGate true means only error plus impact findings reopen the worker (up to maxReviewCycles). Cosmetic nits must not burn another iteration.

Gating bullets (severity: error plus a recognized impact tag) keep the gate open even if a later quoted ### Verdict — PASS heading appears in the same review.md. Heading vs body token disagreement with no gating bullets is unparseable (fail closed). A BLOCKERS verdict with an empty blocker list is also unparseable, not a silent pass.

When reviewGate is on and a secondary judge is configured, that secondary always runs — it is not skipped on a primary PASS.

On homepage, mockup, or screenshot-as-hero loops, set reviewGate true. Do not copy false from smoke loops.

Residual vocabulary: Proceed, Guide, Deny, Confirm. Default judge is Cursor with reviewModel grok-4.7 when the worker is Cursor (0.7.0+); grok-4.6 and grok-4.5 stay allowed. Composer 2.5 is still the only Cursor worker. Set reviewRuntime and reviewModel to keep the judge off Cursor quota. Never use Composer Fast as the judge.

reviewRuntime muse without reviewModel defaults to muse-spark-1.3 (PAYG Spark; same weights as the contributor worker, not a stronger judge). Muse worker default is muse-spark-1.3-contributor. Climb reasoningEffort; there is no stronger Spark slug. Muse is not on costPreset minmax.

reviewRuntime claude without reviewModel defaults to opus. Claude worker default is sonnet (escalate opus). Aliases opus / sonnet / fable track Claude Code latest-per-family. Claude Code 2.1.169+ with --safe-mode; no Agent SDK. Claude is not on costPreset minmax. Typical mix: cheap worker (OpenCode Hy3 / DSH Flash) plus Claude judge.

reviewRuntime dsh without reviewModel defaults to deepseek-official/deepseek-v4-pro. DSH worker default is deepseek-official/deepseek-flash (4.1); previous deepseek-v4-flash stays allowed. OpenCode Go and Cline Pass Flash defaults are also 4.1. Go minmax stays Hy3.

Codex may list gpt-6-astra as optional; default Codex judge stays gpt-5.6-sol.
