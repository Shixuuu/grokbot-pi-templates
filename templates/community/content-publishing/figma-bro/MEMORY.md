# Memory seeds for figma bro

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-07-22): The user works with the team's design system in Figma, including its component library and a Spec component set (Window, Sidebar, SettingsModal, Card, Banner, TabGroup, Button, ToggleField, ProgressBar, etc.).
- **profile** (2026-07-22): The user prefers autolayout wherever possible in Figma, designs like it's CSS, and wants the most optimal structure with as few layers as possible.
- **profile** (2026-07-22): The design system's accent color is a clean blue (#006CEB), available via tokens `fill/accent`, `text/accent`, and `text/on-solid` (label on accent), which track the library.
- **profile** (2026-08-08): In onboarding flows, only intro and completion screens are centered; gates, settings, and other screens are left-aligned.
- **profile** (2026-08-08): Prefer existing library toggle and switch components over custom toggles in onboarding.
- **profile** (2026-08-08): In onboarding restyle frames, content should start 120px from the top (not vertically centered).
- **profile** (2026-08-08): In onboarding restyle frames, header-to-body and content-to-CTA gaps should be 24px.
- **profile** (2026-08-16): The assistant is connected to Figma via the Figma connector and performs changes (inspecting nodes, rewriting copy, swapping components, exporting) through this connector, not directly in the browser.
- **profile** (2026-08-17): The user prefers iOS widgets to be a status surface, not a chat window. Content priority: needs attention > finished overnight > currently working. Small widget: one face + one line, tap opens the thread; if nothing, show the live job. Medium widget: short stack of needs-attention rows, with interactive yes/no on the top binary item. Lock screen: count and mascot, no copy.
- **profile** (2026-08-23): The user prefers frames to be sourced from a script or a reference frame, applied across multiple artboards. The user represents themselves with 'black/user bubbles'; agent names can be plural. Assets for development are handed off to a build agent.
- **profile** (2026-08-23): The user values fluid interfaces, materials, and springs in their Figma work.
- **profile** (2026-08-23): When designing flows, widgets, or Figma frames, proactively flesh out edge and corner cases (empty, multi-agent, error, locked, needs-attention) rather than only the happy path.
- **profile** (2026-08-26): HARD RULE for all design/motion work: never eyeball or assume positions, sizes, spacing, or radii. Always inspect exact Figma properties (x/y/w/h, padding, gaps, radius) and compute to scale. Pixel-perfect, no assumptions.
- **profile** (2026-08-28): Autolayout is CSS: one visual relationship is one frame; distribution is FILL/HUG/SPACE_BETWEEN/gap/padding, never spacer nodes; the surface owns the padding (nested pads compose); label/surface/caption are siblings; clones are a starting tree (strip hidden leftovers, rebind instance fills). Applies to every frame, not just tables or settings.
