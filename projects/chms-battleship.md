---
layout: default
title: CHMS Battleship Royale
parent: Web & Games
nav_order: 1
description: "Classroom battle-royale Battleship game powered by Cambridge IGCSE pseudocode problems."
---

# CHMS Battleship Royale
{: .fs-9 }

A classroom battle-royale version of Battleship. Teams share one big ocean arena and earn shots by solving **Cambridge-style pseudocode problems (IGCSE / O Level 0478 / 2210)**. The last crew with a ship afloat wins.
{: .fs-5 .text-grey-dk-000 }

[View Source on GitHub](https://github.com/fragilesilver/chms-battleship){: .btn .btn-primary .fs-4 .mb-4 .mb-md-0 }

---

Students play on their own phones or laptops. The teacher runs the game from a dashboard, and the entire class watches the live naval chart on the classroom projector.

## How It Works

* **Instant Access**: Students scan a QR code from the projector, enter their callsign, choose a team, and play immediately without needing logins or passwords.
* **Teacher Dashboard (`teacher.html`)**: Orchestrate teams, fleet sizes, starting shots, storm radius intervals, and grant bonus shots during play.
* **Projector Arena (`projector.html`)**: Spectator view projecting the communal ocean grid, incoming hits, sunken ships, and closing storm walls.
* **Specialist Crew Roles**: Captain, Gunner, Navigator (sonar scans), Scientist (airstrikes), and Crew (earn shots and suggest targets).

---

## Specialist Roles

| Role | Responsibility |
|:---|:---|
| **Captain** | Places the fleet and assigns specialist positions to crew members |
| **Gunner** | The primary player authorized to target coordinates and fire artillery |
| **Navigator** | Solves logic to unlock radar sweeps and sonar scans |
| **Scientist** | Completes algorithms to recharge tactical airstrikes |
| **Crew** | Solves questions to earn shots and recommends coordinates to the gunner |

---

## Cambridge-Style Pseudocode Engine

To earn shots, students solve genuine IGCSE and O Level syllabus questions covering trace tables, loops, conditional statements, and array manipulations:

```
DECLARE Total : INTEGER
Total <- 0
FOR Count <- 1 TO 5
    IF Count MOD 2 = 0 THEN
        Total <- Total + Count
    ENDIF
NEXT Count
OUTPUT Total
-- What is the final value of Total?
```

---

## Technical Stack

* **Frontend**: HTML5, CSS3, Vanilla ES6 JavaScript, Canvas.
* **Backend & State**: Firebase Realtime Database with anonymous authentication.
* **Hosting**: GitHub Pages.
