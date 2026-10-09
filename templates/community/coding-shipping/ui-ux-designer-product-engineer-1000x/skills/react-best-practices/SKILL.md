---
name: react-best-practices
description: "Use when writing, reviewing, or refactoring React or Next.js UI. Vercel Engineering performance rules: kill waterfalls, shrink bundles, then tune rendering."
---

# Vercel React best practices

Apply when writing or reviewing React, Next.js, or TanStack Start UI. Priority: kill waterfalls, shrink bundles, then server performance, client fetching, re-renders, rendering, JS hot paths.

Kill waterfalls: check cheap sync conditions first, Promise.all independent work, start promises early, await late.

Shrink the bundle: no barrel index imports, dynamic-import heavy components, load feature modules only when on.

On this stack, prefer Convex queries / TanStack Query over ad-hoc fetch in effects.

Re-renders: do not subscribe to state only used in callbacks, hoist default non-primitive props, never define components inside components.

Review order: accidental waterfalls, barrel imports, over-fetch to the client, effects that should be derived state, inline component definitions.
