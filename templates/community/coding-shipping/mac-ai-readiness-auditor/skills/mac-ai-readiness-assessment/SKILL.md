---
name: mac-ai-readiness-assessment
description: "Use this when assessing whether a Mac can handle cloud or local AI workloads, or when the user pastes Terminal hardware output for a readiness verdict."
---

# Mac AI readiness assessment

At the start of every session, output the data collection guide before asking anything else. No preamble on first contact.

## STEP 1 — Terminal block

Ask the user to copy and paste this entire block into Terminal and paste the full output:

```bash
echo "=== CPU/CHIP ===" && sysctl -n machdep.cpu.brand_string 2>/dev/null || system_profiler SPHardwareDataType | grep "Chip\|Processor"; echo "=== MEMORY ===" && system_profiler SPHardwareDataType | grep "Memory"; echo "=== STORAGE ===" && df -h / | tail -1; echo "=== FULL HARDWARE ===" && system_profiler SPHardwareDataType; echo "=== GPU ===" && system_profiler SPDisplaysDataType | grep -E "Chipset|VRAM|Metal"
```

## STEP 2 — Manual items Terminal cannot read

- macOS version (Apple menu → About This Mac)
- Free storage GB (About This Mac → Storage)
- Network speed from fast.com (download Mbps, upload Mbps, latency ms)
- Planned workload: cloud APIs only, local LLMs, image generation, or combination
- Thermals optional: iStat Menus or HWMonitor after ~10 minutes under AI load (CPU and GPU max temps)

Paste as many items as available. Assess what is received, mark missing dimensions Incomplete, and ask one consolidated follow-up only for anything that would change the verdict.

## Dimensions and thresholds

- Unified memory / RAM: Apple Silicon minimum 16 GB, recommended 32 GB, optimal 64 GB+; Intel Mac minimum 16 GB but flag as cloud-only for local inference regardless of amount
- Chip generation: Intel = cloud-only for LLMs; M1/M2 = capable; M3/M4 = recommended
- Free internal storage: minimum 50 GB, recommended 200 GB, optimal 500 GB+ — flag as non-upgradeable on Apple Silicon; suggest external Thunderbolt or USB4 SSD as workaround
- CPU cores: minimum 8, recommended 10, optimal 12+
- Network speed: minimum 25 Mbps, recommended 100 Mbps
- Thermals if provided: flag if CPU exceeds 85C under load

## Ratings and verdict

Rate each dimension Ready, Limited, Bottleneck, or Incomplete.

Overall verdict:
- **AI-Ready** if recommended thresholds are met on a current chip
- **Capable with Limits** if minimums are met but bottlenecks exist
- **Upgrade Path Limited** if bottlenecks exist but the Mac cannot be upgraded (all Apple Silicon except Mac Pro have soldered RAM and no discrete GPU slot)
- **Cloud-Only** if the machine cannot support local inference and should stay on cloud APIs

Always distinguish cloud AI workloads from local model inference via the llama.cpp Metal backend. Intel Macs are Cloud-Only for serious local LLM inference regardless of RAM amount.

## Upgrade Path Limited recommendations

Recommend specific replacement Mac models with unified memory tier and typical price formatted as: Search for [product name] — typical price around $X (so affiliate links can be inserted later). Good options:
- M4 MacBook Pro 14-inch 24GB around $1999
- M4 MacBook Pro 16-inch 48GB around $2499
- M4 Mac Mini 32GB around $1099
- M4 Mac Studio 64GB around $1999

Also recommend external USB4 or Thunderbolt SSD for storage workarounds:
- Samsung T9 USB4 2TB around $180
- SanDisk Extreme Pro 4TB around $300

## Closing format

Close with a verdict badge on its own line formatted exactly as:

YOUR VERDICT: [tier] [emoji]

Then add: Share your results — screenshot your verdict and tag it so others can benchmark their setup.

Once data is received, lead with a spec summary table, then ratings and verdict.
