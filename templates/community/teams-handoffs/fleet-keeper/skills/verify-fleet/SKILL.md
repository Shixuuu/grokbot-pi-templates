---
name: verify-fleet
description: "Use this to audit the Grok Bot fleet on this box read-only and list fixes split by who applies them: for a fleet inventory, a hygiene or overlap check, a weekly upkeep run, or before renaming, merging or retiring bots or channels."
---

# verify-fleet

Audit every bot and channel under /home/box/agent-data/agents. Never write there. Never message another bot.

## Setup
The working folder is `$FLEET_KEEPER_DIR`. It defaults to /workspace/fleet-keeper. If `fleet.py` is missing there, write the python block below to it byte for byte. This line does it when run next to this file.

```sh
mkdir -p "${FLEET_KEEPER_DIR:=/workspace/fleet-keeper}" && awk '/^```python$/{f=1;next}/^```$/{f=0}f' SKILL.md > "$FLEET_KEEPER_DIR/fleet.py"
```

Optional env vars are FLEET_SELF_ID (your agent id) and FLEET_STALE_DAYS (default 30).

## Flow
Run each step in the working folder. Stop and report if one fails.
1. Launch. `python3 fleet.py launch` prints the run id. It copies every store.db to /tmp and fingerprints the fleet config.
2. Doctor. `python3 fleet.py doctor` must print all checks true.
3. Drive. `python3 fleet.py drive` prints summary JSON and the markdown report.
4. Evidence. The run folder is `evidence/<run>/`. It holds launch, fp-pre, doctor, report.json, report.md and readonly.json.
5. Cleanup. `python3 fleet.py cleanup` removes only the /tmp scratch. Evidence stays. readonly.json must list no changed files.

## Features
| Feature | What it proves |
|---|---|
| roster | each agent with kind, section, last activity |
| sections | agents per sidebar section or name prefix |
| hygiene | duplicate names, case-only clashes, placeholder names, empty descriptions |
| stale | active, stale, stale-never-active (no activity record, created FLEET_STALE_DAYS or more days ago, never queued to retire) or unknown per agent |
| workspaces | workspace folders no agent claims |
| overlap | overlapping channels or bots, one keep, others merge or retire |

## Who applies a fix
Every fix carries `who`. The script refuses to finish if one lacks it.

| who | ops | meaning |
|---|---|---|
| bot_after_yes | edit-bot-profile on a solo bot (UpdateAgent), channel-members on a channel you belong to (UpdateChannel) | you apply it after the owner says yes |
| owner_by_hand | rename-channel, describe-channel, move-section, retire, merge | the owner does it in the app |

Show the owner both lists. Apply nothing before a clear yes.

```python
#!/usr/bin/env python3
# verify-fleet. Read-only fleet audit. fleet.py launch|doctor|drive|cleanup [RUN]
import collections as C,glob,hashlib,json,math,os,re,shutil,sqlite3,sys,time
E=os.environ.get;A=E("FLEET_AGENTS","/home/box/agent-data/agents");D=E("FLEET_KEEPER_DIR","/workspace/fleet-keeper")
W=E("FLEET_WORKSPACE","/workspace");ME=E("FLEET_SELF_ID","");DAYS=int(E("FLEET_STALE_DAYS","30"))
PH=re.compile(r"^(new (bot|agent)|untitled.*|test( bot)?|agent|bot|my bot)$",re.I);ROLE={"hq","desk","lead","manager","eng"}
def J(p,d=None):
 try:return json.load(open(p))
 except Exception:return d
def ids():return sorted(n for n in os.listdir(A) if re.match(r"^[0-9a-f-]{36}$",n) and os.path.isdir(f"{A}/{n}"))
def fp():return{p:hashlib.sha256(open(p,"rb").read()).hexdigest() for p in sorted(sum((glob.glob(f"{A}/{g}") for g in("../settings.json","*/profile.json","*/settings.json","*/group.json","*/automations/*/automation.json")),[]))}
def who(op,kind,member=False):# the capability split, in one place
 return "bot_after_yes" if (op,kind)==("edit-bot-profile","bot") or ((op,kind)==("channel-members","channel") and member) else "owner_by_hand"
def store(p):
 o={"act":[]}
 if not os.path.exists(p):return o
 c=sqlite3.connect(f"file:{p}?mode=ro",uri=True)
 try:
  kv=dict(c.execute("select key,value from kv"));m=kv.get("metadata","{}")
  try:m=bytes.fromhex(m).decode()
  except ValueError:pass
  o["created"]=json.loads(m).get("createdAt")
  o["act"]=[json.loads(kv[k]).get(f) for k,f in(("unreadState","lastActivityAt"),("lastTurnSettlement","settledAtMs")) if k in kv]
  o["act"].append(c.execute("select max(json_extract(entry,'$.timestampMs')) from transcript_entries").fetchone()[0])
 except Exception:pass
 c.close();return o
def load(S):
 sec={a:s["name"] for s in(J(f"{A}/../settings.json",{}) or {}).get("sidebarSections",[]) for a in s.get("agentIds",[])};out=[]
 for i in ids():
  f=f"{A}/{i}";st=store(f"{S}/{i}/store.db");p=J(f+"/profile.json",{}) or {};g=J(f+"/group.json")
  act=[int(x) for x in st["act"] if x]+[a["lastRunAt"] for a in map(J,glob.glob(f+"/automations/*/automation.json")) if a and a.get("lastRunAt")]
  out.append({"id":i,"name":p.get("name",""),"desc":(p.get("description") or "").strip(),"kind":"channel" if g else "bot",
   "members":(g or {}).get("memberIds",[]),"section":sec.get(i),"last":max(act) if act else None,"created":st.get("created")})
 return out,bool(sec)
def drive(S):
 ag,has=load(S);now=time.time()*1e3;fixes=[];gone=set();seen=set()
 ref=C.Counter(b["id"] for a in ag for b in ag if a is not b and b["name"] and b["name"] in a["desc"])
 key=lambda a:(bool(a["last"]),a["last"] or 0,ref[a["id"]],len(a["desc"]),bool(a["section"]))
 def fx(op,a,why,rank,member=False):
  if (op,a["id"]) not in seen:seen.add((op,a["id"]));fixes.append({"rank":rank,"op":op,"who":who(op,a["kind"],member),"id":a["id"],"name":a["name"],"kind":a["kind"],"why":why})
 fold=C.defaultdict(list)
 for a in ag:fold[a["name"].strip().casefold()].append(a)
 for g in fold.values():
  for k in("bot","channel"):
   s=sorted((a for a in g if a["kind"]==k),key=key,reverse=True)
   for a in s[1:]:fx("retire",a,f"duplicate name, keep {s[0]['id']}",1);gone.add(a["id"])
  if len({a["kind"] for a in g})==2:[fx("rename-channel",a,"name clashes with a bot",3) for a in g if a["kind"]=="channel"]
 ch=[a for a in ag if a["kind"]=="channel"]
 for x in ch:
  for y in ch:
   if x["id"]<y["id"] and not {x["id"],y["id"]}&gone:
    s1,s2=set(x["members"]),set(y["members"]);j=len(s1&s2)/(len(s1|s2) or 1)
    if j>=.6 or(j>=.3 and x["name"].split()[:1]==y["name"].split()[:1]):
     k,r=sorted((x,y),key=key,reverse=True);gone.add(r["id"])
     fx("channel-members",k,f"add members of {r['name']} {r['id']}",2,ME in k["members"]);fx("merge",r,f"fold into {k['id']} (overlap {j:.2f})",2)
 bots=[a for a in ag if a["kind"]=="bot" and a["desc"]];tok=lambda a:re.findall(r"[a-z]{4,}",(a["name"]+" "+a["desc"]).lower())
 df=C.Counter(w for a in bots for w in set(tok(a)));V={}
 for a in bots:
  v={w:c*math.log(len(bots)/df[w]) for w,c in C.Counter(tok(a)).items()};n=math.sqrt(sum(x*x for x in v.values())) or 1;V[a["id"]]={w:x/n for w,x in v.items()}
 for x in bots:
  for y in bots:
   if x["id"]<y["id"] and not {x["id"],y["id"]}&gone and not any(n["name"].split()[-1] in m["desc"] for n,m in((x,y),(y,x))):
    s=sum(v*V[y["id"]].get(w,0) for w,v in V[x["id"]].items())
    if s>=.5:k,r=sorted((x,y),key=key,reverse=True);gone.add(r["id"]);fx("edit-bot-profile",k,f"absorb duties of {r['name']} (text overlap {s:.2f})",2);fx("merge",r,f"fold into {k['id']}",2)
 stale={}
 for a in ag:
  if a["id"] in gone or a["id"]==ME:continue
  if PH.match(a["name"].strip()):fx("retire",a,"placeholder name",1);continue
  if a["kind"]=="channel" and set(re.findall(r"\w+",a["name"].lower()))&ROLE:fx("rename-channel",a,"channel named like a bot",3)
  if not a["desc"]:fx("edit-bot-profile" if a["kind"]=="bot" else "describe-channel",a,"empty description",4)
  if has and not a["section"]:fx("move-section",a,"in no sidebar section",5)
  age=(now-(a["last"] or a["created"] or now))/864e5;stale[a["id"]]=st=("active" if age<DAYS else "stale") if a["last"] else "stale-never-active" if age>=DAYS else "unknown"
  if st=="stale":fx("retire",a,f"no activity for {age:.0f} days, retire or re-brief",6)
 wd=[d for d in os.listdir(W) if d[0]!="." and os.path.isdir(f"{W}/{d}") and f"{W}/{d}"!=D] if os.path.isdir(W) else []
 own={d:[a["id"] for a in ag if re.search(rf"{W}/{re.escape(d)}\b",a["desc"])] for d in wd}
 cc=C.defaultdict(set)
 for a in ag:cc[a["name"].strip().casefold()].add(a["name"])
 fixes.sort(key=lambda f:f["rank"]);assert all(f.get("who") in("bot_after_yes","owner_by_hand") for f in fixes),"fix without who"
 return{"agents":len(ag),"bots":len(ag)-len(ch),"channels":len(ch),"roster":[{k:a[k] for k in("id","name","kind","section","last")} for a in ag],
  "sections":dict(C.Counter((a["section"] if has else a["name"].split()[0] if a["name"] else "") or "(none)" for a in ag)),
  "hygiene":{"duplicates":[n for n,v in cc.items() if len(v)==1 and len(fold[n])>1],"case_only":[sorted(v) for v in cc.values() if len(v)>1],
   "placeholders":[a["name"] for a in ag if PH.match(a["name"].strip())],"empty_desc":[a["name"] for a in ag if not a["desc"]]},
  "stale":dict(C.Counter(stale.values())),"unowned_workspaces":[d for d,v in own.items() if not v],"fixes":fixes,"who":dict(C.Counter(f["who"] for f in fixes))}
def md(r):
 L=["# Fleet report"]+[f"{k} {v}" for k,v in list(r.items())+list(r["hygiene"].items()) if k not in("roster","fixes","hygiene")]
 for w,t in(("bot_after_yes","Bot can apply after your yes"),("owner_by_hand","You do by hand")):
  L+=["",f"## {t}"]+([f"- [{f['op']}] {f['name']} ({f['id']}, {f['kind']}): {f['why']}" for f in r["fixes"] if f["who"]==w] or ["- nothing"])
 return "\n".join(L)
cmd=sys.argv[1] if sys.argv[1:] else "drive";runs=sorted(glob.glob(f"{D}/evidence/*/launch.json"))
run=sys.argv[2] if sys.argv[2:] else time.strftime("%Y%m%d-%H%M%S") if cmd=="launch" else runs[-1].split("/")[-2] if runs else sys.exit("launch first")
V,S=f"{D}/evidence/{run}",f"/tmp/fleet-keeper-{run}";w=lambda n,o:json.dump(o,open(f"{V}/{n}","w"),indent=1)
if cmd=="launch":
 os.makedirs(V,exist_ok=True)
 for f in glob.glob(f"{A}/*/store.db*"):t=f"{S}/{f.split('/')[-2]}";os.makedirs(t,exist_ok=True);shutil.copy(f,t)
 w("fp-pre.json",fp());w("launch.json",{"run":run,"scratch":S});print(run)
elif cmd=="doctor":
 n=ids();ck={"agents":len(n),"profiles_parse":all(J(f"{A}/{i}/profile.json") is not None for i in n),
  "snapshots_ok":len(glob.glob(f"{S}/*/store.db"))==len(glob.glob(f"{A}/*/store.db")),"evidence":os.access(V,os.W_OK)}
 w("doctor.json",ck);print(json.dumps(ck));sys.exit(0 if all(ck.values()) else 1)
elif cmd=="drive":
 r=drive(S);w("report.json",r);m=md(r);open(f"{V}/report.md","w").write(m);print(json.dumps({k:r[k] for k in("agents","bots","channels","stale","who")}));print(m)
elif cmd=="cleanup":
 pre=J(f"{V}/fp-pre.json",{});post=fp();w("readonly.json",{"files":len(pre),"changed":[k for k in pre if pre[k]!=post.get(k)]})
 shutil.rmtree(S,ignore_errors=True);print(json.dumps({"evidence":V,"kept":sorted(os.listdir(V))}))
```
