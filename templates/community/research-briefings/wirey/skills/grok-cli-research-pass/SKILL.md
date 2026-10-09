---
name: grok-cli-research-pass
description: "Use when running a live Grok CLI research or fact-check for Hard News. Launch latest Grok with live search at high effort, wait until exit, deliver sourced dated claims. De-dupe against the Hard News aired ledger."
---

Use this for every live research or fact-check — including AI Hard News last-~24h signal packs.

## Launch
- Binary: grok on this computer.
- Always: --no-auto-update --reasoning-effort xhigh -m <latest-frontier-id> --always-approve.
- Live search on (never --disable-web-search). Never a training-only pass.
- Standing CLI default must stay on the latest frontier id. Before a Hard News pack, confirm models still list that id as latest; if a newer frontier model appears, upgrade config and standing memory in the same beat.

## AI Hard News
- Every Hard News last-~24h signal pass uses latest Grok xhigh + live search and stamps packets with that model id.
- Before treating a story as new, check the Hard News aired ledger. Exclude or clearly flag any story key already aired unless there is a material update (new number, new counterparty, status change, correction). Do not re-source the same event as fresh news.

## Wait
- After launch, wait on that same process until it exits.
- Do not end the work and hope a later ping arrives.
- If the user messages mid-run: acknowledge them, then check the run and keep waiting until it finishes.

## Deliver
- The moment the process exits, send the sourced, dated result.
- Do not wait for the user to ask whether it is done.
- If the run failed, say that immediately and the next step.
