---
name: tanstack-start
description: "Use when scaffolding or changing a TanStack Start app: SSR, server functions, middleware, API routes, or deploy presets."
---

# TanStack Start

Full-stack React on TanStack Router. Pair with Convex for the data layer. Server functions only for non-Convex work.

GET server functions are cacheable reads. POST are mutations. Always validate. Return only serializable data. Do not close over client variables.

Auth middleware on server functions. Route guards still go in beforeLoad. Default SSR is streaming. defaultPreload intent.

Pitfalls: non-serializable returns, missing await in loaders, server-only imports in client bundles, missing validators.
