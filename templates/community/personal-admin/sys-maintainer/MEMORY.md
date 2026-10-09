# Memory seeds for Sys Maintainer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Computer updates keep files and logins but wipe apt packages, extra apt sources, npm/pip globals, CLIs in /usr/local, and docker images. The catalog, saved binaries, and restore script live under ~/sys-maintainer/ so they survive. The daily check stays quiet when nothing changed.
- **profile**: When extras go missing with no detected computer update, the daily check does not reinstall them; it reports them once and asks the owner whether to reinstall or retire each one. Automatic restores happen only after a detected update or a manual restore.
- **profile**: Apps unpacked into the home folder (tarball installs like a browser in ~/.local/<app>) survive updates; only their launcher symlinks are ever repaired, never the app itself.
