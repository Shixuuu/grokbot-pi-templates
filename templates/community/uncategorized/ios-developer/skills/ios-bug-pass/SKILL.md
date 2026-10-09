---
name: ios-bug-pass
description: "Use this before every archive or when asked to hunt for bugs in an iOS app: a multi-pass audit checklist of the bugs that actually slip through, with fixes and tests."
---

# iOS bug pass

Do this in passes. Reading code alone isn't enough: for each bug, write or extend a test that would have caught it, fix it, and re-run every test target. If the project isn't in git, back up the source folder with a timestamp before editing.

## Pass 1: Inputs and files
- **Image orientation.** `UIImage.cgImage` ignores EXIF orientation, so redraw the image upright before any crop, resize, or compress. Use pixel math (`cgImage.width`) and never multiply by `image.scale` twice.
- **Size targets.** If quality alone can't reach a byte cap, step the long edge down. If it still can't fit, fail clearly instead of returning an oversized file. Respect minimum byte limits too, because portals reject files that are too small.
- **Resize with both sides set.** Letterbox or fit instead of stretching. If only one side is set, keep the aspect ratio.
- **Pickers.** Only offer Photos for tools that accept images. For single-file tools, say "Replace" rather than "Add more". Enforce file-count and total-size caps (they should match the server limits) before uploading.
- **Incoming files** (share sheet, Files, onOpenURL): get security-scoped access, read through `NSFileCoordinator` so iCloud files download, copy the bytes, clean up `Documents/Inbox`, and suggest every tool whose picker accepts the type. Don't auto-open one tool. Cancel clears the file.
- **Document types.** `CFBundleDocumentTypes` should only list UTIs a tool really accepts (role Viewer, rank Alternate). Never register `public.data` or `public.item`.

## Pass 2: Search and navigation
- Don't expand synonyms transitively: one hop only. Test that "jpg" doesn't match PDF tools and that "convert" doesn't match everything.
- Match on tokens ("exam photo"), normalize × to x, and make sure filter chips combine with search using AND.
- Avoid double titles, where a nav title is repeated as an in-page heading.
- Copy should be accurate for every chip or tab. Don't leave placeholder text, and don't make claims the feature can't back up.
- Segmented controls with more than 4 options clip on small phones, so use a menu instead.
- The keyboard should dismiss on scroll or tap, and every list needs an empty state.

## Pass 3: Settings that silently do nothing
- Check that every picker or toggle actually reaches the code path (for example, a QR error-correction picker that the generator ignored).
- Each network tool needs a timeout, a cancel option, a readable error, and handling for no network. Show progress for uploads.

## Pass 4: Store and release hygiene
- Bump the build number in pbxproj and Info.plist when the plist hardcodes it, and verify it in the archived app's Info.plist.
- IAPs: products load, "Price unavailable" never ships, transactions are verified and finished, and restore works where it applies.
- Privacy strings exist for every permission, the privacy manifest is present, and nothing is logged with user data.
- Run on the smallest and largest simulators, in light/dark mode if supported, with Dynamic Type at a large size, and on iPad if the app is universal.

## Report
List each bug in one line with its fix. Include test counts, and flag any test that passes suspiciously fast (it may be skipping its work). Say what you deliberately left unchanged and why.
