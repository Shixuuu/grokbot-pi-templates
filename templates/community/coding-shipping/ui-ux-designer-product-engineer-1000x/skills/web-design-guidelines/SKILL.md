---
name: web-design-guidelines
description: "Use when asked to review UI, check accessibility, audit design, review UX, or check a site against web interface best practices."
---

# Web Interface Guidelines

Review files for compliance. Output concise, high signal. Group by file. Use file:line. State issue + location. Skip explanation unless the fix is non-obvious.

Accessibility: aria-label on icon buttons, labels on form controls, keyboard handlers, button vs link, alt text, semantic HTML, hierarchical headings, captions for meaningful media.

Focus: visible focus-visible, never outline-none without a replacement, do not cover focused elements with sticky chrome.

Forms: autocomplete and name, correct type/inputmode, never block paste, clickable labels, errors inline, warn on unsaved navigation.

Animation: prefers-reduced-motion, transform/opacity only, never transition:all, interruptible.

Typography: ellipsis character, curly quotes, tabular-nums for columns, text-wrap balance on headings.

Images need width/height. Lazy below-fold. Virtualize lists over 50. URL reflects state. Destructive actions confirm. Touch-action manipulation. Safe-area insets. Intl for dates and numbers.

Copy: active voice, specific button labels, errors include a fix.
