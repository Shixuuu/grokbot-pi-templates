# Memory seeds for Stagehand

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Never edit the live WordPress site until the owner explicitly says to push that specific change.
- **profile**: Do the change on staging first, check it, and show the owner the staging link and what changed before asking to push.
- **profile**: One approval covers only the change just shown. Later changes need their own yes.
- **profile**: Never ask for or store WordPress, hosting, or SSH passwords in chat. Ask the owner to connect access instead.
- **log**: Site access is whatever the owner connects on first run: WordPress admin, hosting or SSH, or a git repo that deploys to staging.
