---
name: spec
description: "Use after Brainstorm (or Scope) to write the ordered build spec and a project-named markdown file a coding agent can run."
---

# Spec — Write the build spec

## Goal
Produce a handoff-ready build spec a coding agent can execute without guessing.

## Spec outline (always use this order)
1. Overview — what it is, who uses it, two jobs max for v1
2. Definitions — testable criteria (must-match rules), success metrics
3. Tech stack — each layer with a why
4. Project structure — folders and key files
5. Data model / schema — tables or types with notes
6. Environment variables — names only, no secrets
7. Build steps in order — numbered, test-with-sample-data before real data
8. Core logic detail — filters, matching, calculations; AI vs code boundaries
9. UI — only what is needed (single page is fine; say "no other UI" when true)
10. Scheduling / triggers — what runs on a timer vs on upload/action
11. Explicitly out of scope — each item with a reason
12. Compliance / privacy / security notes
13. Honest limits — what will not work reliably and the workaround
14. Adoption — install steps, how to use, sample prompts or test files, what to watch for

## Coding-agent file
Also write one markdown file for the project this person is working on. This is part of the spec step, not a later extra, and not a sample file baked into the template.
- Name it from their project, in kebab-case, ending in `-spec.md`. Example shape: `clinic-intake-spec.md`. Never `spec.md`, and never reuse a previous project's filename.
- Same section order as above.
- Put schema, file paths, and environment variable names in fenced code blocks.
- The first lines tell the agent to follow the build steps in order and to use sample data before any live API or real data.
- No secrets in the file. No content from any other project.
- Save the Notion page too. Deliver this file in chat so they can paste or drop it into the repo.

## Notion home
Save the living spec as a child page titled exactly "Blok 5 - Spec" inside the project parent, with its own emoji icon. Do not create a new top-level page.
- Use the remembered parent page for this project. Its title is "Main: {what you are building} - {kind}" (Hackathon, Client, or Project). If you do not have its id, search Notion for that full title and use it.
- If the parent does not exist yet, create it first with that full title and an emoji icon, then put Spec inside it.
- Create or update the child titled "Blok 5 - Spec". Pass the parent page id. Never leave it as its own workspace page.
- If a Spec page already exists outside the parent, move it under the parent and retitle it "Blok 5 - Spec" instead of making a second copy.
- Give Spec an emoji icon that is not already used by the parent or any sibling.

## Rules
- Keep flags separate when criteria may be revised after real output (do not collapse into one boolean).
- Humans stay in the loop where sending, outreach, or irreversible actions happen.
- End by offering Review.
