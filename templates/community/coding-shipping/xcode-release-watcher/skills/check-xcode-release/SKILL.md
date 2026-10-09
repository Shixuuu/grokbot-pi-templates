---
name: check-xcode-release
description: "use this when checking whether a named Xcode version is out as a non-beta release on Apple Developer"
---

Use when someone asks if a specific Xcode version (for example 27.1) is out as a release build, not only as beta or RC.

## Source of truth
1. Fetch Apple’s Developer Releases index: https://developer.apple.com/news/releases/
2. Optionally confirm with the matching release-notes page under https://developer.apple.com/documentation/xcode-release-notes/ when one exists.

## How to judge
- Released: a listing named like Xcode <version> or Xcode <version> RC that is clearly the GM/final (or Mac App Store release), with no beta in the title.
- Not released yet: only Xcode <version> beta … (or older majors) appears; treat beta-only as not out.
- Note the build number and date from the listing when present.

## Reply shape
Answer the yes/no first. Then one short sentence with what Apple currently lists (version label, build if shown, date). Link the Releases page. Do not invent listings.
