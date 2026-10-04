---
layout: default
title: Installation Guide
nav_order: 5
permalink: /guide/install
description: "Step-by-step guide for installing .muxapp packages on muOS Andromeda using Archive Manager."
---

# muOS Package Installation Guide
{: .fs-9 }

How to install `.muxapp` application packages on **muOS Andromeda** using the built-in **Archive Manager**.
{: .fs-5 .text-grey-dk-000 }

---

All companion applications developed by fragilesilver (**ClockMu**, **JarMu**, **BatteryMu**, **SwapMu**, and **ScrapMu**) are distributed as standalone `.muxapp` archives.

## Step-by-Step Instructions

### Step 1: Download the `.muxapp` Package
Navigate to the GitHub Releases page of your desired app and download the latest compiled `.muxapp` archive (e.g. `ClockMu-1.0.0.muxapp`, `SwapMu-1.0.0.muxapp`).

### Step 2: Copy to Your SD Card
Connect your SD card (either SD1 or SD2) to your computer using a card reader, USB cable, or over local Wi-Fi/SFTP.

Place the downloaded `.muxapp` file into the `ARCHIVE/` folder at the root of your SD card:

```
SDCARD/
├── ARCHIVE/
│   ├── ClockMu-1.0.0.muxapp    <-- Place .muxapp files here
│   ├── JarMu-1.0.0.muxapp
│   ├── BatteryMu-1.0.0.muxapp
│   ├── SwapMu-1.0.0.muxapp
│   └── ScrapMu-0.2.0.muxapp
├── ROMS/
└── MUOS/
```

### Step 3: Open Archive Manager
Insert the SD card back into your Anbernic handheld and boot into muOS Andromeda. On the home menu:
1. Navigate to **Applications**.
2. Scroll down and launch **Archive Manager**.

### Step 4: Extract and Install
Inside Archive Manager:
1. Highlight your downloaded `.muxapp` file in the list.
2. Press <span class="gamepad-btn btn-a">A</span> to extract.
3. muOS will automatically unpack the application binary, launcher script, and custom icon into the system application catalogue.

### Step 5: Launch Your App
Return to **Applications**. Your newly installed application will appear in the list with its custom icon. Press <span class="gamepad-btn btn-a">A</span> to launch!

---

## Frequently Asked Questions

### Will updating an app erase my alarms, battery history, or save files?
**No.** All apps write user data to persistent storage paths (e.g. `$CLOCKMU_DATA`, `$SWAPMU_DATA`) located in `save/` subdirectories. Your settings and game saves survive updates and system reboots.

### Can I delete the `.muxapp` file after installing?
**Yes.** Once Archive Manager has unpacked the application, the original archive in `ARCHIVE/` is no longer needed and can be safely deleted to free up SD card space.

### Do I need SSH or terminal commands?
**No.** Everything is installed using the standard muOS graphical interface.
