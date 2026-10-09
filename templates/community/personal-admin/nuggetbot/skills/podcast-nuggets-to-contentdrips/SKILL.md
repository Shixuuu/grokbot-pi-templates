---
name: podcast-nuggets-to-contentdrips
description: "use when turning a podcast or YouTube episode into ContentDrips quote graphics or carousels from extracted nuggets; also for first-run welcome / how-to for NuggetBot"
---

# Podcast nuggets → ContentDrips graphics & carousels

## Goal
Repurpose a podcast (or YouTube video) into social quote **graphics** and/or **carousels** via ContentDrips MCP, using the user's own templates.

## First-run welcome (new users / shared template)
On first conversation (or when someone asks how this works), greet warmly and briefly guide them:

1. Connect **ContentDrips** (MCP at `https://mcp.contentdrips.com/mcp`) — they need a ContentDrips API key (`Authorization: Bearer …`).
2. Prepare a template in ContentDrips:
   - Design one in the editor, **or**
   - Use AI Design Agent (`create_graphic` + `run_ai_design_agent`) to build a quote graphic or carousel, then reuse its ID.
3. They can paste either a **graphic template ID** or a **carousel template ID**.
4. Then drop a podcast / YouTube link (or transcript).

Keep it conversational, not a checklist dump. One clear next step at a time when they're new.

## Shared steps (always)

1. **Get the full transcript**
   - Accept a podcast link, YouTube URL, or pasted transcript.
   - Pull the complete transcript (YouTube captions / transcript tools / user paste). Never substitute a summary for the transcript.

2. **Extract nuggets**
   - Pull valuable, shareable quotes/insights (tight, standalone, social-ready).
   - Identify `guest_name` for each (the speaker who said it).

3. **Show the nugget table first (before any generate)**
   - Markdown table: `#` | `nugget/quote/text` | `guest_name`
   - Number from 1. Stop and wait.

4. **Collect selection + template**
   - User picks row numbers (e.g. `1,3,4`).
   - User provides ContentDrips `template_id` (graphic **or** carousel).
   - Optionally confirm type with `get_template` (carousel vs graphic).
   - Call `get_profiles`; if 2+ workspaces, ask which; always pass `profile_id`. Never auto-pick a template.

---

## Path A — Graphic / quote template → `generate_ai_graphic`

5a. For each selected nugget, build a short topic prompt:
   `update quote with "[NUGGET_TEXT]" and guest name with "[GUEST_NAME]"`
   Light cleanup for readability only; keep meaning faithful.

6a. Call `generate_ai_graphic` with:
   - `template_id`, `profile_id`
   - `method`: `topic`
   - `input`: the update-quote prompt
   - Then `check_job_status` → share PNG / editor link.
   One job per selected nugget unless the user says otherwise.

---

## Path B — Carousel template → `generate_ai_carousel`

5b. For each selected nugget (or a batch the user groups into one carousel), write a **topic / longer excerpt** — plain context, not a field-by-field structure dump. Include:
   - Core insight / quote
   - Supporting context or takeaways
   - Guest name / attribution
   Enough substance for the existing slides, as plain topic text.

6b. Call `generate_ai_carousel` with:
   - `template_id`, `profile_id`
   - `method`: `topic` (or `youtube` if filling straight from a YouTube URL and the user wants that)
   - `input`: start with an instruction to **keep the template's existing slides fixed** (do not create, add, or remove slides; only fill content into slides already on the template), then the topic/excerpt
   - Then `check_job_status` → share export URLs / editor link.

**Do NOT** call `get_template_structure` before `generate_ai_carousel`. Do NOT map labels slide-by-slide in the prompt — the AI carousel tool handles layout fill from the topic/excerpt.

Prefer expanding one strong nugget (or a user-chosen cluster) into one carousel rather than cramming unrelated quotes unless the user asks.

If `generate_ai_carousel` fails, fall back to `generate_carousel` with manually built `carousel_content` from `get_template_structure`.

---

## Rules
- Never auto-pick a template or workspace.
- Always show the nugget table and wait for picks before generating.
- Graphics → short quote prompts + `generate_ai_graphic`.
- Carousels → topic/excerpt + keep-slides-fixed instruction + `generate_ai_carousel` (no structure-first step).
- Prefer AI fill on an **existing** user template over Design Agent for the repurpose step (Design Agent is for creating the template when they don't have one yet).
- Be welcoming: if they're stuck without a template or connector, guide setup instead of dead-ending.
