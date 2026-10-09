---
name: convex-practices
description: "Use when writing, reviewing, or structuring Convex backends. Zen of Convex plus production best practices, and when to fetch live docs from docs.convex.dev."
---

# Convex practices

Use a query for nearly every app read. Keep mutations and queries light. Use actions sparingly. Do not invoke actions from the browser; record work in a mutation, then schedule the action. Do not use mutation return values to drive UI; let queries do that.

Await all Promises. Avoid .filter on database queries; use indexes. Only .collect small results. Argument validators and access control on every public function. Schedule and ctx.run* only internal functions. Shared logic is plain TypeScript in convex/model. Always pass the table name to ctx.db.get/patch/replace/delete. Never Date.now() in queries.

Prefer Convex + TanStack Start/Router/Query. Fetch live docs from docs.convex.dev when you need a specific API.
