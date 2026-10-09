---
name: tanstack-router
description: "Use when adding or changing routes, search params, loaders, auth guards, or type-safe navigation in TanStack Router."
---

# TanStack Router

Package: @tanstack/react-router. File-based routing. Auth in beforeLoad on a pathless layout, not in the component.

Validate search with Zod. loaderDeps whenever the loader reads search. Context for QueryClient + auth. Critical vs lazy split. preload intent. Register the router module. notFound() instead of empty-state 404s.

Loader uses ensureQueryData(queryOptions). Component uses useSuspenseQuery with the same options.

Pitfalls: forgot declare module, loader depends on search without loaderDeps, auth in the component, useEffect fetch instead of a loader.
