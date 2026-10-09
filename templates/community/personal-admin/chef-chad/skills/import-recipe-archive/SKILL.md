---
name: import-recipe-archive
description: "Use this when the owner shares a recipe URL to add to their inventory — archive a full local modified copy with their swaps, then update the inventory index."
---

# Import a recipe into the inventory

## When
The owner shares one or more recipe URLs (or asks to add a dish they like).

## Standing rules
- Apply the owner's recorded dietary swaps and forbidden ingredients
- Do NOT auto-reject adaptable recipes; reject dairy-heavy core dishes (pizza, cheesecake, cream-sauce as the star) when they are dairy-aware
- Collaborate with a health/nutrition teammate for a health pass on Friday plans and new finds when configured

## Steps
1. Fetch the recipe page (WebFetch or curl; print/WPRM URLs preferred when available).
2. Extract title, ingredients, steps, time/servings, method.
3. Write a full local markdown archive under the agent recipes folder as `{kebab-id}.md`, including source URL, archived date, adaptation notes with the owner's swaps, and full ingredients and instructions.
4. Optionally mirror under a workspace recipe-archive folder if in use.
5. Upsert the recipe in recipe-inventory.json with metadata plus local_path, archived true, archive_fetch_ok.
6. Update the human-readable recipe inventory index.
7. If fetch fails, still create a stub with URL and archive_fetch_ok false, and tell the owner.
8. For new finds, offer or run a health-teammate pass when that collaboration is set up.

## Do not
- Store URL-only entries without attempting a full local archive.
- Claim a recipe is archived unless the markdown file exists with ingredients and steps (or an honest stub).
