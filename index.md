---
layout: default
title: Welcome
nav_order: 1
description: "Developer portfolio and software showcase of fragilesilver."
permalink: /
---

# fragilesilver
{: .fs-9 }

Developer portfolio and software showcase.
{: .fs-6 .text-grey-dk-000 }

Crafting retro handheld utilities, multiplayer educational software, and lightweight developer frameworks.
{: .fs-5 .text-grey-dk-000 }

---

## About Me

Hi, I'm **fragilesilver**. I build purposeful, bloat-free software for retro gaming handhelds (**MustardOS on Anbernic RG35XX**) and real-time interactive web games. 

My work focuses on snappy performance, tactile gamepad controls, and clean architecture that respects hardware resources.

---

## Featured Works

### [MustardOS Handheld App Suite]({% link apps/index.md %})
A cohesive suite of 5 custom applications built on **LÖVE2D** and **fskit** for the Anbernic Allwinner H700 family running **MustardOS Andromeda**:

* **[ClockMu]({% link apps/clockmu.md %})** (v1.0.0) — Alarm clock with repeat schedules, snooze, 15-minute presets, and 8 color themes.
* **[JarMu]({% link apps/jarmu.md %})** (v1.0.0) — "Shake the jar" weighted random game picker with SD1/SD2 scanning, in-app genre editing, and retro CRT shaders.
* **[BatteryMu]({% link apps/batterymu.md %})** (v1.0.0) — Live battery monitor with voltage telemetry, battery health analysis, and MustardOS usage tracking.
* **[SwapMu]({% link apps/swapmu.md %})** (v1.0.0) — SRAM save swapper bridging Pickle and RetroArch saves with 3-tier safe backup verification.
* **[ScrapMu]({% link apps/scrapmu.md %})** (v0.2.0) — Skyscraper template box art compositing (Retro Dither) with Artie descriptions and a live web dashboard.

{: .note }
> All MustardOS apps are packaged as standalone `.muxapp` archives. Check out the **[Installation Guide]({% link guide/install.md %})** to learn how to install them via Archive Manager.

---

### [CHMS Battleship Royale]({% link projects/chms-battleship.md %})
A real-time classroom multiplayer battle royale where student crews share one big ocean arena and earn shots by solving **Cambridge IGCSE / O Level (0478/2210)** pseudocode problems.

* **Tech**: JavaScript, Firebase Realtime Database, Canvas.
* **Features**: Zero-login QR code join, live teacher dashboard, and spectator projector mode.

---

### [fskit — Handheld UI Framework]({% link toolkits/fskit.md %})
A modular, high-performance LÖVE2D toolkit providing multi-resolution display management (640×480, 720×480, 720×720), gamepad input abstraction, 10 color themes, and persistent state for MustardOS.

---

## Core Disciplines

| Discipline | Focus & Stack | Representative Project |
|:---|:---|:---|
| **Handheld & Embedded Systems** | Lua, LÖVE2D, MustardOS Andromeda, Allwinner H700, Mali GPU | [MustardOS Apps]({% link apps/index.md %}) |
| **Interactive & Multiplayer Web** | TypeScript, JavaScript, Firebase Realtime DB, Canvas | [CHMS Battleship]({% link projects/chms-battleship.md %}) |
| **Toolkits & Frameworks** | Modular UI, Gamepad Abstraction, Theme Engines | [fskit]({% link toolkits/fskit.md %}) |

---

## Craftsmanship Philosophy

* **Lightweight & Bloat-Free**: Fast boot times, low memory footprints, and no unnecessary runtime dependencies.
* **Tactile & Joyful Ergonomics**: Built around physical console button inputs (`[A]`, `[B]`, `[X]`, `[Y]`, `[L1/R1]`) and responsive feedback.
* **Independent & Resilient**: Self-contained packages that persist settings across reboots and operating system updates.
* **Open Source**: Free and open code shared with retro gaming and educational communities.

---

## Connect & Code

* **GitHub**: [github.com/fragilesilver](https://github.com/fragilesilver)
* **Firmware Community**: [MustardOS (muos.dev)](https://muos.dev)

