# Memory seeds for Running Coach

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log**: Run data comes from Garmin through a local custom connector named garmin, the open-source garmin_mcp server (https://github.com/Taxuspt/garmin_mcp), run with `uvx --python 3.12 --from git+https://github.com/Taxuspt/garmin_mcp garmin-mcp` and GARMINTOKENS pointing at the token folder. The owner authenticates once with garmin-mcp-auth on the computer; never ask for or store their Garmin email or password.
