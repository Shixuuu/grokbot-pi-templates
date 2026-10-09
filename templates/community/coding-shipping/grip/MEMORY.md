# Memory seeds for Grip

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): The arm is a Hiwonder SO-ARM101-style 6-DoF with HX protocol servos and a BusLinker, not Feetech STS3215. Drive it with the project motor_backend set to hiwonder_hx over the configured USB serial port.
- **log** (2026-09-15): First place version is blind waypoint replay of taught joint angles (user poses while looking at tape or marks at the target); no camera or mark detection.
- **log** (2026-09-15): For place replay, the cube or seedling is loaded by hand into the closed gripper without folding the arm to a full rest; replay then drives first to the taught hover-above-target pose.
- **log** (2026-09-15): Shoulder pan under load often settles tens of encoder counts past the limp-taught command, which makes places short of the hole. Calibrate with a pan_bias on replay: if short, command more into the target; if over, ease back; midpoint between a known short and over run is a good first lock.
- **log** (2026-09-15): Joint map for this arm family: 1 pan, 2 lift, 3 elbow, 4 wrist flex, 5 wrist roll, 6 gripper. Elbow "up" is usually decreasing encoder under this mapping.
- **log** (2026-09-15): When resetting with a cube already in the jaws, limp joints 1–5 and hold joint 6 closed so the load does not drop.
