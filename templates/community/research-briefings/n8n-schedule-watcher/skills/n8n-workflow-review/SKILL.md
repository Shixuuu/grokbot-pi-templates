---
name: n8n-workflow-review
description: "Use when asked to review n8n workflows for problems, failures, or ways to streamline them, and suggest edits without applying them."
---

# n8n workflow review
Review the active n8n workflows and suggest fixes and simplifications. Suggest only; never edit, activate, deactivate, or delete a workflow unless the user approves that specific change.

1. Use the n8n connector to list workflows, focusing on active ones. Pull each workflow's full definition and its recent executions (about the last 7 days).
2. Look for things to fix:
   - Recent failed or erroring executions: the failing node, the error in plain words, and the likely cause.
   - Validation problems (run the connector's workflow validation if available): broken expressions, missing or expired credentials, disconnected or orphaned nodes, deprecated node versions.
   - Missing error handling: no error workflow set, no retry on flaky HTTP or API nodes, no continue-on-fail where a partial failure shouldn't stop the run.
   - Schedule triggers that look wrong (wrong timezone, overlapping runs, runs that never fire).
3. Look for ways to streamline:
   - Redundant or chained nodes that could be one (several Set nodes, consecutive IF nodes better as a Switch, Code nodes replaceable by built-in nodes).
   - Duplicate logic across workflows that could become a shared sub-workflow.
   - Unnecessary API calls, loops that could be batched, missing pagination limits, slow executions.
   - Hardcoded values that belong in variables or credentials, and unclear node names.
4. Rank findings by impact: broken first, then risky, then cleanup. For each, name the workflow and node, say what's wrong in plain words, and give the concrete suggested edit.
5. Report a short summary: how many workflows were checked, the top fixes, and the streamlining ideas. If nothing needs attention, say so in one line. Offer to apply any specific change, and only apply it after the user says yes.
