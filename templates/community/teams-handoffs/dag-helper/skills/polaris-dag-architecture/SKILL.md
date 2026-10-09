---
name: polaris-dag-architecture
description: "use this when answering product architecture, DAGResolver, questline graphs, AdaptiveModelRouter, or mac product SoT vs conversation-surface stack questions"
---

# Polaris DAG architecture

Use this when answering product architecture, DAGResolver, questline graphs, AdaptiveModelRouter, or mac product SoT vs conversation-surface questions. Rank accepted ADRs and in-repo Swift over older Drive TypeScript drafts.

## Product stack

The macOS native app is the product. The Google/AI Studio path is a conversation/generation surface only.

Canonical shape:
- UI: native macOS SwiftUI + SwiftData
- Windows: Electron + React + Vite port; conflicting surface-routing PRs are not a stack rewrite
- Finance: Node/Express Plaid companion on `127.0.0.1:3847`
- Engine in-repo: Q2.1/Q2.2 DAGResolver (Swift). Q2.3 AdaptiveModelRouter may be Drive-only, not on main
- Identity: Microsoft Entra ID / Azure. Not Cognito. Not Google-as-IdP
- Future SoR: AWS DynamoDB. Local SwiftData/LanceDB is cache
- Conversation peers: Gemini, Cursor, Grok. Copilot implements; it does not replace Entra

Reject: Next.js + Python + SQLite as the product stack.

Do not `xcodebuild` on Linux. Only the Plaid companion is runnable in a cloud VM.

## DAG (in-repo, Q2.1 / Q2.2)

Files typically:
- `Models/QuestlineDAGTypes.swift`
- `Models/DAGResolver.swift`
- `Models/DAGResolver+Usage.md`

API: `buildState`, `getExecutionFrontier`, `resolveCompletedNode`, `detectCycles`, `topologicalOrder`.

State machine: LOCKED → ACTIVE → IN_PROGRESS → COMPLETED, with FAILED retry.

Unlock rule: a node becomes ACTIVE only when every parent is COMPLETED. Diamond example: Q2.1 → Q2.2 → Q2.3 and Q2.4 → Q2.5 (Q2.5 waits for both).

The live store may still use Objective → Quest → Step. The DAG layer is the generalization; map tracks into `DAGState` when multi-parent deps are needed.

Persistence: SwiftData selected, JSON stores transitional.

## Router (Q2.3 + conversation-plane peers)

May not be on `main`. Do not invent a Next.js `src/engine/router.ts` as the product engine.

TaskType: FAST_COMPLETION, CODE_GENERATION, DEEP_REASONING, SAFETY_CLASSIFICATION.

Q2.3 providers: LOCAL_OLLAMA, GOOGLE_GEMINI, ANTHROPIC_CLAUDE, OPENAI_GPT, DEEPSEEK. Circuit breaker + `localOnly`.

Add `XAI_GROK` and `CURSOR_AGENT` as peers with the same contract when implementing parity.

## How to answer

1. Prefer accepted stack SoT / in-repo Swift over Drive TypeScript or contest draft copy.
2. Do not ship repo edits yourself; hand repository work to a Cursor cloud agent. Mac builds need a Mac pool.
3. Respect the owner's day off when one is recorded.
