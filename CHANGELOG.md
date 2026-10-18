# Changelog

Every version is also kept as a download on the
[Releases page](https://github.com/hugecrankhank/Rando-hub/releases): a zip
with the whole app, crowd control and instructions, so any version can be
played again later.

## 1.3.4 (2026-10-18)

**Crowd Control+**
- Fixed test buttons and the subathon timer doing nothing for minutes, then everything
  firing at once. The Overlays tab's previews each held a connection open, and browsers
  allow only about 6 to one address, so the buttons had to wait. The previews now share
  the control panel's connection (buttons answer instantly with every preview open).
- Starting Crowd Control+ no longer opens a second control panel tab when one is already
  open, and the panel shows a red bar if it's open in more than one tab.

## 1.3.3 (2026-10-18)

- Crowd Control+ keeps running if something goes wrong while handling a game message
  (it logs the error in the black window instead of closing).
- The game's Crowd effects menu shows how many effects are waiting and, during a boss
  detour, which boss and what stage it's at. A boss test that can't start now says why.

## 1.3.2 (2026-10-18)

- Boss detour:
  - The BOSS DETOUR banner now sits at the very top of the game, over the HUD, instead
    of over the room. It's the only announcement: no extra gift card for detours.
  - Fixed getting stuck in a dungeon lobby (seen at Swamp Palace), which also blocked
    the test buttons until the app was restarted. The detour no longer waits for Link
    to be "unfrozen", drops in through another lobby if the first doesn't work, and
    every detour now ends on its own at the latest 45 s after its timer, whatever happens.

## 1.3.1 (2026-10-18)

- Boss detour: fixed only a narrow strip of the room showing (seen at Agahnim 2). The
  screen mask from the entrance's spotlight effect is now turned off when Link arrives.

## 1.3.0 (2026-10-18)

- **Gift alerts on the game:** each gift, follow or share that sets off an effect shows a
  card over the hearts (top right of the HUD) for 3 seconds: who sent it, the gift, and
  what it does. Like the MSU "NOW PLAYING" card, it's part of the game picture, so it's
  on stream without adding an overlay. On by default; ... menu → Crowd effects → "Gift
  alerts over the hearts". Several at once take turns.

## 1.2.6 (2026-10-18)

- Fixed rupee crowd effects (+50 / -50, and the boss detour's "survived" reward) cutting a
  wallet over 999 down to 999. Randomizer wallets go to 9999.

## 1.2.5 (2026-10-18)

- **Boss detour:**
  - The boss is always there: a boss already beaten in your run is brought back for the
    detour, and Blind's fight starts without bringing the maiden. Before, Thieves' Town
    could be an empty room.
  - Link lands in the part of the room where the boss actually is (found from the boss
    itself, so it also works with boss shuffle), on open floor away from the boss.
- **Crowd Control+:** "Test one boss" on the Live games tab sends Link to any boss you
  pick, for checking each fight. Gifts set to the random boss still pick at random.

## 1.2.4 (2026-10-18)

- **Boss detour:** Link now lands on open floor inside the boss arena with the camera
  on him. Before, he kept his spot from the dungeon's entrance room, so he could end up
  inside a wall (Ice Palace) or in the wrong part of the room (Thieves' Town). Entry
  spots come from the boss doors (thanks to the lttphack practice ROM's presets);
  rooms without one use the part of the room with the most floor. Falling into a pit
  during a detour also puts him back there.

## 1.2.3 (2026-10-18)

- Fixed the **drunk wobble** crowd effect: it showed as applied but the picture didn't move
  unless another screen effect (mirror, upside down, tiny) was on at the same time.

## 1.2.2 (2026-10-18)

**Crowd Control+**
- Overlays: new `?screen=green` (or `?screen=magenta`) option, a solid colour behind the
  overlay for apps that can't show a see-through page (add a Chroma Key filter). The
  Overlays tab and INSTRUCTIONS.txt explain the "white box" fix.
- EFFECTS-OVERVIEW.md now lists every effect (screen flip, wobble, boss detours …);
  release zips always copy in the current list.

## 1.2.1 (2026-10-18)

- Crowd Control+ now opens the control panel in your browser by itself when it starts,
  as the instructions say (it only printed the address before).

## 1.2.0 (2026-10-17)

**Rando Hub**
- Boss detour crowd effects: `boss_ganon`, `boss_aga`, `boss_random`. The game takes a
  save state, drops Link into the fight, and loads the save when the fight ends (time's
  up, Link falls, or he wins), so the run continues untouched. Length is
  `durations.boss_detour` (60 s). ⚙ menu → "End boss detour now" ends one early.

**Crowd Control+**
- Boss detour card on the Live games tab: rewards for winning or surviving (effect and
  subathon seconds), test buttons, and a "Rescue Link" gift effect (`detour_rescue`).
- Gold BOSS DETOUR alerts at the start and end of each detour.

## 1.1.1 (2026-10-17)

- The "NOW PLAYING" MSU card now sits at the top of the game, over the rupee, bomb
  and arrow counters, so it never covers Link or the room.

## 1.1.0 (2026-10-17)

**Rando Hub**
- "NOW PLAYING" card on the game for 3 seconds whenever the MSU-1 pack changes
  (♪ menu, 🎲 roll or a crowd gift), with or without crowd control.
- New crowd effects: mirror mode, upside down, drunk wobble, tiny screen, retro CRT,
  speed up (1.5x), slow motion, freeze, fairy or bee in a bottle, pink Link and music
  roulette (a random song from the MSU-1 pack).
- With crowd effects on, the game sends run stats (deaths, checks, where Link is,
  music, seed) to the bridge.

**Crowd Control+**
- Live games: chat votes, team battle (Light vs Dark World), mystery box slot
  machine, combo meter and predictions, each with an overlay and panel controls.
- Run & stream: run stats overlay, death tax, clip markers (automatic, Mark now and
  viewers' `!clip`), hall of fame (all-time gifters) and welcome-back pop-ups.

## 1.0.2 (2026-10-17)

- New second download: **Crowd Control+** (`Crowd-Control-Plus-v1.0.2.zip`), the
  crowd control bridge with a control panel (gift setup with menus, test buttons,
  live event log, profiles) and stream overlays in the Rando Hub style: gift alerts
  with sounds, goal bars, top gifters, recent events and chat command replies, plus
  reading chat aloud. Source in `crowd-plus/`.

## 1.0.1 (2026-10-17)

- New Rando Hub logo: a red-and-white randomizer die with "RANDO HUB" in pixel
  lettering, as the app icon and in the header.
- Header name now uses the Press Start 2P pixel font (bundled, works offline).

## 1.0.0 (2026-10-17)

First public release of **Rando Hub** (previously tested as ALTTPR Snes9x Beta).

- A Link to the Past Randomizer on a built-in Snes9x emulator (WebAssembly),
  with graphics filters (6xBRZ, 4xBRZ, CRT, sharp pixels and more), save states,
  button remapping and an on-screen controller that sits over the game.
- Hutch's item tracker and map autotracking from live game memory, with Phone,
  Tablet, Stacked, Desktop (pop-out windows) and Classic layouts.
- Three seed generators: alttpr.com, Kara's branch (door / entrance /
  overworld shuffles) and AVIANART, plus the Customizer, saved presets,
  Reroll, seed links and race seeds.
- Link sprites from the alttpr.com library, MSU-1 music packs, Resume last
  game, and offline play.
- TikTok LIVE crowd control: gift effects, seed rolls by coins, a subathon
  clock and a scrolling gift list for OBS / TikTok LIVE Studio.
- Installs as an app on phones, tablets and computers (PWA).
- Downloadable zip with INSTRUCTIONS.txt, launchers to play from your own
  computer, the crowd control bridge, and the relay sources.
