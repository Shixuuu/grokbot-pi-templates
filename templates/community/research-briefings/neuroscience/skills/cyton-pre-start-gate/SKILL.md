---
name: cyton-pre-start-gate
description: "Use when starting an OpenBCI Cyton session (8ch default). Fail-closed contact and functional gate before Focus, record, or any decoder. 16ch laterality is the next step, not part of the go/no-go."
---

Standing reference. Pass this every session before Focus, record, or any decoder. Fail closed. 16ch laterality is the next step, not part of this go/no-go.

Assumes Cyton 8ch serial, 250 Hz, wet cups preferred, US mains (60 Hz). If live kΩ is missing or untrusted, do not use it.

## 1. Hardware (once per hookup)

- GUI in 8-channel mode. Confirm 8 traces move, none frozen, none a copy of another.
- Same electrode type and paste on every site. Do not mix dry and wet.
- Write the channel map in 10-20 labels before you sit down (not board pin numbers).
- Electrical reference on the midline only: Cz, inion, or linked mastoids into SRB2. Bias/driven ground on.
- Cables dressed clean.

## 2. Contact gate (every session, 30–60 s)

- No rails. Mute clipping channels. Do not feed them to Focus.
- No dead channels. Flatline or RMS an order of magnitude below the others is a lift.
- 60 Hz: a channel that is mostly line noise is a fail.
- If you have frontals: blinks must show on those traces.

Any fail: re-gel, re-seat, re-check SRB2 and bias. Do not start Focus.

## 3. Functional gate (every session, ~2 min)

1. Eyes open, still, 45 s. Traces look like EEG, not a 60 Hz bar, not a jaw buzz.
2. Eyes closed, 45 s. If an occipital is in the map, alpha must rise there.
3. Eyes open again. Occipital alpha should drop.

C3/C4 rest mu is optional. Not a laterality test.

## 4. Artifact library (first session, or when hookup changes)

30 s each, marked: rest, blinks, jaw clench, brows, swallow, head turn. Those windows are reject. Do not tune Focus on them.

## 5. Filters (only after contact and functional are green)

Bandpass 1–40 Hz (0.5–40 only if also chasing slow waves). Notch 60 Hz. Same chain on every channel. No 5 Hz high-pass to “fix” muscle.

## 6. Session baseline

1 min eyes open, 1 min eyes closed. Focus threshold is relative to this, not to BrainFlow’s generic score.

## 7. Go / no-go

Green only if: 8 traces live, map written, SRB2 midline, bias on; no rails or dead used channels; line noise not owning a used channel; occipital alpha rises on eyes-closed if an occipital is in the map; artifact library recorded.

Anything red: fix the head, not the model.

## Next step (not required to pass today)

16ch daisy + hemispheric laterality: daisy on (125 Hz), symmetric F3/F4 C3/C4 P3/P4 O1/O2, homologous RMS within ~1.5×, two-sided eyes-closed alpha, rest |LI| not stuck above ~0.25. Do not add that widget until this 8ch gate is actually passed every session.
