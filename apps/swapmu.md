---
layout: default
title: SwapMu
parent: MustardOS Apps
nav_order: 4
description: "SRAM save swapper between Pickle and RetroArch on MustardOS Andromeda."
---

# SwapMu
{: .fs-9 }

A per-game **SRAM save swapper** between **Pickle** (MustardOS frontend libretro layer) and **RetroArch**, for **MustardOS Andromeda** on the **Anbernic RG35XX family** (all Allwinner H700 — Pro, Plus, H, SP, 2024). Built with LÖVE2D on the shared **fskit** kit.
{: .fs-5 .text-grey-dk-000 }

[Download SwapMu-1.0.0.muxapp](https://github.com/fragilesilver/SwapMu/releases){: .btn .btn-primary .fs-4 .mb-4 .mb-md-0 .mr-2 }
[View Source on GitHub](https://github.com/fragilesilver/SwapMu){: .btn .fs-4 .mb-4 .mb-md-0 }

---

{: .note }
> **Andromeda Only**: Pickle does not exist on Jacaranda, so there is nothing to swap against on older MustardOS releases.


---

## What It Does

* **Core Bridging**: Lists libretro cores that have SRAM on either side, using `.info` files to bridge Pickle folder names (e.g. `gambatte`) and RetroArch names (e.g. `Gambatte`).
* **Game Union**: Per core, displays all games and indicates which side each save resides on.
* **Side-by-Side Comparison**: Compare screen puts both saves side-by-side (size, modification date, core version).
* **Safe SRAM Copy**: Copies SRAM only (`.srm`, plus `.rtc` sibling if present) in either direction, one game at a time.
* **Automated Backups**: Backs up existing destination saves to `save/backup/` (last 5 kept) before overwriting.
* **3-Tier Confirmation**: Clean copy, overwrite / size mismatch warning, and hold-to-confirm protection for destination saves newer than the source.

---

## Gamepad Controls

| Screen | Buttons |
|:---|:---|
| **Cores List** | Up/Down, <span class="gamepad-btn btn-shoulder">L1/R1</span> page, <span class="gamepad-btn btn-shoulder">L2/R2</span> jump 100 — <span class="gamepad-btn btn-a">A</span> open, <span class="gamepad-btn btn-x">X</span> restore, <span class="gamepad-btn btn-y">Y</span> theme, <span class="gamepad-btn">SELECT</span> paths, <span class="gamepad-btn btn-b">B</span> quit (asks first) |
| **Games List** | Same paging — <span class="gamepad-btn btn-a">A</span> compare, <span class="gamepad-btn btn-x">X</span> filter, <span class="gamepad-btn btn-y">Y</span> theme, <span class="gamepad-btn btn-b">B</span> back |
| **Compare Screen** | <span class="gamepad-btn btn-shoulder">L1</span> RetroArch → Pickle, <span class="gamepad-btn btn-shoulder">R1</span> Pickle → RetroArch, <span class="gamepad-btn btn-b">B</span> back |
| **Folder Picker** | Up/Down, <span class="gamepad-btn btn-shoulder">L1/R1</span> page — <span class="gamepad-btn btn-a">A</span> use folder, <span class="gamepad-btn btn-b">B</span> back |
| **Confirm Dialog** | <span class="gamepad-btn btn-a">A</span> swap (hold <span class="gamepad-btn btn-a">A</span> on top tier), <span class="gamepad-btn btn-b">B</span> cancel |

---

## Paths Handled

```
Pickle:     <storage>/save/pickles/sram/<so>/<rom-subfolder>/<stem>.srm (+ .rtc/.sum/.bk*)
RetroArch:  <retroarch savefile_directory>/<CoreName>/<stem>.srm (+ .rtc)
Config:     <share>/emulator/retroarch/info/<so>_libretro.info
Backups:    $SWAPMU_DATA/backup/<side>/<so>/<stem>.srm.<epoch>
```

---

## Installation

1. Download the latest `.muxapp` from [SwapMu Releases](https://github.com/fragilesilver/SwapMu/releases).
2. Copy it to `ARCHIVE/` on your SD card.
3. On the device: **Applications → Archive Manager**, select the file.
4. Launch from **Applications → SwapMu**.
