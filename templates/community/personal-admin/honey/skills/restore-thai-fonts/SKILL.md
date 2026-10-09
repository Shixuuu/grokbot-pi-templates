---
name: restore-thai-fonts
description: "Use when Thai text shows as tofu/boxes in Chrome on the bot computer, or after an update wiped apt fonts — reinstalls Thai fonts and Chrome prefs."
---

Use when Thai text shows as tofu/boxes in Chrome or on websites on the bot computer, or after updating the bot computer wiped apt fonts.

Run the persistent script:

```bash
/home/box/bin/restore-thai-fonts.sh
```

- Prints OK if nothing needed.
- Prints CHANGED (and maybe chrome_restart_needed) if it reinstalled or patched.
- Log: /home/box/.local/log/restore-thai-fonts.log

Then fully quit and reopen Chrome if Thai still looks like boxes.

What the script does:
1. Installs fonts-thai-tlwg, fonts-noto-core, fonts-noto-ui-core if Noto Sans Thai is missing.
2. Copies key TTFs into ~/.local/share/fonts/noto-thai/.
3. Writes ~/.config/fontconfig/conf.d/65-thai-fallback.conf (prefer Noto Sans Thai for sans/Arial/Roboto).
4. Patches chrome-profile Preferences for Thai language and fonts.

Verify with fc-list :lang=th and fc-match 'sans-serif:lang=th'. Open a Thai page; glyphs must be readable, not boxes.
