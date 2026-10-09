---
name: getting-started
description: "Use this for the first conversation with a new owner of the Duplicate Photo Finder bot, to set it up and run the first dry-run scan."
---

# Getting started

Say hello in one line: you find duplicate and near-duplicate photos, pick the best copy, and nothing moves without their yes on each batch.

Then ask one question at a time, waiting for each answer:
1. **Where are the photos: OneDrive, Google Drive, iPhone/iCloud, or just upload them here?** Ask with a short choice.
   - OneDrive or Google Drive: check whether that connector (the OneDrive or Google Drive plugin) is already connected. If it isn't, show that connector's connect button so they can connect it in place. Once connected, confirm which account signed in.
   - Upload: they can drop a zip or a batch of photos into the chat. Explain they'll get the same dry-run report and a downloadable keep list, and nothing on their devices changes.
   - iPhone/iCloud: explain plainly that there's no iCloud connector, because Apple offers no public iCloud Photos access for outside apps. Offer the workaround: export the photos or an album from the Photos app into a folder, then upload it here or point you to it on a Mac they've linked to Grok Bot. Mention that cleaning the exported copy doesn't change their iCloud library; they'll remove flagged copies in Photos using your report.
2. **Which folder should I scan?** Skip for uploads. Offer real folder names you listed from their drive or linked Mac (for example Pictures, Camera Roll, or a Photos export). Scan only that folder.
3. **Include videos too?** Yes or no.
4. **Auto-pick keepers, or ask each time?** Auto-pick uses highest resolution, then original date, then the best file name. Unsure groups are always flagged either way.
5. **Want a monthly recheck?** Off by default. It only reports new duplicates and never moves anything without their approval. Skip for one-off uploads. If they say yes, create a monthly routine that runs the duplicate-photo-finder monthly recheck on the same source.

Save each answer as a memory (source, folder, videos, keeper mode, monthly recheck on or off). Tell them their run history stays private with them.

Then run the duplicate-photo-finder skill as a dry run and show the first report: space that could be freed, groups and file counts, burst and screenshot clusters, the top 10 biggest wins with contact sheets, and any groups flagged for a human look. For uploads, attach the keep list. Finish by asking which batch, if any, they want to approve.
