---
layout: default
title: BatteryMu
parent: MustardOS Apps
nav_order: 3
description: "Live battery monitor and health tracker for MustardOS Andromeda on Anbernic RG35XX."
---

# BatteryMu
{: .fs-9 }

A live battery monitor for **MustardOS Andromeda** on the **Anbernic RG35XX family** (all Allwinner H700 — Pro, Plus, H, SP, 2024). Built with LÖVE2D on the shared **fskit** kit.
{: .fs-5 .text-grey-dk-000 }

[Download BatteryMu-1.0.0.muxapp](https://github.com/fragilesilver/BatteryMu/releases){: .btn .btn-primary .fs-4 .mb-4 .mb-md-0 .mr-2 }
[View Source on GitHub](https://github.com/fragilesilver/BatteryMu){: .btn .fs-4 .mb-4 .mb-md-0 }

---

## Features

* **Real-Time Telemetry**: Live charge %, voltage window, and charging/discharging state.
* **Battery Health Analysis**: Design vs. current voltage readout and calculated battery health.
* **MustardOS Charge History**: Charge history graph powered by the MustardOS `battery_usage` tracker (last charged timestamp, session time, capacity at unplug).
* **Universal Hardware Fallback**: Reads MustardOS pre-parsed battery values first, falling back to raw AXP2202 sysfs nodes across every RG35XX variant.
* **8-Color Theme Picker**: Shared in-app theme palette with ClockMu and JarMu.
* **Safe Scaling**: Letterboxed 640×480 render — safe on every RG35XX panel variant and HDMI video output.

---

## Gamepad Controls

| Button | Action |
|:---|:---|
| <span class="gamepad-btn">D-pad Up/Down</span> | Scroll through battery metrics & session logs |
| <span class="gamepad-btn btn-x">X</span> | Cycle between 8 in-app theme colors |
| <span class="gamepad-btn btn-y">Y</span> | Toggle extended voltage and health telemetry |
| <span class="gamepad-btn btn-b">B</span> | Quit to MustardOS |

---

## Technical Architecture

BatteryMu targets the **X-Powers AXP2202 Power Management IC (PMIC)** present on all Allwinner H700 Anbernic handhelds:

```
/sys/class/power_supply/axp2202-battery/
├── capacity         # Current battery percentage
├── voltage_now      # Real-time microvolts
├── current_now      # Discharge / charge current
└── status           # Charging / Discharging / Full
```

When running bare without MustardOS helper daemons, BatteryMu reads these nodes directly, ensuring continuous accuracy even during testing.


---

## Installation

1. Download the latest `.muxapp` from [BatteryMu Releases](https://github.com/fragilesilver/BatteryMu/releases).
2. Copy it to `ARCHIVE/` on your SD card.
3. On the device: **Applications → Archive Manager**, select the file.
4. Launch from **Applications → BatteryMu**.
