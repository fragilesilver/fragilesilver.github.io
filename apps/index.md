---
layout: default
title: MustardOS Apps
nav_order: 2
has_children: true
permalink: /apps/
description: "Suite of companion applications for MustardOS Andromeda on Anbernic RG35XX."
---

# MustardOS Handheld App Suite
{: .fs-9 }

Custom utilities designed specifically for **MustardOS Andromeda** on the **Anbernic RG35XX** handheld family.
{: .fs-5 .text-grey-dk-000 }

---

All applications in this suite share the **[fskit]({% link toolkits/fskit.md %})** UI toolkit, ensuring identical 10-color themes, letterboxed multi-resolution display profiles, and tactile button controls.

## Application Directory

| App | Version | Highlights | Guide |
|:---|:---|:---|:---|
| **[ClockMu]({% link apps/clockmu.md %})** | `v1.0.0` | Multi-alarm clock, custom snooze, 15-min presets | [Read More →]({% link apps/clockmu.md %}) |
| **[JarMu]({% link apps/jarmu.md %})** | `v1.0.0` | "Shake the jar" weighted random game picker | [Read More →]({% link apps/jarmu.md %}) |
| **[BatteryMu]({% link apps/batterymu.md %})** | `v1.0.0` | Real-time voltage, charge %, health & history graphs | [Read More →]({% link apps/batterymu.md %}) |
| **[SwapMu]({% link apps/swapmu.md %})** | `v1.0.0` | Pickle ↔ RetroArch SRAM save swapper & safe backups | [Read More →]({% link apps/swapmu.md %}) |
| **[ScrapMu]({% link apps/scrapmu.md %})** | `v0.2.0` | Skyscraper template box art & Artie metadata scraper | [Read More →]({% link apps/scrapmu.md %}) |

---

## Hardware Compatibility

Every app is developed and tested for the **Allwinner H700 SoC** running **MustardOS Andromeda (2606.0+)**:

| Device | Panel Resolution | Compatibility Status |
|:---|:---|:---|
| **Anbernic RG35XX Pro** | 640×480 IPS | Primary Target & Verified |
| **Anbernic RG35XX Plus** | 640×480 IPS | Fully Supported |
| **Anbernic RG35XX H** | 640×480 IPS | Fully Supported |
| **Anbernic RG35XX SP** | 640×480 IPS | Fully Supported |
| **Anbernic RG35XX (2024)** | 640×480 IPS | Fully Supported |
| **HDMI Video Out** | Scaled 640×480 | Supported |

{: .tip }
> **Installation Note**: All apps install using the built-in MustardOS Archive Manager. Check out the step-by-step **[Installation Guide]({% link guide/install.md %})** for instructions on transferring `.muxapp` files to your SD card.

