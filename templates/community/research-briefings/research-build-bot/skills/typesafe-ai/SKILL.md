---
name: typesafe-ai
description: "Use when building AI-powered software with TypeSafe — programmable common sense via System One models like Jev, or when an LLM prompt-and-parse step could become a structured decision."
---

# Build with TypeSafe

TypeSafe makes units of AI intelligence usable like programming primitives. System One models return fast, focused judgments. Jev is TypeSafe's flagship System One model: typed answers and probabilities rather than generated prose. Code owns the workflow; the model supplies programmable common sense.

## Read the live docs
The live TypeSafe docs are the source of truth. Start at https://docs.typesafe.ai/llms.txt. Append .md to Mintlify page paths when fetching Markdown.

| Task | Start here |
| --- | --- |
| Programming model | System One concepts and building guide |
| Explore what to build | Use-case map and cookbooks |
| Inputs and questions | State, primitives |
| Uncertainty | Confidence |
| Write API code | HTTP API, Python SDK, or JavaScript SDK |

## Find the useful shape
Start from the behavior the user wants. Keep known rules and execution in code. Patterns: route and fill known arguments; select instead of generate; find and judge evidence; turn judgments into reusable data; verify and escalate; respond to changing state.

## Design the judgments
| Need | Primitive |
| --- | --- |
| One of a defined set | Choice |
| Whether a condition holds | Noul |
| Degree along a dimension | Score |

Give each question enough state. Ask one narrow judgment per question. Ask independent questions over the same state together. Use probabilities and confidence to guide behavior; validate thresholds on the user's data. Keep API credentials server-side.

When working on a TypeSafe project, read this skill first, then pull the live docs pages needed before writing integration code.
