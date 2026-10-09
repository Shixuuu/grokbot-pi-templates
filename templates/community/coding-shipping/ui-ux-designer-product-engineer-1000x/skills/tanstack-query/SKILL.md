---
name: tanstack-query
description: "Use when fetching, caching, mutating, or hydrating async server state with TanStack Query v5. Covers queryOptions, invalidation, optimistic updates, and SSR."
---

# TanStack Query v5

On Convex apps, prefer Convex queries for reactive reads. Use Query for REST, third-party data, or SSR hydration.

queryOptions everywhere. Hierarchical keys. Pass signal into fetch. Mutations: cancel, snapshot, optimistic write, roll back on error, invalidate on settled.

placeholderData for pagination, not initialData. enabled for dependents. Never conditional hooks. staleTime must not exceed gcTime.

Do not destructure a query result if you pass it around.
