---
layout: default
title: ClockMu
parent: muOS Apps
nav_order: 1
description: "Alarm clock application for muOS Andromeda on Anbernic RG35XX."
---

# ClockMu
{: .fs-9 }

An alarm clock for **muOS Andromeda** on the **Anbernic RG35XX family** (all Allwinner H700 — Pro, Plus, H, SP, 2024). Built with LÖVE2D on the shared **fskit** kit.
{: .fs-5 .text-grey-dk-000 }

[Download ClockMu-1.0.0.muxapp](https://github.com/fragilesilver/ClockMu/releases){: .btn .btn-primary .fs-4 .mb-4 .mb-md-0 .mr-2 }
[View Source on GitHub](https://github.com/fragilesilver/ClockMu){: .btn .fs-4 .mb-4 .mb-md-0 }

---

![ClockMu Main Screen](https://github.com/user-attachments/assets/f20cbf92-68a0-4413-8677-75872a1069dd)

---

## Features

* **Multiple Alarms**: Set and manage multiple alarms with customized labels.
* **Repeat Schedules**: Configure alarms for Daily, Once, or specific days of the week.
* **Custom Snooze**: Individual snooze durations per alarm.
* **15-Minute Presets**: Fast preset time picker to quickly set standard times.
* **8-Color In-App Themes**: Choose between Mustard, Bloody Red, Forest Green, Funky Purple, Intense Orange, Midnight Black, Ocean Blue, and Yoga White.
* **Data Persistence**: Alarms and preferences persist across reboots via `$CLOCKMU_DATA` independent of LÖVE save-dir under muOS bind storage.
* **Volume Handling**: Launcher maxes volume on alarm start and restores previous volume upon exit.

---

## Gamepad Controls

### Main Alarm Screen

| Button | Action |
|:---|:---|
| <span class="gamepad-btn">D-pad Up/Down</span> | Navigate alarm list |
| <span class="gamepad-btn btn-a">A</span> | Edit selected alarm |
| <span class="gamepad-btn btn-x">X</span> | Toggle alarm on / off |
| <span class="gamepad-btn btn-y">Y</span> | Add new alarm |
| <span class="gamepad-btn btn-shoulder">L1</span> | Delete selected alarm |
| <span class="gamepad-btn btn-b">B</span> | Quit to muOS |

### Edit Alarm & Preset Picker

| Button | Action |
|:---|:---|
| <span class="gamepad-btn">Up / Down</span> | Move between fields (Hour / Min / Label / Repeat / Snooze / Enabled) |
| <span class="gamepad-btn">Left / Right</span> | Change value (±1 hour/min, cycle options for others) |
| <span class="gamepad-btn btn-shoulder">L1 / R1</span> | Change minute by ±10 |
| <span class="gamepad-btn btn-a">A</span> (on Repeat) | Toggle highlighted day on / off |
| <span class="gamepad-btn btn-x">X</span> (on Repeat) | Clear all days → set to "Once" |
| <span class="gamepad-btn btn-y">Y</span> | Open 15-minute preset time picker |
| <span class="gamepad-btn btn-a">A</span> (other fields) | Save alarm |
| <span class="gamepad-btn btn-b">B</span> | Cancel and return |

### When Alarm Rings

| Button | Action |
|:---|:---|
| <span class="gamepad-btn btn-a">A</span> | Snooze alarm (per-alarm snooze duration) |
| <span class="gamepad-btn btn-b">B</span> | Dismiss alarm |

---

## Interface Gallery

| Edit Alarm | On-Screen Keyboard |
|:---|:---|
| ![Edit Alarm](https://github.com/user-attachments/assets/3588e73f-14de-4fd9-9de6-1929ad093cdd) | ![Keyboard](https://github.com/user-attachments/assets/fd8f3256-7145-45cc-89b9-a87eae28d600) |

---

## Installation

1. Download the latest `.muxapp` from [ClockMu Releases](https://github.com/fragilesilver/ClockMu/releases).
2. Copy it to `ARCHIVE/` on your SD card.
3. On the device: **Applications → Archive Manager**, select the file.
4. Launch from **Applications → ClockMu**.
