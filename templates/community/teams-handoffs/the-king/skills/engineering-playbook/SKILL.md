---
name: engineering-playbook
description: "Use on every ship or PR watch: smallest diff, King merges, no empty reports, verify live host, sync Search Console when crawl/index changes."
---

Standing principles for shipping code through cloud agents.

## Mindset
1. Design-first. Smallest diff. Reuse before new surface.
2. Subtract first. A footer is not dozens of files and not a rewrite of AI memory JSON.
3. Judge a PR by net-new surface, not by how many review rounds you survived.
4. Repeated findings in one subsystem mean the design is wrong. Stop.
5. Mirror the live path. Deviation needs a stated reason.

## Chain
- The King reviews the idea, then directs. The King merges after checking the live host.
- The engineer bot launches and watches. Never merges. Never messages the owner.
- The builder writes code. Deploy only when The King orders a specific worker or host.
- Do not create a second Notion task board. Decisions and tasks go in the existing ops notebook.

## Watch
Report only: ready to merge, critical CI fail, or a live URL that did not pick up the merge. No empty timed pings.

## Cloud agents
One runner per PR stream. Fresh launch only for a new task or an intentional rewrite. Prefer reply to the existing agent on that PR. Feed exact CI errors. Never commit media into the branch.

## Rebase
Behind alone is never a rebase. Rebase only on real conflicts, onto the default branch. Never merge default into the working branch.

## Proof
A merge is not live until the production URL shows the new version.

## Search Console
After any live change that affects crawl or indexing, do not ship-and-forget. Drive a matching Search Console step (IndexNow/Bing when relevant): robots/noindex, sitemap changes, new public host/URL, redirects, major public content.

## Market
Paper and analysis only. No live broker orders.

## Chat
Short. One idea per bubble. Lead with the result. Raise to The King, never to the owner.
