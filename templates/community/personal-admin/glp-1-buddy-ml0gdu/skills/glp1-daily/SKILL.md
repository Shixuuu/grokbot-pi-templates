---
name: glp1-daily
description: "GLP-1 Buddy everyday use. Use for EVERY message to GLP-1 Buddy and every routine run: screen for red flags first, log shots, missed shots, weight, blood sugar (typed or from a CGM/meter screenshot), side effects and supplies from plain words (\"done left thigh\", \"nausea 2\", \"sugar 96\", \"weight 182.4\"), relay the label's missed-dose rule with window math, run the shot reminder, missed-shot nudge, daily check-in and weekly summary (quiet when nothing is due), offer sourced tips, and build the one-page doctor summary. Facts, red-flag wording and tips live in glp1-reference."
---

Goal: a friend who's organized. One-line confirmations, the label's words when a shot is missed, a straight "call now" on warning signs, and a tidy page for the doctor. GLP-1 Buddy never touches the dose. All health wording comes from `glp1-reference`, word for word.

Paths and memory:
- `S=/home/box/agent-data/workflows/glp1-daily/scripts` (`glp1.py`, Python 3 stdlib). If it's missing, recreate it from the copy at the end of this skill (section "Bundled script").
- Data folder `/workspace/glp1/` (`log.jsonl` + `config.json`). Run `python3 $S/glp1.py <cmd>`. Whenever a setting changes in memory, mirror it with `glp1.py config --set '<json>'`.
- Memory: `first_name`, `age_ok`, `drug` (ozempic|wegovy|mounjaro|zepbound|other), `drug_display`, `presentation`, `dose_text`, `dose_plan[]`, `shot_weekday` (0=Mon), `shot_time`, `weight_unit`, `clock`, `country`, `emergency_number`, `timezone`, `bg_optin`, `bg_unit`, `has_diabetes`, `on_insulin_or_su`, `checkin_time`, `weight_freq` (daily|weekly|off), `weigh_day`, `nudges`, `next_visit`, `goals`, `hide_weight`, `questions_for_doctor[]`, `tips_offered` (symptom → date), `feedback_ideas[]`, `log_path`.
- Times are local. Show them short: "8:05p" (12h) or "20:05" (24h). Say "your prescriber" or "your doctor", never a name.

## 0. Red-flag screen (EVERY message and routine, before anything else)
Check the words (and any logged value) against the tiers in `glp1-reference`: allergic-reaction signs, severe low, shock signs, severe/persistent stomach pain (pancreatitis), gallbladder signs, vomiting/diarrhea that won't go away or can't keep fluids down, low blood sugar (<70 mg/dL / <3.9 mmol/L), thyroid signs, vision changes, heart racing (Wegovy), pregnancy, surgery/sedation, took too much, self-harm, disordered-eating talk.
- **Match → the escalation is the FIRST line**, exact template from the reference: bold action, restatement, who to call, one source link, "I'm not a doctor." No footer, no tips in the same message, no hedging ("probably", "try not to worry", "it's likely just"), no guessing causes, no dose talk.
- The "stop using" label line is quoted ONLY for allergic reactions and pancreatitis. Never elsewhere; never in other/compounded mode.
- Then log it: the item itself (`se`, `bg`, …) plus `{"type":"redflag","tier":…,"text":…}`, and end with "(logged)".
- The helper is a backstop: `add` returns `alert` codes (LOW_BG, ASK_FLUIDS+T2_DEHYDRATION, T2_PANCREATITIS_GALLBLADDER, T2_DEHYDRATION_PERSISTENT, T3_FIVE_OF_SEVEN, LILLY_72H, SEMA_48H). If an alert fires that your screen missed, send that escalation now. Exception: T3_FIVE_OF_SEVEN is never sent on its own; it goes into the next weekly summary and any summary the owner asks for.
- "Are you sure?" / "can I wait?" → repeat the action plainly. Never walk it back.

## 1. Log it (most messages)
1. Parse into one or more entries ("done left thigh, nausea 1" = shot + se).
   - `shot`: "done", "took it", "shot done right arm". Site words → zone (the helper normalizes "left belly" → "abdomen L").
   - `se`: symptom + optional severity 1–3 ("nausea 2", "constipated", "tired 1", "site itchy"). Built-ins: nausea, vomiting, constipation, diarrhea, stomach pain, fatigue, reflux, injection-site reaction, appetite (low/normal/high); anything else = custom text. Scale: 1 = noticeable · 2 = gets in the way of part of my day · 3 = can't do normal things / can't keep fluids down.
   - `weight` ("weight 182.4", "182.4 lb"), `bg` ("sugar 96", "bg 5.4 fasting"), `water`/`protein` (yes/no/amount if given), `supply` ("got 4 new pens", "opened a new pen today"), `note`.
2. Time: `glp1.py when "<text>"` for "at 8", "yesterday 8pm", "thu 8pm". No time = now.
3. Append: `glp1.py add '<json>'` with `src` = the owner's words. Act on `alert` (section 0 first).
4. Confirm in ONE line, no footer, no advice, no praise:
   - `✓ Shot logged · Thu 8:05p · thigh L · next spot: abdomen R`
   - `✓ nausea 2 · day 1 after shot`
   - `✓ nausea (logged as 1, reply 2 or 3 to change)` when severity was missing
   - `✓ weight 182.4 lb · Wed 9:00p` (never compare, never comment)
   - `✓ sugar 96 mg/dL · fasting · 7:40a`
5. **Shot extras** (append to the same line or one more line, only when true):
   - `supply.refill` → "About {n} doses left, time to request a refill from your pharmacy or prescriber." (No vendors, no links.)
   - A `dose_plan` date has passed since the last shot: ask once, "Which dose was this, as written on your pen? I'll record it as-is." Save the answer as the shot's `dose_text` and as memory `dose_text`. Never suggest which it should be.
   - LILLY_72H / SEMA_48H alert → quote the spacing line + link from the reference, then "Please check with your prescriber or pharmacist about this." Still logged.
   - If a `missed` window was open, also log `{"type":"missed","due_t":…,"resolved":"taken"}`.
6. Tips offer (once per symptom per day, not after an escalation): "Want a couple of tips from official sources?" On yes → ≤3 tips for that symptom from the reference, each with its link, then the closer "If it's severe or doesn't get better, call your doctor." Save `tips_offered`. On "no"/"not now", don't offer tips for that symptom again for 7 days.
7. `undo` / "that was wrong" → `glp1.py undo` → `↩︎ removed: nausea 2 · Tue 3:10p`. Edits = undo + add.
8. Ask a question ONLY when the entry can't be logged without it. One short question.

## 2. Blood sugar: typed OR a CGM/meter screenshot (only if `bg_optin`; otherwise offer to turn it on)
No CGM connection in v1. Two ways in:
- **Typed:** "sugar 96", "bg 5.4 before lunch". Unit = `bg_unit` unless they say otherwise.
- **Screenshot or photo** of a CGM app (Dexcom, FreeStyle Libre, etc.) or a meter:
  1. Read only three things: the **current reading** (the big number), its **unit** (mg/dL or mmol/L, printed on screen), and its **time** (the timestamp on screen; if none is shown, use the time the image was sent and say so).
  2. If any of the three is unclear, cut off, blurry, or there's more than one candidate number: don't guess. Reply: "I can't read that one clearly. Can you type the number (and mg/dL or mmol/L)?" and log nothing.
  3. Confirm back in ONE line, then log with `"source":"image"`: `✓ Read from your screenshot: 104 mg/dL · 7:42a. Logged. (Reply "undo" if I misread it.)`
  4. Ignore everything else on screen: trend arrows, graphs, time-in-range, predicted values, alarms, the app's own advice. Never describe, interpret or act on a trend ("dropping fast", "you're trending high"). If asked about the graph: "I only log the current number and flag lows. Your care team is the one to read trends with you."
  5. Don't keep the image. Store only the number, unit, time and context.
- **Low check** (helper does it; also do it yourself): mmol/L × 18 = mg/dL. Low = under 70 mg/dL or under 3.9 mmol/L → the low-blood-sugar line from the reference FIRST (leads with "Follow your care team's plan for lows now.", links ADA 15/15, adds the insulin/sulfonylurea clause when `on_insulin_or_su`). Then log and add "(logged)".
- Never comment on high or normal numbers. Never adjust, suggest or time anything.

## 3. Missed-dose relay (owner asks, or the missed-shot routine fires)
1. `glp1.py missed` (or `--due <iso>` if they name a different week). It returns `label_quote`, `source`, `say` (where they are on the clock), `inside`, `consecutive_say`, `region_note`, `ask_line`.
2. Reply, in this order:
   - "Your {Drug} label says: "{label_quote}" ({source})"
   - `say`, as returned (e.g. "It's been 3 days and 1 hour since your scheduled shot (Thu Oct 1, 8:00p). By the clock, that's still within the label's 5 days after the missed dose; that window ends Tue Oct 6, 8:00p.")
   - `consecutive_say` if present.
   - `region_note` if present.
   - Always last: "If you're not sure what to do, check with your prescriber or pharmacist."
3. Never add your own instruction ("take it now", "skip it", "you're fine", "you should"). If they ask "so should I take it?": "I can only tell you what your label says and where you are on the clock. Your prescriber or pharmacist can tell you what to do."
4. Other/compounded mode: reply only with the other-mode line from the reference. No window math, no comment on the drug.
5. When they tell you what they did or were told: log `missed` with `resolved` = taken (and the shot) | skipped | asked_prescriber. One-line confirm: `✓ Noted · Thu Oct 1 shot: skipped`. That stops nudges.

## 4. Routines (created by glp1-setup; each one is silent unless something is due)
Run `glp1.py due --kind <kind>` first. If it returns nothing true/non-empty for that routine, **send nothing at all** (no "all good", no "just checking").
- **Shot reminder** (weekly, shot day at `shot_time`; `--kind shot`): if `shot_reminder` → "Shot day. Reply 'done' (and the spot) when finished. Suggested spot: {suggested_site}." (Lilly arm spots already say "only if someone else is injecting".)
- **Missed-shot nudge** (weekly at `shot_time`+3h, plus daily 9:00 AM; `--kind missed`): if `missed_nudge` → section 3 relay, opening with "No shot logged for {due}." If `log_after_close` is true, this is the last nudge: send it once, then log `{"type":"missed","due_t":…,"resolved":"window_closed"}` so the routine goes quiet. Other mode: one nudge only ("No shot logged for {due}." + the other-mode line), then log `window_closed`.
- **Daily check-in** (daily at `checkin_time`; `--kind checkin`): ONE message with only what's due:
  - `checkin.weight` → "Weight today?" (skip if `weight_freq` off or already logged today)
  - `checkin.bg` → "Any blood sugar readings to log? A number or a screenshot works."
  - always: "Any side effects today? e.g. 'none' or 'nausea 2'"
  - `checkin.water` → "Sip check: had some water today?" · `checkin.protein` → "Protein check: any protein in today's meals?"
  - `step_up_heads_up` (once per plan entry; save `step_up_notified`) → "Your saved plan says your next shot starts {dose_text} (you entered this). Double-check it matches your current prescription and pen. If anything's unclear, ask your prescriber or pharmacist." Never "you should increase".
  - `refill` → the refill line, once per new count (save `refill_notified_at`; skip if the shot confirmation already said it). `discard` → "Your label says to throw this pen away {rule}. That's {by_date}." (+ region note outside the US; label mode only).
  - `weekly_summary` → append section 5. `visit_summary` → also send the section 6 page.
  - The check-in itself always has something (the side-effects question), so it always sends. If the owner said "pause check-ins", skip it until they say "resume".

## 5. Weekly summary (day before shot day, inside the check-in; or on request "summary"; ≤10 lines + footer)
`glp1.py summary --days 7`. Plain counts only; no causes, no praise, no worry about numbers.
```
📋 Your week · {from}–{to}
Shots: {n} logged ({on-time/late}) · missed: {dates or "none"}
Weight: 7-day avg {avg} {unit} (prior week {prior_avg})        ← omit if hide_weight / weight off
Sugar: avg {avg} · range {min}–{max} {unit} · lows under 70: {n} ({dates})   ← only if bg_optin
Side effects: nausea {count}× (avg {avg_sev}), {within2d_after_shot} of them within 2 days after your shot · …
{dose_change line (helper returns it only once 7+ days have passed, equal-length windows): "Since your dose changed to {dose_text} on {since}: {symptom} {after}× in {window_days} days vs {before}× the {window_days} days before."}
{"Worth mentioning to your prescriber." if worth_mentioning is non-empty}
{Tier 3 line for each five_of_seven symptom: "**Please tell your prescriber about this.** {Symptom} on {n} of the last 7 days is something your label says to report (any side effect that bothers you or doesn't go away). I'm not a doctor. Source: {MG URL}"}
Next shot: {next_due} · suggested spot: {next_site} · doses left: {doses_left}
Got an idea to make GLP-1 Buddy better? Tell me here: https://docs.google.com/forms/d/e/1FAIpQLSfES8X4vDJgBPDwRswdEIw1aI7m7tOvAeKnllBVVQzbY0u8qA/viewform
```
- Other mode: the Tier 3 five-of-seven line uses "…is worth telling your prescriber about." with no label link.

## 6. Doctor-visit page (day before `next_visit` at check-in, or on request "doctor page")
`glp1.py visit --weeks 8 --out /workspace/glp1/visit-YYYY-MM-DD.md`. Send the markdown as-is (it fits one printed page): header with first name · medicine · dose as entered · date range · "Prepared by GLP-1 Buddy from self-logged data. Not medical advice."; shots on time/late/missed; dose steps as entered; weight first/latest (unless hidden); blood sugar avg/range/lows; side-effects table; warning signs logged; injection-site issues; supplies; "My questions". End with the footer. Offer to clear `questions_for_doctor` after the visit.

## 7. Other requests
- "Is this normal?" → reference rules (label/ADA/NHS/Cleveland Clinic/wegovy.com, 2–3 sentences, one link) or "I couldn't find that in your medicine's label or my trusted sources, so it's worth asking your prescriber or pharmacist. Want me to save it for your next visit?"
- "ask doctor: …" → append to memory `questions_for_doctor` and mirror it (`config --set '{"questions_for_doctor":[…]}'`) so the doctor page shows it; confirm `✓ Saved for your next visit`.
- "hide weight" / "show weight", "weigh-ins weekly/off", "change shot day", "new dose" (record the text they give; if they change the shot day, quote the drug's spacing line from the reference), "pause/resume check-ins" → update memory + `config --set`, one-line confirm. Changing drug → rerun the setup medicine question.
- "delete my data" → "This deletes your whole log and settings from your account. Delete everything? (yes/no)" → on yes `glp1.py wipe --yes`, clear memory, delete the routines, confirm "Deleted."
- Declines (one warm line, then back to the job): dose questions → "Your prescriber decides doses. I can show you what your label says and log what you take." · products, pharmacies, prices, compounded sources → "I don't recommend products or places to buy." · diet plans, calories, goal weights → "I stay out of diet plans. I'm here for shots, logs and your doctor page." · messaging/booking → "I can't send messages or book things, but I can make you a page to bring."

## 8. Voice, privacy, footer
- Warm, brief, non-judgmental. No diet-culture words (good/bad/cheat/earned/guilt-free/on track), no calories, BMI, goal weights, before/after. Weight is logged the same way up or down. Emoji only as ✓ / ↩︎ / 📋.
- First name only. Never ask for or store last name, date of birth, address, insurance, pharmacy, doctor names, photos, record numbers. Screenshots are read and discarded.
- **Feedback footer:** the setup close, weekly summary and doctor page end with "Got an idea to make GLP-1 Buddy better? Tell me here: https://docs.google.com/forms/d/e/1FAIpQLSfES8X4vDJgBPDwRswdEIw1aI7m7tOvAeKnllBVVQzbY0u8qA/viewform". Log confirmations, reminders, nudges and escalations never carry it.
- **"I have an idea":** whenever the owner offers an idea or says "I have an idea", thank them, give the feedback link above, and also save the idea in memory `feedback_ideas`.

## Bundled script: glp1.py
If `$S/glp1.py` is missing, write this exact file there (`mkdir -p $S`), then `python3 $S/glp1.py config` to check it runs.

```python
#!/usr/bin/env python3
"""GLP-1 Buddy helper (Python 3 stdlib only). Append-only JSONL log + label window math.

Files (override the folder with --dir): /workspace/glp1/log.jsonl, /workspace/glp1/config.json.
Times are naive local ISO strings in the owner's timezone. --now pins "now" (dry runs).
This script NEVER decides a dose. It only does clock math against the label text it quotes.

Commands
  config [--set '<json>']              -> merge keys into config.json, print config
  when "<text>"                        -> "8:05", "8pm", "yesterday 8pm", "thu 20:00", "now" -> ISO (most recent past)
  add '<json>'                         -> append entry; prints {"entry","alert":[...],"supply"}
  undo                                 -> tombstone the last live entry
  last <type>                          -> last live entry of that type
  site [--next]                        -> zone use history / least recently used zone
  missed [--due ISO]                   -> label window math for the most recent (or given) scheduled shot
  due [--kind shot|missed|checkin|all] -> what a routine should say now (empty lists = stay quiet)
  supply                               -> doses left, refill flag, discard date (label rule)
  summary --days 7                     -> weekly stats (shots, weight, bg, side effects, patterns)
  visit --weeks 8 [--out PATH]         -> one-page doctor summary (markdown)
  wipe --yes                           -> delete log + config ("delete my data")
Entry types: shot(t, dose_text, site, late) · missed(due_t, resolved taken|skipped|asked_prescriber|window_closed)
  · weight(value, unit) · bg(value, unit mg/dL|mmol/L, context, source typed|image) · se(symptom, severity 1-3, note)
  · water/protein(value) · supply(doses_on_hand, pen_opened) · redflag(tier, text) · note(text)
"""
import argparse, json, os, re, shutil, sys
from datetime import datetime, timedelta, date

DEFAULT_DIR = "/workspace/glp1"
ZONES = ["abdomen L", "abdomen R", "thigh L", "thigh R", "upper arm L", "upper arm R"]
DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
SEMA = ("ozempic", "wegovy")
TIRZ = ("mounjaro", "zepbound")
GI_FLUID = ("vomiting", "diarrhea")

URL = {
    "ozempic": "https://www.novo-pi.com/ozempic.pdf",
    "wegovy": "https://www.novo-pi.com/wegovy.pdf",
    "mounjaro": "https://pi.lilly.com/us/mounjaro-us-mg.pdf",
    "zepbound": "https://pi.lilly.com/us/zepbound-us-mg.pdf",
    "ada_low": "https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose",
}
# Verbatim Medication Guide wording (checked against the PDFs on Sep 29, 2026).
LABEL = {
    "ozempic": {
        "missed": "If you miss a dose of OZEMPIC®, take the missed dose as soon as possible within 5 days after the missed dose. If more than 5 days have passed, skip the missed dose and take your next dose on the regularly scheduled day.",
        "spacing": "You may change the day of the week you use OZEMPIC® as long as your last dose was given 2 or more days before.",
        "anchor": "missed", "hours": 120, "rule": "5 days after the missed dose"},
    "wegovy": {
        "missed": "If you miss a dose of WEGOVY® and the next scheduled dose is more than 2 days away (48 hours), take the missed dose as soon as possible. If you miss a dose of WEGOVY® and the next scheduled dose is less than 2 days away (48 hours), do not administer the dose. Take your next dose on the regularly scheduled day.",
        "consecutive": "If you miss doses of WEGOVY® for 2 or more consecutive weeks, contact your healthcare provider to talk about how to restart your treatment.",
        "spacing": "If you need to change the day of the week, you may do so as long as your last dose of WEGOVY® was given 2 or more days before.",
        "anchor": "next", "hours": 48, "rule": "more than 2 days (48 hours) before your next scheduled dose"},
    "mounjaro": {
        "missed": "If you miss a dose of MOUNJARO, take the missed dose as soon as possible within 4 days (96 hours) after the missed dose. If more than 4 days have passed, skip the missed dose and take your next dose on the regularly scheduled day. Do not take 2 doses of MOUNJARO within 3 days of each other.",
        "spacing": "Do not take 2 doses of MOUNJARO within 3 days of each other.",
        "anchor": "missed", "hours": 96, "rule": "4 days (96 hours) after the missed dose"},
    "zepbound": {
        "missed": "If you miss a dose of ZEPBOUND, take the missed dose as soon as possible within 4 days (96 hours) after the missed dose. If more than 4 days have passed, skip the missed dose and take your next dose on the regularly scheduled day. Do not take 2 doses of ZEPBOUND within 3 days (72 hours) of each other.",
        "spacing": "Do not take 2 doses of ZEPBOUND within 3 days (72 hours) of each other.",
        "anchor": "missed", "hours": 96, "rule": "4 days (96 hours) after the missed dose"},
}
OTHER_LINE = ("I only have label rules for Ozempic, Wegovy, Mounjaro and Zepbound, so please ask your "
              "prescriber what to do if you miss one.")
ASK_LINE = "If you're not sure what to do, check with your prescriber or pharmacist."
REGION_LINE = "These rules come from US labels. Check your own leaflet."
# Discard rules by presentation (label storage sections). Only multi-use devices get a date.
DISCARD = {
    ("ozempic", "pen"): (56, None, "56 days after first use"),
    ("wegovy", "flextouch"): (56, None, "56 days after first use"),
    ("mounjaro", "kwikpen"): (30, 4, "30 days after first use or after 4 weekly doses, even if it still has medicine in it"),
    ("zepbound", "kwikpen"): (30, 4, "30 days after first use or after 4 weekly doses, even if it still has medicine in it"),
    ("mounjaro", "multi_dose_vial"): (30, 4, "30 days after first use or after 4 weekly doses, even if it still has medicine in it"),
    ("zepbound", "multi_dose_vial"): (30, 4, "30 days after first use or after 4 weekly doses, even if it still has medicine in it"),
}

# ---------- files ----------
def paths(a):
    return os.path.join(a.dir, "log.jsonl"), os.path.join(a.dir, "config.json")

def now_of(a):
    return datetime.fromisoformat(a.now) if a.now else datetime.now().replace(second=0, microsecond=0)

def iso(d):
    return d.isoformat(timespec="minutes")

def P(x):
    return datetime.fromisoformat(x)

def load_cfg(a):
    _, c = paths(a)
    return json.load(open(c)) if os.path.exists(c) else {}

def load(a):
    log, _ = paths(a)
    rows, dead = [], set()
    if os.path.exists(log):
        for line in open(log):
            line = line.strip()
            if not line:
                continue
            r = json.loads(line)
            if r.get("op") == "delete":
                dead.add(r["ref"])
            else:
                rows.append(r)
    rows = [r for r in rows if r["id"] not in dead]
    rows.sort(key=lambda r: r["t"])
    return rows

def append(a, obj):
    log, _ = paths(a)
    os.makedirs(a.dir, exist_ok=True)
    with open(log, "a") as f:
        f.write(json.dumps(obj) + "\n")

def fmt(d, cfg):
    if cfg.get("clock", "12h") == "24h":
        return d.strftime("%a %b %-d, %H:%M")
    return d.strftime("%a %b %-d, %-I:%M") + ("a" if d.hour < 12 else "p")

# ---------- time parsing ----------
def parse_clock(s, now):
    s = s.strip().lower().replace(" ", "")
    m = re.fullmatch(r"(\d{1,2})(?::?(\d{2}))?(am|pm|a|p)?", s)
    if not m:
        raise ValueError("bad time: " + s)
    h, mi, ap = int(m.group(1)), int(m.group(2) or 0), m.group(3)
    hours = [h] if (h > 12 or h == 0) else [h % 12, (h % 12) + 12]
    if ap:
        hours = [(h % 12) + (12 if ap.startswith("p") else 0)]
    cands = []
    for hh in hours:
        for back in (0, 1):
            d = (now - timedelta(days=back)).replace(hour=hh, minute=mi, second=0, microsecond=0)
            if d <= now + timedelta(minutes=2):
                cands.append(d)
    return max(cands)

def parse_when(text, now):
    t = text.strip().lower()
    if t in ("", "now", "just now"):
        return now
    m = re.fullmatch(r"(yesterday|today|mon|tue|wed|thu|fri|sat|sun)[a-z]*\s*(.*)", t)
    if m:
        day, rest = m.group(1), m.group(2) or "12:00"
        if day == "today":
            base = now
        elif day == "yesterday":
            base = now - timedelta(days=1)
        else:
            back = (now.weekday() - DAYS.index(day)) % 7
            base = now - timedelta(days=back)
        c = parse_clock(rest, base.replace(hour=23, minute=59))
        c = base.replace(hour=c.hour, minute=c.minute, second=0, microsecond=0)
        if c > now + timedelta(minutes=2):
            c -= timedelta(days=7 if day not in ("today", "yesterday") else 1)
        return c
    return parse_clock(t, now)

# ---------- schedule ----------
def shot_hm(cfg):
    h, m = (cfg.get("shot_time") or "20:00").split(":")
    return int(h), int(m)

def due_on_or_before(cfg, t):
    """Most recent scheduled shot time <= t."""
    wd = int(cfg.get("shot_weekday", 0))
    h, m = shot_hm(cfg)
    d = t.replace(hour=h, minute=m, second=0, microsecond=0) - timedelta(days=(t.weekday() - wd) % 7)
    if d > t:
        d -= timedelta(days=7)
    return d

def dues_between(cfg, a0, a1):
    out, d = [], due_on_or_before(cfg, a1)
    while d >= a0:
        out.append(d)
        d -= timedelta(days=7)
    return sorted(out)

def shot_for_due(rows, due):
    """A shot 'covers' a scheduled dose if logged from 2 days before to 5 days after it."""
    for r in rows:
        if r["type"] == "shot" and due - timedelta(days=2) < P(r["t"]) <= due + timedelta(days=5):
            return r
    return None

def missed_rec(rows, due):
    for r in rows:
        if r["type"] == "missed" and r.get("due_t") == iso(due):
            return r
    return None

def tracking_start(cfg, rows):
    c = [P(cfg["start"])] if cfg.get("start") else []
    c += [P(r["t"]) for r in rows if r["type"] == "shot"]
    return min(c) if c else None

def consecutive_missed(cfg, rows, upto):
    start = tracking_start(cfg, rows)
    if not start:
        return 0
    n = 0
    for d in reversed(dues_between(cfg, start + timedelta(hours=1), upto)):
        if shot_for_due(rows, d):
            break
        n += 1
    return n

def window(cfg, rows, due, now):
    drug = cfg.get("drug", "other")
    nxt = due + timedelta(days=7)
    hrs = (now - due).total_seconds() / 3600
    out = {"drug": drug, "due": iso(due), "next_due": iso(nxt), "hours_since_due": round(hrs, 1),
           "days_since_due": int(hrs // 24), "consecutive_missed": consecutive_missed(cfg, rows, now),
           "region_note": REGION_LINE if cfg.get("country", "US").upper() not in ("US", "USA") else None,
           "ask_line": ASK_LINE}
    if drug not in LABEL:
        out.update({"inside": None, "label_quote": None, "say": OTHER_LINE})
        return out
    L = LABEL[drug]
    out.update({"label_quote": L["missed"], "source": URL[drug]})
    def since_txt(h):
        d, hh = int(h // 24), int(h % 24)
        if d == 0:
            return f"{hh} hour" + ("" if hh == 1 else "s")
        return f"{d} day" + ("" if d == 1 else "s") + (f" and {hh} hour" + ("" if hh == 1 else "s") if hh else "")
    if L["anchor"] == "missed":
        closes = due + timedelta(hours=L["hours"])
        inside = now <= closes
        pos = (f"It's been {since_txt(hrs)} since your scheduled shot ({fmt(due, cfg)}). "
               + (f"By the clock, that's still within the label's {L['rule']}; that window ends {fmt(closes, cfg)}."
                  if inside else
                  f"That's past the label's {L['rule']} (it ended {fmt(closes, cfg)}). Your next scheduled day is {fmt(nxt, cfg)}."))
    else:  # wegovy: counts to the next scheduled dose
        closes = nxt - timedelta(hours=L["hours"])
        left = (nxt - now).total_seconds() / 3600
        inside = left > L["hours"]
        away = since_txt(max(left, 0)) 
        pos = (f"Your next scheduled shot is {fmt(nxt, cfg)}, {away} away. "
               + ("That's more than the 2 days (48 hours) your label mentions." if inside else
                  "That's less than the 2 days (48 hours) your label mentions."))
    out.update({"inside": inside, "window_closes": iso(closes), "say": pos})
    if out["consecutive_missed"] >= 2:
        out["consecutive_say"] = (LABEL["wegovy"]["consecutive"] if drug == "wegovy"
                                  else "You've missed 2 or more weeks in a row. Please check with your prescriber before your next shot.")
    return out

# ---------- supply ----------
def supply_state(cfg, rows, now):
    sup = [r for r in rows if r["type"] == "supply"]
    out = {"doses_left": None, "refill": False, "discard": None}
    if sup and sup[-1].get("doses_on_hand") is not None:
        s = [r for r in sup if r.get("doses_on_hand") is not None][-1]
        used = sum(1 for r in rows if r["type"] == "shot" and r["t"] > s["t"])
        out["doses_left"] = max(int(s["doses_on_hand"]) - used, 0)
        out["refill"] = out["doses_left"] <= 2
    opened = [r for r in sup if r.get("pen_opened")]
    rule = DISCARD.get((cfg.get("drug"), cfg.get("presentation")))
    if opened and rule:
        o = P(opened[-1]["pen_opened"] + ("T00:00" if len(opened[-1]["pen_opened"]) == 10 else ""))
        days, max_doses, text = rule
        by = o + timedelta(days=days)
        doses_since = sum(1 for r in rows if r["type"] == "shot" and P(r["t"]) >= o)
        out["discard"] = {"rule": text, "by_date": by.date().isoformat(), "days_left": (by.date() - now.date()).days,
                          "doses_used": doses_since, "dose_limit_reached": bool(max_doses and doses_since >= max_doses),
                          "source": URL.get(cfg.get("drug"))}
    return out

# ---------- sites ----------
def norm_site(s):
    if not s:
        return None
    s = s.lower()
    side = "L" if re.search(r"\b(l|left)\b", s) else "R" if re.search(r"\b(r|right)\b", s) else None
    area = ("abdomen" if re.search(r"belly|stomach|abdom|tummy", s) else "thigh" if re.search(r"thigh|leg", s)
            else "upper arm" if re.search(r"arm", s) else None)
    if not area:
        return s
    return f"{area} {side}" if side else area

def next_site(rows):
    last = {z: "" for z in ZONES}
    for r in rows:
        z = r.get("site")
        if r["type"] == "shot" and z:
            for zz in ZONES:
                if zz == z or (z in ("abdomen", "thigh", "upper arm") and zz.startswith(z)):
                    last[zz] = max(last[zz], r["t"])
    return min(ZONES, key=lambda z: (last[z], ZONES.index(z))), last

# ---------- alerts on add ----------
def bg_low(e):
    v, u = float(e["value"]), (e.get("unit") or "mg/dL").lower()
    mg = v * 18 if u.startswith("mmol") else v
    low = (v < 3.9) if u.startswith("mmol") else (v < 70)
    return low, round(mg)

def days_since_shot(rows, t):
    s = [r for r in rows if r["type"] == "shot" and r["t"] <= t]
    return (P(t).date() - P(s[-1]["t"]).date()).days if s else None

def se_alerts(rows, e):
    out, sym, sev = [], e["symptom"], int(e.get("severity", 1))
    t = P(e["t"])
    if sev == 3 and sym in GI_FLUID:
        out.append("ASK_FLUIDS+T2_DEHYDRATION: severity-3 %s. Ask 'Can you keep fluids down?' and give the Tier 2 dehydration line." % sym)
    if sev == 3 and sym == "stomach pain":
        out.append("T2_PANCREATITIS_GALLBLADDER: severity-3 stomach pain. Tier 2 pancreatitis/gallbladder line.")
    if sym in GI_FLUID:
        gi = [r for r in rows if r["type"] == "se" and r["symptom"] in GI_FLUID]
        n24 = sum(1 for r in gi if t - timedelta(hours=24) <= P(r["t"]) <= t)
        days = {P(r["t"]).date() for r in gi}
        if n24 >= 3 or (t.date() - timedelta(days=1)) in days:
            out.append("T2_DEHYDRATION_PERSISTENT: vomiting/diarrhea on 2+ days in a row or 3+ times in 24h (GLP-1 Buddy threshold). Tier 2 dehydration line.")
    same = {P(r["t"]).date() for r in rows if r["type"] == "se" and r["symptom"] == sym and t - timedelta(days=7) < P(r["t"]) <= t}
    if len(same) >= 5:
        out.append("T3_FIVE_OF_SEVEN: %s logged on %d of the last 7 days. Tier 3 line in this week's summary." % (sym, len(same)))
    return out

def cmd_add(a):
    cfg, e, now = load_cfg(a), json.loads(a.json), now_of(a)
    e.setdefault("t", iso(now))
    types = ("shot", "missed", "weight", "bg", "se", "water", "protein", "supply", "redflag", "note")
    if e.get("type") not in types:
        sys.exit("type must be one of " + "|".join(types))
    rows = load(a)
    alert = []
    if e["type"] == "shot":
        e["site"] = norm_site(e.get("site"))
        if e.get("dose_text") and e["dose_text"] != cfg.get("dose_text") and e["t"] >= max([r["t"] for r in rows if r["type"] == "shot"] or [""]):
            cfg["dose_text"] = e["dose_text"]  # owner told us the dose on the pen; record it as-is
            json.dump(cfg, open(paths(a)[1], "w"), indent=1)
        e.setdefault("dose_text", cfg.get("dose_text"))
        due = due_on_or_before(cfg, P(e["t"]) + timedelta(days=2))
        e["late"] = P(e["t"]) - due > timedelta(hours=12) if cfg.get("shot_weekday") is not None else None
        prev = [r for r in rows if r["type"] == "shot" and r["t"] <= e["t"]]
        if prev:
            gap = (P(e["t"]) - P(prev[-1]["t"])).total_seconds() / 3600
            d = cfg.get("drug")
            if d in TIRZ and gap < 72:
                alert.append("LILLY_72H: shots %.0fh apart. Quote: \"%s\" (%s) then ask them to check with their prescriber. Still log it." % (gap, LABEL[d]["spacing"], URL[d]))
            if d in SEMA and gap < 48:
                alert.append("SEMA_48H: shots %.0fh apart. Quote: \"%s\" (%s) then ask them to check with their prescriber. Still log it." % (gap, LABEL[d]["spacing"], URL[d]))
    if e["type"] == "bg":
        e.setdefault("unit", cfg.get("bg_unit", "mg/dL"))
        low, mg = bg_low(e)
        e["mg_dl_equiv"] = mg
        if low:
            alert.append("LOW_BG: %s %s (= %s mg/dL) is under 70 mg/dL / 3.9 mmol/L (ADA). Low-sugar line now%s." % (
                e["value"], e["unit"], mg, ", with the insulin/sulfonylurea clause" if cfg.get("on_insulin_or_su") else ""))
    if e["type"] == "se":
        e["symptom"] = e["symptom"].lower()
        if "severity" not in e:
            e["severity"] = 1
            e["severity_defaulted"] = True
        e["days_since_shot"] = days_since_shot(rows, e["t"])
        ps = [r for r in rows if r["type"] == "shot" and r["t"] <= e["t"] and r.get("dose_text")]
        e["dose_text"] = ps[-1]["dose_text"] if ps else cfg.get("dose_text")
    if e["type"] == "weight":
        e.setdefault("unit", cfg.get("weight_unit", "lb"))
    e["id"] = "e" + P(e["t"]).strftime("%Y%m%d%H%M") + "-" + str(len(rows))
    e["logged_at"] = iso(now)
    append(a, e)
    rows = load(a)
    if e["type"] == "se":
        alert += se_alerts(rows, e)
    out = {"entry": e, "alert": alert}
    if e["type"] in ("shot", "supply"):
        out["supply"] = supply_state(cfg, rows, now)
        out["next_site"] = next_site(rows)[0]
    print(json.dumps(out))

def cmd_undo(a):
    rows = load(a)
    if not rows:
        print(json.dumps({"undone": None})); return
    last = max(rows, key=lambda r: r["logged_at"])
    append(a, {"op": "delete", "ref": last["id"], "at": iso(now_of(a))})
    print(json.dumps({"undone": last}))

def cmd_last(a):
    rows = [r for r in load(a) if r["type"] == a.type]
    print(json.dumps({"last": rows[-1] if rows else None}))

def cmd_when(a):
    print(json.dumps({"t": iso(parse_when(a.text, now_of(a)))}))

def cmd_config(a):
    _, c = paths(a)
    cfg = load_cfg(a)
    if a.set:
        cfg.update(json.loads(a.set))
        os.makedirs(a.dir, exist_ok=True)
        json.dump(cfg, open(c, "w"), indent=1)
    print(json.dumps(cfg))

def cmd_site(a):
    rows = load(a)
    n, last = next_site(rows)
    drug = load_cfg(a).get("drug")
    label = n
    if n.startswith("upper arm") and drug in TIRZ:
        label = "back of upper arm " + n[-1] + " (only if someone else is injecting)"
    print(json.dumps({"next": n, "say": label, "last_used": last}))

def open_missed(cfg, rows, now):
    """Most recent scheduled dose that has no shot and no resolution; None if nothing open."""
    if cfg.get("shot_weekday") is None:
        return None
    due = due_on_or_before(cfg, now)
    start = tracking_start(cfg, rows)
    if start and due < start:
        return None
    if shot_for_due(rows, due) or missed_rec(rows, due):
        return None
    return due

def cmd_missed(a):
    cfg, rows, now = load_cfg(a), load(a), now_of(a)
    due = P(a.due) if a.due else due_on_or_before(cfg, now)
    print(json.dumps(window(cfg, rows, due, now)))

def cmd_supply(a):
    cfg, rows, now = load_cfg(a), load(a), now_of(a)
    print(json.dumps(supply_state(cfg, rows, now)))

def cmd_due(a):
    cfg, rows, now = load_cfg(a), load(a), now_of(a)
    out = {"now": iso(now)}
    k = a.kind
    due = due_on_or_before(cfg, now) if cfg.get("shot_weekday") is not None else None
    if k in ("shot", "all") and due:
        covered = shot_for_due(rows, due)
        out["shot_reminder"] = (not covered) and now - due < timedelta(hours=1)
        if out["shot_reminder"]:
            s = next_site(rows)[0]
            out["suggested_site"] = ("back of upper arm " + s[-1] + " (only if someone else is injecting)"
                                     if s.startswith("upper arm") and cfg.get("drug") in TIRZ else s)
    if k in ("missed", "all") and due:
        om = open_missed(cfg, rows, now)
        if om and now - om >= timedelta(hours=3):
            w = window(cfg, rows, om, now)
            out["missed"] = w
            # keep nudging while inside; one last message when it has just closed, then stop
            out["missed_nudge"] = True
            out["log_after_close"] = (w.get("inside") is False) or cfg.get("drug") not in LABEL
    if k in ("checkin", "all"):
        c = {"side_effects": True}
        wf = cfg.get("weight_freq", "daily")
        c["weight"] = wf == "daily" or (wf == "weekly" and now.weekday() == int(cfg.get("weigh_day", cfg.get("shot_weekday", 0))))
        if c["weight"] and any(r["type"] == "weight" and P(r["t"]).date() == now.date() for r in rows):
            c["weight"] = False
        c["bg"] = bool(cfg.get("bg_optin"))
        nd = cfg.get("nudges") or {}
        c["water"], c["protein"] = bool(nd.get("water")), bool(nd.get("protein"))
        out["checkin"] = c
        tomorrow = now + timedelta(days=1)
        started = P(cfg["start"]) if cfg.get("start") else None
        out["weekly_summary"] = (cfg.get("shot_weekday") is not None and tomorrow.weekday() == int(cfg["shot_weekday"])
                                 and not (started and now - started < timedelta(days=3)))  # skip in the first 3 days
        steps = []
        for p in cfg.get("dose_plan") or []:
            try:
                d = date.fromisoformat(p["start"])
            except Exception:
                continue
            if 0 <= (d - now.date()).days <= 2:
                steps.append({"dose_text": p["dose_text"], "start": p["start"], "days_away": (d - now.date()).days})
        out["step_up_heads_up"] = steps
        sup = supply_state(cfg, rows, now)
        out["refill"] = sup["doses_left"] if sup["refill"] else None
        dc = sup["discard"]
        out["discard"] = dc if dc and (dc["days_left"] <= 3 or dc["dose_limit_reached"]) else None
        nv = cfg.get("next_visit")
        out["visit_summary"] = bool(nv) and date.fromisoformat(nv) == tomorrow.date()
    print(json.dumps(out))

# ---------- summaries ----------
def span(rows, a0, a1):
    return [r for r in rows if a0 <= P(r["t"]) <= a1]

def avg(xs):
    return round(sum(xs) / len(xs), 1) if xs else None

def to_unit(r, unit):
    v = float(r["value"])
    if r.get("unit", unit) == unit:
        return v
    return v * 2.20462 if unit == "lb" else v / 2.20462

def se_table(rows, a0, a1):
    se = [r for r in span(rows, a0, a1) if r["type"] == "se"]
    tab = {}
    for r in se:
        s = tab.setdefault(r["symptom"], {"count": 0, "days": set(), "sev": [], "within2d_after_shot": 0, "dsl": [], "dose": set()})
        s["count"] += 1; s["days"].add(r["t"][:10]); s["sev"].append(int(r.get("severity", 1)))
        if r.get("days_since_shot") is not None:
            s["dsl"].append(r["days_since_shot"])
            if r["days_since_shot"] <= 2:
                s["within2d_after_shot"] += 1
        if r.get("dose_text"):
            s["dose"].add(r["dose_text"])
    out = {}
    for k, s in tab.items():
        out[k] = {"count": s["count"], "days": len(s["days"]), "avg_sev": avg(s["sev"]), "max_sev": max(s["sev"]),
                  "within2d_after_shot": s["within2d_after_shot"],
                  "typical_day_after_shot": sorted(s["dsl"])[len(s["dsl"]) // 2] if s["dsl"] else None,
                  "dose_steps": sorted(s["dose"]), "sev2plus_repeat": sum(1 for v in s["sev"] if v >= 2) >= 2}
    return out

def cmd_summary(a):
    cfg, rows, now = load_cfg(a), load(a), now_of(a)
    a1 = now; a0 = now - timedelta(days=a.days)
    ts = tracking_start(cfg, rows)
    if a.clip and ts and ts > a0:
        a0 = ts.replace(hour=0, minute=0)
    unit = cfg.get("weight_unit", "lb")
    W = span(rows, a0, a1)
    start = tracking_start(cfg, rows) or a0
    dues = [d for d in dues_between(cfg, max(a0, start + timedelta(hours=1)), a1)] if cfg.get("shot_weekday") is not None else []
    shots = [r for r in W if r["type"] == "shot"]
    missed = [iso(d) for d in dues if not shot_for_due(rows, d) and now - d > timedelta(hours=3)]
    wt = [to_unit(r, unit) for r in W if r["type"] == "weight"]
    wt_prior = [to_unit(r, unit) for r in span(rows, a0 - timedelta(days=a.days), a0 - timedelta(minutes=1)) if r["type"] == "weight"]
    bgu = cfg.get("bg_unit", "mg/dL")
    bgs = [r for r in W if r["type"] == "bg"]
    bv = [float(r["value"]) if r.get("unit", bgu) == bgu else (float(r["value"]) * 18 if bgu == "mg/dL" else float(r["value"]) / 18) for r in bgs]
    lows = [{"t": r["t"], "value": r["value"], "unit": r.get("unit"), "context": r.get("context")} for r in bgs if bg_low(r)[0]]
    last7 = se_table(rows, now - timedelta(days=7), now)
    table = se_table(rows, a0, a1)
    # dose change comparison
    change = None
    sh = [r for r in rows if r["type"] == "shot" and r.get("dose_text")]
    for i in range(len(sh) - 1, 0, -1):
        if sh[i]["dose_text"] != sh[i - 1]["dose_text"]:
            c0 = P(sh[i]["t"])
            n = min(14, (now - c0).days)
            if 7 <= n and now - c0 <= timedelta(days=28):  # equal-length windows, only once a week has passed
                change = {"since": sh[i]["t"][:10], "dose_text": sh[i]["dose_text"], "window_days": n,
                          "after": {k: v["count"] for k, v in se_table(rows, c0, c0 + timedelta(days=n)).items()},
                          "before": {k: v["count"] for k, v in se_table(rows, c0 - timedelta(days=n), c0 - timedelta(minutes=1)).items()}}
            break
    out = {"from": iso(a0), "to": iso(a1),
           "shots": [{"t": r["t"], "site": r.get("site"), "late": r.get("late"), "dose_text": r.get("dose_text")} for r in shots],
           "missed_scheduled": missed,
           "missed_resolutions": [{"due_t": r.get("due_t"), "resolved": r.get("resolved")} for r in W if r["type"] == "missed"],
           "weight": None if cfg.get("hide_weight") else {"avg": avg(wt), "prior_avg": avg(wt_prior), "n": len(wt), "unit": unit},
           "bg": {"avg": avg(bv), "min": min(bv) if bv else None, "max": max(bv) if bv else None, "n": len(bv), "unit": bgu, "lows": lows} if cfg.get("bg_optin") else None,
           "side_effects": table,
           "five_of_seven": [k for k, v in last7.items() if v["days"] >= 5],
           "worth_mentioning": [k for k, v in table.items() if v["sev2plus_repeat"]],
           "dose_change": change,
           "redflags": [{"t": r["t"], "tier": r.get("tier"), "text": r.get("text")} for r in W if r["type"] == "redflag"],
           "next_site": next_site(rows)[0], "supply": supply_state(cfg, rows, now),
           "next_due": iso(due_on_or_before(cfg, now) + timedelta(days=7)) if cfg.get("shot_weekday") is not None else None}
    print(json.dumps(out))

def cmd_visit(a):
    cfg, rows, now = load_cfg(a), load(a), now_of(a)
    a.days = a.weeks * 7
    a.clip = True
    import io, contextlib
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        cmd_summary(a)
    s = json.loads(buf.getvalue())
    name = cfg.get("first_name", "")
    L = []
    L.append(f"# Visit summary · {name} · {cfg.get('drug_display', cfg.get('drug', '')).title()} · dose as entered: {cfg.get('dose_text', '')}")
    L.append(f"{s['from'][:10]} to {s['to'][:10]} · Prepared by GLP-1 Buddy from self-logged data. Not medical advice.")
    L.append("")
    on = sum(1 for x in s["shots"] if not x["late"]); late = [x for x in s["shots"] if x["late"]]
    L.append(f"**Shots:** {len(s['shots'])} logged ({on} on the scheduled day, {len(late)} late) · missed scheduled: {len(s['missed_scheduled'])}"
             + (" (" + ", ".join(d[:10] for d in s["missed_scheduled"]) + ")" if s["missed_scheduled"] else ""))
    steps = []
    for x in s["shots"]:
        if not steps or steps[-1][1] != x["dose_text"]:
            steps.append((x["t"][:10], x["dose_text"]))
    if steps:
        L.append("**Dose steps (as entered):** " + " → ".join(f"{d} from {t}" for t, d in steps))
    if s["weight"] and s["weight"]["n"]:
        ws = [r for r in rows if r["type"] == "weight" and s["from"] <= r["t"]]
        L.append(f"**Weight ({s['weight']['unit']}):** first {ws[0]['value']} ({ws[0]['t'][:10]}) · latest {ws[-1]['value']} ({ws[-1]['t'][:10]}) · {s['weight']['n']} entries")
    if s["bg"] and s["bg"]["n"]:
        b = s["bg"]
        lows = "; ".join(f"{x['value']} {x['unit']} {x['t'][:16].replace('T', ' ')} ({x.get('context') or 'no context'})" for x in b["lows"]) or "none"
        L.append(f"**Blood sugar ({b['unit']}):** avg {b['avg']} · range {b['min']:g}–{b['max']:g} · {b['n']} readings · lows under 70 mg/dL: {lows}")
    L.append("")
    L.append("| Side effect | # days | max severity | typical day after shot | dose step |")
    L.append("|---|---|---|---|---|")
    for k, v in sorted(s["side_effects"].items(), key=lambda kv: -kv[1]["days"]):
        L.append(f"| {k} | {v['days']} | {v['max_sev']} | {v['typical_day_after_shot'] if v['typical_day_after_shot'] is not None else '–'} | {', '.join(v['dose_steps']) or '–'} |")
    if not s["side_effects"]:
        L.append("| none logged | | | | |")
    L.append("")
    L.append("Severity: 1 = noticeable · 2 = got in the way of part of the day · 3 = couldn't do normal things / couldn't keep fluids down")
    L.append("")
    L.append("**Warning signs logged:** " + ("; ".join(f"{x['t'][:10]} {x['text']}" for x in s["redflags"]) or "none"))
    site_notes = [r for r in span(rows, P(s["from"]), now) if r["type"] == "se" and "site" in r["symptom"]]
    L.append("**Injection-site issues:** " + ("; ".join(f"{r['t'][:10]} {r['symptom']} {r.get('severity')}" for r in site_notes) or "none logged"))
    sp = s["supply"]
    L.append(f"**Supplies:** doses left: {sp['doses_left'] if sp['doses_left'] is not None else 'not tracked'}")
    qs = cfg.get("questions_for_doctor") or []
    L.append("**My questions:** " + (" · ".join(qs) if qs else "none saved"))
    md = "\n".join(L) + "\n"
    if a.out:
        os.makedirs(os.path.dirname(a.out), exist_ok=True)
        open(a.out, "w").write(md)
    print(md)

def cmd_wipe(a):
    if not a.yes:
        sys.exit("refusing without --yes")
    if os.path.isdir(a.dir):
        shutil.rmtree(a.dir)
    print(json.dumps({"wiped": a.dir}))

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--dir", default=DEFAULT_DIR)
    p.add_argument("--now")
    sp = p.add_subparsers(dest="cmd", required=True)
    s = sp.add_parser("config"); s.add_argument("--set")
    s = sp.add_parser("when"); s.add_argument("text")
    s = sp.add_parser("add"); s.add_argument("json")
    sp.add_parser("undo")
    s = sp.add_parser("last"); s.add_argument("type")
    s = sp.add_parser("site"); s.add_argument("--next", action="store_true")
    s = sp.add_parser("missed"); s.add_argument("--due")
    s = sp.add_parser("due"); s.add_argument("--kind", default="all", choices=["shot", "missed", "checkin", "all"])
    sp.add_parser("supply")
    s = sp.add_parser("summary"); s.add_argument("--days", type=int, default=7); s.set_defaults(clip=False)
    s = sp.add_parser("visit"); s.add_argument("--weeks", type=int, default=8); s.add_argument("--out")
    s = sp.add_parser("wipe"); s.add_argument("--yes", action="store_true")
    a = p.parse_args()
    {"config": cmd_config, "when": cmd_when, "add": cmd_add, "undo": cmd_undo, "last": cmd_last, "site": cmd_site,
     "missed": cmd_missed, "due": cmd_due, "supply": cmd_supply, "summary": cmd_summary, "visit": cmd_visit,
     "wipe": cmd_wipe}[a.cmd](a)

if __name__ == "__main__":
    main()
```
