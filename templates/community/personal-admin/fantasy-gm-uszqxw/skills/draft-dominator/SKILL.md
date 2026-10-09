---
name: draft-dominator
description: "Use when running Football Guys Draft Dominator: import a league, mock, or live Yahoo/Sleeper snake. Covers Live Sync vs host click, Cheatsheet/Suggestions/Enter Picks, keepers, and the short-clock operator path."
---

# Draft Dominator

Football Guys Draft Dominator (DD) is a companion board. The host (Yahoo, Sleeper, ESPN, CBS, MFL, and others) is the official draft room. A click in DD never makes the host pick. DD has no pick timer. The only clock is on the host.

Source: Football Guys in-app guides at footballguys.com/article/guides_myfbg_dominator (updated 2026). Prefer those over the 2024 “5 Easy Steps” article, which still describes all-manual real drafts.

Verified on a 2026 mock (DD 2026.3.40): dashboard → Settings → New Draft → Mock → Cheatsheet → Start Draft → Draft on first pick. Live Sync was not part of that walk.

## Split of labor

- Host: where you click your pick. Timer lives here.
- DD: Cheatsheet, Suggestions, board. Live Draft Sync pulls host picks into DD so you do not type other people’s picks.

If Live Sync is off, you are in Manual Entry: watch the host, click the blue + / Draft on each pick in DD, then race to pick on the host. Do not do that on a short clock.

Live Sync cannot attach to a Yahoo public mock lobby. It only attaches to an imported real league, and only when that host draft is actually live.

## Login

DD is a separate app at `footballguys.com/draftdominator`. It does not inherit the footballguys.com web session. Sign in with the Football Guys email/password (or email login code). Dashboard: `/draftdominator/drafts-dashboard`. League settings: `/league/edit/:uuId` (no `/draftdominator` prefix).

## 1. Import the league

Dashboard → **+ Add A League and Start Drafting** (or Add New League) → pick the host → **Sync** → log into the host → **Import League** on each league you want → review settings → **Approve & Get Drafting!**

Import pulls scoring, roster, type, keepers, draft order. If the league is missing, the commissioner may not have renewed it.

Do not enter the league by hand if you want Live Sync. Manually entered leagues cannot Live Sync.

Yahoo: import usually gets scoring, roster, and teams. Draft order often stays blank until about 30 minutes before the draft. Keepers may not arrive until after the draft.

## 2. Check settings

League card → **Settings**. Changes auto-save (footer **✓ Saved**; inputs can look greyed). A **+ New Draft** button also lives in the settings footer.

- General / Basic: name, rounds, snake vs third-round reversal vs salary cap.
- Rosters (lineup): min/max at each position, starters, flex, IDP, team QB/K. Starter counts must match the host.
- Scoring.
- Teams: Edit name/email.
- Draft Order: type, rounds, randomize, or drag-and-drop. Yahoo: re-sync with **Sync Settings From Host** when order publishes (~30 min before).
- Keepers: Keepers tab → Edit per team. League-level (all drafts for that league).

Leave via **‹ Home**. Do not change order unless the host has published it.

## 3. Start a draft

League card → **+ New Draft**. Modal copy: mock (app controls other teams) vs the league’s real draft.

- **Mock Draft**: the app controls the other teams. Practice. Does not touch the host. Chips: App runs other teams / Practice anytime.
- **Real Draft: Manual Entry**: you enter every pick in DD. Works offline. Use only if Live Sync is unavailable.
- **Real Draft: Live Sync**: automatically syncs picks from the host in real time. **You still enter your own picks on the host.** Needs internet the whole draft. Picks start entering when the host draft begins.

Snake, linear, 3rd-round reversal; redraft and dynasty. Not auction/salary cap (those are mock or manual; Salary Cap slider in settings; nominate from Auction or Cheatsheet, then enter winning bid/team for a real auction).

After Mock: “Building your player pool…” for several seconds. Then the board.

Onboarding modal on first entry (League vs Standard Rankings / Your Rankings’ Settings / Mock Draft Settings): tick **Don’t Show Again** in a mock so it does not eat seconds on draft night. Once ticked, later mocks may skip it entirely.

Do not hit Resume on the wrong league. The dashboard can show another Real • In Progress draft. Prefer **+ New Draft** when testing the path from scratch.

## 4. Cheatsheet (main board)

Default tab when a draft starts. Left rail: Cheatsheet, Suggestions, Enter Picks, Rosters, Draft Board, Exit Draft.

Ranked list for this league’s scoring. Position tabs All / QB / RB / WR / TE / FLEX / SFLEX / DEF / K. Search. Filter. Gear.

Row actions on hover (not three separately labeled buttons):

- Blue person-+ = **Draft**
- Second icon = **Add to Suggestions**
- Third = combined **Watch / Avoid** (not a standalone Avoid button)

Draft in DD only logs the pick on this board. It is not the host click.

- Clicking the **player name** opens a profile (trends, news, Notes). Notes save across all drafts for that league. On a short clock do not click the name or the row; the drawer is slow to close. Use the action icons.
- Gear on Cheatsheet: roster-need / value vs roster balance / upside factor.
- Filter: team, injury, rookies.
- Columns: control next to **More Views**.
- Switching Cheatsheet ↔ Suggestions ↔ Enter Picks can fully reload the draft (several seconds). On a short clock, stay on Cheatsheet.

## 5. Suggestions, Watch, Avoid

**Suggestions**: curated list from roster construction and best available. Each player has a draft option. The Suggestions badge can increment on its own during a mock without you adding anyone.

Watch List and Avoid List live in the Suggestions dropdown / the third row control. Watch-listed players show there. Avoid drops them in the board logic.

Pre-load a short Suggestions list before pick 1 so the next pick is a glance. If Add Next is dead, use Cheatsheet → Add to Suggestions.

## 6. Enter Picks (manual / fallback)

Search, plus columns by ADP and position. Select the name → Draft. This is the fast pane if Live Sync stalls or you are in Manual Entry. Still pick on the host first during a real draft.

## 7. Mock vs live, short clock

Confirm the host pick timer on the host settings page. Do not assume 30 seconds.

Mock test (safe): New Draft → Mock → Don’t Show Again if shown → stay on Cheatsheet → **Start Draft** → when it’s your pick, read top 3, click **Draft** in DD. **Pause Draft** (Speed slider sits next to it) to stop. Reset from More if you need a clean board. This tests the board, not Live Sync.

Live draft:

1. Two windows: host draft room + DD Cheatsheet. Open both early (loading projections/settings takes a few seconds).
2. Re-sync host settings/order ~30 minutes before.
3. Start **Real Draft: Live Sync** on the imported league. Do not start Live Sync on a public mock.
4. Dismiss host overlays (Yahoo Fantasy Plus upsell, Settings, autopick-from-inactivity). Stay clicked-in on the host or it autodrafts.
5. During others’ picks: do nothing in DD. Watch the pick strip. Do not type picks.
6. On the clock: glance Cheatsheet/Suggestions top row. Search or select that name **on the host** → Draft. Confirm the host accepted it.
7. Never spend the clock clicking Draft in DD as if that were the pick.
8. If sync lags after the host accepted your pick, then log it in DD. Host first, board second.
9. If the clock is nearly gone, take the queued name. Do not re-rank live.

## 8. Realistic mocks (optional prep)

In a mock: More → Draft Strategy → Mock Draft Settings. Per-manager profiles (never drafts Raiders, WR-heavy, min/max by position) or league-wide defaults.

## 9. If sync breaks

Fall back to Enter Picks. Keep picking on the host first. Do not miss a host pick to fix the board.

## 10. Auction note

Live Sync does not support auction. Mock/manual: Salary Cap slider, nomination order on Draft Order, bid or I’m Out, enter winning bid/team in a real auction. More → Draft Strategy → Your Rankings Settings → Auction Strategy.
