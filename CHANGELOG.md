# Changelog

Every version is also kept as a download on the
[Releases page](https://github.com/hugecrankhank/Rando-hub/releases): a zip
with the whole app, crowd control and instructions, so any version can be
played again later.

## 1.14.3 (2026-10-27)

- **Games shown starts with Zelda 3 and Zelda 1 only.** The Guardian Legend, the Final
  Fantasy games and Patched games are off until you tick them in **Games shown ▾**.

## 1.14.2 (2026-10-27)

- **Games shown.** A **Games shown ▾** list in the Game row: untick the games you don't
  play and they disappear from the Game row, the header buttons, the other games'
  headers and menus, and the "Rerolls can land on" list (a hidden game can't be rolled
  into). Zelda 3 always stays. Hidden games still open by address.
- **EmoTracker removed** (18 MB): the web EmoTracker runtime and its ALTTPR pack, which
  hadn't been offered as a tracker since Mudora 2.0 took over. The overworld and dungeon
  map modules it shared with Mudora moved to `mudora/` (`romap.js`, `dungeons.js`,
  `dgworker.js`); nothing changes on screen.
- **Muffins' Tracker trimmed** (33 MB → 6 MB): it isn't a tracker you can pick any more,
  only the logic engine Mudora 2.0 runs out of sight, so his build no longer ships the old
  overlay images (his build never loaded them) or the 3,000 Link sprite previews for his
  own sprite picker (the hub has its own sprites). His launch page, presets, settings and
  logic are untouched; future builds (`mfns-build.yml`) stay trimmed.
- Download sizes: the site zip and the Windows app are about 45 MB smaller.

## 1.14.1 (2026-10-27)

- **Rerolls can land on: your pick of games.** The old "either game" checkbox is now one
  tick per game in the Game row: Zelda 3, Zelda 1, Guardian Legend, FF6 Worlds Collide.
  🎲 Reroll and Crowd Control's random preset / CHAOS seeds pick one of the ticked games
  at random (the game you're playing counts too), so you can keep rerolls inside the
  Zelda series, or open them up to Final Fantasy. *New seed (same settings)* always stays
  put. FF1, FF4 and FF5 are rolled on their own sites, so they can't be landed on. GLR
  and FF6 now take a reroll that lands on them (GLR gained a 🎲 Reroll button of its own)
  and roll a random preset for Crowd Control's preset / CHAOS kinds. Your old "either
  game" setting carries over.
- **Phone headers:** in Zelda 1, GLR and FF6 the row of game links folds into one
  **Games ▾** menu on narrow screens, so **New seed** is back on screen (it had been
  pushed off the right edge on iPhone).

## 1.14.0 (2026-10-27)

- **Three more Final Fantasy randomizers** (`ffr/`): **FF1 Randomizer**, **FF4 Free
  Enterprise** and **FF5 Career Day**, in the Game row (**FF1 ▸ FF4 ▸ FF5 ▸**), the header
  (**FF1·4·5 ▾**) and every other game's header (**FF ▾**).
  - Seeds are rolled on each randomizer's own site (a **Roll a seed** button explains the
    three steps; FF1R and Free Enterprise generate in your browser there), then **Play
    ROM file** here: the hub's NES for FF1, Snes9x for FF4 and FF5. The ROM is kept in
    this browser so **Continue** brings it back; saves, states (F5 / F8), autosave.
  - **Trackers read the running game:** FF1's 17 key items, orbs, ship/airship/bridge/
    canal, gold and shards; FE's 18 key items (found, and struck through once used),
    characters found, 35 bosses, chests, the key-item check count, and the seed's
    objectives with live progress and flags, read from the ROM; Career Day's 20 key
    items, 22 jobs, the key-item bosses and the event rewards, by area. Anything the
    game can't tell you, tick by hand.
  - Same screen rule as FF6: the picture at exactly its size, the tracker gets the rest,
    on desktop, iPad, tablets and phones.
  - *Caveat:* built from the randomizers' own source and tracker tools, tested against
    simulated memory (no real seeds here). FF4's "characters found" and FF5's key
    items are the two readings I'd check first on a real seed.
  - Not yet: in-page generators (FF1R's is .NET; Free Enterprise's API needs a key
    from its author; Career Day's runs on its server) and crowd control.

## 1.13.0 (2026-10-26)

- **New game: Final Fantasy VI: Worlds Collide** (`ff6wc/`, **FF6 ▸** in the Game row and
  the header). Roll a seed from your own Final Fantasy III (USA) v1.0 ROM, play it on the
  hub's Snes9x, and the tracker follows along.
  - **The generator is Worlds Collide itself** (MIT), run in your browser with Pyodide,
    the way Z1R runs ZORA: the same seed and flags give the same game as a computer
    would. Downloaded the first time you roll, then cached. Nothing is uploaded.
  - **Presets:** the Ultros League flags (character gating), the same with an open
    world, or any flag string pasted from ff6worldscollide.com. Download the ROM and
    the spoiler log, or play straight away.
  - **Tracker, read from the game's memory:** characters, espers, the 62 checks by
    area, dragons, bosses, Kefka's Tower open or not, the game's own counters, plus
    the seed's objectives and hash. Tick by hand what the game can't tell.
  - **Layout:** the picture gets exactly its size and the tracker the rest, on every
    screen: sideways (desktop, iPad and tablets held sideways) the picture is as tall
    as the page with the tracker on the right; upright (phones and tablets) it is as
    wide as the page with the tracker under it; narrow trackers show one tab at a time.
  - Saves, states (F5 / F8), Continue after the app was closed, Reroll (same flags),
    seed history, installable app. Picked by hand only: rerolls and Crowd Control
    never switch to it.
  - *Caveat:* built and tested against Worlds Collide's code with a stand-in ROM (no
    FF6 ROM here), so the first real seeds are the real test. The generator runs
    unchanged, so a seed's contents are Worlds Collide's; the page's job is the plumbing.
  - Not yet: FF6 crowd control effects and an FF6 item/shop reference. Say the word.

## 1.12.5 (2026-10-26)

- **Zelda 1 crowd control: 17 new effects** (mapped like the others in Crowd Control+; the
  bridge gets the new list when Zelda 1 connects):
  - **Whirlwind: random level / Level 1 / Level 8:** the recorder's whirlwind, summoned by chat.
    It sweeps in along Link's row, carries him off and drops him at that level's entrance, using
    the game's own tables, so shuffled entrances land right. Overworld only; one at a time.
  - **Sword gone / Sword downgrade (30 s), Sword upgrade:** the sword held at nothing or one
    grade lower for a while, or stepped up for good (Wooden → White → Magical).
  - **Ring gone / Ring downgrade (30 s), Ring upgrade:** the same for the Blue and Red Rings.
    Link's colour changes right away, as when a ring is picked up.
  - **Item gone (random)** and **Candle / Bow / Boomerang / Magical Rod / Ladder / Raft gone**
    (30 s): the item is taken for a while and comes back by itself. An item Link finds again
    (or upgrades) during the loan is his to keep. Each says why when Link doesn't have the item.

## 1.12.4 (2026-10-26)

- **Lighter on the PC, less input lag** (the SNES emulator):
  - **Filter → Auto** (the new default): starts at 6xBRZ and, if frames keep running long,
    steps down to 4xBRZ, then Sharp, and says so. Software rendering (no usable graphics
    driver) goes straight to Sharp. The level it settles on is remembered. Picking a filter by
    hand still works as before.
  - **Run-ahead** (⋯ → Graphics, off by default): shows each frame one frame early, like
    RetroArch's run-ahead, so a press shows up about 16 ms sooner. It runs the game twice per
    frame (about double the CPU): for computers, not phones.
  - **Sound 20 ms sooner on computers:** the sound queue is 40 ms there instead of 60 (phones
    and tablets keep 60, which they need), and each frame's sound is handed to the output
    without an extra copy.
  - **Windows app:** the GPU is used for the picture even where Chromium's driver blocklist
    would fall back to software rendering, and the page is rasterized on it too.

## 1.12.3 (2026-10-26)

- **Live games without Crowd Control** (HydeOut): the **GT big key game** (which Ganon's
  Tower chest has the big key, 1-22) and the **Digging Game** (which dig gives the prize,
  1-30), run right in Rando Hub. **🗝** and **⛏** at the right end of Mudora's map bar (by the
  maps, in every layout), and **🗝 Key game** / **⛏ Dig game** in the Desktop layout's window
  bar. Start a round, type in the guesses (a name and a number; one guess per name), and play:
  guesses close at the first GT chest / first dig, the game counts the chests and digs, and when
  the big key or the prize turns up the result shows over the game: exact guesses win, otherwise
  the closest. If the game can't tell (the big key came from outside GT), enter the number by
  hand. Rounds are kept per seed through a reload.

## 1.12.2 (2026-10-26)

- **Auto layout:** iPads get the iPad layout; every other touch tablet (Android) gets the Tablet
  layout, sideways and upright, with either tracker. Upright with Hutch's tracker, Auto now uses
  the upright arrangement like Tablet picked by hand (it squeezed the game between the maps).

## 1.12.1 (2026-10-26)

- **Tablet layout fits wide tablets** (16:10, like the Galaxy Tab S9 FE), using the whole screen:
  - **Mudora / Mudora 2.0, sideways:** a new arrangement. The game top left at exactly its
    picture's shape (no black bars), the counters (Checks, Deaths, Bonks, GT chests, dig game) in
    the strip under it, the items and dungeons in a column beside it, and Light World over Dark
    World filling the right side full height. Before, Tablet with Mudora fell back to the
    classic layout (two-row header, Mudora's options taking room, cramped maps). Auto picks it on
    Android tablets too.
  - **Upright (and on iPads):** the game box is cut to the picture's width, with the counters
    in the space beside it instead of black bars; the items get the full width again.
  - **Hutch's tracker, sideways:** the gap between the maps is sized for the screen (the game
    fills it at the maps' height, 24% bigger on a Tab S9 FE) until you set it with −/+; the
    bands no longer scale into two rows of dungeons on wide screens. **Upright**, Tablet now uses
    the upright arrangement (game on top) instead of squeezing the game between the maps.
  - The compact header fits on one row on an upright tablet.

## 1.12.0 (2026-10-26)

- **Patched games** (new page, `patched/`; **Patched ▸** next to Zelda 1 and GLR): play NES and
  SNES ROM hacks on Rando Hub's own emulators. Pick your original ROM and the hack's patch
  (**.ips**, **.bps**, **.ups**, or the **.zip** it came in): it's patched right in the browser
  and kept in a library, nothing uploaded and no games or patches shipped with the app.
  BPS / UPS patches check the ROM is the right one and say which one they want if not; SNES
  copier headers are added or taken off to match. Each game's **title screen becomes its
  cover** (picked by itself the first time you play), shown in the library and beside the
  game where the trackers usually are; **📸 Use this screen as cover** or **🖼 Choose a picture**
  to change it. Original ROMs can be remembered for the next hack. In-game saves and save
  states (F5 / F8) work as everywhere else.

## 1.11.4 (2026-10-26)

- **Zelda Classic button removed** (from 1.11.3): ZQuest Classic is better used as its own
  program. Everything else is unchanged.

## 1.11.3 (2026-10-26)

- **Zelda Classic ↗** next to the other games (the header and the Randomizer bar's Game row,
  on the hub, Zelda 1 and GLR): opens **ZQuest Classic**, Zelda Classic's engine (renamed and
  still developed since zeldaclassic.com closed), in its official web player with the original
  Zelda and its whole quest database. It runs in its own window: a pop-up in a browser, a
  window of its own in the Windows app, which stays open if you close Rando Hub. Its saves are
  its own.

## 1.11.2 (2026-10-26)

- **Z1R Training** (Zelda 1, beta): **🎯 Training** in Zelda 1's header. Record a speedrun
  route by playing it once (for example along with a run video), then **Guide** draws it
  over the game: an arrow at the edge to leave by, GO IN / EXIT / STAIRS / WARP where the
  route goes into a cave or level, the bush, wall, rock, grave or armos outlined with what
  to do (BURN, BOMB, PUSH, TOUCH), where to drop bombs, a dotted trail of the line to walk,
  and your own notes per screen. It follows you as you play and says where the route
  continues if you leave it. Routes export to a file to share, and import on any computer.
  Works with the normal game and with seeds. See `z1r/README.md` → Z1R Training.

## 1.11.1 (2026-10-26)

- **Counters under the dungeons on computers.** Mudora 2.0 and Mudora now show the counters
  (Checks out of the places there are, Deaths, Bonks, and Ganon's Tower chests with where the
  big key was, plus the digging game when it's on) in a **Counters** section below the dungeon
  list, in the Desktop, Tablet and Classic layouts and the Windows app. Until now they only
  showed beside the items in the iPad layout.

## 1.11.0 (2026-10-26)

- **Windows app.** Rando Hub now comes as a Windows program too:
  **`Rando-Hub-Windows-v1.11.0.zip`** on the [Releases page](https://github.com/hugecrankhank/Rando-hub/releases/latest). Unzip it anywhere and double-click
  **`Rando Hub.exe`**. Nothing to install: no browser, no Node.js. It's the same app as the
  website, in its own window with its own icon, and it plays offline (Kara's generator and
  its Python are built in).
  - Pop-out trackers, Stream windows, Timer and Broadcast open as real windows you can
    capture in OBS; the game keeps full speed when another window is in front.
  - **Updates:** it checks when it starts and every few hours. A new version gets a
    one-time alert and a green **Update vX.Y.Z** button at the top right of the header
    (otherwise the button reads **Check for updates**). **Download update** saves the new
    zip to Downloads; unzip it over the old folder and your saves stay.
  - **Menu → Version** switches between the built-in copy and the live website.
  - Saves stay in `%APPDATA%\Rando Hub`; a `data` folder next to the .exe makes it portable.
  - Seed links shared from the app point at the website, so anyone can open them.
  - Windows may say "Windows protected your PC" the first time (the app isn't
    code-signed): **More info → Run anyway**.
  - Built from each release by the Release workflow (`desktop/`, see `desktop/README.md`),
    so every new version gets its Windows zip automatically.

## 1.10.3 (2026-10-25)

- **Zelda 1's overworld map works like Mudora's:** drawn from the ROM at full detail (sharp
  pixels when zoomed in), zoom with the wheel or a pinch, drag to move, double-tap or ⟲ for the
  whole map. Every check is a pin on its own square, read from the ROM: the cave mouth, bombable
  wall, burnable bush, pushed rock or armos that opens it, the secret armos stairs and the armos
  item, and the Level 7 lake's stairs. Link is a blinking dot where he stands, and zoomed in the
  view follows him to a new screen. On phones the map takes the panel's height. Tap a pin (or a
  screen) for the same menu as before.

## 1.10.2 (2026-10-25)

- **Black and white Home Screen icon on iPhone** (the die, white on black, to sit with a
  monochrome Home Screen). iPad, Android and computers keep the colour icon, and the app itself
  keeps its colours. ⚙ Settings → **Home Screen icon**: Auto, Colour or Black & white. iOS reads
  the icon when you Add to Home Screen, so an icon already there changes once it's removed and
  added again.
- **No "Light World" / "Dark World" names over Mudora's maps** any more, on any device.

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
