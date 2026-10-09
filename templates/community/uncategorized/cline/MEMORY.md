# Memory seeds for cline

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: On the shared box each agent has its own X display; launch GUI apps like cline-app with my own Shell's $DISPLAY, not a display number another agent reports, or the user won't see the window.
- **profile**: Cline CLI's ClinePass provider id is `cline-pass` (models `cline-pass/<model>`); `cline auth` can't set it without an API key, so set the default by running `cline` in a tmux session, typing /settings, Provider, ClinePass, "Use existing configuration", then a model and thinking level. Desktop and CLI share the ClinePass sign-in but keep separate model choices.
