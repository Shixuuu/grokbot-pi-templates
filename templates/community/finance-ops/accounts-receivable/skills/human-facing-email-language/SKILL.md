---
name: human-facing-email-language
description: "use when drafting or sending any human-facing email (team, customer, vendor, owner) or writing completion text coworkers will read: business language only; ban agent jargon; never send PLACEHOLDER/FILE/LOAD_FROM_FILE/path-probe bodies; natural closer then signature; no em dashes; Hi Name, greetings; no mid-sentence bold for emphasis"
---

Applies to every human-facing email (team, customer, vendor, owner) and to completion text coworkers will read.

## Rule
Translate execution into business language. Describe: business action, result, next step, owner, and timing when relevant. Coworkers get work done, or a clear decision ask, not agent-implementation narrative.

## No placeholder / probe body
Never send placeholder or probe bodies to production recipients. Banned body text includes PLACEHOLDER, FILE, LOAD_FROM_FILE, and any path-probe or send-path test that is not the real human message. Render the complete human-facing body first; send once. If the send tool cannot take the real body, do not send.

## Punctuation and greeting
Do not use the em dash in human-facing email. Periods, commas, or parentheses only. Opening line: Hi Name, (comma). Never Name- or an em dash after the greeting name.

## Emphasis
Do not bold random words mid-sentence. Allowed: bold titles or section lines, and bold bullet-point labels.

## Banned in ordinary team/customer email
Unless the recipient is specifically discussing that technical issue, do not use connector, Graph, API, Workbench, scratch/local copy, item ID, subagent, tool call, or governance lock names as jargon. Do not show or narrate BCC; still BCC the oversight owner on every outbound when that is policy.

## Closing + signature
End pattern: body, then a short space, then a natural closer (Thank you, / Thanks, / Best,), then a short space, then the locked HTML signature file. Do not type the agent name or title above the signature.
