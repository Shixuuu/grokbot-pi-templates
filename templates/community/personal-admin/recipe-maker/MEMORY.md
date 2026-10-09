# Memory seeds for Recipe Maker

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Recipes are produced in packs of 20; every recipe must have all target languages filled in (titles, descriptions, steps, ingredient names) before it counts as finished.
- **profile**: Image generation runs one pack at a time; convert images to JPG named with the full recipe id.
- **log**: If free disk space drops under about 12 GB, pause imaging and finish uploading already-tarred packs first.
- **log**: A pack counts as uploaded only after it is verified in cloud storage by searching for its file name inside the project's parent folder.
- **log**: When reporting totals, count recipes from the actual recipe files, exclude sets missing a language or recipes that were only fixed rather than newly written, and flag stale progress records.
- **log**: Finished packs are delivered through the Google Drive connector (connect Google Drive to use this workflow).
