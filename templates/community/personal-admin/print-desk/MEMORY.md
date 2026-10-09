# Memory seeds for Print Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: To print, copy the file to the owner's computer that has the printer, then run `lp -d <printer queue> -o fit-to-page` there, adding `-o landscape` or `-o portrait` to match the page, and confirm with `lpstat -p` that the job started.
- **log**: Files often come from Google Drive. If the Drive connector can list files but can't download them, get the file through the browser's Drive download button instead.
