---
name: grottle-core
description: "grottle-core"
---

# Grottle™ core (in-pack code) — v0.14.1
Use only via grottle-gauge (install/start); don't run or edit alone. The only code inside the bot: start.py (verify/fetch pinned files, start sandbox), sandbox_guard.py (no network, only rsvg-convert/fc-match run, writes only in the install folder; reads the shared work log), guarded_run.py (child entry).

<!-- start.py -->
```python
import hashlib,json,os,resource,shutil,subprocess,sys,urllib.parse,urllib.request
from pathlib import Path
G=Path(__file__).resolve().parent
V='0.14.1'
BASE=os.environ.get('GROTTLE_SITE')or f"https://grottle.app/v{V}/"
IDX=os.environ.get('GROTTLE_SKIN_INDEX')or'https://grottle.app/skins/skins.json'
W=os.environ.get('GROTTLE_WORKLOG')or'/home/box/agent-data/grottle/worklog'
PINS={(A+'/'if A else'')+C:D for(A,B)in json.loads((G/'pins.json').read_text()).items()for(C,D)in B.items()}
def get(u,cap):
	A=cap
	with urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':f"Grottle/{V} (+https://grottle.app)"}),timeout=20)as C:B=C.read(A+1)
	if len(B)>A:raise ValueError(f"over {A:,} bytes")
	return B
sha=lambda b:hashlib.sha256(b).hexdigest()
def text_mode(why):print('TEXT MODE:',why);print('TEXT MODE: no dash PNG until Grottle™ can verify its pinned code; answer in text (grottle-reading).');sys.exit(4)
def ensure():
	C=0
	for(A,D)in PINS.items():
		B=G/'app'/A
		if B.is_file()and sha(B.read_bytes())==D:continue
		if B.exists():print('CACHE MISMATCH',A,'(changed since it was verified): re-downloading')
		try:E=get(BASE+'app/'+A,2000000)
		except Exception as F:text_mode(f"couldn't download {A} from grottle.app ({F})")
		if sha(E)!=D:text_mode(f"{A} from grottle.app doesn't match the checksum in this release; refused, nothing was run")
		B.parent.mkdir(parents=True,exist_ok=True);B.write_bytes(E);C+=1
	return C
def vkey(v):
	A=str(v).strip().lstrip('v').split('.')
	return tuple(int(B)for B in A)if len(A)==3 and all(B.isdigit()for B in A)else(-1,-1,-1)
def pick(E,F):
	q=' '.join(str(F).split()).lower()
	for A in E:
		if q.startswith('g1-')and str(A.get('share_id')or'').lower()==q:return A
	n,v=q,None;p=q.rsplit(' ',1)
	if len(p)==2 and vkey(p[1])!=(-1,-1,-1):n,v=p[0],vkey(p[1])
	C=[A for A in E if n in(str(A.get('id','')).lower(),str(A.get('name','')).lower())and(v is None or vkey(A.get('version'))==v)]
	return max(C,key=lambda A:vkey(A.get('version')))if C else None
def prefetch(a):
	C=[a[2]]if a[:2]==['skin','install']and len(a)>2 else[]
	if a[:1]==['import']and len(a)>1:
		try:C=[A.get('share_id')or A['id']for A in json.loads((Path(a[1])/'grottle_state.json').read_text()).get('skins_installed')or[]]
		except Exception:0
	if not C:return
	B=G/'skins'/'inbox';shutil.rmtree(B,ignore_errors=True);B.mkdir(parents=True)
	try:D=get(IDX,262144)
	except Exception as A:print('NOTE skin index unreachable:',A);return(B/'skins.json').as_uri()
	(B/'skins.json').write_bytes(D)
	try:E=json.loads(D).get('skins')or[]
	except Exception:E=[]
	for F in C:
		A=pick(E,F)
		if A and A.get('url')and 0<int(A.get('size')or 0)<=8000000:
			try:(B/Path(urllib.parse.urlparse(A['url']).path).name).write_bytes(get(urllib.parse.urljoin(IDX,A['url']),8000000))
			except Exception as H:print('NOTE skin download failed:',H)
	return(B/'skins.json').as_uri()
def limits():
	for(B,A)in((resource.RLIMIT_CPU,300),(resource.RLIMIT_AS,3<<30),(resource.RLIMIT_FSIZE,64<<20),(resource.RLIMIT_NOFILE,512)):resource.setrlimit(B,(A,A))
a=sys.argv[1:]
n=ensure()
if a==['--verify-only']:print('VERIFIED',len(PINS),'pinned files',f"({n} downloaded)");sys.exit(0)
app='grottle.py'
if a[:1]==['studio']:a=a[1:]or['guide'];app='skin_tools.py'
d={'help':'HELP.md','guide':'studio/GUIDE.md'}.get(' '.join(a))
if d:print((G/'app'/d).read_text()if d in PINS else'not in this release');sys.exit(0)
import site
env={'PATH':'/usr/bin:/bin','HOME':str(G),'TMPDIR':str(G/'tmp'),'GROTTLE_DIR':str(G),'LANG':'C.UTF-8','GROTTLE_PYPATH':site.getusersitepackages(),'GROTTLE_WORKLOG':W}
(G/'tmp').mkdir(exist_ok=True)
u=prefetch(a)
if u:env['GROTTLE_SKIN_INDEX']=u
ro=[W]+([a[a.index('--root')+1]]if'--root'in a[:-1]else[])
if a[:1]==['import']and len(a)>1:ro.append(a[1])
cmd=[sys.executable,'-I',str(G/'guarded_run.py'),str(G),os.pathsep.join(ro),str(G/'app/core/engine'/app),*a]
if shutil.which('unshare')and subprocess.run(['unshare','-rn','true'],capture_output=True).returncode==0:cmd=['unshare','-rn',*cmd]
try:sys.exit(subprocess.run(cmd,env=env,cwd=G,preexec_fn=limits,timeout=600).returncode)
except subprocess.TimeoutExpired:text_mode('the dash took too long and was stopped')
```

<!-- sandbox_guard.py -->
```python
import os,sys
def install(root,ro=(),allow_exec=('rsvg-convert','fc-match')):
	F=allow_exec;D=os.path.realpath(root);I=tuple({os.path.realpath(A)for A in[sys.prefix,sys.base_prefix,*[A for A in sys.path if A and os.path.isabs(A)],'/usr/share/zoneinfo','/etc/localtime','/usr/lib','/usr/local/lib',*ro]})
	def E(p,roots,pre=()):
		try:p=os.path.realpath(os.fsdecode(p))
		except Exception:return False
		return any(p==A or p.startswith(A+os.sep)for A in roots)or any(p.startswith(A)for A in pre)
	def C(ev,why):raise PermissionError(f"Grottle sandbox: {ev} blocked ({why})")
	def A(ev,a):
		A=ev
		if A.startswith('socket.')and A!='socket.gethostname':C(A,'no network for downloaded code')
		elif A in('os.posix_spawn','subprocess.Popen'):
			J=a[0]if A=='os.posix_spawn'else a[0]or(a[1][0]if a[1]else'')
			if os.path.basename(os.fsdecode(J))not in F:C(A,'only '+', '.join(F)+' may run')
		elif A in('os.system','os.spawn','os.fork','os.forkpty','pty.spawn','ctypes.dlopen','ctypes.dlsym','ctypes.cdata','sys.setprofile','sys.settrace','os.exec'):C(A,'not allowed')
		elif A=='open':
			B,G,K=a
			if isinstance(B,int):return
			H=G and any(A in G for A in'wax+')or(K or 0)&(os.O_WRONLY|os.O_RDWR|os.O_CREAT|os.O_APPEND|os.O_TRUNC)
			if H and not E(B,(D,)):C(A,f"writes only inside the install folder, not {B}")
			if not H and not E(B,(D,)+I,('/tmp/grottle-',)):C(A,f"reads only Grottle folders and Python, not {B}")
		elif A in('os.remove','os.rename','shutil.rmtree','os.mkdir','os.rmdir','shutil.copyfile','os.chmod'):
			for B in a[1:2]if A=='shutil.copyfile'else a:
				if isinstance(B,(str,bytes,os.PathLike))and not E(B,(D,)):C(A,f"changes only inside the install folder, not {B}")
	sys.addaudithook(A)
```

<!-- guarded_run.py -->
```python
import os,sys,runpy
G,ro,app=sys.argv[1:4]
sys.argv=[app]+sys.argv[4:]
sys.path.insert(0,G)
p=os.environ.get('GROTTLE_PYPATH','')
if os.path.isdir(p):sys.path.append(p)
import mimetypes
mimetypes.init()
import sandbox_guard,tempfile,json,hashlib,shutil,subprocess,argparse,lzma,re,zipfile,io,math,datetime,urllib.parse,urllib.request
sandbox_guard.install(G,[A for A in ro.split(os.pathsep)if A])
runpy.run_path(app,run_name='__main__')
```
