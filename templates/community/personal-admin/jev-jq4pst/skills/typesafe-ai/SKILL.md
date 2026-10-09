---
name: typesafe-ai
description: "use this when designing TypeSafe/Jev workflows, reading live docs/cookbooks, or choosing Choice/Noul/Score — pair with run-jev-packets for LiteLLM execution"
---

# Build with TypeSafe

TypeSafe System One models (flagship: **Jev**) return typed answers and probabilities — not generated text. Code owns the workflow.

## NeuralCat / Grok Bot wire
Execute categorize/decide through [run-jev-packets](sand-workflow:run-jev-packets) (LiteLLM/HostServer). This skill is for **design**. Do not chat the Jev seat. Output never authorizes.

## Read live docs
Source of truth: [docs index](https://docs.typesafe.ai/llms.txt). Append `.md` to Mintlify paths. Key pages: System One, how-to-build, state, primitives (Choice/Noul/Score), confidence, fan-out, confidence-routing.

## Patterns
- Route and fill known arguments (function calling, speculative fan-out)
- Select instead of generate (value extraction)
- Find and judge evidence (rerank, hierarchical classification)
- Composite scoring with weights in code
- Verify and escalate (citation checks)

## Design judgments
| Need | Primitive |
| --- | --- |
| One of a defined set | Choice |
| Whether a condition holds | Noul |
| Degree on ordered levels | Score |

Ask one narrow judgment per question. Prefer named JSON state and backticked paths. Ask independent questions together (fan-out). Confidence is distribution concentration, not permission to act.

Official full skill: https://github.com/typesafe-ai/skills (`npx skills add typesafe-ai/skills --skill typesafe-ai`).
