---
name: expo-bot-preflight
description: "Expo/EAS non-prompting setup checklist (env, SDK/beta status, CNG, pnpm pins and override, eas.json images, sign-in state, budget). Run at the start of any Expo task, after expo-builder-core, or on \"check setup\"."
---

# Expo preflight (never prompts, never signs in)

> Read `expo-builder-core` first if you haven't this conversation.

Run in the project root; report ✅ / ⚠️ / ❌ lines. A missing sign-in is **"will ask when needed"** (`expo-request-sign-in`), never a failure or a prompt.
## 1. Environment
If `/home/box/expo-builder/env.sh` is missing, write it from `expo-builder-reference` §1. Then:
```bash
source /home/box/expo-builder/env.sh && expo_builder_env_check  # node ≥22.13, pnpm 11.27.0, not /usr/bin/pnpm
eas --version
```
## 2. Project and sign-in probes (read-only)
```bash
agent_cli status --json > /tmp/eb-status.json; echo "agent-cli exit $?"  # sdkVersion, native (cng), expoGo, auth
eas whoami >/dev/null 2>&1; echo "eas whoami exit $?"  # 1 = not signed in
create_launch whoami --json >/dev/null 2>&1; echo "launch whoami exit $?"  # 1 = not signed in
gh auth status >/dev/null 2>&1; echo "gh exit $?"  # only if box pushes
[ -n "${EXPO_TOKEN:-}" ] && echo "EXPO_TOKEN set (robot)" || echo "EXPO_TOKEN not set"
pnpm view expo dist-tags --json
node - <<'JS'
const fs=require('fs'),cp=require('child_process'),r=f=>{try{return fs.readFileSync(f,'utf8')}catch{return null}};
const J=f=>{try{return JSON.parse(r(f))}catch{return null}}, out=(ok,m)=>console.log((ok===true?'✅':ok===false?'❌':'⚠️')+' '+m);
const pkg=J('package.json')||{}, app=(J('app.json')||{}).expo||{}, eas=J('eas.json'), ws=r('pnpm-workspace.yaml')||'';
const sdk=(J('node_modules/expo/package.json')||{}).version, major=sdk?+sdk.split('.')[0]:null;
const rnWant=(J('node_modules/expo/bundledNativeModules.json')||{})['react-native'];
const tracked=f=>{try{cp.execSync(`git ls-files --error-unmatch ${f}`,{stdio:'ignore'});return true}catch{return false}};
out(!!sdk, `expo ${sdk||'not installed (run pnpm install)'}`);
out(major===null?null:major>=58, `SDK ${major} (default for new apps: 58; on 57 require expo ≥57.0.9)`);
const lock=['pnpm-lock.yaml','package-lock.json','yarn.lock','bun.lock'].filter(f=>fs.existsSync(f));
out(lock.includes('pnpm-lock.yaml')?true:null, `lockfile: ${lock.join(', ')||'none'}${lock[0]&&lock[0]!=='pnpm-lock.yaml'?' (keep that manager)':''}`);
if(lock.includes('pnpm-lock.yaml')){
  out(/^pnpm@\d/.test(pkg.packageManager||''), `packageManager: ${pkg.packageManager||'missing (pnpm@11.27.0)'}`);
  out(!pkg.pnpm, pkg.pnpm?'package.json "pnpm" field is ignored by pnpm 11: move to pnpm-workspace.yaml':'no package.json "pnpm" field');
  const npmrc=r('.npmrc'); out(!npmrc||!/^(?!\s*(\/\/|@|registry|always-auth|_auth))\s*[a-z-]+=/m.test(npmrc), npmrc?'.npmrc has non-auth keys (ignored by pnpm 11)':'no .npmrc');
  const ov=(ws.match(/^\s+react-native:\s*["']?([^\s"'#]+)/m)||[])[1];
  if(rnWant&&/-rc\.|-beta|-preview/.test(rnWant)) out(ov===rnWant, `SDK beta react-native override ${ov||'missing'} vs expected ${rnWant}`);
  else out(!ov, ov?`leftover react-native override ${ov}: remove (SDK stable)`:'no react-native override (not needed)');
  out(/unrs-resolver:\s*true/.test(ws)||!fs.existsSync('node_modules/unrs-resolver')&&!(pkg.devDependencies||{})['eslint-config-expo'], `allowBuilds unrs-resolver ${/unrs-resolver:\s*true/.test(ws)?'set':'missing'}`);
  try{const n=new Set(fs.readdirSync('node_modules/.pnpm').filter(d=>/^react-native@/.test(d)).map(d=>d.split('_')[0])).size; out(n===1,`react-native versions in tree: ${n}`)}catch{}
  for(const f of ['pnpm-lock.yaml','pnpm-workspace.yaml']) if(fs.existsSync(f)) out(tracked(f)?true:null, `${f} ${tracked(f)?'tracked':'not committed yet'}`);
}
out(fs.existsSync('expo-env.d.ts'), 'expo-env.d.ts present (needed by tsc)');
out(/\.env\.eas-simulator|^\.env\*?$/m.test(r('.gitignore')||''), '.gitignore covers .env.eas-simulator');
out(!!(app.ios||{}).bundleIdentifier && !!(app.android||{}).package && !/com\.anonymous/.test(JSON.stringify([app.ios,app.android])), `bundle id / package: ${(app.ios||{}).bundleIdentifier||'-'} / ${(app.android||{}).package||'-'}`);
out(((app.extra||{}).eas||{}).projectId?true:null, `EAS projectId: ${((app.extra||{}).eas||{}).projectId||'not linked (eas init is ask-first)'}`);
if(!eas) out(null,'eas.json missing'); else for(const [name,p] of Object.entries(eas.build||{})){
  const im=[(p.ios||{}).image,(p.android||{}).image].filter(Boolean).join(' / ')||'(inherited/none)';
  const bad=/latest/.test(im)&&major>=58 || /xcode-27\.1/.test(im)&&!/^development/.test(name);
  out(!bad, `eas.json ${name}: ${im}${p.pnpm?' pnpm '+p.pnpm:''}`);
}
JS
```
From `/tmp/eb-status.json` read `project.sdkVersion`, `project.native` (`cng` = managed workflow, decides fingerprint-job eligibility; committed `ios/`/`android/` is a ⚠️), `expoGo.compatible`, `auth.loggedIn`. SDK 58 is a beta while `dist-tags.latest` < 58; say so plainly.
## 3. Only if already signed in (no prompts)
`eas simulator:availability --json` (EAS Simulator access); `eas account:usage --json` → `account.plan`, `builds.plan.percentUsed` vs the owner's budget (reference §6).
## 4. Report
Each probe result, sign-ins last: Expo "signed in as <user>" or "will ask when needed"; Launch: same session; GitHub connector, box `gh`, Expo MCP: "OK" or "will ask when needed". Finish with next actions (e.g. "pnpm install", "add the override", "pin images"). Don't fix anything automatically outside a box clone.
