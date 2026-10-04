---
layout: default
title: JarMu
parent: MustardOS Apps
nav_order: 2
description: "Shake the jar random game selector for MustardOS Andromeda on Anbernic RG35XX."
---

# JarMu
{: .fs-9 }

A "shake the jar" random game picker for **MustardOS Andromeda** on the **Anbernic RG35XX family** (all Allwinner H700 — Pro, Plus, H, SP, 2024). Built with LÖVE2D on the shared **fskit** kit.
{: .fs-5 .text-grey-dk-000 }

[Download JarMu-1.0.0.muxapp](https://github.com/fragilesilver/JarMu/releases){: .btn .btn-primary .fs-4 .mb-4 .mb-md-0 .mr-2 }
[View Source on GitHub](https://github.com/fragilesilver/JarMu){: .btn .fs-4 .mb-4 .mb-md-0 }

---

| Splash Screen | The Jar & Shake Meter |
|:---|:---|
| ![Splash](https://github.com/user-attachments/assets/ca257d31-2f3d-4dc3-8ac3-a17939961d8a) | ![Jar](https://github.com/user-attachments/assets/5f0d53ca-cf92-4fc7-9a57-c1a0640b4190) |

---

## Features

* **Dual SD & PortMaster Scan**: Scans SD1 and SD2 (`ROMS/<system>/`) plus PortMaster ports (`ports/*.sh`).
* **Weighted Shake Physics**: Hold-and-release shake with power meter. Landing in the sweet spot triggers a "perfect shake" bonus.
* **Smart Weighting**: Backlog (×3), favourites (×2), playing (×1.5), beaten (×0.5), with re-pick avoidance.
* **Filters**: Filter by system, genre (any/all match), and status, or toggle "Surprise Me" mode.
* **In-App Genre Editor**: Modify game genres directly on the result screen without altering read-only `gamelist.xml` files.
* **CRT Retro Visuals**: CRT scanlines, chromatic aberration, neon arcade glow, and synthesized sound effects.
* **Robust Hand-off**: Does not launch games directly, preventing core crashes and ensuring 100% stability across all RG35XX models.

---

## Gamepad Controls

### Jar Screen (Main)

| Button | Action |
|:---|:---|
| <span class="gamepad-btn btn-a">Hold A</span> | Build up shake power |
| <span class="gamepad-btn btn-a">Release A</span> | Tip the jar (sweet spot = perfect shake) |
| <span class="gamepad-btn btn-shoulder">L1 / R1</span> | Open Filters menu |
| <span class="gamepad-btn btn-y">Y</span> | Toggle "Surprise Me" mode |
| <span class="gamepad-btn btn-x">X</span> | Cycle theme color |
| <span class="gamepad-btn">SELECT</span> | Toggle procedural sound effects |
| <span class="gamepad-btn btn-b">B</span> | Quit to MustardOS |


### Filters Screen

| Button | Action |
|:---|:---|
| <span class="gamepad-btn">Up / Down</span> | Move within highlighted column |
| <span class="gamepad-btn btn-shoulder">L1 / R1</span> | Switch column (Systems / Genre / Status) |
| <span class="gamepad-btn btn-a">A</span> | Toggle item (or flip genre match mode any / all) |
| <span class="gamepad-btn btn-y">Y</span> | Include all items in highlighted column |
| <span class="gamepad-btn btn-b">B</span> | Return back to jar |

### Result Screen

| Button | Action |
|:---|:---|
| <span class="gamepad-btn btn-a">A</span> / <span class="gamepad-btn btn-b">B</span> | Reshake (return to jar) |
| <span class="gamepad-btn btn-y">Y</span> | "Not feeling it" — skip game for this session |
| <span class="gamepad-btn btn-x">X</span> | Cycle status (backlog → playing → beaten → favourite) |
| <span class="gamepad-btn btn-shoulder">L1</span> | Open in-app genre editor |

---

## Installation

1. Download the latest `.muxapp` from [JarMu Releases](https://github.com/fragilesilver/JarMu/releases).
2. Copy it to `ARCHIVE/` on your SD card.
3. On the device: **Applications → Archive Manager**, select the file.
4. Launch from **Applications → JarMu**.
