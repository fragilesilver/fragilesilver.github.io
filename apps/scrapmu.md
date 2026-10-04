---
layout: default
title: ScrapMu
parent: muOS Apps
nav_order: 5
description: "Box art and metadata scraper with template compositing for muOS Andromeda."
---

# ScrapMu
{: .fs-9 }

A **box art and metadata scraper** for **muOS Andromeda** on the **Anbernic RG35XX family** (all Allwinner H700 — Pro, Plus, H, SP, 2024). Built with LÖVE2D on the shared **fskit** kit.
{: .fs-5 .text-grey-dk-000 }

[Download ScrapMu-0.2.0.muxapp](https://github.com/fragilesilver/ScrapMu/releases){: .btn .btn-primary .fs-4 .mb-4 .mb-md-0 .mr-2 }
[View Source on GitHub](https://github.com/fragilesilver/ScrapMu){: .btn .fs-4 .mb-4 .mb-md-0 }

---

## Why ScrapMu?

Existing tools fell short when used alone:
* **Scrappy** loses the preview image whenever a template is used (because templates like `Retro Dither Style.xml` declare only `<output type="cover">`), and text is limited to description + genre.
* **Artie** provides detailed text metadata (synopsis, genre, developer, publisher, release date, players), but lacks a compositor for template box art.

**ScrapMu** combines the best of both: it queries ScreenScraper **once** per ROM to populate its local cache, generates the template box art offline, and extracts both the screenshot preview and the full Artie-style metadata text block from that same single query.

---

## Features

* **Quota Conservation**: Only 1 API query per ROM saves daily ScreenScraper quota.
* **Template Compositing**: Full support for Skyscraper `artwork.xml` templates, including Retro Dither Style.
* **Rich Text Metadata**: Formats complete game descriptions, developer, publisher, year, and rating into the muOS catalogue.
* **Single ROM & Batch Modes**: Scrape full collections automatically or curate individual games with manual lookup refinement.
* **Embedded Web Dashboard**: Run ScrapMu with an embedded HTTP server to monitor and initiate scrapes via Wi-Fi from your computer or phone.

---

## Gamepad Controls

### Home Screen

| Button | Action |
|:---|:---|
| <span class="gamepad-btn">D-pad Left/Right</span> | Cycle template (Retro Dither, etc.) |
| <span class="gamepad-btn btn-a">A</span> | Start scraping selected systems |
| <span class="gamepad-btn btn-x">X</span> | Open Single ROM two-column scraper |
| <span class="gamepad-btn">SELECT</span> | Open scraping & account settings |
| <span class="gamepad-btn btn-b">B</span> | Quit to muOS |

### Single ROM Screen

| Button | Action |
|:---|:---|
| <span class="gamepad-btn">D-pad Up/Down</span> | Navigate ROM list |
| <span class="gamepad-btn btn-a">A</span> | Scrape artwork & metadata for highlighted ROM |
| <span class="gamepad-btn btn-x">X</span> | Download manual to `ROMS/Game Manuals/` |
| <span class="gamepad-btn btn-y">Y</span> | Toggle filter: show missing artwork only |
| <span class="gamepad-btn">SELECT</span> | Open settings |
| <span class="gamepad-btn btn-b">B</span> | Return to main screen |

---

## Output Structure

ScrapMu populates the standard muOS catalogue folders:

```
MUOS/info/catalogue/<system>/
├── box/         # Template-rendered 3D/2D cover art (e.g. Retro Dither)
├── preview/     # Cached screenshot preview
└── text/        # Artie-format metadata: synopsis, genre, rating & release year
```

---

## Installation

1. Download the latest `.muxapp` from [ScrapMu Releases](https://github.com/fragilesilver/ScrapMu/releases).
2. Copy it to `ARCHIVE/` on your SD card.
3. On the device: **Applications → Archive Manager**, select the file.
4. Launch from **Applications → ScrapMu**.
