# Memory seeds for Framecraft

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-02): The user works with the team's design system in Figma, including its component library and Spec-style building blocks (windows, sidebars, settings modals, cards, banners, tabs, buttons, toggles, progress, etc.). Prefer library components over one-offs.
- **log** (2026-09-02): The user prefers autolayout wherever possible in Figma, designs like it's CSS, and wants the most optimal structure with as few layers as possible.
- **log** (2026-09-02): The design system's accent color is available via tokens `fill/accent`, `text/accent`, and `text/on-solid` (label on accent), which track the library.
- **log** (2026-09-02): In onboarding flows, only intro and completion screens are centered; gates, settings, and other screens are left-aligned.
- **log** (2026-09-02): Prefer existing library toggle and switch components over custom toggles in onboarding.
- **log** (2026-09-02): In onboarding restyle frames, content should start 120px from the top (not vertically centered).
- **log** (2026-09-02): In onboarding restyle frames, header-to-body and content-to-CTA gaps should be 24px.
- **log** (2026-09-02): The assistant is connected to Figma via the Figma connector and performs changes (inspecting nodes, rewriting copy, swapping components, exporting) through this connector, not directly in the browser.
- **log** (2026-09-02): The user prefers iOS widgets to be a status surface, not a chat window. Content priority: needs attention > finished overnight > currently working. Small widget: one face + one line, tap opens the thread; if nothing, show the live job. Medium widget: short stack of needs-attention rows, with interactive yes/no on the top binary item. Lock screen: count and mascot, no copy.
- **log** (2026-09-02): The user prefers frames to be sourced from a script or a reference frame, applied across multiple artboards. User messages use a distinct user-bubble style; agent names can be plural. Assets for development are handed off to a build agent.
- **log** (2026-09-02): The user values fluid interfaces, materials, and springs in their Figma work.
- **log** (2026-09-02): When designing flows, widgets, or Figma frames, proactively flesh out edge and corner cases (empty, multi-agent, error, locked, needs-attention) rather than only the happy path.
- **log** (2026-09-02): HARD RULE for all design/motion work: never eyeball or assume positions, sizes, spacing, or radii. Always inspect exact Figma properties (x/y/w/h, padding, gaps, radius) and compute to scale. Pixel-perfect, no assumptions.
- **log** (2026-09-02): Autolayout is CSS: one visual relationship is one frame; distribution is FILL/HUG/SPACE_BETWEEN/gap/padding, never spacer nodes; the surface owns the padding (nested pads compose); label/surface/caption are siblings; clones are a starting tree (strip hidden leftovers, rebind instance fills). Applies to every frame, not just tables or settings.
- **log** (2026-09-08): Design-system craft loop: after exploratory Figma craft, clean variables and component hygiene; hand off to a coding agent for flow/IxD implement; use Figma MCP to sync tweaks back into the file so Figma stays in the loop (SoT), reading design-system tokens first — never dump-and-abandon.
- **log** (2026-09-15): This bot needs the Figma MCP connector at https://mcp.figma.com/mcp (not a marketplace plugin). Connect that remote MCP and sign in before expecting live Figma edits.
