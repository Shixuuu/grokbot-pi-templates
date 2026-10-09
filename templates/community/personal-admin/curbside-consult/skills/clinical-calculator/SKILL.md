---
name: clinical-calculator
description: "Use this when a clinical answer needs arithmetic: CrCl (Cockcroft-Gault), IBW/AdjBW/BMI/BSA, vancomycin AUC, aminoglycoside interval, opioid MME, steroid equivalents, corrected Ca/Na, or anion gap (tested python3 tool, adults)."
---

# Clinical calculator (edcalc.py)
Never do clinical math in your head. Run the tool; show inputs, formula, result, and every warning.

## Install (first use, or if missing or failing)
```bash
mkdir -p /workspace/curbside/tools && cd /workspace/curbside/tools
python3 - $(find "$HOME" -path '*/clinical-calculator/SKILL.md' 2>/dev/null) <<'PY'
import hashlib, re, sys
for f in sys.argv[1:]:
  m = re.search(r"<!-- FILE edcalc.py -->\s*`{3}python\n(.*?)\n`{3}", open(f).read(), re.S)
  c = m.group(1) + "\n" if m else ""
  if hashlib.sha256(c.encode()).hexdigest()[:16] == "06bbeae8257c16d0":
    open("edcalc.py", "w").write(c); print("installed from", f); break
else: print("NOT INSTALLED: no skill copy matches the checksum")
PY
python3 edcalc.py --selftest
```
If NOT INSTALLED: write the Code block to `edcalc.py` byte for byte with a quoted heredoc (`cat > edcalc.py <<'EDEOF'` ... `EDEOF`) and check `sha256sum edcalc.py` starts with `06bbeae8257c16d0`. Never retype or "fix" it. Mismatch or any FAIL: tell the owner; don't rely on the tool.

## Use (JSON; exit 2 = implausible input, nothing calculated)
```bash
python3 edcalc.py weights --sex F --weight-kg 90 --height-cm 160
python3 edcalc.py crcl --age 65 --sex F --weight-kg 90 --height-cm 160 --scr 0.6 [--round-scr 1.0]
python3 edcalc.py vanco-auc --dose 1000 --tau 12 --tinf 1 --peak 30 --t-peak 2 --trough 10 --t-trough 11.5 [--target 500]
python3 edcalc.py aminoglycoside --drug gentamicin --sex M --weight-kg 80 --crcl 80 [--level 4 --time-h 10]
python3 edcalc.py opioid --drug oxycodone=60 --drug hydromorphone=8 [--to morphine]  # mg/day; fentanyl_patch mcg/h
python3 edcalc.py steroid --from prednisone --dose 40 [--to dexamethasone]
python3 edcalc.py lytes --na 130 --cl 98 --hco3 20 --albumin 2.5 --ca 7.8 --glucose 400
```
Level times are hours from the START of the infusion. After exit 2, ask about units; convert only once confirmed and show it (creatinine µmol/L ÷ 88.4; Ca mmol/L × 4.008; glucose mmol/L × 18; albumin g/L ÷ 10; lb ÷ 2.2046).

## Reporting rules
- **Refusals are answers:** age < 18, height < 122 cm, implausible values or BMI. Say why; for a child name the pediatric method (e.g. bedside Schwartz).
- **CrCl:** show actual, IBW, AdjBW and `weight_used` (a convention, not part of Cockcroft-Gault). Quote `scr_rounding` (default none; round only per owner default or protocol). Invalid with unstable SCr. Relay BMI, no-height, low-SCr and SCr ≥ 5 warnings. Labels that dose by SCr/age/weight criteria (e.g. apixaban in AF) win over CrCl.
- **Vancomycin AUC:** two-level, MIC 1, target 400-600 for serious MRSA (Rybak 2020). **UNRELIABLE** means no proposal: say why and what to redraw (1-2 h after infusion end, and near the end of the interval). `--target` output is a proposal only.
- **Aminoglycoside:** Hartford nomogram is **APPROXIMATE**; levels 6-14 h after infusion start only; amikacin adaptation unvalidated.
- **MME** (CDC 2022) is risk accounting; CDC says MME must not set a new opioid's dose. `--to` estimates only morphine, oxycodone, hydromorphone, hydrocodone, oxymorphone, with 25-50% reductions; check the label or an equianalgesic table. **Never** a dose TO methadone, fentanyl patch, tramadol, tapentadol, or codeine; explain and refer to the label and a specialist.
- Apply the owner's saved defaults through flags and state them.
- Not covered: scores (CHA2DS2-VASc, HAS-BLED, MELD, Child-Pugh), eGFR, free-water deficit, pediatric formulas: compute in python3 with a cited formula, show every criterion, label untested.

## Code
<!-- FILE edcalc.py -->
```python
#!/usr/bin/env python3
"""Curbside Consult clinical calculator (python3 stdlib, adults). JSON out; exit 2 = implausible input."""
import argparse, contextlib, io, json, math, sys

C = {"devine": "Devine BJ. Drug Intell Clin Pharm 1974;8:650",
 "adjbw": "AdjBW = IBW + 0.4(ABW-IBW) (Bauer 1983)",
 "mosteller": "Mosteller RD. NEJM 1987;317:1098",
 "cg": "Cockcroft DW, Gault MH. Nephron 1976;16:31 (PMID 1244564)",
 "rybak": "Rybak MJ et al. AJHP 2020;77:835 (PMID 32191793)",
 "nicolau": "Nicolau DP et al. AAC 1995;39:650 (PMID 7793867)",
 "cdc": "Dowell D et al. MMWR Recomm Rep 2022;71(RR-3)",
 "fine": "Fine PG, Portenoy RK. J Pain Symptom Manage 2009;38:418 (PMID 19735902)",
 "liu": "Liu D et al. Allergy Asthma Clin Immunol 2013;9:30, Table 3 (PMID 23947590)",
 "ag": "Kraut JA, Madias NE. CJASN 2007;2:162; Figge J. Crit Care Med 1998;26:1807",
 "ca": "KDOQI 2003; Payne RB. BMJ 1973;4:643",
 "na": "Katz MA. NEJM 1973;289:843; Hillier TA. Am J Med 1999;106:399",}

def r(x, n=1):
 return None if x is None else round(x, n)

def fail(msg):
 print(json.dumps({"error": msg}))
 sys.exit(2)

def emit(a, name, formula, result, warn=(), inter=None, cites=()):
 d = {"calculator": name, "inputs": {k: v for k, v in vars(a).items() if k not in ("func", "cmd", "selftest") and v not in (None, False)},
  "formula": formula, "intermediates": inter or {}, "result": result, "warnings": list(warn), "citations": [C[c] for c in cites]}
 print(json.dumps(d, indent=1, ensure_ascii=False))

def hin(a):
 return a.height_cm / 2.54 if getattr(a, "height_cm", None) else getattr(a, "height_in", None)

PED = "age < 18: adult formulas not valid in children; use a pediatric method. Nothing calculated."

def wts(sex, wt, h):
 if h < 48:
  fail("height < 48 in (122 cm): Devine IBW not valid; omit height (actual weight) or use a pediatric method. Nothing calculated.")
 ibw = (50.0 if sex == "M" else 45.5) + 2.3 * (h - 60)
 adj = ibw + 0.4 * (wt - ibw)
 warn = (["Height < 60 in: Devine IBW extrapolated."] if h < 60 else []) + \
  (["ABW < IBW: most references use actual weight."] if wt < ibw else [])
 return {"ibw_kg": r(ibw), "adjbw_kg": r(adj), "abw_pct_ibw": r(100 * wt / ibw, 0), "bmi": r(wt / (h * .0254) ** 2),
   "bsa_m2_mosteller": r(math.sqrt(h * 2.54 * wt / 3600), 2)}, warn, ibw, adj

def cmd_weights(a):
 if hin(a) is None:
  fail("height required (--height-cm or --height-in)")
 w, warn, _, _ = wts(a.sex, a.weight_kg, hin(a))
 emit(a, "weights", "IBW (Devine) M 50 / F 45.5 kg + 2.3 kg/inch over 60 in; AdjBW = IBW + 0.4(ABW-IBW); BSA = sqrt(cm x kg/3600)",
  w, warn, cites=("devine", "adjbw", "mosteller"))

def cg(age, wt, scr, sex):
 return (140 - age) * wt / (72.0 * scr) * (0.85 if sex == "F" else 1)

def cmd_crcl(a):
 if a.age < 18:
  fail(PED)
 warn, scr = [], a.scr
 if a.round_scr and a.scr < a.round_scr:
  scr = a.round_scr
  note = f"SCr ROUNDED UP {a.scr} -> {scr} mg/dL (--round-scr); debated, may underestimate"
 else:
  note = f"NOT rounded: SCr {a.scr} mg/dL used as entered"
 res = {"scr_rounding": note, "scr_used": scr, "crcl_actual_bw": r(cg(a.age, a.weight_kg, scr, a.sex))}
 h = hin(a)
 if h:
  w, ww, ibw, adj = wts(a.sex, a.weight_kg, h)
  warn += ww
  res.update(ibw_kg=w["ibw_kg"], adjbw_kg=w["adjbw_kg"], abw_pct_ibw=w["abw_pct_ibw"],
    crcl_ibw=r(cg(a.age, ibw, scr, a.sex)), crcl_adjbw=r(cg(a.age, adj, scr, a.sex)))
  sel, key, wkg = (("actual (ABW < IBW)", "crcl_actual_bw", a.weight_kg) if a.weight_kg < ibw else
      ("AdjBW (ABW > 120% IBW)", "crcl_adjbw", adj) if a.weight_kg > 1.2 * ibw else
      ("IBW (ABW 100-120% IBW; actual similar)", "crcl_ibw", ibw))
  res.update(weight_used=sel, crcl_selected=res[key], bmi=w["bmi"],
    selection_note="Weight choice is convention, not part of CG 1976. Show all three.")
  bmi = w["bmi"]
  warn += ([f"BMI {bmi:g}: all CG weights imprecise; consider measured CrCl."] if bmi >= 40 else
    [f"BMI {bmi:g}: low muscle mass; CG may overestimate."] if bmi < 18.5 else [])
  if scr != a.scr:
   res["crcl_selected_unrounded_scr"] = r(cg(a.age, wkg, a.scr, a.sex))
 else:
  res.update(weight_used="actual (no height: IBW/AdjBW not computed)", crcl_selected=res["crcl_actual_bw"])
  warn.append("No height: obesity not assessed (actual weight overestimates if obese). Ask for height.")
 warn.append("CG needs stable SCr; invalid in AKI.")
 if a.scr < 0.7 and not a.round_scr:
  warn.append(f"SCr {a.scr} < 0.7: may overestimate. Not rounded; if a protocol rounds, use --round-scr and say so.")
 if a.scr >= 5:
  warn.append("SCr >= 5: likely ESRD/dialysis; CG not meaningful; dose by modality; confirm units.")
 if max(v for k, v in res.items() if k.startswith("crcl") and isinstance(v, float)) > 150:
  warn.append("Estimate > 150 mL/min: unreliable; consider measured CrCl.")
 emit(a, "crcl (Cockcroft-Gault)", "(140-age) x wt / (72 x SCr) x 0.85 if female", res, warn, cites=("cg", "devine", "adjbw"))

def pk2(dose, tau, tinf, c1, t1, c2, t2):
 ke = math.log(c1 / c2) / (t2 - t1)
 cmax, cmin = c1 * math.exp(ke * (t1 - tinf)), c2 * math.exp(-ke * (tau - t2))
 auc = tinf * (cmax + cmin) / 2 + (cmax - cmin) / ke
 vd = dose / tinf * (1 - math.exp(-ke * tinf)) / (ke * (cmax - cmin * math.exp(-ke * tinf)))
 return {"ke_per_h": ke, "t_half_h": math.log(2) / ke, "cmax_true": cmax, "cmin_true": cmin, "auc_tau": auc,
   "auc24": auc * 24 / tau, "vd_L": vd, "cl_L_h": ke * vd}

def cmd_vanco(a):
 for bad, msg in ((a.t_trough <= a.t_peak, "second level must follow the first"),
     (a.peak <= a.trough, "first level must be higher than the second"),
     (a.t_peak < a.tinf, "first level drawn during infusion: not usable"),
     (a.t_trough > a.tau, "t-trough > tau: times are from the START of this infusion")):
  if bad:
   fail(msg)
 warn = ["Assumes both levels from one interval near steady state."]
 if a.t_peak - a.tinf < 1:
  warn.append("Peak < 1 h after infusion end: distribution may inflate it (draw 1-2 h after).")
 pk = pk2(a.dose, a.tau, a.tinf, a.peak, a.t_peak, a.trough, a.t_trough)
 lo, hi = a.target_low, a.target_high
 res = {"auc24": r(pk["auc24"], 0), "in_target": lo <= pk["auc24"] <= hi, "target": f"{lo:g}-{hi:g} (MIC 1)"}
 s = [pk2(a.dose, a.tau, a.tinf, a.peak * f, a.t_peak, a.trough * g, a.t_trough)["auc24"]
  for f, g in ((1.05, .95), (.95, 1.05)) if a.peak * f > a.trough * g]
 gap = r(a.t_trough - a.t_peak, 2)
 if len(s) < 2:
  res["reliable"] = False
  warn.insert(0, f"AUC24 IS UNRELIABLE: levels differ {r(100 * (a.peak - a.trough) / a.peak)}%, {gap} h apart; 5% assay error could reverse them. Do not dose from it; redraw further apart or use Bayesian software.")
 else:
  s0, s1 = min(s), max(s)
  cross = s0 < lo <= s1 or s0 <= hi < s1
  res.update(auc24_if_levels_off_5pct=f"{s0:.0f}-{s1:.0f}", reliable=(s1 - s0) / pk["auc24"] <= .3 and not cross)
  if not res["reliable"]:
   warn.insert(0, f"AUC24 IS UNRELIABLE: 5% error per level moves it {s0:.0f}-{s1:.0f} ({gap} h apart{'; crosses a target limit' if cross else ''}). Redraw further apart or use Bayesian software.")
 if a.target and not res["reliable"]:
  res["proposal"] = "NOT CALCULATED: AUC24 unreliable."
 elif a.target:
  tdd, opts = a.dose * 24 / a.tau * a.target / pk["auc24"], []
  for tau in [8, 12, 24] + ([36, 48] if pk["t_half_h"] >= 12 else []):
   d = max(a.round_to, round(tdd * tau / 24 / a.round_to) * a.round_to)
   ti = max(a.tinf, d / 1000)
   k, v = pk["ke_per_h"], pk["vd_L"]
   cmax = d / ti * (1 - math.exp(-k * ti)) / (k * v * (1 - math.exp(-k * tau)))
   auc = d * 24 / tau / pk["cl_L_h"]
   opts.append({"regimen": f"{d:g} mg q{tau}h over {ti:g} h", "auc24": r(auc, 0), "cmax": r(cmax), "trough": r(cmax * math.exp(-k * (tau - ti))), "in_target": lo <= auc <= hi})
  res["proposal"] = {"new_daily_dose_unrounded": r(tdd, 0), "options": opts,
      "caveat": "Linear PK; 1 h/1000 mg infusion. Proposal only; check protocol, recheck levels."}
 emit(a, "vanco-auc (two-level, Sawchuk-Zaske)", "ke = ln(C1/C2)/(t2-t1); Cmax = C1 e^(ke(t1-tinf)); Cmin = C2 e^(-ke(tau-t2)); AUCtau = tinf(Cmax+Cmin)/2 + (Cmax-Cmin)/ke; AUC24 = AUCtau x 24/tau",
  res, warn, {k: r(v, 4 if k == "ke_per_h" else 2) for k, v in pk.items()}, ("rybak",))

LINES = [(-0.7135, 11.8370), (-1.0113, 17.1939), (-1.0254, 19.2078)]  # digitized Hartford q24|q36, q36|q48, q48|above

def cmd_amg(a):
 warn = ["Not for pregnancy, burns, ascites, dialysis. Local protocol overrides."]
 if a.age is not None and a.age < 18:
  fail(PED)
 mgkg = 15.0 if a.drug == "amikacin" else 7.0
 res, inter, dw = {"mg_per_kg": mgkg}, {}, a.weight_kg
 if hin(a):
  w, ww, ibw, adj = wts(a.sex, a.weight_kg, hin(a))
  warn += ww
  dw = adj if a.weight_kg > 1.2 * ibw else dw
  inter.update(ibw_kg=w["ibw_kg"], adjbw_kg=w["adjbw_kg"])
 else:
  warn.append("No height: dosing weight = actual (obesity unchecked).")
 inter["dosing_weight_kg"] = r(dw)
 res["dose_mg"] = r(mgkg * dw, 0)
 crcl = a.crcl
 if crcl is None and a.age and a.scr:
  crcl = cg(a.age, dw, a.scr, a.sex)
  warn.append("CrCl by CG with dosing weight; --crcl overrides.")
 if crcl is not None:
  inter["crcl"] = r(crcl)
  res["initial_interval"] = "q24h" if crcl >= 60 else "q36h" if crcl >= 40 else "q48h" if crcl >= 20 else "CrCl < 20: outside program"
 if a.level is not None:
  if a.time_h is None:
   fail("--time-h (h after START of infusion) required with --level")
  lv = a.level / 2 if a.drug == "amikacin" else a.level
  if not 6 <= a.time_h <= 14:
   res["nomogram"] = "not interpretable: valid only 6-14 h after start of infusion"
  else:
   b = [m * a.time_h + c - 0.25 for m, c in LINES]
   res["nomogram"] = "ABOVE nomogram: hold, follow serial levels" if lv >= b[2] else "q48h" if lv >= b[1] else "q36h" if lv >= b[0] else "q24h"
   res["nomogram_label"] = "APPROXIMATE: digitized lines; within 0.25 mg/L of a line -> longer interval. Confirm on the real nomogram." + (" Amikacin level halved." if a.drug == "amikacin" else "")
 emit(a, "aminoglycoside extended-interval (Hartford)", f"dosing wt = actual unless > 120% IBW then AdjBW; {mgkg:g} mg/kg; CrCl >=60 q24h, 40-59 q36h, 20-39 q48h",
  res, warn, inter, ("nicolau", "cg"))

MME = {"codeine": .15, "fentanyl_patch": 2.4, "hydrocodone": 1, "hydromorphone": 5, "methadone": 4.7, "morphine": 1,
 "oxycodone": 1.5, "oxymorphone": 3, "tapentadol": .4, "tramadol": .2}

def opname(x):
 x = x.lower().strip()
 x = "fentanyl_patch" if x.startswith("fentanyl") else x
 if x not in MME:
  fail(f"'{x}' not in CDC 2022 MME table ({', '.join(MME)}). Buprenorphine excluded by CDC; no parenteral routes.")
 return x

def cmd_opioid(a):
 warn = ["MME is risk accounting; incomplete cross-tolerance.", "Oral mg/day; fentanyl = patch mcg/h. No IV/IM/SC/transmucosal. Not for OUD."]
 tot, parts = 0.0, []
 for it in a.drug:
  try:
   nm, dose = it.split("=")
   dose = float(dose)
  except ValueError:
   fail("use --drug NAME=DAILY_DOSE")
  n = opname(nm)
  warn += ["'fentanyl' read as TRANSDERMAL patch mcg/h."] if nm.strip().lower() == "fentanyl" else []
  warn += ["Methadone: long variable half-life; FROM-methadone ratios unreliable; involve a specialist."] if n == "methadone" else []
  warn += ["Fentanyl patch: drug persists many hours after removal; stagger any switch."] if n == "fentanyl_patch" and a.to else []
  parts.append({"drug": n, "daily": dose, "factor": MME[n], "mme": r(dose * MME[n])})
  tot += dose * MME[n]
 res = {"total_mme_per_day": r(tot)}
 if a.to:
  t = opname(a.to)
  if t not in ("morphine", "oxycodone", "hydromorphone", "hydrocodone", "oxymorphone"):
   res["conversion"] = "NOT CALCULATED: " + {"methadone": "no fixed ratio converts TO methadone (dose-dependent; delayed accumulation). Specialist plan.",
    "fentanyl_patch": "CDC 2.4 is for accounting, not dosing. Use the patch label table plus specialist input."}.get(
    t, f"{t} has ceiling/serotonergic/CYP2D6 limits and a label max dose; convert per label.")
  else:
   e = tot / MME[t]
   res["conversion"] = {"target": t, "equianalgesic_UNREDUCED": r(e), "reduced_25pct": r(e * .75), "reduced_50pct": r(e * .5),
        "note": "ESTIMATE ONLY. CDC 2022 caution: MME must not set the new dose; dose substantially lower. Check an equianalgesic table, start 25-50% reduced, add breakthrough (Fine 2009)."}
 emit(a, "opioid MME (CDC 2022)", "MME = daily dose x factor; target = MME/target factor then reduce 25-50%", res, warn, {"components": parts}, ("cdc", "fine"))

ST = {"hydrocortisone": 20, "cortisone": 25, "prednisone": 5, "prednisolone": 5, "methylprednisolone": 4, "triamcinolone": 4, "dexamethasone": .75, "betamethasone": .6}

def cmd_steroid(a):
 f, t = a.from_.lower(), (a.to or "").lower()
 if f not in ST or (t and t not in ST):
  fail(f"unknown steroid; known: {', '.join(ST)} (fludrocortisone not converted)")
 eq = {k: r(a.dose / ST[f] * v, 2) for k, v in ST.items()}
 emit(a, "glucocorticoid equivalence", "dose x target/source equivalent: " + ", ".join(f"{k} {v}" for k, v in ST.items()),
  {"equivalent_mg": {t: eq[t]} if t else eq},
  ["Glucocorticoid potency only; mineralocorticoid effect and duration differ. Oral/IV."], cites=("liu",))

def cmd_lytes(a):
 res, w = {}, []
 if None not in (a.na, a.cl, a.hco3):
  ag = a.na - a.cl - a.hco3
  res["anion_gap"] = r(ag)
  if a.k is not None:
   res["anion_gap_with_k"] = r(ag + a.k)
  if a.albumin is not None:
   res["albumin_corrected_ag"] = r(ag + 2.5 * (4 - a.albumin))
  w.append("Normal AG range is lab-specific.")
 if a.ca is not None and a.albumin is not None:
  res.update(corrected_ca_kdoqi=r(a.ca + .8 * (4 - a.albumin), 2), adjusted_ca_payne=r(a.ca - a.albumin + 4, 2))
  w.append("Corrected Ca is an estimate; measure ionized Ca when it matters.")
 if a.na is not None and a.glucose is not None:
  dg = (a.glucose - 100) / 100
  res.update(corrected_na_katz_1_6=r(a.na + 1.6 * dg), corrected_na_hillier_2_4=r(a.na + 2.4 * dg)) if dg > 0 else res.update(corrected_na="n/a (glucose <= 100)")
  w += ["Glucose > 400: Hillier ~4.0/100 fits better."] if a.glucose > 400 else ["Glucose < 40: if mmol/L, x 18 = mg/dL."] if a.glucose < 40 else []
 if not res:
  fail("need --na --cl --hco3 [--k --albumin] | --ca --albumin | --na --glucose")
 emit(a, "lytes", "AG = Na-(Cl+HCO3); corr AG = AG + 2.5(4-alb); corr Ca = Ca + 0.8(4-alb); corr Na = Na + 1.6|2.4 x (glu-100)/100",
  res, w, cites=("ag", "ca", "na"))

LIM = {"age": (0, 120), "weight_kg": (.5, 650), "height_cm": (40, 272), "height_in": (16, 107), "scr": (.1, 25),
 "round_scr": (.1, 25), "crcl": (0, 400), "na": (80, 220), "k": (.5, 15), "cl": (40, 180), "hco3": (1, 70), "albumin": (.3, 7),
 "ca": (4, 25), "glucose": (10, 5000), "dose": (.001, 1e5), "tau": (.5, 168), "tinf": (.05, 24),
 "peak": (.01, 500), "trough": (.01, 500), "t_peak": (0, 168), "t_trough": (0, 168), "level": (0, 500), "time_h": (0, 72),
 "target": (100, 1500), "target_low": (100, 1500), "target_high": (100, 1500), "round_to": (1, 5000)}
HINT = {"weight_kg": "kg, not lb", "scr": "mg/dL, not umol/L (/ 88.4 = mg/dL)", "albumin": "g/dL, not g/L",
  "ca": "mg/dL, not mmol/L (x 4 = mg/dL)", "glucose": "mg/dL, not mmol/L"}

def validate(a):
 for k, v in vars(a).items():
  if isinstance(v, float) and (not math.isfinite(v) or (k in LIM and not LIM[k][0] <= v <= LIM[k][1])):
   fail(f"--{k.replace('_', '-')} = {v} is implausible (range {LIM.get(k, ('finite', ''))[0]}-{LIM.get(k, ('', ''))[1]} {HINT.get(k, '')}): check units and value. Nothing calculated.")
 w, h = getattr(a, "weight_kg", None), hin(a)
 if w and h and not 10 <= w / (h * .0254) ** 2 <= 100:
  fail(f"BMI {w / (h * .0254) ** 2:.0f} is implausible: check lb vs kg, in vs cm. Nothing calculated.")
 for it in (a.drug if isinstance(getattr(a, "drug", None), list) else []):
  try:
   d = float(it.split("=", 1)[1])
   assert math.isfinite(d) and 0 < d <= 1e5
  except (IndexError, ValueError, AssertionError):
   fail(f"--drug {it}: dose missing or implausible: check units. Nothing calculated.")

def build():
 p = argparse.ArgumentParser(description=__doc__)
 p.add_argument("--selftest", action="store_true")
 sp = p.add_subparsers(dest="cmd")
 F, SEX, REQ = float, dict(required=True, type=str.upper, choices=["M", "F"]), dict(type=float, required=True)

 def sub(name, fn, *args, height=False):
  q = sp.add_parser(name)
  q.set_defaults(func=fn)
  for n, kw in args:
   q.add_argument(n, **kw)
  if height:
   g = q.add_mutually_exclusive_group()
   g.add_argument("--height-cm", type=F)
   g.add_argument("--height-in", type=F)
 sub("weights", cmd_weights, ("--sex", SEX), ("--weight-kg", REQ), height=True)
 sub("crcl", cmd_crcl, ("--age", REQ), ("--sex", SEX), ("--weight-kg", REQ), ("--scr", REQ), ("--round-scr", dict(type=F)), height=True)
 sub("vanco-auc", cmd_vanco, *[(f"--{n}", REQ) for n in ("dose", "tau", "tinf", "peak", "t-peak", "trough", "t-trough")],
  ("--target-low", dict(type=F, default=400.)), ("--target-high", dict(type=F, default=600.)), ("--target", dict(type=F)), ("--round-to", dict(type=F, default=250.)))
 sub("aminoglycoside", cmd_amg, ("--drug", dict(default="gentamicin", choices=["gentamicin", "tobramycin", "amikacin"])), ("--sex", SEX),
  ("--weight-kg", REQ), *[(f"--{n}", dict(type=F)) for n in ("age", "scr", "crcl", "level", "time-h")], height=True)
 sub("opioid", cmd_opioid, ("--drug", dict(action="append", required=True)), ("--to", {}))
 sub("steroid", cmd_steroid, ("--from", dict(dest="from_", required=True)), ("--dose", REQ), ("--to", {}))
 sub("lytes", cmd_lytes, *[(f"--{n}", dict(type=F)) for n in ("na", "k", "cl", "hco3", "albumin", "ca", "glucose")])
 return p

def main(argv=None):
 a = build().parse_args(argv)
 if a.selftest:
  return selftest()
 if not a.cmd:
  fail("no command; see --help")
 validate(a)
 try:
  a.func(a)
 except (ValueError, ZeroDivisionError, OverflowError) as e:
  fail(f"calculation error: {e}")
 return 0

# Known answers "argv|exit|path=value;path~substr" (R. I. W E = result intermediates warnings error): hand calcs, published vanco example (AUC ~349),
# Nicolau 1995, CDC 2022 footnote (hydrocodone 20 = 20, oxycodone 20 = 30 MME), Liu 2013 Table 3.
M, F = "--sex M --weight-kg", "--sex F --weight-kg"
V = "vanco-auc --dose 1000 --tau 12 --tinf 1 --peak 22 --t-peak 2 --trough 8 --t-trough 11.5"
N = "aminoglycoside --sex M --weight-kg 80 --crcl 80 --time-h 10 --level"
TESTS = f"""weights {M} 100 --height-in 70|0|R.ibw_kg=73.0;R.adjbw_kg=83.8
weights {F} 60 --height-in 64|0|R.ibw_kg=54.7
weights {M} 80 --height-cm 180|0|R.bsa_m2_mosteller=2.0
crcl --age 60 {M} 70 --scr 1.0|0|R.crcl_actual_bw=77.8;R.scr_rounding~NOT rounded
crcl --age 60 {F} 70 --scr 1.0|0|R.crcl_actual_bw=66.1
crcl --age 65 {F} 90 --height-cm 160 --scr 0.6|0|R.weight_used~AdjBW;R.crcl_selected=99.5;W~Not rounded
crcl --age 65 {F} 90 --height-cm 160 --scr 0.6 --round-scr 0.8|0|R.scr_used=0.8;R.scr_rounding~ROUNDED UP
crcl --age 70 {M} 80 --scr 88|2|E~check units
weights {M} 0 --height-in 70|2|E~check units
{V}|0|I.auc24=349.2;I.ke_per_h=0.1065;I.cmax_true=24.47;I.cmin_true=7.59;R.reliable=True;R.in_target=False
{V} --target 500|0|R.proposal.new_daily_dose_unrounded=2863.0;R.proposal.options~'in_target': True
vanco-auc --dose 1250 --tau 12 --tinf 1.5 --peak 31 --t-peak 2.1 --trough 29 --t-trough 2.6 --target 500|0|R.reliable=False;W~AUC24 IS UNRELIABLE;R.proposal~NOT CALCULATED
vanco-auc --dose 1250 --tau 12 --tinf 1.5 --peak 31 --t-peak 1 --trough 10 --t-trough 11|2|E~during infusion
vanco-auc --dose 1250 --tau 12 --tinf 1.5 --peak 31 --t-peak 3 --trough 10 --t-trough 13|2|E~> tau
aminoglycoside {M} 80 --height-in 70 --crcl 100|0|R.dose_mg=560.0;R.initial_interval=q24h
aminoglycoside {M} 100 --height-in 70 --crcl 70|0|I.dosing_weight_kg=83.8;R.dose_mg=587.0
{N} 3|0|R.nomogram=q24h;R.nomogram_label~APPROXIMATE
{N} 5.5|0|R.nomogram=q36h
{N} 8|0|R.nomogram=q48h
{N} 10|0|R.nomogram~ABOVE
aminoglycoside {M} 80 --crcl 80 --level 3 --time-h 4|0|R.nomogram~not interpretable
opioid --drug hydrocodone=20|0|R.total_mme_per_day=20.0
opioid --drug oxycodone=20|0|R.total_mme_per_day=30.0
opioid --drug oxycodone=60 --to hydromorphone|0|R.conversion.equianalgesic_UNREDUCED=18.0;R.conversion.reduced_25pct=13.5;R.conversion.reduced_50pct=9.0
opioid --drug morphine=100 --to methadone|0|R.conversion~NOT CALCULATED
opioid --drug morphine=100 --to fentanyl|0|R.conversion~NOT CALCULATED
opioid --drug buprenorphine=1|2|E~Buprenorphine
opioid --drug oxycodone=-5|2|E~check units
steroid --from prednisone --dose 40|0|R.equivalent_mg.dexamethasone=6.0;R.equivalent_mg.methylprednisolone=32.0;R.equivalent_mg.hydrocortisone=160.0
lytes --na 140 --k 4 --cl 104 --hco3 24 --albumin 2.0 --ca 8.0|0|R.anion_gap=12.0;R.anion_gap_with_k=16.0;R.albumin_corrected_ag=17.0;R.corrected_ca_kdoqi=9.6;R.adjusted_ca_payne=10.0
lytes --na 130 --glucose 600|0|R.corrected_na_katz_1_6=138.0;R.corrected_na_hillier_2_4=142.0
lytes --ca 8 --albumin 35|2|E~g/L
lytes --ca 2.2 --albumin 3|2|E~mmol/L
lytes --na 130 --glucose 25|0|W~mmol/L
crcl --age 15 {M} 50 --scr 0.5|2|E~children
aminoglycoside {F} 30 --age 10 --scr 0.4|2|E~children
crcl --age 70 {M} 180 --height-cm 65 --scr 1|2|E~BMI
weights {F} 30 --height-in 40|2|E~Devine
crcl --age 50 {M} 80 --scr 1|0|W~No height
crcl --age 50 {F} 110 --height-cm 160 --scr 1|0|W~BMI 43;R.crcl_selected=80.1
crcl --age 60 {M} 70 --scr 6|0|W~ESRD
opioid --drug oxycodone=60 --to tramadol|0|R.conversion~NOT CALCULATED
opioid --drug oxycodone=60 --to morphine|0|R.conversion.note~caution;R.conversion.equianalgesic_UNREDUCED=90.0"""

def selftest():
 bad = 0
 for line in TESTS.splitlines():
  x = line
  for k, v in (("R.", "result."), ("I.", "intermediates."), ("W~", "warnings~"), ("E~", "error~")):
   x = x.replace(k, v)
  argv, exp, checks = x.split("|")
  buf, code = io.StringIO(), 0
  with contextlib.redirect_stdout(buf), contextlib.redirect_stderr(io.StringIO()):
   try:
    main(argv.split())
   except SystemExit as e:
    code = e.code
  ok = code == int(exp)
  try:
   d = json.loads(buf.getvalue())
   for c in checks.split(";"):
    path, op, want = c.partition("~") if "~" in c else c.partition("=")
    v = d
    for p in path.split("."):
     v = v[p]
    ok &= (want in str(v)) if op == "~" else (abs(v - float(want)) < 0.051 if isinstance(v, float) else str(v) == want)
  except Exception:
   ok = False
  bad += not ok
  if not ok:
   print("FAIL " + line)
 print(f"selftest: {len(TESTS.splitlines()) - bad} passed, {bad} failed")
 return 1 if bad else 0

if __name__ == "__main__":
 sys.exit(main())
```
