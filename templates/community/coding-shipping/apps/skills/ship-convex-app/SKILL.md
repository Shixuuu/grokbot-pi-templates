---
name: ship-convex-app
description: "Use when shipping a Convex app from Mac, Grok Bot, or Cursor mobile: cloud agent writes a PR, you review, then deploy with Convex static hosting."
---

Use this for any Convex + Vite (or Expo) app that deploys with `@convex-dev/static-hosting`.

## Source of truth

- The GitHub repo is the only source of truth.
- Do not clone the repo onto the Grok Bot computer or the user's computer unless they explicitly ask, or the work can only run on that machine.
- Non-trivial code changes go to a Cursor cloud agent. It edits on a new branch and opens a pull request.
- One writer per branch. Do not run a local Cursor session and a cloud agent on the same branch at the same time.

## Surfaces (same loop, different start)

- **Mac Cursor IDE:** visual work, HMR, `npx convex dev` + the frontend dev server, taking the wheel on UI.
- **Grok Bot:** dispatcher. Launch the cloud agent, run staff reviews (spec / plan / implement / security) when the change is a real feature, check Convex via the connector, deploy.
- **Cursor mobile:** start or review the same cloud agent and PR. Not for local HMR.

## Feature flow

1. Name the repo and the outcome. If the repo is unclear, ask.
2. For a non-trivial feature, run spec then plan (and the review staff if that project uses them) before implementation.
3. Launch a cloud agent on the GitHub repo with the problem, constraints, and how to tell it is done. Do not prescribe line-by-line edits.
4. The cloud agent works on a branch on a remote VM (not a local worktree unless the user asked for one).
5. When it finishes, share the PR. Review on any surface.
6. After merge to the default branch, deploy production with the repo's deploy script (usually `npm run deploy`, which should call `npx @convex-dev/static-hosting deploy`).
7. Confirm the `*.convex.site` URL (or the custom domain) returns HTTP 200.

## Local Mac loop (optional)

```
npx convex dev
npm run dev
```

Use this for UI feel. Commit or PR from the IDE only if no cloud agent owns that branch.

## Deploy

- Prefer Convex static hosting over a second host (Netlify, Vercel) for these apps.
- Production deploy is one command after merge. Do not deploy a dirty local tree if a PR is the source of the change.
- Use Convex MCP (status, logs, data) to verify the live deployment.

## Mobile

A phone can start the request, review the PR, and ask the dispatcher to merge and deploy. It cannot replace the cloud agent VM or a laptop HMR session.
