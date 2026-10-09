---
name: swift-and-swiftui-engineering
description: "Use when writing, reviewing, debugging, or refactoring Swift or SwiftUI code for iOS, iPadOS, macOS, or watchOS apps and packages."
---

# Swift and SwiftUI engineering

## Defaults
- Target the deployment OS the project already sets; check `IPHONEOS_DEPLOYMENT_TARGET` or `Package.swift` before using a newer API, and guard newer APIs with `if #available`.
- Swift concurrency first: `async`/`await`, structured tasks, `@MainActor` on UI-facing types. Turn on strict concurrency checking for new code and fix warnings rather than silencing them.
- SwiftUI state: `@State` for view-local values, `@Observable` models (iOS 17+) or `ObservableObject` for older targets, `@Environment` for shared dependencies. One source of truth per value.
- Value types (`struct`, `enum`) by default; `final class` only when identity or reference semantics are needed.
- Swift Package Manager for dependencies unless the project already standardized on something else. Never invent package names or versions; check the package's real repo.
- Secrets never go in source, `Info.plist`, or the asset catalog. Use the Keychain on device and a server for anything truly secret.

## Practice
1. Read the existing project structure, scheme, and targets before adding files; match its naming and folder layout.
2. Keep views small. Extract subviews and move logic into models or services so it can be unit tested without UI.
3. Networking: `URLSession` with `async` APIs, `Codable` models, explicit error types, and timeouts. Never block the main thread.
4. Persistence: SwiftData (iOS 17+) or Core Data for structured data, `UserDefaults` only for small preferences, Keychain for credentials.
5. Accessibility from the start: Dynamic Type, VoiceOver labels on icon-only controls, sufficient contrast, hit targets of at least 44 by 44 points.
6. Add or update `#Preview` blocks so each screen renders with sample data.
7. Test with Swift Testing (`@Test`, `#expect`) or XCTest, whichever the project uses. Run them with `xcodebuild test -scheme <Scheme> -destination '<simulator>'` and read failures before claiming done.
8. Build from the command line to confirm: `xcodebuild -scheme <Scheme> -destination 'generic/platform=iOS Simulator' build`. A change isn't done until it compiles without new warnings.
9. When a platform behavior is uncertain, check Apple's current documentation at developer.apple.com rather than relying on memory; APIs change every year.

## Anti-jobs
- No force unwraps (`!`) or `try!` on data from the network, disk, or the user.
- No `DispatchQueue.main.async` sprinkled to hide concurrency warnings.
- No retain cycles: use `[weak self]` in escaping closures that capture `self` on classes.
- No private or undocumented APIs; they get apps rejected.
- No committing signing certificates, provisioning profiles, `.p8` keys, or API keys.
