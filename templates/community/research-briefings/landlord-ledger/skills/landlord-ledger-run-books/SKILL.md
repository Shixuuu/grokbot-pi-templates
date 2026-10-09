---
name: landlord-ledger-run-books
description: "Use when the owner asks about rent (who paid, who's late or short), sends or forwards a property receipt or invoice, asks for a rent roll or year-to-date Schedule E summary, asks about lease end or rent-increase notice dates, wants a late-rent reminder or rent-increase notice drafted, or when a Landlord Ledger routine runs (also used by setup to install the landlord tool)."
---

# Landlord Ledger: run books

You do the reading, fetching, and talking. The `landlord.py` tool does the math and keeps the ledger. Keep messages short and plain; the owner may not be technical.

**Hard rules**
- Never send anything to a tenant yourself. Late-rent reminders and rent-increase notices are drafts. Show the draft, and only put it in an email draft or send it after the owner says so explicitly.
- Never move, pay, or transfer money. The bank connection is read-only bookkeeping input.
- Don't guess. When the tool exits with code 2, ask the owner. Don't choose for them.
- Only mention the disclaimer when it matters, like on summaries or notice dates: "This is bookkeeping help, not tax or legal advice. Check notice rules and tax questions with a local professional."
- Never repeat full account numbers. Last 4 digits only.

## 1. Install or check the tool
If `~/landlord-ledger/landlord.py` is missing, write the source from the last section of this skill to that path exactly, then run `chmod +x`. `sha256sum` of the file should be `c8ebad5d1d5aeeab99bc00d16b18bd206f67e2d9e08eae8d9ca87401c5c90c87`. It's Python 3 with only the standard library. Run it as `python3 ~/landlord-ledger/landlord.py <command>` (called `L` below). Exit codes: `0` means OK, `1` means an error (read the `ERROR:` line), and `2` means the owner needs to decide something.

**Which ledger.** The default is `~/landlord-ledger/ledger.json`. `--ledger PATH` (before the command: `L --ledger PATH status`) or the `LANDLORD_LEDGER` env var picks another file; `--ledger` wins. `status`, `late`, `import`, and `config show` print the file in use (`Ledger: <path>`); check it. Warning: an exported `LANDLORD_LEDGER` stays set for the rest of that shell, so after any test run `unset LANDLORD_LEDGER` or the owner's real ledger gets skipped.

## 2. Setup data (from the getting-started form)
- `L init --start YYYY-MM --owner "NAME"`. The start month is the first month to track. Running `init` again on an existing ledger only updates the owner name and start month; nothing is erased.
- `L property add "Property name" --address "street, city"`
- `L unit add --property "Property name" --unit A --tenant "Full Name" --rent 1850 --due-day 1 --grace 5 --lease-start 2026-01-01 --lease-end 2026-12-31 --deposit 1850`
  - Leave out `--lease-end` for month-to-month. Add `--alias "NAME AS IT SHOWS ON THE BANK"` when a tenant pays from someone else's account or under a nickname (repeatable).
  - Changes: `L unit edit "Property/A" --rent 1900 --lease-end 2027-12-31`
- Notice settings belong to the owner, since rules vary by location: `L config set notice_days_small 30`, `notice_days_large 90`, `large_increase_pct 10`, `renewal_days 60`. Per unit: `--notice-days N`. Don't state what the law requires. Suggest they confirm their local rule.

## 3. Monthly rent check (routine, or "who paid?")
1. **Pull transactions.** If the Finance connector is connected:
   - Call `finance_list_accounts` and pick the account(s) the owner said rent lands in. Save their ids in memory. Card accounts are only for expenses.
   - Call `finance_query_account_transactions` (bank accounts) and `finance_query_liability_transactions` (cards used for property expenses), from the 25th of the previous month through today, filtered to the saved account ids. If a `next_cursor` comes back, keep paging.
   - Each response carries a `csv` field (`id,account_id,date,amount,...`). Positive amounts are money in. Write each response's JSON (or just its `csv` text) to a temp file like `/tmp/ll_pull_1.json`, run `L import /tmp/ll_pull_1.json`, then delete the temp files. Pending rows are skipped; re-importing is safe (duplicates are dropped).
   - Only import accounts the owner confirmed are used for the rentals. If personal spending shows up, mark it personal (section 4).
   - No Finance connector? Ask the owner to upload their bank's CSV export, then run `L import FILE`. Common bank CSV layouts are detected automatically.
2. **Match.** Run `L match`.
   - `MATCHED ... for YYYY-MM [high|medium|low]` lines are done. Mention the `low` ones (matched by amount only) so the owner can confirm.
   - **Which month it counts for.** A payment in the last 5 days of a month (setting `early_days`) counts toward next month's rent: rent paid Sep 28 is October rent. If that month is already paid in full and the one before still owes, it goes there. Override: `L assign TXID "Property/A" --period YYYY-MM`.
   - `NEEDS OWNER <txid> ... candidates: ...` means a deposit the tool couldn't place, for example two units with the same rent and no name in the memo. Units after `already paid in full:` owe nothing it could cover, so they're less likely. Ask in one short message that lists each one: "$1,850 on Sep 1, 'ONLINE TRANSFER'. Is that Unit A (Jordan) or Unit B (Priya), or not rent?" Then:
     - rent: `L assign TXID "Property/A"` (add `--period YYYY-MM` if it pays a different month)
     - security deposit: `L assign TXID "Property/A" --as deposit`
     - not rent (a transfer, interest, personal): `L ignore TXID --remember`
   - `NOTE possible double charge` flags identical same-day charges from one vendor. Both are kept; ask the owner. If one is a mistake, `L ignore TXID` (no `--remember`).
   - Expenses that need a category or property are listed too (see section 4).
3. **Report.** Run `L status --month YYYY-MM`. Tell the owner who is PAID, PAID LATE, DUE, PARTIAL, SHORT, or LATE, with balances. Days late are counted from the **end of the grace period** (due date + grace days), not the due date; say it that way: "Cedar Cottage: $2,400 unpaid, 21 days past the grace period." `L late --month YYYY-MM` prints only the problems (column `days_past_grace`) and prints nothing when everyone is paid. In a routine, stay brief when all is well.
4. **Offer drafts for problems.** For each LATE or SHORT unit, offer a friendly reminder: `L draft late "Property/A" --month YYYY-MM` (add `--late-fee AMT` only if the owner says their lease has one). Show the draft text as printed (it already formats money and dates). If the owner wants it emailed, create an email draft for the tenant's address only when they ask, and send only on an explicit "send it". Don't text or email tenants on your own.

## 4. Expenses, receipts, and categories
- `L match` auto-sorts spending into Schedule E categories: advertising, auto_travel, cleaning_maintenance, commissions, insurance, legal_professional, management_fees, mortgage_interest, other_interest, repairs, supplies, taxes, utilities, depreciation, other. There's also `personal`, which is excluded. With more than one property, it also needs to know which property each expense belongs to.
- `L categorize` lists anything still missing a category or property (exit 2). Ask the owner in one message, then fix each row. **One rule for standing rules:**
  - A vendor rule on its own ("Northgate is always the Maple mortgage"): `L rule add "merchant words" mortgage_interest --property "Property name"`.
  - Fixing a listed row: `L categorize --set TXID repairs --property "Property name"`. Add `--remember` only when the owner says that vendor always goes there; it fixes the row and saves the rule in one step.
  - Personal items: `L categorize --set TXID personal --remember`. See rules with `L rule list`; drop one with `L rule remove "merchant words"`.
- **Receipts and invoices.** When the owner forwards one, or in the monthly check if email is on (search the last ~40 days for receipts, invoices, or statements from their rental vendors):
  1. Save the attachment. For a photo, save the image.
  2. If the Drive connector is connected, file it in `Landlord Ledger/<property name>/<year>/`, creating folders as needed, named `YYYY-MM-DD <vendor> <amount>.<ext>`. No Drive connector? Keep it in `~/landlord-ledger/receipts/<property>/<year>/`.
  3. Find the matching bank or card line (`L txns --month YYYY-MM`) and run `L attach TXID "<drive link or path>"`. Paid in cash or by check and not in the bank data? Tell the owner it isn't tracked yet.
- **Mortgage payments** include principal, and only the interest part belongs in the summary. At year end, ask for the lender's year-end interest statement and run `L override --property "Property name" --year YYYY --category mortgage_interest --amount 12345.67`. The same goes for depreciation or anything else their tax preparer gives them.

## 5. Rent roll and year-to-date summary (monthly or quarterly routine, or on request)
- `L rentroll --month YYYY-MM --csv ~/landlord-ledger/reports/rentroll-YYYY-MM.csv`
- `L schedule-e --year YYYY --csv ~/landlord-ledger/reports/schedule-e-YYYY.csv` (add `--property "Property name"` for just one)
- Schedule E counts rent by **payment date**, not the month it covers: January rent paid Dec 29 is income in the December year. Mention it if year-end totals look off by a month.
- Send a short plain-text summary: rent collected versus scheduled, and outstanding balances. For each property, give income, the biggest expense categories, and net before depreciation. Attach the CSV files. If Drive is on, and only if the owner wants it, also save them to `Landlord Ledger/<property>/<year>/reports/`. Close with the one-line disclaimer.

## 6. Lease dates and rent-increase notices
- `L leases --days 90` shows upcoming lease ends, the renewal decision date, and the "send increase notice by" dates for small and large increases, based on the owner's settings. Dates already gone are marked `(passed)`.
- **Calendar.** If the Calendar connector is on and the owner said yes, create all-day events for each lease end, renewal decision, and notice-by date, titled like "Lease end - Property/A (Tenant)", with a 7-day reminder. Check for an existing event with the same title first to avoid duplicates. No calendar connector? Run `L ics --days 365 --out ~/landlord-ledger/reports/lease-dates.ics` and send the file.
- **Rent increase.** When the owner wants to raise rent, run `L draft increase "Property/A" --new-rent 1950 --effective YYYY-MM-DD`. Exit 2 with `WARNING: effective date is sooner than your configured N-day notice period` means the date is too soon under their own settings. Tell them, and suggest a later date. Show the draft. It is never sent without their explicit yes. Suggest they confirm local notice and rent-cap rules.

## 7. Everyday questions
- "Who hasn't paid?" → `L late`
- "Show me August" → `L status --month 2026-08`
- "What did I spend on repairs this year?" → `L schedule-e --year 2026`
- "List unmatched stuff" → `L txns --unmatched` or `L txns --uncategorized`
- "Undo that match" → `L unassign TXID`
- Tenant moved out or a new lease was signed → `L unit edit ...`

## 8. Errors
- `ERROR: no ledger yet; run init`: check the `Ledger:` path / `LANDLORD_LEDGER` first; if it's right, run the getting-started setup.
- `WARNING: ledger was damaged; restored from backup`: tell the owner that the last change may need redoing, then rerun the step.
- `ERROR: ledger damaged and no backup`: tell the owner plainly, and offer to rebuild by re-importing their transactions. The damaged file is kept.
- Any other `ERROR:` line: fix the argument (unit names look like `Property name/Label`) and retry once, then explain plainly.

## Tool source (`~/landlord-ledger/landlord.py`)
```python
#!/usr/bin/env python3
# Bookkeeping helper for small landlords. Educational only; never networks, sends, or moves money.
import argparse,csv,hashlib,io,json,os,re,shutil,sys
from datetime import date,datetime,timedelta
from decimal import Decimal,ROUND_HALF_UP
D=Decimal
Q=D("0.01")
H=ROUND_HALF_UP
KW=[
("mortgage_interest",12,"mortgage|home loan|mtg pmt|loan servicing"),
("taxes",16,"property tax|tax collector|treasurer|county tax"),
("insurance",9,"insurance|insur|landlord policy|hazard ins"),
("management_fees",11,"property management|mgmt fee|management fee"),
("commissions",8,"commission|leasing fee|tenant placement"),
("legal_professional",10,"attorney|law office|legal|cpa|accounting|bookkeep|eviction"),
("advertising",5,"advertis|rental listing|listing fee|for rent sign"),
("cleaning_maintenance",7,"cleaning|janitor|landscap|gardening|lawn|pest|pool service|maid|snow removal|carpet clean"),
("repairs",14,"repair|plumb|hvac|roofing|roofer|locksmith|handyman|appliance|electrician|hardware|contractor"),
("utilities",17,"water|sewer|trash|waste|garbage|electric co|power co|gas co|gas & electric|utility|utilities|internet"),
("supplies",15,"supplies|supply|paint store|lightbulb"),
("auto_travel",6,"fuel|gas station|parking|toll|mileage"),
("other_interest",13,"interest charge|finance charge|loan interest"),
("other",19,"hoa|association dues|permit|license fee"),
]
LN={k:n for k,n,_ in KW}
LN["depreciation"]=18
CATS=set(LN)|{"personal"}
RULES=CATS|{"ignore"}
FIN=["id","account_id","date","amount","direction","currency","name","merchant_name","description","pending","category"]
DN={"date","posting date","transaction date","posted date"}
EN={"description","payee","memo","name"}
BN={"debit","withdrawal","withdrawals"}
CN={"credit","deposit","deposits"}
GN="Days late are counted from the end of the grace period (due date + grace days), not from the due date."
SK=("owner_name","start_month","early_days","renewal_days","notice_days_small","notice_days_large","large_increase_pct")
class E(Exception):
 pass
def er(m):
 print("ERROR: "+m,file=sys.stderr);raise E()
def M(x):
 if isinstance(x,D):d=x
 else:
  s=str(x).strip().replace("$","").replace(",","")
  neg=len(s)>=2 and s[0]=="(" and s[-1]==")"
  if neg:s=s[1:-1].strip()
  d=D(s)
  if neg:d=-abs(d)
 d=d.quantize(Q,rounding=H)
 return D("0.00") if d==0 else d
def ms(x):
 return format(M(x),"f")
def usd(x):
 v=M(x);return ("-" if v<0 else "")+"${:,.2f}".format(abs(v))
def longd(d):
 return f"{d.strftime('%B')} {d.day}, {d.year}"
def sg(s):
 return re.sub(r"[^a-z0-9]+","-",(s or "").lower()).strip("-")
def pd(s):
 s=(s or "").strip()
 for f in("%Y-%m-%d","%m/%d/%Y","%m/%d/%y"):
  try:return datetime.strptime(s,f).date()
  except ValueError:pass
def ym(d):
 return f"{d.year:04d}-{d.month:02d}"
def okm(s):
 return bool(re.fullmatch(r"\d{4}-\d{2}",s or "") and 1<=int(s[5:7])<=12)
def mend(y,m):
 return date(y+(m==12),1 if m==12 else m+1,1)-timedelta(1)
def addm(y,m,k):
 i=y*12+m-1+k;return i//12,i%12+1
def norm(s):
 return re.sub(r"\s+"," ",(s or "").strip().lower())
def show(rows):
 if not rows:return
 w=[max(len(str(r[i])) for r in rows) for i in range(len(rows[0]))]
 for r in rows:print("  ".join(str(c).ljust(w[i]) for i,c in enumerate(r)).rstrip())
def atomic(path,text):
 path=str(path);os.makedirs(os.path.dirname(path) or ".",exist_ok=True);tmp=path+".tmp"
 fd=os.open(tmp,os.O_WRONLY|os.O_CREAT|os.O_TRUNC,0o644)
 try:
  os.write(fd,text.encode());os.fsync(fd)
 finally:os.close(fd)
 os.replace(tmp,path)
def save(path,data):
 path=str(path)
 if os.path.exists(path):shutil.copyfile(path,path+".bak")
 atomic(path,json.dumps(data,indent=2,ensure_ascii=False)+"\n")
def okled(d):
 if not isinstance(d,dict) or d.get("version")!=1:return False
 for k,t in(("settings",dict),("properties",list),("units",list),("txns",list),("rules",list),("overrides",dict)):
  if not isinstance(d.get(k),t):return False
 return all(k in d["settings"] for k in SK)
def load(path):
 path=str(path)
 if not os.path.exists(path):return None
 try:
  d=json.loads(open(path,encoding="utf-8").read())
  if not okled(d):raise ValueError("bad")
  return d
 except Exception:
  ts=datetime.now().strftime("%Y%m%d%H%M%S");dest=path+f".corrupt-{ts}"
  if os.path.exists(dest):dest=path+f".corrupt-{ts}-{os.getpid()}"
  os.replace(path,dest);bak=path+".bak"
  if os.path.exists(bak):
   try:
    raw=open(bak,encoding="utf-8").read();b=json.loads(raw)
    if okled(b):
     atomic(path,raw);print("WARNING: ledger was damaged; restored from backup",file=sys.stderr);return b
   except Exception:pass
  print(f"ERROR: ledger damaged and no backup; moved to {dest}",file=sys.stderr);raise E()
def fresh(td,start,owner):
 return {"version":1,"settings":{"owner_name":owner or "","start_month":start or ym(td),"early_days":5,"renewal_days":60,"notice_days_small":30,"notice_days_large":90,"large_increase_pct":"10"},"properties":[],"units":[],"txns":[],"rules":[],"overrides":{}}
def need(path):
 if not os.path.exists(path):er("no ledger yet; run init")
 return load(path)
def prop_of(data,ref):
 r=(ref or "").strip().lower()
 for p in data["properties"]:
  if p["id"].lower()==r or p["name"].lower()==r:return p
def unit_of(data,ref):
 r=(ref or "").strip()
 for u in data["units"]:
  if u["id"].lower()==r.lower():return u
 if "/" in r:
  a,b=r.split("/",1);p=prop_of(data,a)
  if p:
   bl,bs=b.strip().lower(),sg(b)
   for u in data["units"]:
    if u["property"]==p["id"] and(u["label"].lower()==bl or sg(u["label"])==bs):return u
def txn_of(data,i):
 for t in data["txns"]:
  if t["id"]==i:return t
def pname(data,i):
 for p in data["properties"]:
  if p["id"]==i:return p["name"]
 return i or ""
def punits(data):
 pm={p["id"]:p["name"].lower() for p in data["properties"]}
 return sorted(data["units"],key=lambda u:(pm.get(u["property"],""),u.get("label","").lower(),u["id"]))
def active(u,y,m):
 last,first=mend(y,m).isoformat(),f"{y:04d}-{m:02d}-01"
 ls,le=u.get("lease_start"),u.get("lease_end")
 return not(ls and ls>last) and not(le and le<first)
def psum(data,uid,per,skip=None):
 s=D("0.00")
 for t in data["txns"]:
  if t.get("id")!=skip and t.get("kind")=="rent" and t.get("unit")==uid and t.get("period")==per:s+=M(t["amount"])
 return s
def period_for(data,t,u):
 d=pd(t["date"]);y,m=d.year,d.month
 if d.day+int(data["settings"]["early_days"])>mend(y,m).day:y,m=addm(y,m,1)
 per=f"{y:04d}-{m:02d}";rent=M(u["rent"])
 if psum(data,u["id"],per,t.get("id"))>=rent:
  py,pm=addm(y,m,-1);prev=f"{py:04d}-{pm:02d}"
  if prev>=data["settings"]["start_month"] and active(u,py,pm) and rent-psum(data,u["id"],prev,t.get("id"))>0:return prev
 return per
def ustat(data,u,my,td):
 y,m=int(my[:4]),int(my[5:7]);due=date(y,m,min(int(u["due_day"]),mend(y,m).day));cut=due+timedelta(days=int(u["grace"]))
 rent=M(u["rent"]);pays=[t for t in data["txns"] if t.get("kind")=="rent" and t.get("unit")==u["id"] and t.get("period")==my]
 paid=sum((M(t["amount"]) for t in pays),D("0.00"));ont=sum((M(t["amount"]) for t in pays if t["date"]<=cut.isoformat()),D("0.00"))
 last=max((t["date"] for t in pays),default="")
 if paid>=rent:
  st="PAID" if ont>=rent else "PAID LATE"
  if paid>rent:st+=" credit "+ms(paid-rent)
 elif td<=cut:st="PARTIAL" if paid>0 else "DUE"
 else:st="SHORT" if paid>0 else "LATE"
 return due,cut,rent,paid,rent-paid,st,last
def words(s):
 return re.sub(r"[^a-z0-9]+"," ",(s or "").lower()).strip()
def phrase(hay,ph):
 p=words(ph)
 return bool(p) and re.search(r"(?<![a-z0-9])"+re.escape(p)+r"(?![a-z0-9])",words(hay)) is not None
def hit_name(text,u):
 tn=u.get("tenant") or ""
 if phrase(text,tn):return True
 w=words(tn).split();ln=w[-1] if w else ""
 if len(ln)>=3 and phrase(text,ln):return True
 return any(phrase(text,a) for a in u.get("aliases") or [])
def hit_memo(text,label):
 h=re.sub(r"[^a-z0-9#]+"," ",(text or "").lower());lab=words(label)
 if not lab:return False
 if re.search(r"(?<![a-z0-9])(?:unit|apt)\s+"+re.escape(lab)+r"(?![a-z0-9])",h):return True
 return re.search(r"#\s*"+re.escape(lab)+r"(?![a-z0-9])",h) is not None
def blob(t):
 return ((t.get("desc") or "")+" "+(t.get("merchant") or "")).lower()
def builtin(text):
 for cat,_,s in KW:
  if any(k and k in text for k in s.split("|")):return cat
def rhits(data,text):
 return [r for r in data["rules"] if (r.get("pattern") or "").lower() in text]
def best(data,text):
 hs=[r for r in rhits(data,text) if r.get("category")!="ignore"]
 return max(hs,key=lambda r:len(r.get("pattern") or "")) if hs else None
def addr_key(addr):
 parts=re.sub(r"[,]+"," ",addr or "").split()
 if not parts:return ""
 if parts[0][:1].isdigit() and len(parts)>1:return (parts[0]+" "+parts[1]).lower()
 return parts[0].lower()
def infer(data,desc):
 d=(desc or "").lower();hits=[]
 for p in data["properties"]:
  name=(p.get("name") or "").lower().strip()
  if name and name in d:hits.append(p["id"]);continue
  tok=addr_key(p.get("address") or "")
  if tok and tok in d:hits.append(p["id"])
 hits=list(dict.fromkeys(hits))
 return hits[0] if len(hits)==1 else None
def fill(data,t):
 text=blob(t);b=best(data,text)
 if not t.get("category"):t["category"]=b.get("category") if b else builtin(text)
 if not t.get("property"):
  if b and b.get("property"):t["property"]=b["property"]
  elif len(data["properties"])==1:t["property"]=data["properties"][0]["id"]
  else:t["property"]=infer(data,t.get("desc") or "")
def se_cat(data,text):
 b=best(data,text);c=b.get("category") if b else builtin(text)
 return c if c in LN else None
def is_ret(text):
 return any(k in text for k in("returned","nsf","reversal","chargeback","return item"))
def mkey(t):
 mer=(t.get("merchant") or "").strip().lower()
 if mer:return re.sub(r"\s+"," ",mer)
 kept=[]
 for w in(t.get("desc") or "").split():
  if any(c.isdigit() for c in w) or "#" in w:continue
  kept.append(w.lower())
  if len(kept)==3:break
 return " ".join(kept)
def rent_pick(data,t):
 d=pd(t["date"]);us=[u for u in data["units"] if active(u,d.year,d.month)];text=t.get("desc") or ""
 names=[u for u in us if hit_name(text,u)]
 if len(names)==1:
  u=names[0];return u,("high" if M(t["amount"])==M(u["rent"]) else "medium"),[]
 if len(names)>1:return None,None,names
 memos=[u for u in us if hit_memo(text,u.get("label"))]
 if len(memos)==1:return memos[0],"medium",[]
 if len(memos)>1:return None,None,memos
 amts=[u for u in us if M(u["rent"])==M(t["amount"])]
 if len(amts)==1:return amts[0],"low",[]
 return None,None,amts
def setrent(data,t,u,conf,per=None):
 per=per or period_for(data,t,u)
 t["kind"],t["unit"],t["period"],t["conf"],t["property"],t["category"]="rent",u["id"],per,conf,u["property"],None
 print(f'MATCHED {t["id"]} {t["date"]} {t["amount"]} -> {u["id"]} ({u["tenant"]}) for {per} [{conf}]')
def needs(t):
 if not t.get("kind") and M(t["amount"])>0:return True
 if t.get("kind")=="expense" and(not t.get("category") or(t.get("category")!="personal" and not t.get("property"))):return True
 return False
def ntext(t):
 c,p=not t.get("category"),t.get("category")!="personal" and not t.get("property")
 return "category|property" if c and p else "category" if c else "property"
def cids(data,us):
 pm={p["id"]:p["name"].lower() for p in data["properties"]}
 us=sorted(us,key=lambda u:(pm.get(u["property"],""),(u.get("label") or "").lower(),u["id"]))
 return " ".join(u["id"] for u in us) or "none"
def owes(data,t,u):
 return psum(data,u["id"],period_for(data,t,u),t.get("id"))<M(u["rent"])
def cands(data,t,us):
 op=[u for u in us if owes(data,t,u)]
 if not op or len(op)==len(us):return cids(data,us)
 return cids(data,op)+"; already paid in full: "+cids(data,[u for u in us if u not in op])
def qline(t):
 return f'{t["id"]} {t["date"]} {t["amount"]} "{t.get("desc") or ""}"'
def mark_exp(data,t):
 t["kind"]="expense";t["unit"]=t["period"]=t["conf"]=None;fill(data,t)
def report(lines):
 for line in lines:print(line)
 if lines:print(f"NEEDS OWNER: {len(lines)} item(s)")
 return 2 if lines else 0
def match_cmd(data):
 dirty=False;new=set()
 for t in sorted((t for t in data["txns"] if not t.get("kind")),key=lambda t:t["date"]):
  new.add(t["id"]);text=blob(t);amt=M(t["amount"])
  if any(r.get("category")=="ignore" for r in rhits(data,text)):
   t["unit"]=t["period"]=t["conf"]=None;t["kind"]="ignore";dirty=True;continue
  if amt>0 and se_cat(data,text):mark_exp(data,t);dirty=True;continue
  if amt>0:
   u,conf,_=rent_pick(data,t)
   if u:setrent(data,t,u,conf);dirty=True
   continue
  if amt<0 and is_ret(text):
   hits=[u for u in data["units"] if hit_name(t.get("desc") or "",u)]
   if len(hits)==1:setrent(data,t,hits[0],"high",t["date"][:7]);dirty=True;continue
  if amt<0:mark_exp(data,t);dirty=True
 lines=[]
 for t in sorted(data["txns"],key=lambda z:(z["date"],z["id"])):
  if not needs(t):continue
  if t.get("kind")=="expense":lines.append(f"NEEDS OWNER {qline(t)} (needs {ntext(t)})")
  else:
   _,_,cs=rent_pick(data,t);lines.append(f"NEEDS OWNER {qline(t)} candidates: {cands(data,t,cs)}")
 code=report(lines);grp={}
 for t in data["txns"]:
  if M(t["amount"])<0 and t.get("kind")=="expense":grp.setdefault((t["date"],t["amount"],norm(t.get("desc"))),[]).append(t)
 for k,ts in sorted(grp.items()):
  if len(ts)>1 and any(t["id"] in new for t in ts):print(f'NOTE possible double charge, confirm with owner (both kept): {" ".join(sorted(t["id"] for t in ts))} {k[0]} {k[1]} "{ts[0].get("desc") or ""}"')
 return dirty,code
def pend(v):
 if isinstance(v,bool) or v is None:return bool(v)
 return str(v).strip().lower() in("1","true","yes","y","t")
def map_header(cells):
 hs=[c.strip().lower() for c in cells];di=de=am=db=cr=None
 for i,h in enumerate(hs):
  if di is None and h in DN:di=i
  elif de is None and h in EN:de=i
  elif am is None and h=="amount":am=i
  elif db is None and h in BN:db=i
  elif cr is None and h in CN:cr=i
 if di is None or de is None or(am is None and db is None and cr is None):return
 return di,de,am,db,cr
def cell(row,i):
 return row[i].strip() if i is not None and i<len(row) else ""
def optm(s):
 s=(s or "").strip()
 if not s:return
 try:return M(s)
 except Exception:return "bad"
def cdesc(name,description):
 name,description=(name or "").strip(),(description or "").strip()
 return (name+" "+description) if name and description else name or description
def from_obj(o):
 if not isinstance(o,dict):return
 g=o.get
 return {"src":str(g("id") or ""),"date":str(g("date") or ""),"amount":g("amount"),"desc":cdesc(str(g("name") or ""),str(g("description") or "")),"merchant":str(g("merchant_name") or g("merchant") or ""),"account":str(g("account_id") or ""),"pending":g("pending")}
def finance_rows(head,rows):
 out=[];hl=[c.strip().lower() for c in head]
 for r in rows:
  if not any(c.strip() for c in r):continue
  d={hl[i]:(r[i] if i<len(r) else "") for i in range(len(hl))};g=d.get
  out.append({"src":(g("id") or "").strip(),"date":g("date") or "","amount":g("amount"),"desc":cdesc(g("name"),g("description")),"merchant":(g("merchant_name") or "").strip(),"account":(g("account_id") or "").strip(),"pending":g("pending")})
 return out
def bank_rows(rows,mp):
 di,de,am,db,cr=mp;out=[]
 for r in rows:
  if not r or not any((c or "").strip() for c in r):continue
  ds=cell(r,di)
  if not pd(ds):continue
  if am is not None:
   amt=optm(cell(r,am))
   if amt is None or amt=="bad":continue
  else:
   dv,cv=optm(cell(r,db)),optm(cell(r,cr))
   if dv=="bad" or cv=="bad" or(dv is None and cv is None):continue
   amt=M((abs(cv) if cv is not None else D(0))-(abs(dv) if dv is not None else D(0)))
  out.append({"src":"","date":ds,"amount":amt,"desc":cell(r,de),"merchant":"","account":"","pending":False})
 return out
def parse_csv(text):
 if text.startswith("\ufeff"):text=text.lstrip("\ufeff")
 rows=list(csv.reader(io.StringIO(text)))
 i=0
 while i<len(rows) and not any(c.strip() for c in rows[i]):i+=1
 if i>=len(rows):raise ValueError("fmt")
 head=[c.strip() for c in rows[i]]
 if [c.lower() for c in head]==FIN:return finance_rows(head,rows[i+1:])
 for j in range(i,min(len(rows),i+25)):
  mp=map_header(rows[j])
  if mp:return bank_rows(rows[j+1:],mp)
 raise ValueError("fmt")
def parse_any(text):
 s=text.lstrip("\ufeff").lstrip()
 if s[:1] in "{[":
  obj=json.loads(text,parse_float=str,parse_int=str)
  if isinstance(obj,list):return [x for x in(from_obj(o) for o in obj) if x]
  if isinstance(obj,dict):
   if isinstance(obj.get("transactions"),list):return [x for x in(from_obj(o) for o in obj["transactions"]) if x]
   if isinstance(obj.get("csv"),str):return parse_csv(obj["csv"])
  raise ValueError("fmt")
 return parse_csv(text)
def do_import(data,recs,acct):
 have={t["key"] for t in data["txns"]};ids={t["id"] for t in data["txns"]};seen={};n=d=p=0
 for rec in recs:
  if not rec:continue
  if pend(rec.get("pending")):p+=1;continue
  dt=pd(str(rec.get("date") or ""))
  if not dt:continue
  try:amt=M(rec.get("amount"))
  except Exception:continue
  desc=re.sub(r"\s+"," ",str(rec.get("desc") or "").replace("\x00"," ")).strip()
  mer=(rec.get("merchant") or "").strip();src=(rec.get("src") or "").strip()
  if src:key="id:"+src
  else:
   base="k:%s|%s|%s"%(dt.isoformat(),ms(amt),norm(desc));seen[base]=seen.get(base,0)+1;k=seen[base]
   key=base if k==1 else "%s#%d"%(base,k)
  if key in have:d+=1;continue
  h=hashlib.sha1(key.encode()).hexdigest();i=8;tid="t"+h[:8]
  while tid in ids:
   i+=1;tid="t"+(h[:i] if i<=40 else h+str(i))
  ids.add(tid);have.add(key);n+=1
  data["txns"].append(dict(id=tid,key=key,date=dt.isoformat(),amount=ms(amt),desc=desc,merchant=mer,account=acct or rec.get("account") or "",kind=None,unit=None,period=None,conf=None,category=None,property=None,receipt=None,note=None))
 print(f"IMPORTED {n} new, {d} duplicate, {p} pending skipped")
def remember(data,pat,cat,prop):
 pat=(pat or "").strip()
 if not pat:return
 for r in data["rules"]:
  if (r.get("pattern") or "").lower()==pat.lower():
   r["pattern"],r["category"],r["property"]=pat,cat,prop;return
 data["rules"].append({"pattern":pat,"category":cat,"property":prop})
def mon(a,td):
 m=getattr(a,"month",None) or ym(td)
 return m if okm(m) else None
def mkdir(path):
 os.makedirs(os.path.dirname(os.path.abspath(path)) or ".",exist_ok=True)
def write_csv(path,header,rows):
 mkdir(path)
 with open(path,"w",newline="",encoding="utf-8") as f:
  w=csv.writer(f,lineterminator="\n");w.writerow(header)
  for r in rows:w.writerow(r)
 print("CSV "+str(path))
def sched(data,year,only):
 props=[only] if only else sorted(data["properties"],key=by_name)
 bag=lambda:{c:D(0) for c in LN}
 rents={p["id"]:D(0) for p in props};ex={p["id"]:bag() for p in props}
 rents["UNASSIGNED"]=D(0);ex["UNASSIGNED"]=bag()
 for t in data["txns"]:
  if not str(t.get("date") or "").startswith(year):continue
  kind,cat=t.get("kind"),t.get("category");pid=t.get("property") or "UNASSIGNED"
  if kind=="rent" and t.get("unit"):
   u=next((x for x in data["units"] if x["id"]==t["unit"]),None)
   if u:pid=u["property"]
  if only and pid!=only["id"]:continue
  amt=M(t["amount"])
  if kind=="rent":rents[pid]=rents.get(pid,D(0))+amt
  elif kind=="expense" and cat in LN:
   ex.setdefault(pid,bag());ex[pid][cat]=ex[pid].get(cat,D(0))+amt
 order=[p["id"] for p in props]
 if not only and(any(ex.get("UNASSIGNED",{}).values()) or rents.get("UNASSIGNED")):order.append("UNASSIGNED")
 blocks=[]
 for pid in order:
  ov=((data.get("overrides") or {}).get(pid) or {}).get(year) or {}
  cats=[]
  for cat,line in sorted(LN.items(),key=lambda kv:kv[1]):
   raw=-(ex.get(pid) or {}).get(cat,D(0))
   if cat in ov:amt,ent=M(ov[cat]),True
   else:amt,ent=M(raw),False
   cats.append((cat,line,amt,ent))
  rent=M(rents.get(pid,D(0)));tot=sum((a for c,l,a,e in cats if c!="depreciation"),D(0))
  blocks.append((pid,pname(data,pid) if pid!="UNASSIGNED" else "UNASSIGNED",rent,cats,M(tot),M(rent-tot)))
 return blocks
def ics_esc(s):
 return str(s).replace("\\","\\\\").replace(";","\\;").replace(",","\\,").replace("\r\n","\\n").replace("\n","\\n")
def fold(s):
 b=s.encode();parts=[];i=0
 while i<len(b):
  room=75 if not parts else 74;j=min(len(b),i+room)
  while j>i:
   try:ch=b[i:j].decode();break
   except UnicodeDecodeError:j-=1
  else:j=min(len(b),i+1);ch=b[i:j].decode("utf-8","replace")
  parts.append(ch if not parts else " "+ch);i=j
 return "\r\n".join(parts)
def ldates(data,u):
 le=pd(u.get("lease_end") or "")
 if not le:return
 s=data["settings"];nd=u.get("notice_days");sm=int(s["notice_days_small"] if nd is None else nd)
 return le,le-timedelta(days=int(s["renewal_days"])),le-timedelta(days=sm),le-timedelta(days=int(s["notice_days_large"]))
def build_parser():
 p=argparse.ArgumentParser(prog="landlord")
 p.add_argument("--ledger");p.add_argument("--today")
 sp=p.add_subparsers(dest="cmd",required=True);subs={}
 tail=" --lease-start --lease-end --deposit --alias+ --notice-days"
 spec=("init --start --owner\nconfig/set key value\nconfig/show\nproperty/add name --address=\nproperty/list\n"
  "unit/add --property! --unit>label! --tenant! --rent! --due-day=1 --grace=5"+tail+"\n"
  "unit/edit unit_ref --property --unit>label --tenant --rent --due-day --grace"+tail+"\n"
  "unit/list\nimport file --account --include-pending*\nmatch\n"
  "assign txid unit_ref --period --as>as_kind=rent|rent,deposit\nunassign txid\nignore txid --remember*\n"
  "categorize --set>set_cat#2 --property>prop --remember*\nrule/add pattern category --property>prop\nrule/list\nrule/remove pattern\n"
  "attach txid link\ntxns --month --unmatched* --uncategorized*\nstatus --month\nlate --month\nrentroll --month --csv\n"
  "schedule-e --year! --property>prop --csv\noverride --property>prop! --year! --category! --amount --clear*\n"
  "leases --days=90\nics --days=365 --out!\ndraft/late unit_ref --month --late-fee\n"
  "draft/increase unit_ref --new-rent! --effective!")
 rx=re.compile(r"^(--[\w-]+)(?:>([A-Za-z_]+))?(?:=([^|#+*!]*))?(?:\|([^#+*!]+))?(?:#(\d+))?([+*!])?$")
 for line in spec.splitlines():
  cmd,*args=line.split()
  if "/" in cmd:
   c,w=cmd.split("/",1)
   if c not in subs:subs[c]=sp.add_parser(c).add_subparsers(dest="which",required=True)
   x=subs[c].add_parser(w)
  else:x=sp.add_parser(cmd)
  for a in args:
   m=rx.match(a)
   if not m:x.add_argument(a);continue
   name,dest,default,choices,nargs,flag=m.groups();kw={}
   if dest:kw["dest"]=dest
   if choices:kw["choices"]=tuple(choices.split(","))
   if nargs:kw["nargs"]=int(nargs)
   if flag=="*":kw["action"]="store_true"
   elif flag=="+":kw["action"]="append"
   elif flag=="!":kw["required"]=True
   if default is not None:kw["default"]=default
   x.add_argument(name,**kw)
 return p
def gint(s,lo=None,hi=None):
 if s is None or not re.fullmatch(r"\d+",str(s)):return
 n=int(s)
 if lo is not None and n<lo or hi is not None and n>hi:return
 return n
def money(v):
 try:return M(v)
 except Exception:er("bad amount")
def need_prop(data,ref):
 p=prop_of(data,ref)
 if not p:er("unknown property: "+ref)
 return p
def need_unit(data,ref):
 u=unit_of(data,ref)
 if not u:er("unknown unit: "+ref)
 return u
def need_txn(data,i):
 t=txn_of(data,i)
 if not t:er("unknown txn: "+i)
 return t
def opt_prop(data,ref):
 if ref:return need_prop(data,ref)["id"]
def need_cat(cat,allowed):
 cat=cat.strip().lower()
 if cat not in allowed:er("unknown category: "+cat)
 return cat
def need_year(y):
 if not re.fullmatch(r"\d{4}",y or ""):er("bad year")
def ok_save(path,data,msg="OK"):
 save(path,data);print(msg);return 0
def owner_hi(data,u):
 own=(data["settings"].get("owner_name") or "").strip() or "[Your name]"
 return own,((u.get("tenant") or "there").split() or ["there"])[0]
def draft_lines(first,own,body):
 return ["DRAFT - review before sending. Not sent.","","Hi "+first+",",""]+list(body)+["","Please let me know if you have questions.","","Thank you,",own]
def by_name(p):
 return (p["name"].lower(),p["id"])
def put_unit(u,a,create):
 if create or a.tenant is not None:
  if not(a.tenant or "").strip():er("tenant required")
  u["tenant"]=a.tenant.strip()
 if create or a.rent is not None:
  r=money(a.rent)
  if r<=0:er("rent must be > 0")
  u["rent"]=ms(r)
 if create or a.due_day is not None:
  n=gint(a.due_day,1,31)
  if n is None:er("due day must be 1..31")
  u["due_day"]=n
 if create or a.grace is not None:
  n=gint(a.grace,0)
  if n is None:er("bad grace")
  u["grace"]=n
 for fld in("lease_start","lease_end"):
  val=getattr(a,fld)
  if val is None and not create:continue
  if not val:u[fld]=None;continue
  d=pd(val)
  if not d:er("bad date")
  u[fld]=d.isoformat()
 if create or a.deposit is not None:
  if a.deposit is None:u["deposit"]="0.00"
  else:
   dp=money(a.deposit)
   if dp<0:er("bad deposit")
   u["deposit"]=ms(dp)
 if a.alias is not None:u["aliases"]=list(a.alias)
 if create or a.notice_days is not None:
  if a.notice_days is None:u["notice_days"]=None
  else:
   n=gint(a.notice_days,0)
   if n is None:er("bad notice days")
   u["notice_days"]=n
def run(a):
 td=pd(a.today) if a.today else date.today()
 if a.today and not td:er("bad date")
 eu=os.path.expanduser
 path=eu(a.ledger) if a.ledger else eu(os.environ.get("LANDLORD_LEDGER") or os.path.join(eu("~"),"landlord-ledger","ledger.json"))
 cmd,which=a.cmd,getattr(a,"which",None)
 if cmd=="init":
  if a.start and not okm(a.start):er("bad start month")
  if os.path.exists(path):
   data=load(path)
   if a.owner is not None:data["settings"]["owner_name"]=a.owner
   if a.start:data["settings"]["start_month"]=a.start
   if a.owner is not None or a.start:save(path,data)
   print(f"EXISTS {path}");return 0
  return ok_save(path,fresh(td,a.start,a.owner or ""),f"OK {path}")
 data=need(path)
 if data is None:return 1
 if cmd=="config" and which=="show":
  for k in SK:print(f"{k}: {data['settings'].get(k)}")
  print("ledger: "+path);return 0
 if cmd=="config" and which=="set":
  k,v=a.key,a.value
  if k not in SK:er("unknown setting: "+k)
  if k.endswith("_days"):
   n=gint(v,0)
   if n is None:er("bad config value")
   data["settings"][k]=n
  elif k=="start_month":
   if not okm(v):er("bad config value")
   data["settings"][k]=v
  elif k=="large_increase_pct":
   try:d=D(v)
   except Exception:er("bad config value")
   s=format(d,"f")
   if "." in s:s=s.rstrip("0").rstrip(".") or "0"
   data["settings"][k]=s
  else:data["settings"][k]=v
  return ok_save(path,data)
 if cmd=="property" and which=="add":
  sid=sg(a.name)
  if not sid:er("bad name")
  if any(p["id"]==sid or p["name"].lower()==a.name.lower() for p in data["properties"]):er("duplicate property")
  data["properties"].append({"id":sid,"name":a.name,"address":a.address or ""})
  return ok_save(path,data,"OK "+sid)
 if cmd=="property" and which=="list":
  rows=[["id","name","address"]]
  for p in sorted(data["properties"],key=by_name):rows.append([p["id"],p["name"],p.get("address") or ""])
  show(rows);return 0
 if cmd=="unit" and which=="add":
  p=need_prop(data,a.property);lab=(a.label or "").strip();sl=sg(lab)
  if not sl:er("bad unit label")
  uid=p["id"]+"-"+sl
  if any(u["id"]==uid for u in data["units"]):er("duplicate unit")
  u={"id":uid,"property":p["id"],"label":lab,"aliases":[]}
  put_unit(u,a,True);data["units"].append(u)
  return ok_save(path,data,"OK "+uid)
 if cmd=="unit" and which=="edit":
  u=need_unit(data,a.unit_ref)
  if a.property:u["property"]=need_prop(data,a.property)["id"]
  if a.label:
   if not sg(a.label):er("bad unit label")
   u["label"]=a.label.strip()
  put_unit(u,a,False)
  return ok_save(path,data,"OK "+u["id"])
 if cmd=="unit" and which=="list":
  rows=[["id","property","label","tenant","rent","due","grace","lease_start","lease_end","deposit","aliases"]]
  for u in punits(data):rows.append([u["id"],u["property"],u["label"],u["tenant"],u["rent"],u["due_day"],u["grace"],u.get("lease_start") or "",u.get("lease_end") or "",u.get("deposit") or "",",".join(u.get("aliases") or [])])
  show(rows);return 0
 if cmd=="import":
  if not os.path.exists(a.file):er("file not found")
  try:text=open(a.file,encoding="utf-8-sig").read()
  except Exception:er("cannot read file")
  try:recs=parse_any(text)
  except Exception:er("unrecognized format")
  if a.include_pending:
   for r in recs:
    if isinstance(r,dict):r["pending"]=False
  do_import(data,recs,a.account);save(path,data);print("Ledger: "+path);return 0
 if cmd=="match":
  dirty,code=match_cmd(data)
  if dirty:save(path,data)
  return code
 if cmd=="assign":
  t,u=need_txn(data,a.txid),need_unit(data,a.unit_ref)
  if a.period:
   if not okm(a.period):er("bad period")
   per=a.period
  else:per=period_for(data,t,u) if a.as_kind=="rent" else t["date"][:7]
  t["kind"],t["unit"],t["period"],t["conf"],t["property"]=a.as_kind,u["id"],per,"manual",u["property"]
  if a.as_kind=="rent":t["category"]=None
  return ok_save(path,data,"OK "+t["id"])
 if cmd=="unassign":
  t=need_txn(data,a.txid);t["kind"]=t["unit"]=t["period"]=t["conf"]=None
  return ok_save(path,data)
 if cmd=="ignore":
  t=need_txn(data,a.txid);t["kind"],t["unit"],t["period"],t["conf"]="ignore",None,None,None
  if a.remember:remember(data,mkey(t),"ignore",None)
  return ok_save(path,data)
 if cmd=="categorize" and a.set_cat:
  tid,cat=a.set_cat;cat=need_cat(cat,CATS);t=need_txn(data,tid);prop=opt_prop(data,a.prop)
  t["kind"],t["category"],t["unit"],t["period"],t["conf"]="expense",cat,None,None,None
  if prop:t["property"]=prop
  elif not t.get("property"):fill(data,t);t["category"]=cat
  if a.remember:remember(data,mkey(t),cat,t.get("property"))
  save(path,data)
  if cat!="personal" and not t.get("property"):return report([f"NEEDS OWNER {qline(t)} (needs property)"])
  print("OK");return 0
 if cmd=="categorize":
  for t in data["txns"]:
   if t.get("kind")=="expense" and needs(t):fill(data,t)
  save(path,data)
  probs=sorted((t for t in data["txns"] if t.get("kind")=="expense" and needs(t)),key=lambda t:(t["date"],t["id"]))
  return report([f"NEEDS OWNER {qline(t)} (needs {ntext(t)})" for t in probs])
 if cmd=="rule" and which=="add":
  cat=need_cat(a.category,RULES);pat=(a.pattern or "").strip()
  if not pat:er("bad pattern")
  remember(data,pat,cat,opt_prop(data,a.prop));return ok_save(path,data)
 if cmd=="rule" and which=="list":
  rows=[["pattern","category","property"]]
  for r in sorted(data["rules"],key=lambda r:(r.get("pattern") or "").lower()):rows.append([r.get("pattern"),r.get("category"),r.get("property") or ""])
  show(rows);return 0
 if cmd=="rule" and which=="remove":
  pat=(a.pattern or "").lower();n0=len(data["rules"])
  data["rules"]=[r for r in data["rules"] if (r.get("pattern") or "").lower()!=pat]
  if len(data["rules"])==n0:er("no such rule")
  return ok_save(path,data)
 if cmd=="attach":
  t=need_txn(data,a.txid);t["receipt"]=a.link
  return ok_save(path,data)
 if cmd=="txns":
  my=a.month
  if my and not okm(my):er("bad month")
  rows=[["id","date","amount","kind","unit_or_category","property","desc"]]
  for t in sorted(data["txns"],key=lambda t:(t["date"],t["id"])):
   if my and not t["date"].startswith(my):continue
   if a.unmatched and t.get("kind"):continue
   if a.uncategorized and not(t.get("kind")=="expense" and needs(t)):continue
   slot=t.get("unit") if t.get("kind") in("rent","deposit") else(t.get("category") or "")
   rows.append([t["id"],t["date"],t["amount"],t.get("kind") or "",slot or "",t.get("property") or "",t.get("desc") or ""])
  show(rows);return 0
 if cmd in("status","late","rentroll"):
  my=mon(a,td)
  if not my:er("bad month")
  y,m=int(my[:4]),int(my[5:7]);seq=[(u,ustat(data,u,my,td)) for u in punits(data) if active(u,y,m)]
  if cmd=="status":
   rows=[["unit","tenant","rent","due","paid","balance","status","last"]];tr=tp=tb=D(0)
   for u,s in seq:
    due,cut,rent,paid,bal,st,last=s;tr+=rent;tp+=paid;tb+=bal
    if st in("LATE","SHORT"):st+=f" ({(td-cut).days} days past grace period)"
    rows.append([u["id"],u["tenant"],ms(rent),due.isoformat(),ms(paid),ms(bal),st,last])
   show(rows);print(f"TOTAL rent {ms(tr)} paid {ms(tp)} balance {ms(tb)}")
   if any("past grace" in r[6] for r in rows[1:]):print(GN)
   print("Ledger: "+path);return 0
  if cmd=="late":
   rows=[]
   for u,s in seq:
    due,cut,rent,paid,bal,st,last=s
    if st in("LATE","SHORT"):rows.append([u["id"],u["tenant"],ms(rent),due.isoformat(),ms(paid),ms(bal),st,(td-cut).days])
   if rows:show([["unit","tenant","rent","due","paid","balance","status","days_past_grace"]]+rows);print(GN);print("Ledger: "+path)
   return 0
  rows=[["property","unit","tenant","rent","due_date","paid","balance","status","last_paid","lease_start","lease_end","deposit"]]
  body=[];sc=col=ou=D(0)
  for u,s in seq:
   due,cut,rent,paid,bal,st,last=s;sc+=rent;col+=paid;ou+=bal if bal>0 else D(0)
   body.append([pname(data,u["property"]),u["label"],u["tenant"],ms(rent),due.isoformat(),ms(paid),ms(bal),st,last,u.get("lease_start") or "",u.get("lease_end") or "month-to-month",u.get("deposit") or "0.00"])
  show(rows+body);print(f"TOTAL scheduled {ms(sc)} collected {ms(col)} outstanding {ms(ou)}")
  if a.csv:write_csv(a.csv,rows[0],body)
  return 0
 if cmd=="schedule-e":
  need_year(a.year);only=need_prop(data,a.prop) if a.prop else None
  csv_rows=[]
  for pid,title,rent,cats,tot,net in sched(data,a.year,only):
   def add(line,cat,text,amt):
    print(text);csv_rows.append([title,str(line),cat,amt])
   print(f"PROPERTY {title}");add(3,"rents_received",f"rents_received 3 {ms(rent)}",ms(rent))
   for cat,line,amt,ent in cats:
    if amt==0 and not ent:continue
    add(line,cat,f"{cat} {line} {ms(amt)}"+(" (entered)" if ent else ""),ms(amt))
   add("","total_expenses",f"total_expenses {ms(tot)}",ms(tot));add("","net",f"net {ms(net)}",ms(net));print()
  print("Mortgage payments include principal — replace with the lender's year-end interest figure via override.")
  print("Depreciation is not calculated (line 18: ask a tax pro).")
  print("Security deposits are not income unless kept.")
  print("Educational bookkeeping summary, not tax advice.")
  if a.csv:write_csv(a.csv,["property","line","category","amount"],csv_rows)
  return 0
 if cmd=="override":
  p=need_prop(data,a.prop);need_year(a.year);cat=need_cat(a.category,LN)
  if a.clear and a.amount is not None:er("use amount or clear")
  ov=data["overrides"].setdefault(p["id"],{}).setdefault(a.year,{})
  if a.clear:
   ov.pop(cat,None)
   if not ov:data["overrides"][p["id"]].pop(a.year,None)
   if not data["overrides"][p["id"]]:data["overrides"].pop(p["id"],None)
  elif a.amount is None:er("amount required")
  else:ov[cat]=ms(money(a.amount))
  return ok_save(path,data)
 if cmd=="leases":
  n=gint(a.days,0)
  if n is None:er("bad days")
  lo,hi=td-timedelta(days=30),td+timedelta(days=n);any_end=False
  def left(d):
   return f"{d.isoformat()} ({(d-td).days} days)"+(" (passed)" if d<td else "")
  for u in punits(data):
   ds=ldates(data,u)
   if not ds:continue
   le,ren,sm,lg=ds
   if not(lo<=le<=hi):continue
   any_end=True
   print(f"{pname(data,u['property'])}/{u['label']} {u['tenant']}")
   print("  lease end: "+left(le));print("  renewal decision: "+left(ren))
   print("  notice small: "+left(sm));print("  notice large: "+left(lg))
  if not any_end:print(f"No lease dates in the next {n} days.")
  m2=[u for u in punits(data) if not u.get("lease_end")]
  if m2:
   print("month-to-month:")
   for u in m2:print(f"  {pname(data,u['property'])}/{u['label']} {u['tenant']}")
  print("Notice periods are settings you control; rules vary by location — check yours.")
  return 0
 if cmd=="ics":
  n=gint(a.days,0)
  if n is None:er("bad days")
  hi=td+timedelta(days=n);ev=[]
  for u in punits(data):
   ds=ldates(data,u)
   if not ds:continue
   le,ren,sm,lg=ds
   if not(td<=le<=hi):continue
   who=f"{pname(data,u['property'])}/{u['label']} ({u['tenant']})"
   ev+=[(le,"lease-end",u["id"],f"Lease end {who}"),(ren,"renewal",u["id"],f"Renewal decision {who}"),(sm,"notice-small",u["id"],f"Notice by (small) {who}"),(lg,"notice-large",u["id"],f"Notice by (large) {who}")]
  ev.sort(key=lambda e:(e[0].isoformat(),e[2],e[1]))
  lines=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Landlord Ledger//EN","CALSCALE:GREGORIAN"]
  stamp=td.strftime("%Y%m%d")+"T000000Z"
  for dt,kind,uid,summary in ev:
   lines+=["BEGIN:VEVENT",f"UID:{uid}-{kind}-{dt.isoformat()}@landlord-ledger","DTSTAMP:"+stamp,f"DTSTART;VALUE=DATE:{dt.strftime('%Y%m%d')}",f"DTEND;VALUE=DATE:{(dt+timedelta(1)).strftime('%Y%m%d')}","SUMMARY:"+ics_esc(summary),"BEGIN:VALARM","ACTION:DISPLAY","TRIGGER:-P7D","DESCRIPTION:"+ics_esc(summary),"END:VALARM","END:VEVENT"]
  lines.append("END:VCALENDAR")
  body="\r\n".join(fold(x) for x in lines)+"\r\n"
  mkdir(a.out);open(a.out,"wb").write(body.encode())
  print(f"ICS {a.out} {len(ev)} events");return 0
 if cmd=="draft" and which=="late":
  u=need_unit(data,a.unit_ref);my=mon(a,td)
  if not my:er("bad month")
  due,cut,rent,paid,bal,st,last=ustat(data,u,my,td);owed=bal if bal>0 else D(0)
  own,first=owner_hi(data,u);month=date(int(my[:4]),int(my[5:7]),1).strftime("%B %Y")
  body=[f"This is a reminder about {month} rent. The amount still owed is {usd(owed)}. It was due on {longd(due)}. If you've already sent it, thank you and please ignore this note."]
  if a.late_fee is not None:body.append(f"A late fee of {usd(money(a.late_fee))} is also due.")
  print("\n".join(draft_lines(first,own,body)));return 0
 if cmd=="draft" and which=="increase":
  u=need_unit(data,a.unit_ref);new=money(a.new_rent)
  if new<=0:er("rent must be > 0")
  eff=pd(a.effective)
  if not eff:er("bad date")
  cur=M(u["rent"]);raw=(new-cur)/cur*D(100);pct=raw.quantize(D("0.1"),rounding=H)
  s=data["settings"];thr=D(str(s["large_increase_pct"]));nd=u.get("notice_days")
  req=int(s["notice_days_large"] if raw>thr else s["notice_days_small"] if nd is None else nd)
  own,first=owner_hi(data,u)
  print("\n".join(draft_lines(first,own,[f"Your current rent is {usd(cur)}. The new rent will be {usd(new)}, a change of {format(pct,'f')}%, effective {longd(eff)}."])))
  if (eff-td).days<req:
   print(f"WARNING: effective date is sooner than your configured {req}-day notice period",file=sys.stderr);return 2
  return 0
 er("unknown command")
def main(argv=None) -> int:
 try:a=build_parser().parse_args(argv)
 except SystemExit as e:
  return 0 if e.code in(0,None) else 1
 try:return run(a) or 0
 except E:return 1
if __name__=="__main__":sys.exit(main())
```
