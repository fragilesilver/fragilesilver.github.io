# fragilesilver.github.io

Official personal portfolio, showcase, and documentation website for **fragilesilver**, featuring:
- **MustardOS Andromeda App Suite**:
  - [ClockMu](https://fragilesilver.github.io/apps/clockmu/) (Full-featured alarm clock)
  - [JarMu](https://fragilesilver.github.io/apps/jarmu/) ("Shake the jar" weighted random game picker)
  - [BatteryMu](https://fragilesilver.github.io/apps/batterymu/) (Live battery and health monitor)
  - [SwapMu](https://fragilesilver.github.io/apps/swapmu/) (SRAM save swapper between Pickle and RetroArch)
  - [ScrapMu](https://fragilesilver.github.io/apps/scrapmu/) (Box art and metadata scraper with template compositing)
- **Web & Games**:
  - [CHMS Battleship Royale](https://fragilesilver.github.io/projects/chms-battleship/) (Multiplayer classroom game with Cambridge IGCSE pseudocode challenges)
- **MustardOS Installation Guide**:
  - [Step-by-step .muxapp Guide](https://fragilesilver.github.io/guide/install/)

## Tech Stack
- **Engine**: [Jekyll](https://jekyllrb.com/)
- **Theme**: [Just the Docs](https://github.com/just-the-docs/just-the-docs) (Custom `fskit` Dark Theme)
- **Deployment**: GitHub Pages (`gh-pages` branch)

## Local Development

```bash
# Build static site
export GEM_PATH="$HOME/.local/share/gem/ruby/3.4.0:/usr/lib/ruby/gems/3.4.0"
export PATH="$HOME/.local/share/gem/ruby/3.4.0/bin:$PATH"
jekyll build

# Serve locally
jekyll serve
```

## License
Open-source under MIT and GPL-3.0.

