---
layout: default
title: fskit Framework
parent: Toolkits & Libraries
nav_order: 1
description: "Shared LÖVE2D toolkit providing display profiles, themes, input abstraction, and persistent state for MustardOS."
---

# fskit Framework
{: .fs-9 }

A modular, lightweight **LÖVE2D kit** providing multi-resolution screen management, theme synchronization, gamepad input abstraction, and persistent state for **MustardOS Andromeda**.

{: .fs-5 .text-grey-dk-000 }

---

All 5 companion applications in the fragilesilver suite (**ClockMu**, **JarMu**, **BatteryMu**, **SwapMu**, and **ScrapMu**) are built on `fskit`.

## Core Modules

```lua
local fskit = {
  screen  = require("fskit.screen"),  -- Letterboxing & multi-resolution
  theme   = require("fskit.theme"),   -- 10-theme model & persistence
  input   = require("fskit.input"),   -- Physical gamepad button abstraction
  widgets = require("fskit.ui"),      -- Headers, footers, lists & dialogs
  font    = require("fskit.font"),    -- Barlow & pixel fonts
  motion  = require("fskit.motion"),  -- Kinetic physics & transitions
}
```

---

## Screen & Resolution Profiles

`fskit.screen` provides integer-scaled, letterboxed rendering across three standard handheld aspect ratios:

| Profile | Native Resolution | Device Panels |
|:---|:---|:---|
| **Standard 4:3** | 640 × 480 | RG35XX Pro, Plus, H, SP, 2024 |
| **Wide 3:2** | 720 × 480 | 3.5" wide panels |
| **Square 1:1** | 720 × 720 | 4.0" square panels |

All profiles support HDMI-out upscaling with clean integer pixel preservation.

---

## 10-Theme Palette

`fskit.themes` defines 10 themes (5 color families × dark/light mode) with verified contrast ratios:

| Family | Mode | Highlights |
|:---|:---|:---|
| **Mustard** | Dark & Light | Canonical MustardOS warm yellow accent (`#DCAE1E`) |
| **Crimson** | Dark & Light | Intense arcade ruby red (`#F22E2E`) |
| **Ocean** | Dark & Light | Vibrant deep-sea electric blue (`#38BDF8`) |
| **Funky** | Dark & Light | Cosmic arcade purple (`#A855F7`) |
| **Andromeda** | Black & White | Deep space ink navy, steel, and stone-cream |

---

## Input Abstraction Contract

Every `fskit` app adheres to a uniform button contract:

* <span class="gamepad-btn btn-a">A</span> — Confirm / Primary Action / Hold-to-confirm
* <span class="gamepad-btn btn-b">B</span> — Back / Cancel / Quit (with confirmation)
* <span class="gamepad-btn btn-x">X</span> — Secondary Action / Toggle
* <span class="gamepad-btn btn-y">Y</span> — Tertiary Action / Option
* <span class="gamepad-btn btn-shoulder">L1 / R1</span> — Page navigation
* <span class="gamepad-btn btn-shoulder">L2 / R2</span> — Fast jump (100 items)
