export interface Project {
  title: string;
  slug: string;
  category: 'muOS App' | 'Web & Game' | 'Framework & Tool';
  version?: string;
  description: string;
  icon: string;
  href: string;
  githubUrl?: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'ClockMu',
    slug: 'clockmu',
    category: 'muOS App',
    version: '1.0.0',
    description: 'An alarm clock for muOS Andromeda on the Anbernic RG35XX family. Supports multiple alarms, repeat schedules, snooze, 15-minute presets, and 8 color themes.',
    icon: '/assets/icons/clockmu-logo.png',
    href: '/apps/clockmu',
    githubUrl: 'https://github.com/fragilesilver/ClockMu',
    tags: ['muOS Andromeda', 'LÖVE2D', 'fskit', 'Alarm Clock', 'RG35XX'],
    featured: true,
  },
  {
    title: 'JarMu',
    slug: 'jarmu',
    category: 'muOS App',
    version: '1.0.0',
    description: 'A "shake the jar" weighted random game picker for muOS Andromeda. Scans SD1 and SD2 ROMs + PortMaster ports, with in-app genre editing and retro CRT effects.',
    icon: '/assets/icons/jarmu.png',
    href: '/apps/jarmu',
    githubUrl: 'https://github.com/fragilesilver/JarMu',
    tags: ['muOS Andromeda', 'LÖVE2D', 'fskit', 'Game Selector', 'RG35XX'],
    featured: true,
  },
  {
    title: 'BatteryMu',
    slug: 'batterymu',
    category: 'muOS App',
    version: '1.0.0',
    description: 'Live battery and health monitor for muOS Andromeda. Real-time charge %, voltage levels, health readout, charge history graphs, and AXP2202 sysfs fallback.',
    icon: '/assets/icons/batterymu-logo.png',
    href: '/apps/batterymu',
    githubUrl: 'https://github.com/fragilesilver/BatteryMu',
    tags: ['muOS Andromeda', 'LÖVE2D', 'fskit', 'Hardware Monitor', 'RG35XX'],
    featured: true,
  },
  {
    title: 'SwapMu',
    slug: 'swapmu',
    category: 'muOS App',
    version: '1.0.0',
    description: 'Per-game SRAM save swapper bridging Pickle and RetroArch. Features core bridging, side-by-side save comparisons, and 3-tier safe backup confirmations.',
    icon: '/assets/icons/swapmu.svg',
    href: '/apps/swapmu',
    githubUrl: 'https://github.com/fragilesilver/SwapMu',
    tags: ['muOS Andromeda', 'LÖVE2D', 'fskit', 'Save Swapper', 'RG35XX'],
    featured: true,
  },
  {
    title: 'ScrapMu',
    slug: 'scrapmu',
    category: 'muOS App',
    version: '0.2.0',
    description: 'Box art and metadata scraper for muOS Andromeda combining Skyscraper template compositing (Retro Dither) with Artie-style rich descriptions via ScreenScraper.',
    icon: '/assets/icons/scrapmu-logo.png',
    href: '/apps/scrapmu',
    githubUrl: 'https://github.com/fragilesilver/ScrapMu',
    tags: ['muOS Andromeda', 'LÖVE2D', 'fskit', 'Box Art Scraper', 'RG35XX'],
    featured: true,
  },
  {
    title: 'CHMS Battleship Royale',
    slug: 'chms-battleship',
    category: 'Web & Game',
    version: '1.0.0',
    description: 'Classroom battle-royale version of Battleship where student crews share one big ocean and earn shots by solving Cambridge IGCSE / O Level pseudocode problems.',
    icon: '/assets/icons/chms-battleship.svg',
    href: '/projects/chms-battleship',
    githubUrl: 'https://github.com/fragilesilver/chms-battleship',
    tags: ['JavaScript', 'Firebase', 'IGCSE Computer Science', 'Multiplayer'],
    featured: true,
  },
  {
    title: 'fskit',
    slug: 'fskit',
    category: 'Framework & Tool',
    version: '0.3.0',
    description: 'A modular, high-performance LÖVE2D toolkit providing multi-resolution display management (640×480, 720×480, 720×720), gamepad input abstraction, 10 color themes, and persistent state.',
    icon: '/assets/icons/fskit.svg',
    href: '/apps',
    githubUrl: 'https://github.com/fragilesilver',
    tags: ['Lua', 'LÖVE2D', 'Handheld Framework', 'UI Kit', 'muOS'],
    featured: true,
  },
];
