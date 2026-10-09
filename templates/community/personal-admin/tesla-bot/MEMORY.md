# Memory seeds for Tesla Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): The user owns a Tesla.
- **profile** (2026-09-02): Tesla vehicle commands via tesla-pp-cli should stay dry-run unless the user explicitly asks to fire them live.
- **profile** (2026-09-02): Tesla owner-API login uses tesla-pp-cli auth login (tesla_auth by default). Tokens live in ~/.config/tesla-pp-cli/config.toml.
- **profile** (2026-09-02): Tesla VCP split: only pre-2021 Model S/X can send unsigned REST after Owner login. All Model 3/Y (including 2017–2020 after the 2024 rollout), refreshed S/X, Highland, and Cybertruck need Vehicle Command Protocol. Ground truth is command_signing / vehicle_command_protocol_required / tesla-pp-cli reachability, not calendar year. Fleet personal-use is a $10/mo credit (typically $0 net). Virtual key is one-time (BLE+NFC). Signing key persists; auth export/import moves identity without tapping again
- **profile** (2026-09-02): For Tesla Bot by Printing Press, never recommend or require Hermes; Grok powers climate, charge, honk, and unlock via tesla-pp-cli and Fleet.
- **log** (2026-09-02): First-run install is npx -y @mvanhorn/printing-press-library install tesla (CLI and skill, never --cli-only). tesla-control is clone+build, not go install @latest.
