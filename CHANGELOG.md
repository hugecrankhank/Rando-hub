# Changelog

Every version is also kept as a download on the
[Releases page](https://github.com/hugecrankhank/Rando-hub/releases): a zip
with the whole app, crowd control and instructions, so any version can be
played again later.

## 1.10.2 (2026-10-25)

- **Black and white Home Screen icon on iPhone** (the die, white on black, to sit with a
  monochrome Home Screen). iPad, Android and computers keep the colour icon, and the app itself
  keeps its colours. ⚙ Settings → **Home Screen icon**: Auto, Colour or Black & white. iOS reads
  the icon when you Add to Home Screen, so an icon already there changes once it's removed and
  added again.
- **No "Light World" / "Dark World" names over Mudora's maps** any more, on any device.
- **Zelda 1's overworld map works like Mudora's:** drawn from the ROM at full detail (sharp
  pixels when zoomed in), zoom with the wheel or a pinch, drag to move, double-tap or ⟲ for the
  whole map. Every check is a pin on its own square, read from the ROM: the cave mouth, bombable
  wall, burnable bush, pushed rock or armos that opens it, the secret armos stairs and the armos
  item, and the Level 7 lake's stairs. Link is a blinking dot where he stands, and zoomed in the
  view follows him to a new screen. On phones the map takes the panel's height. Tap a pin (or a
  screen) for the same menu as before. (On the website; the 1.10.2 download was made before it.)

## 1.10.1 (2026-10-25)

- **Zelda 1 and The Guardian Legend live in Rando Hub now** (`z1r/`, `glr/`, each a complete
  app with its README). The separate repositories they started in were for beta testing and
  are archived, so deploys no longer copy them in.
- **"◂ Zelda 3" is now just "Zelda 3"** in Zelda 1 and GLR: with three games, the buttons are
  plain names.

## 1.10.0 (2026-10-25)

Everything from the beta since 1.9.0 (its full notes are in the
[beta's changelog](https://github.com/hugecrankhank/Rando-hub-Beta/blob/main/CHANGELOG.md)).

Trackers:
- **Mudora 2.0 is the new default tracker:** Rando Hub's own tracker, drawn from the game
  itself (items cut from its pause menu, both worlds from the ROM, checks on their real
  spots), running the logic and settings of Muffins' Tracker 2.0 (with his permission, MIT).
  Each seed rolled here starts a game in it with the seed's settings; ⚙ Settings has his game
  and logic settings mid-game, all 67 of his presets with search, and Autotracking details.
- **Mudora (Hutch logic):** the same look with Hutch's logic.
- **Tracker choices:** Hutch, Hutch Beta, Mudora 2.0, Mudora, Off. Anyone who never picked one
  starts on Mudora 2.0; a choice made before is kept.
- Mudora: click a check to mark it, right click / press and hold for its card; dungeon prizes in
  their own colours (copied from the game's own world map, or picked); boss, keys and chests of
  the dungeon Link is in (and a pop-out card for OBS); dungeon maps (Explore, Map, Full);
  entrances on entrance-shuffle seeds, filled in as you walk through them; visible (orange)
  checks; counters for checks, deaths, bonks, the GT big key game and the Digging Game;
  icon styles (game pixels, smooth, or your own pictures).
- **⚙ Settings** in the header: Tracker world, Tracker dungeon items, Tracker keys (found / in
  hand / both), **Item sounds** (sound packs that play with every tracker), **Seed history**
  and **Credits**.

Games and layouts:
- **Zelda 1 (Z1R)** and **The Guardian Legend (GLR)** randomizers are in the hub (Game row in
  the Randomizer bar, or Zelda 1 ▸ / GLR ▸ in the header). Both seed generators are beta.
  "Rerolls can land on either game" mixes Zelda 3 and Zelda 1; GLR is only picked by hand.
- **iPad layout** (was "Stacked"), the starting layout on an iPad; other tablets start on Tablet.
- **Seed history:** every seed started here, with who rolled it and how, and a link to replay.
- **Playtesters in the ending** of every ALTTP randomizer seed played here.
- The seed's type and every generator setting shown under the seed code.

Crowd Control+ (download it again from this release):
- New effects: shield, sword (gone / down / up / stolen, which asks first) and tunic up / down,
  +1 / −1 heart container, item gone, any enemy (74 of them, anywhere), Lights on / Lights out,
  reveal a go-mode item, item sound pack switches, and Halloween effects (Blood drip,
  Spiderwebs, Monster mash, Spooky night, Ghost Link, Pumpkin Link and more).
- Instant death can't be blocked any more; one-hit KO kills through any mail.
- Live games: the GT big key game counts the 22 places the key can be; new **Digging Game**
  guessing (`!dig`).
- Subathon clock: likes, follows, shares, Super Fans, community members and comments add time;
  the control panel's clock no longer runs fast.
- Gift goals for a single gift; scrolling gift list rows, order and per-gift hide; new Super
  Fan and community member alerts.

Fixes:
- Installed apps on this site no longer get mixed up (an installed app could open another game).
- Double tap no longer zooms the page on iPhone / iPad; controller buttons can be remapped one
  after another; long press on a tracker no longer selects text.

## 1.9.0 (2026-10-19)

Crowd Control+:
- **GT big key guessing game** (Live games tab): chat guesses which Ganon's Tower chest
  has the big key (`!gt 1`–`!gt 26`, one guess each). The game counts the GT chests
  opened (26 chests, not Bob's Torch; the same flags Hutch's tracker reads) and reports
  the count when the big key arrives, so exact guesses win, or the closest. Guesses
  close at the first GT chest (or by hand); the number can be set by hand if the game
  couldn't count it. New "GT big key" overlay (guesses per chest, chests opened,
  winners) and an optional "BIG KEY FOUND!" alert. Test button.

## 1.8.0 (2026-10-19)

Crowd Control+:
- **Checks and bosses on the subathon clock** (Subathon tab → Progress on the clock):
  each new check and each boss beaten takes time off the clock (or adds time), e.g.
  1 minute per check and 5 minutes per boss. Counts from when Crowd Control+ first
  sees the game, so a game picked up halfway doesn't take hours off at once; a new
  seed starts over; boss detours don't count. The clock overlay shows each change
  (red for time off, with the reason) and bosses can pop a "BOSS DEFEATED!" alert.
  Test buttons for both.
- The game now reports which bosses are beaten (the 10 dungeon bosses, Agahnim,
  Agahnim 2) along with the other run stats.
- Fix: boss detours used the wrong bit for "boss beaten" (now the room flag's 0x08,
  the same bit the trackers read). "Random boss" now really skips beaten bosses,
  and a detour to a beaten boss brings him back for the fight.

## 1.7.1 (2026-10-19)

- **License:** Rando Hub and Crowd Control+ are now under the PolyForm Strict License
  1.0.0 (`LICENSE.md`), with added permission to use them on streams and videos,
  monetized ones included (`NOTICE.md`). Anything beyond that (copying code, changes,
  re-hosting, commercial use) needs permission: open a "Permission request" issue.
  Other people's parts keep their own licenses. Both zips now include the license.

## 1.7.0 (2026-10-18)

Stream layouts for the tracker (Desktop layout), two ways:
- **Stream windows:** one click opens two windows set up for capture: items + dungeons
  in one, the Light and Dark World side by side in the other. Black background,
  fitted to the window, menu bars hidden (all changeable in each window's options).
  Click again to put them back.
- **Stream:** one window with everything (items and dungeons on top, both worlds
  below) for a single OBS capture. Maps below or beside the items, a divider you can
  drag, one background for both.

## 1.6.0 (2026-10-18)

New crowd control, from playtester requests:
- **Random enemy** (`enemy_random`): spawns a random enemy a few steps from Link, chosen
  from the ones whose graphics are already loaded in that area (each area loads four
  sprite sheets; enemies from other sheets would show as garbled tiles). Sheet needs come
  from Enemizer (MIT). Indoors it picks open floor. If nothing fits, it copies a nearby
  enemy like Extra enemy.
- **Warps:** `warp_dungeon` drops Link into a random dungeon entrance (the dungeon he
  leaves keeps its small keys); `warp_flute` opens the game's flute menu and the bird
  takes him to a random flute spot (Light World outdoors; elsewhere it falls back to a
  dungeon); `warp_random` does either. The gift card says where he went.
- **Several like triggers:** e.g. +1 heart every 300 likes, small magic every 500, full
  heal every 2000, each counting on its own. Edit them on Gifts & effects (old single
  `likes` settings still work). New `magic_small` effect (¼ meter).
- **Boss detour random boss** only picks bosses not beaten yet in the run (Ganon always
  can be picked), so no empty arenas.

## 1.5.0 (2026-10-18)

**Crowd Control+**
- **Local signer (recommended): no TikFinity needed.** Dashboard → TikTok connection: type
  your TikTok name and click Connect. Crowd Control+ opens your own LIVE page in its own
  Chrome / Edge window (separate profile, so the TikTok login is remembered; muted) and
  reads the gifts, likes, follows, shares and chat TikTok sends that page, over Chrome's
  debugging connection. Free, no other apps, no keys, no npm packages
  (`crowd-plus/localsigner.mjs`: a small WebSocket client and protobuf reader of our own).
- **TikFinity is the one-click backup** if a TikTok update breaks the local signer:
  Dashboard → TikTok connection → "TikFinity (backup)". Switching needs no restart.
- New installs default to the local signer; existing `mapping.json` files that say
  `"source": "tikfinity"` keep TikFinity until switched on the Dashboard.
- The advanced "direct" source now defaults to Euler Stream's free Community plan.
- Instructions, README and release notes: local signer first, TikFinity as the fallback.
- The local signer's browser profile (`crowd-plus/tiktok-window/`, holds the TikTok login)
  is never put in release zips or the repository.

## 1.4.0 (2026-10-18)

- **Crowd Control+ is the only crowd control.** The Rando Hub zip no longer has a "Crowd
  Control" folder; crowd control is the second download, `Crowd-Control-Plus-vX.zip`.
  The old panel-less bridge is archived in `archive/crowd-control-standard` (and in
  every release up to 1.3.7). Its `mapping.json` works as-is in Crowd Control+.
  README, INSTRUCTIONS and release notes updated to match.
- **Test buttons in both places:**
  - Control panel → Gifts & effects → **Test any effect**: one button per effect the game
    has, plus the mystery box and the boss-detour rescue.
  - Game → ⋯ menu → Crowd effects: **Test one boss** (any of the 13), and while connected
    to Crowd Control+, **Fake gift** (alert + effect) and **Mystery box**.
- Boss tests pressed during a detour now wait their turn instead of being dropped.

## 1.3.7 (2026-10-18)

- Boss detour to Ganon: fixed getting stuck in a black room until "couldn't reach the boss".
  Ganon is now reached like the other bosses (dungeon lobby, then straight to his room)
  instead of the Pyramid hole drop.

## 1.3.6 (2026-10-18)

- The game's … menu → Crowd effects now lists the last few things that happened to crowd
  effects (test pressed, queued, running, boss detour start / warp / end, any error), to
  track down effects that don't fire.

## 1.3.5 (2026-10-18)

- If crowd effects (or a test) are waiting more than a few seconds, the game says why on
  screen: a boss detour still running, or Link not in normal play (with the details).

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
