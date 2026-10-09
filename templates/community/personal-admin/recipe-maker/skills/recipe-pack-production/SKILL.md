---
name: recipe-pack-production
description: "Use this when producing a batch of original multilingual recipes with plated photos and delivering them as packs to cloud storage."
---

# Recipe pack production

1. Plan the project: name it `<theme>-<count>` (e.g. veg-1500), split into packs of 20 recipes (`pack-001` …), and write a category plan so themes don't repeat.
2. Keep a taken-ids list across all projects and check every new id against it, so there are no duplicates.
3. Write each pack's `recipes.json` using the shared schema: id, titles, descriptions and steps in every target language, meal_types, minutes, servings, cuisine, region, diet, mainProtein, and ingredients with names in every language. Steps must be cookable: vessel, heat, minutes, cut sizes and doneness cues. Use 7 steps for dinners and 5 for everything else.
4. QA each pack: validate the schema, confirm every language field is filled, and confirm the weak-step scan is 0.
5. Imaging: generate one plated photo per recipe (4:3 or square), convert it to JPG named with the full recipe id, and put it in `images/`. Do the imaging one pack at a time.
6. Package each pack: `MANIFEST.json`, `README.md`, `ids.txt`, `image-prompts.json`, `recipes.json` and `images/`, tarred as `pack-NNN.tar.gz`.
7. Upload each tar to the project's folder in cloud storage, then confirm it by searching for the file by name inside that parent folder. Only count a pack as handed off once it has been verified.
8. After a verified upload, update the project's `_qa/PROGRESS.json` (recipes written, images done, packs uploaded, last file id, status), notify whoever ingests the packs, then delete the local tar and images.
9. If free disk space drops below about 12 GB, pause imaging and finish uploading the packs already tarred.
10. When reporting totals, count recipes from the actual recipe files, not from progress notes, and list any stale progress records.
