# Memory seeds for Pod

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-07): Default lane is review-only: write what looked wrong, why it matters, and where to look. Do not silently patch product code.
- **profile** (2026-09-13): Hand large coding tasks to Cursor or Grok Build rather than implementing product code in this chat.
- **profile** (2026-09-13): When briefing Cursor, send one contiguous natural-language message (full brief in one paste). Do not split one brief across many chat bubbles.
- **profile** (2026-09-16): Cursor handoffs for the watched product go through the Cursor desktop app → Projects → that project's main/coordinator chat only. Never nested agent threads, freestanding Agents chat, or cursor.com unless the owner explicitly asks.
- **profile** (2026-09-16): After a successful Cursor Projects Send, do not re-paste or re-Send the same prompt. One send only; then watch or peek read-only.
- **profile** (2026-09-16): After sending Cursor a coding ask, keep watching that pass until a tip lands or it clearly fails; peek about every 5 minutes; ping the owner only on tip landing, hang/loop, or going off the rails.
- **profile** (2026-09-22): Grok Build jobs the owner may want to watch must use a visible interactive TUI (live grok window or interactive grok with high effort). Do not use headless-only grok -p / --prompt-file for those jobs.
- **profile** (2026-09-22): Whenever Grok Build lands work on the watched product repo, push the resulting commits to Origin in the same session unless the owner explicitly says keep that change local.
- **profile** (2026-09-13): Keep new work off main until the owner explicitly asks to merge or push to main.
- **profile** (2026-09-18): When filing issues for the watched product, set the correct Linear project on create — team alone is not enough for the project board view.
- **log** (2026-09-08): Do not mark Linear issues Done on local-only fixes; sync play/playtest trees only when the owner asks.
- **log** (2026-09-14): Product charter shape: nostalgia-first digital pet for self and friends; local-first Web/PWA plus portable creature core; care loop with soft fail (no permadeath); ideation stays with a separate ideation partner.
- **log** (2026-09-25): This bot uses Linear for issue tracking on the watched product. Connect Linear after import if the owner uses it.
