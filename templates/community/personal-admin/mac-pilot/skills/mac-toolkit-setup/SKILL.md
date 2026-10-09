---
name: mac-toolkit-setup
description: "Use when a Mac Pilot bot needs to build (or rebuild/repair) its small Mac control toolkit in ~/grokbot-cua on the user's registered Mac - screenshots per display, real mouse/keyboard events, accessibility lookups, an optional click-through agent pointer overlay, and PID-targeted background events."
---

# Mac toolkit setup

Builds `$HOME/grokbot-cua/` on the user's Mac. Run commands with Shell on the user's Mac (machineId), not the box. Write files with quoted heredocs (`cat > f <<'EOF'`). Never hardcode a username; use `$HOME`.

## 0. Prerequisites
- `xcode-select -p || xcode-select --install` (swiftc; the install dialog needs the user to click).
- System Settings > Privacy & Security: **Screen Recording** and **Accessibility** for Grok Bot.app (it runs the commands, so it owns the permissions). Missing Accessibility = events silently dropped; missing Screen Recording = captures show only wallpaper.
- `TK=$HOME/grokbot-cua; mkdir -p $TK/shots && cd $TK`

## 1. Coordinates (the #1 source of bugs)
- CGEvent, System Events/AX `position`, and all tools here: global **points**, origin = **top-left of the main display**, y grows down. Displays left of/above main have negative x/y.
- Cocoa (NSScreen, NSWindow): origin = **bottom-left of the main display**, y up. Convert: `axY = mainHeight - cocoaY` (for a rect: `axTop = mainHeight - cocoaMaxY`).
- Screenshots are pixels; Retina is 2x. `shot.sh` downscales so 1 image px = 1 point; add the display's top-left offset to get global coords.

## 2. displays.swift (layout detection)
```swift
import AppKit
// prints one line per display: capture index (screencapture -D), scale, id, top-left origin, size in points
var ids = [CGDirectDisplayID](repeating: 0, count: 16); var n: UInt32 = 0
CGGetActiveDisplayList(16, &ids, &n)
for k in 0..<Int(n) {
  let id = ids[k], b = CGDisplayBounds(id)   // already top-left global points
  let ns = NSScreen.screens.first { ($0.deviceDescription[NSDeviceDescriptionKey("NSScreenNumber")] as? NSNumber)?.uint32Value == id }
  print("capture \(k+1) scale \(Int(ns?.backingScaleFactor ?? 1)) id \(id)\(CGDisplayIsMain(id) != 0 ? " main" : "") topleft \(Int(b.minX)),\(Int(b.minY)) size \(Int(b.width))x\(Int(b.height)) name \(ns?.localizedName ?? "?")")
}
```
Confirm the `-D` mapping once by capturing each display. UI language: `defaults read -g AppleLanguages`.

## 3. shot.sh (screenshot per display)
```zsh
#!/bin/zsh
# shot.sh [name] [display#] -> prints $HOME/grokbot-cua/shots/<name>.png (1 px = 1 pt)
D=$HOME/grokbot-cua/shots; mkdir -p $D; n=${1:-shot-$(date +%H%M%S)}; k=${2:-1}; f=$D/$n-full.png
screencapture -x -D $k "$f" || exit 1
s=$($HOME/grokbot-cua/displays | awk -v k=$k '$1=="capture"&&$2==k{print $4}'); s=${s:-1}
w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
sips --resampleWidth $(( w / s )) "$f" --out "$D/$n.png" >/dev/null && rm "$f" && echo "$D/$n.png"
```
Read the PNG back with the Read tool (machineId). `-x` = no shutter sound. Delete old shots when done; they can contain private content.

## 4. macctl.swift (REAL mouse + keyboard via CGEvent)
```swift
import Foundation
import CoreGraphics
// macctl pos | move X Y | glide X Y [ms] | click X Y [right|double] | drag X1 Y1 X2 Y2 | scroll DY [DX]
//        | type "text" | key KEYCODE [cmd,shift,alt,ctrl]      (global points, top-left of main display)
let a = CommandLine.arguments
func pt(_ i: Int) -> CGPoint { CGPoint(x: Double(a[i])!, y: Double(a[i+1])!) }
func m(_ t: CGEventType, _ p: CGPoint, _ b: CGMouseButton = .left, clicks: Int64 = 1) {
  let e = CGEvent(mouseEventSource: nil, mouseType: t, mouseCursorPosition: p, mouseButton: b)!
  e.setIntegerValueField(.mouseEventClickState, value: clicks); e.post(tap: .cghidEventTap) }
func k(_ code: CGKeyCode, _ down: Bool, _ f: CGEventFlags = [], _ ch: UInt16? = nil) {
  let e = CGEvent(keyboardEventSource: nil, virtualKey: code, keyDown: down)!; e.flags = f
  if var c = ch { e.keyboardSetUnicodeString(stringLength: 1, unicodeString: &c) }
  e.post(tap: .cghidEventTap) }
guard a.count >= 2 else { print("usage: pos|move|glide|click|drag|scroll|type|key"); exit(1) }
switch a[1] {
case "pos": let p = CGEvent(source: nil)!.location; print(Int(p.x), Int(p.y))
case "move": m(.mouseMoved, pt(2))
case "glide":
  let s = CGEvent(source: nil)!.location, e = pt(2)
  let ms = a.count > 4 ? Double(a[4])! : max(350, min(1100, Double(hypot(e.x-s.x, e.y-s.y)) * 0.7)), n = max(12, Int(ms/16))
  for i in 1...n { let q = 0.5 - 0.5*cos(Double.pi*Double(i)/Double(n))   // ease-in-out
    m(.mouseMoved, CGPoint(x: s.x+(e.x-s.x)*q, y: s.y+(e.y-s.y)*q)); usleep(useconds_t(ms*1000/Double(n))) }
case "click":
  let p = pt(2), mode = a.count > 4 ? a[4] : "left"; m(.mouseMoved, p); usleep(40000)
  if mode == "right" { m(.rightMouseDown, p, .right); m(.rightMouseUp, p, .right) }
  else { m(.leftMouseDown, p); m(.leftMouseUp, p)
    if mode == "double" { usleep(60000); m(.leftMouseDown, p, clicks: 2); m(.leftMouseUp, p, clicks: 2) } }
case "drag":
  let p1 = pt(2), p2 = pt(4); m(.mouseMoved, p1); usleep(40000); m(.leftMouseDown, p1); usleep(40000)
  for i in 1...30 { let t = Double(i)/30; m(.leftMouseDragged, CGPoint(x: p1.x+(p2.x-p1.x)*t, y: p1.y+(p2.y-p1.y)*t)); usleep(8000) }
  m(.leftMouseUp, p2)
case "scroll":   // lines; negative DY scrolls down
  CGEvent(scrollWheelEvent2Source: nil, units: .line, wheelCount: 2, wheel1: Int32(a[2])!, wheel2: a.count > 3 ? Int32(a[3])! : 0, wheel3: 0)!.post(tap: .cghidEventTap)
case "type":     // unicode per char; works across keyboard layouts
  for ch in a[2].utf16 { k(0, true, [], ch); k(0, false, [], ch); usleep(12000) }
case "key":
  var f: CGEventFlags = []
  for mod in (a.count > 3 ? a[3] : "").split(separator: ",") { switch mod {
    case "cmd": f.insert(.maskCommand); case "shift": f.insert(.maskShift)
    case "alt": f.insert(.maskAlternate); case "ctrl": f.insert(.maskControl); default: break } }
  k(CGKeyCode(a[2])!, true, f); k(CGKeyCode(a[2])!, false, f)
default: print("unknown command"); exit(1)
}
```
Key codes: Return 36, Tab 48, Space 49, Backspace 51, Esc 53, Left 123, Right 124, Down 125, Up 126, A 0, C 8, V 9, W 13, F 3, L 37. `type` cannot press Return/Backspace; use `key`. Keystrokes go to the frontmost app.

## 5. ax.sh + clickax.sh (accessibility lookup)
```zsh
#!/bin/zsh
# ax.sh "<System Events element spec>" -> center "X Y" of the element
osascript -e "tell application \"System Events\" to tell ($1) to set {p, s} to {position, size}" -e 'return ((item 1 of p) + (item 1 of s) div 2) & " " & ((item 2 of p) + (item 2 of s) div 2) as string' 2>&1
```
`clickax.sh "<spec>"` (real mouse): `read x y <<< "$(ax.sh "$1" | tr -d ',')"`, exit if empty, then `macctl glide $x $y; sleep 0.15; macctl click $x $y`.
Spec example: `button 1 of window 1 of process "Finder"`. Explore with `get {name, role, position, size} of UI elements of window 1 of process "X"` (`entire contents` is slow). Prefer no-mouse actions first: `perform action "AXPress" of <spec>`, `set value of <text field spec> to "..."`, `click menu item "..." of menu 1 of menu bar item "..." of menu bar 1 of process "X"` (names are localized; app must be frontmost for its menus).

## 6. pidev (PID-targeted background events)
Same as macctl (`pidev PID click X Y | down X Y | up X Y | drag X1 Y1 X2 Y2 [ms] | scroll X Y DY | key CODE [mods] | type "text"`) with these changes:
- `let src = CGEventSource(stateID: .privateState)`; create every event with `src`, and send with `e.postToPid(pid)` instead of `post(tap:)`.
- Optional env `WINID` (a CGWindowID from `CGWindowListCopyWindowInfo` `kCGWindowNumber`): set undocumented fields 91 and 92 (window under pointer / that can handle the event) on mouse events:
  `e.setIntegerValueField(CGEventField(rawValue: 91)!, value: wid); e.setIntegerValueField(CGEventField(rawValue: 92)!, value: wid)`
- Scroll in pixel units with `e.location = p`; ~70 ms between typed chars, ~60 ms between down/up.
- PID: `pgrep -x TextEdit` or `osascript -e 'tell application "System Events" to unix id of process "TextEdit"'`.
Limits: does not move the real cursor or change focus, but support is per-app. Many apps ignore background mouse events (web content, Catalyst/iOS-style apps, games); iPhone Mirroring ignores them entirely. Hover effects do not fire. Always verify with a screenshot; fall back to AX/AppleScript or (with permission) the real mouse.

## 7. Optional agent pointer overlay (agentcursor.swift)
A visible second "agent cursor": click-through, always-on-top, never moves the real mouse. Driven by lines written to a FIFO.
```swift
// agentcursor [FIFO] [X Y]   env AGENT_LABEL (default "AGENT", "" = no label)
// FIFO lines: move X Y [ms] | jump X Y | click | label TEXT | hide | show | quit   (top-left global points)
import Cocoa
import QuartzCore
let W: CGFloat = 360, H: CGFloat = 160, hot = CGPoint(x: 30, y: 120)   // arrow tip inside panel
var label = ProcessInfo.processInfo.environment["AGENT_LABEL"] ?? "AGENT"
final class V: NSView {
  override func draw(_ r: NSRect) {
    let pts: [(CGFloat, CGFloat)] = [(0,0),(0,26),(6.3,20),(10.8,30.4),(15,28.6),(10.6,18.4),(19,18.4)]
    let p = NSBezierPath()
    for (i, q) in pts.enumerated() { let c = CGPoint(x: hot.x+q.0*1.25, y: hot.y-q.1*1.25); if i == 0 { p.move(to: c) } else { p.line(to: c) } }
    p.close(); p.lineWidth = 1.5
    NSColor.white.setFill(); p.fill(); NSColor.black.setStroke(); p.stroke()
    guard !label.isEmpty else { return }
    let t = NSAttributedString(string: label, attributes: [.font: NSFont.systemFont(ofSize: 10.5, weight: .semibold), .foregroundColor: NSColor.white, .kern: 1.2])
    let ts = t.size(), pill = NSRect(x: hot.x+22, y: hot.y-58, width: ts.width+18, height: ts.height+9)
    NSColor(white: 0.05, alpha: 0.85).setFill(); NSBezierPath(roundedRect: pill, xRadius: pill.height/2, yRadius: pill.height/2).fill()
    t.draw(at: CGPoint(x: pill.minX+9, y: pill.minY+4.5))
  }
}
final class App: NSObject, NSApplicationDelegate {
  var panel: NSPanel!, view: V!, anim: Timer?, cur = CGPoint(x: 400, y: 300)
  let mainH = NSScreen.screens[0].frame.height          // Cocoa<->top-left uses the MAIN screen height
  func applicationDidFinishLaunching(_ n: Notification) {
    let a = CommandLine.arguments, fifo = a.count > 1 ? a[1] : "/tmp/agentcursor.fifo"
    if a.count > 3, let x = Double(a[2]), let y = Double(a[3]) { cur = CGPoint(x: x, y: y) }
    panel = NSPanel(contentRect: NSRect(x: 0, y: 0, width: W, height: H), styleMask: [.borderless, .nonactivatingPanel], backing: .buffered, defer: false)
    panel.isOpaque = false; panel.backgroundColor = .clear; panel.hasShadow = false
    panel.ignoresMouseEvents = true; panel.level = .screenSaver           // click-through, above everything
    panel.collectionBehavior = [.canJoinAllSpaces, .stationary, .fullScreenAuxiliary, .ignoresCycle]
    view = V(frame: NSRect(x: 0, y: 0, width: W, height: H)); view.wantsLayer = true; panel.contentView = view
    place(); panel.orderFrontRegardless()
    unlink(fifo); mkfifo(fifo, 0o600)
    Thread.detachNewThread {          // open blocks until a writer connects; read all lines it sent
      while true {
        guard let fh = FileHandle(forReadingAtPath: fifo) else { sleep(1); continue }
        let s = String(data: fh.readDataToEndOfFile(), encoding: .utf8) ?? ""; fh.closeFile()
        for l in s.split(separator: "\n") { let w = l.split(separator: " ").map(String.init); DispatchQueue.main.async { self.handle(w) } }
      }
    }
  }
  func place() { panel.setFrameOrigin(NSPoint(x: round(cur.x - hot.x), y: round(mainH - cur.y - hot.y))) }
  func handle(_ w: [String]) {
    switch w.first ?? "" {
    case "move":
      guard w.count >= 3, let x = Double(w[1]), let y = Double(w[2]) else { return }
      let ms = w.count > 3 ? Double(w[3]) ?? 0 : 0, d = Double(hypot(x - cur.x, y - cur.y))
      glide(CGPoint(x: x, y: y), ms > 0 ? ms/1000 : max(0.45, min(1.2, d * 0.0008)))
    case "jump":
      guard w.count >= 3, let x = Double(w[1]), let y = Double(w[2]) else { return }
      anim?.invalidate(); cur = CGPoint(x: x, y: y); place()
    case "click": ring()
    case "label": label = w.dropFirst().joined(separator: " "); view.needsDisplay = true
    case "hide": panel.orderOut(nil)
    case "show": panel.orderFrontRegardless()
    case "quit": NSApp.terminate(nil)
    default: break
    }
  }
  func glide(_ b: CGPoint, _ dur: Double) {   // cubic ease-in-out along a gentle arc
    anim?.invalidate(); let a = cur, dx = b.x - a.x, dy = b.y - a.y, dist = hypot(dx, dy); if dist < 1 { return }
    let bend = min(0.18, 60/dist + 0.08), c = CGPoint(x: (a.x+b.x)/2 - dy*bend, y: (a.y+b.y)/2 + dx*bend), t0 = CACurrentMediaTime()
    anim = Timer.scheduledTimer(withTimeInterval: 1.0/120, repeats: true) { tm in
      let t = min(1, (CACurrentMediaTime() - t0) / dur), u = CGFloat(t < 0.5 ? 4*t*t*t : 1 - pow(2 - 2*t, 3)/2)
      self.cur = CGPoint(x: (1-u)*(1-u)*a.x + 2*(1-u)*u*c.x + u*u*b.x, y: (1-u)*(1-u)*a.y + 2*(1-u)*u*c.y + u*u*b.y)
      if t >= 1 { self.cur = b; tm.invalidate() }
      self.place(); self.panel.orderFrontRegardless()
    }
  }
  func ring() {   // click ripple at the tip
    let r = CAShapeLayer(); r.path = CGPath(ellipseIn: CGRect(x: -18, y: -18, width: 36, height: 36), transform: nil)
    r.position = hot; r.fillColor = CGColor.clear; r.strokeColor = CGColor.white; r.lineWidth = 1.5; r.opacity = 0
    view.layer!.addSublayer(r)
    let s = CABasicAnimation(keyPath: "transform.scale"); s.fromValue = 0.25; s.toValue = 1
    let o = CABasicAnimation(keyPath: "opacity"); o.fromValue = 1; o.toValue = 0
    let g = CAAnimationGroup(); g.animations = [s, o]; g.duration = 0.25; r.add(g, forKey: nil)
    DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) { r.removeFromSuperlayer() }
  }
}
let app = NSApplication.shared; app.setActivationPolicy(.accessory)
let d = App(); app.delegate = d; app.run()
```
`start-overlay.sh [X Y]` - fully detached (double fork + setsid) so it survives the agent's shell:
```zsh
#!/bin/zsh
pkill -x agentcursor; sleep 0.2
perl -MPOSIX -e 'fork and exit; setsid; fork and exit; open STDIN,"</dev/null"; open STDOUT,">>/tmp/agentcursor.log"; open STDERR,">&STDOUT"; exec @ARGV' "$HOME/grokbot-cua/agentcursor" /tmp/agentcursor.fifo "$@"
sleep 0.8; pgrep -x agentcursor
```
`vp.sh move X Y [ms] | jump X Y | click | label TEXT | hide | show | quit` (2 s timeout so a dead overlay never hangs the shell):
```zsh
#!/bin/zsh
pgrep -x agentcursor >/dev/null || { echo "overlay not running" >&2; exit 1; }
perl -e 'alarm 2; open(F, ">", "/tmp/agentcursor.fifo") or exit 1; print F "@ARGV\n"; close F' "$@"
```
Pattern: `vp.sh move X Y` -> wait for the glide -> `vp.sh click` -> do the real action (AX press, pidev click, AppleScript). The overlay only shows intent; it clicks nothing. Set the label with `AGENT_LABEL="..." start-overlay.sh` or `vp.sh label ...`; keep it short and neutral.

## 8. Build and smoke test
```zsh
cd $HOME/grokbot-cua && chmod +x *.sh
for t in displays macctl pidev agentcursor; do swiftc -O $t.swift -o $t || echo "BUILD FAILED: $t"; done
./displays; ./shot.sh test 1; ./macctl pos
osascript -e 'tell application "System Events" to get name of first process whose frontmost is true'
```
Test `start-overlay.sh` / `vp.sh move` only after telling the user something will appear on screen; `vp.sh quit` when done. Don't test real-mouse commands without the user's OK.
