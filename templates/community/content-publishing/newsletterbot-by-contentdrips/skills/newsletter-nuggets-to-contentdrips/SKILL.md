---
name: newsletter-nuggets-to-contentdrips
description: "use when turning a newsletter post into ContentDrips quote graphics or carousels from extracted nuggets; also for first-run welcome / how-to for NewsletterBot"
---

# Newsletter nuggets → ContentDrips graphics & carousels

## Goal
Repurpose a newsletter issue into social quote **graphics** and/or **carousels** via ContentDrips MCP.

## First-run / setup (ContentDrips API key)
On first conversation, or whenever ContentDrips is **not** connected (`GetMcpServerStatus` / tool call fails with auth):

1. Tell the user they need to connect ContentDrips with their **API key**.
2. Ask them for the key (from ContentDrips account / API settings). Never ask them to paste secrets into plain chat if a secure input or connector install field is available — use the install/auth path.
3. Connect the MCP at `https://mcp.contentdrips.com/mcp` with `Authorization: Bearer <API_KEY>` (follow the add-connector skill: SearchPlugins / InstallPlugin if in catalog, else AddMcpServer with headers).
4. Confirm connected, then continue.

If ContentDrips is **already connected**, skip the API key ask and go straight to the newsletter flow.

Keep setup conversational — one clear next step at a time, not a checklist dump.

## Shared steps (always)

1. **Get the full newsletter content**
   - Accept a newsletter link (Substack, Beehiiv, Ghost, ConvertKit, custom post, etc.) or pasted body.
   - Fetch and extract the **complete** article text (title, author, body). Never substitute a summary for the full post.
   - If paywalled or incomplete, ask the user to paste the full text.

2. **Extract nuggets**
   - Suggest **6–7** valuable, shareable key takeaways / quotes / insights (tight, standalone, social-ready).
   - Identify `author_name` (or newsletter name) for attribution on each row.
   - Prefer concrete claims, frameworks, stats, and punchy lines over vague fluff.

3. **Show the nugget table first (before any generate)**
   - Markdown table: `#` | `nugget/quote/text` | `author_name`
   - Number from 1. Stop and wait for picks (e.g. `1,3,4`).

4. **Ask for template ID (or Design Agent)**
   - After picks, ask: do they have a ContentDrips **template ID** (graphic or carousel)?
   - Call `get_profiles`; if 2+ workspaces, ask which; always pass `profile_id`.
   - **If they give a template ID** → Path A or B below (`generate_ai_graphic` / `generate_ai_carousel`). Confirm type with `get_template` when helpful.
   - **If they don't have a template** → Path C (AI Design Agent: `create_graphic` + `run_ai_design_agent`).
   - Never auto-pick a template from `get_my_templates` / `search_templates`.

---

## Path A — Has graphic / quote template ID → `generate_ai_graphic`

5a. For each selected nugget, build a short topic prompt:
   `update quote with "[NUGGET_TEXT]" and guest name with "[AUTHOR_NAME]"`
   Light cleanup for readability only; keep meaning faithful.

6a. Call `generate_ai_graphic` with:
   - `template_id`, `profile_id`
   - `method`: `topic`
   - `input`: the update-quote prompt
   - Then `check_job_status` → share PNG / editor link.
   One job per selected nugget unless the user says otherwise.

---

## Path B — Has carousel template ID → `generate_ai_carousel`

5b. For each selected nugget (or a batch the user groups into one carousel), write a **topic / longer excerpt** — plain context, not a field-by-field structure dump. Include:
   - Core insight / quote
   - Supporting context from the newsletter
   - Author / newsletter attribution
   Enough substance for the existing slides, as plain topic text.

6b. Call `generate_ai_carousel` with:
   - `template_id`, `profile_id`
   - `method`: `topic`
   - `input`: start with an instruction to **keep the template's existing slides fixed** (do not create, add, or remove slides; only fill content into slides already on the template), then the topic/excerpt
   - Then `check_job_status` → share export URLs / editor link.

**Do NOT** call `get_template_structure` before `generate_ai_carousel`. Do NOT map labels slide-by-slide in the prompt.

Prefer expanding one strong nugget (or a user-chosen cluster) into one carousel rather than cramming unrelated takeaways unless the user asks.

If `generate_ai_carousel` fails, fall back to `generate_carousel` with manually built `carousel_content` from `get_template_structure`.

---

## Path C — No template ID → AI Design Agent

Use when the user has **no** existing template (or explicitly wants a new layout).

5c. Confirm design intent briefly: graphic vs carousel (and slide count / format if unclear).

6c. Setup before Design Agent:
   - `get_profiles` → always pass `profile_id` (ask if 2+).
   - `get_brand_styles` → if 2+ styles, ask which (or none); never auto-pick. If Pro is available, ask Basic vs Pro.
   - `create_graphic` with `name`, `type` (`graphic` / `quote` / `carousel`), `format`, `profile_id`, and `slides` when carousel.

7c. Call `run_ai_design_agent` with:
   - `template_id` from `create_graphic`
   - `prompt`: specific design brief including selected nugget text(s), author attribution, desired style/tone
   - `style_id` / `model` / `use_branding` / `reference_image` when the user chose those
   - Share the **editor link** and stop. Do **not** call `render_template` unless they ask to preview/download.

One Design Agent run per selected nugget (or one carousel that covers a chosen cluster) unless the user groups differently.

---

## Rules
- On setup / when disconnected: ask for ContentDrips API key and connect before generating.
- If already connected: do not re-ask for the API key.
- Always show the nugget table and wait for picks before generating.
- Always ask for a template ID after picks; if they don't have one, use Path C (Design Agent).
- Template ID present → Path A (`generate_ai_graphic`) or Path B (`generate_ai_carousel`) only — never Design Agent unless they ask to recreate the layout.
- No template ID → Path C only — never substitute a random template from search.
- Never auto-pick a template or workspace.
- Suggest about 6–7 nuggets by default; adjust if asked.
- Be welcoming: if they're stuck without ContentDrips connected, guide setup instead of dead-ending.
