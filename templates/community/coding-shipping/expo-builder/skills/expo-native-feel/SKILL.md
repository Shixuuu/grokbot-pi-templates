---
name: expo-native-feel
description: "Expo: native look-and-feel checklist (native headers, tabs, sheets, menus, @expo/ui, SF Symbols, semantic colors, safe areas, motion, haptics, keyboard, data states). Use when building or reviewing UI, on \"make it feel native\" / \"polish this\", and in expo-verify-change."
---

# Expo native-feel checklist

Short review pass; for depth load the upstream skill via `expo-skills-library`: screens, colors, icons, effects → `expo-native-ui`; controls and sheets → `expo-ui`; navigation chrome → `expo-router` (refs: tabs, toolbar-and-headers, form-sheet, search, zoom-transitions); motion, gestures, haptics → `expo-animation` (+ RECIPES); tokens and the 20 "native slop" tells → `expo-design-system` (refs: native-slop, audit); data states → `expo-data-fetching`; web habits → `expo-web-to-native` (refs: false-friends, native-patterns).

**Scope:** only what the change touched; respect the brief and any existing design system (a card, gradient or brand font isn't a defect; fix observable problems); never restructure an app to match these defaults.
## 0. Versions first
From `package.json`: the `expo` major, and whether `@expo/ui`, `expo-symbols`, `expo-glass-effect`, `react-native-reanimated`, `react-native-keyboard-controller` are installed. Gates: universal `@expo/ui` SDK 56+; NativeTabs `md` icons and the toolbar API SDK 55+; zoom transitions iOS 18+; Liquid Glass iOS 26+; CSS gradients need the New Architecture; SDK 58+ NativeTabs from `expo-router/native-tabs` and theme helpers from the `expo-router` root (O19/O20). Confirm exact props against the installed `.d.ts`, not memory.
## 1. Chrome: configured, not rebuilt
- [ ] Titles from the native Stack (`title` / `Stack.Title`); top-level screens use `headerLargeTitleEnabled`; no `headerShown: false` plus a hand-made title or back button.
- [ ] `NativeTabs`, not a custom/floating bar: a Stack per tab, search tab last with `role="search"`, ≤5 tabs for Android, SF Symbol and `md` icons.
- [ ] Search via `Stack.SearchBar` / `headerSearchBarOptions`; header actions via `Stack.Toolbar` (iOS).
- [ ] Short tasks use a `formSheet` route (detents, grabber, transparent `contentStyle` for glass) or `presentation: "modal"`; no custom centered dialog for picking/composing, no sheet that only closes with an "X".
- [ ] Tappable cards have `Link.Preview` and a `Link.Menu` where they help (iOS).
- [ ] Native stack transitions; no animation between tabs.
## 2. Components and visuals
- [ ] `@expo/ui` for controls, rows, pickers, sliders, menus, bottom sheets where installed; native controls not recolored; `@expo/ui` `List` only for short fixed groups.
- [ ] SF Symbols on iOS, Material on Android, one family, weights matched to text, filled when selected; no emoji or icon fonts.
- [ ] Semantic/theme colors, no raw `#fff`/`#000`/greys in screens; right in light and dark mode.
- [ ] System fonts and a named ramp; font scaling never disabled app-wide; layouts survive large accessibility text.
- [ ] `borderCurve: 'continuous'`; restrained `boxShadow` (no legacy shadow/elevation props); hairline separators; not everything is a card.
- [ ] Glass has an availability check and blur fallback, no `overflow: hidden` or opacity animation on it or ancestors; blur intensity never animated.
- [ ] `expo-image` with a known size; data text `selectable`; counters use tabular numbers.
## 3. Layout, lists, keyboard
- [ ] Safe areas via headers/tabs, `contentInsetAdjustmentBehavior="automatic"` or safe-area-context insets; no magic top margins.
- [ ] `gap` and a scale with distinct steps (rows < groups < sections), not 16 everywhere.
- [ ] Long data uses `FlatList`/`FlashList` (not `.map()`, not nested in a same-axis ScrollView), with an empty component and no row `entering` animations.
- [ ] With the keyboard open, the focused field and primary action stay visible (`react-native-keyboard-controller`; `keyboardShouldPersistTaps="handled"` on forms and search).
## 4. Motion, touch, haptics
- [ ] Each animation has a nameable purpose and justified frequency; routine screens just appear (no staggered entrances).
- [ ] Reanimated (not core `Animated`), `transform`/`opacity` only, springs for finger-driven motion, <300 ms, ease-out not ease-in, reduced motion respected.
- [ ] `Pressable` (never `Touchable*`), press-in feedback (buttons scale slightly, rows highlight), targets ≥44pt or `hitSlop`.
- [ ] Haptics once per committed action, in sync with the visual, never the only feedback, not duplicating a native control's own.
## 5. Behaviour
- [ ] Distinct loading, error, empty (with a next action) and content states; refetches keep stale content; no spinner blink.
- [ ] Auth/onboarding gates wait for hydration before routing.
- [ ] Saves disable resubmit, keep the draft on failure (inline error), dismiss only on success.
- [ ] Every enabled control works; alerts only for rare irreversible actions; permissions requested in context after an explanation.
- [ ] HIG on iOS, Material 3 on Android, no cross-platform costume.
- [ ] Custom pressables have an accessibility role, label and state where relevant.
## 6. Quick greps (candidates, not verdicts)
From the repo root against the app source (`src` or `app components`):
```bash
rg -n 'Touchable(Opacity|Highlight|WithoutFeedback)|InteractionManager|PanResponder' -g '*.tsx' src
rg -n 'headerShown:\s*false|tabBarStyle|<Modal|Alert\.alert|allowFontScaling=\{false\}' -g '*.tsx' src
rg -n "#(fff|FFF|ffffff|000|000000)\b|shadow(Color|Opacity|Radius|Offset)|elevation:" -g '*.tsx' src
rg -n 'unstable-native-tabs|@react-navigation/|expo-av|expo-linear-gradient|AsyncStorage|@expo/vector-icons' -g '*.ts*' src
rg -n '[\p{Emoji_Presentation}\x{FE0F}]' -g '*.tsx' src
```
Check hits against the checklist; full tell list in upstream `expo-design-system` native-slop.
## 7. What a web screenshot can't prove
Web previews show only layout, colors, empty/error states and wrapping. Native tabs/headers, glass and blur, sheets, context menus, haptics, keyboard and motion need an iOS/Android run (`expo-cloud-sim-verify`, within budget) or go under "not verified"; motion feel needs a recording or a release build on a device.
## Report
Failed items and fixes; items left as the owner's choice (brand/brief); items needing a device. Name upstream skills, don't paste them.
