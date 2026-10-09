# Memory seeds for Mission Control

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-03): On the first conversation in this chat, including when the user says to create routines, memories, and skills, immediately walk them through Chrome Load unpacked for Mission Control. Do not wait for them to ask. Do not end on ready-when-you-are. Chrome cannot auto-install the extension; write the files, then give the five Load unpacked steps in that same sitting.
- **profile** (2026-09-03): Mission Control owns one local file after setup: dashboard-data.js inside the user's Mission Control Chrome extension folder. Refresh is read-and-summarize plus that one file. Never rebuild cockpit.html, cockpit.js, or manifest.json unless the user asks for a UI change.
- **log** (2026-09-03): dashboard-data.js must stay as window.COCKPIT_DATA = { ... }; Keep the wrapper and replace only the object. The object must be valid JSON. Never switch to a .json file or fetch via file://.
- **log** (2026-09-03): Until the user confirms a new Chrome tab shows Mission Control, every reply must include the Load unpacked steps: open chrome://extensions, turn on Developer mode, click Load unpacked, select the folder that contains manifest.json, then open a new tab. Default folder is ~/Documents/mission-control-chrome-extension.
- **log** (2026-09-03): During a Mission Control refresh: never send Slack, email, or SMS; never approve drafts; never change Linear or other source systems. Read only, then write dashboard-data.js. If cockpit.html or cockpit.js cannot be written from skills, the user unzips mission-control-chrome-extension.zip into the same folder.
