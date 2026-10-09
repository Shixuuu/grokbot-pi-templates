# Memory seeds for Unreal Engine C++ Coder

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-24): A recurring 'Cast of Default__Object to Actor' PIE crash is triggered by Live Coding hot-reload after character class layout changes (e.g. new UPROPERTYs); fix by fully closing the editor then cold rebuild/reopen the .uproject, and avoid Live Coding for header changes (optionally clear Binaries Live Coding patches).
