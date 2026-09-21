# UnleashX Dashboard Guide for the Original Xbox

A practical guide to using the UnleashX dashboard on a modded original Xbox.

---

## Table of Contents

1. [Understanding the Main Screen](#1-understanding-the-main-screen)
2. [Launch DVD](#2-launch-dvd)
3. [Games](#3-games)
4. [Applications](#4-applications)
5. [Emulators](#5-emulators)
6. [File Manager](#6-file-manager)
7. [Understanding the Xbox Partitions](#7-understanding-the-xbox-partitions)
8. [The White Button](#8-the-white-button-your-friend)
9. [Copy vs. Move](#9-dont-confuse-copy-and-move)
10. [FTP](#10-ftp--the-best-way-to-manage-a-modded-xbox)
11. [Finding the Xbox's IP Address](#11-finding-the-xboxs-ip-address)
12. [FTP Credentials](#12-ftp-credentials)
13. [Network FTP vs. File Manager](#13-network-ftp-vs-file-manager)
14. [Settings](#14-settings)
15. [System Settings](#15-system-settings)
16. [Game Saves Manager](#16-game-saves-manager)
17. [Launching the Original Microsoft Dashboard](#17-launching-the-original-microsoft-dashboard)
18. [`config.xml`](#18-configxml--the-secret-sauce)
19. [Example Custom Menu](#19-example-custom-menu)
20. [Skins](#20-skins)
21. [Dashboard vs. Game](#21-dashboard-vs-game)
22. [Recommended HDD Layout](#22-a-good-layout-for-your-xbox)
23. [Things You Should Not Do](#23-things-i-would-not-do-from-unleashx)
24. [Three Tools to Learn First](#24-the-three-tools-id-learn-first)
25. [Ripping an Original Xbox Game to the HDD](#25-ripping-an-original-xbox-game-to-the-hdd)
26. [Ripping vs. FTP Transfer](#26-ripping-vs-ftp-transfer)
27. [Verifying a Ripped Game](#27-verify-the-game-after-ripping)
28. [Recommended Game-Ripping Workflow](#28-recommended-workflow-for-your-xbox-collection)
29. [Mental Model](#29-the-big-picture)

---

# 1. Understanding the Main Screen

UnleashX is a replacement dashboard for a modded original Xbox. Think of it as the Xbox's **desktop and launcher**: instead of only managing saves and system settings like the Microsoft Dashboard, UnleashX can launch games and applications, browse the hard drive, transfer files over FTP, manage network settings, and customize the interface.

A typical UnleashX installation may have menus similar to:

```text
                 UNLEASHX
────────────────────────────────────

 Launch DVD

 Games
 Applications
 Emulators

 File Manager

 System
   Settings
   Game Saves Manager
   Misc

 Reboot
 Shutdown
```

**Your exact menu will probably look different.**

UnleashX is highly customizable. The menu structure is controlled largely by `config.xml`, and different softmods, installers, skins, and custom configurations can add or remove entries.

## Basic Controller Navigation

| Button | Typical Function |
|---|---|
| D-pad / Left Stick | Navigate |
| A | Select / Launch |
| B | Back |
| Black / White | Context / Options |
| Start | Menu / Settings in some screens |
| Back | Back / Cancel in some screens |

The **White button** is particularly important because UnleashX uses it for context menus in places such as the File Manager.

---

# 2. Launch DVD

### `Launch DVD`

This launches whatever Xbox game is currently in the DVD drive.

If UnleashX recognizes the disc, it will generally allow you to launch the game.

This is essentially the modded-Xbox equivalent of putting a game in a stock Xbox and letting it boot.

---

# 3. Games

### `Games`

This is probably the menu you'll use most.

UnleashX can scan configured game directories such as:

```text
E:\Games
F:\Games
G:\Games
```

depending on your configuration.

For example:

```text
F:\Games
    Halo 2
        default.xbe

    Halo
        default.xbe

    Star Wars Battlefront
        default.xbe
```

UnleashX detects the Xbox executable (`.xbe`) and presents the folder as a launchable game.

## Important Concept: XBE

An Xbox game is not normally launched from an ISO.

The Xbox ultimately launches an executable:

```text
default.xbe
```

A typical extracted game therefore looks something like:

```text
F:\Games\Halo 2\
    default.xbe
    maps\
    sounds\
    media\
    ...
```

When you select **Halo 2** in UnleashX, you are ultimately telling it to execute:

```text
F:\Games\Halo 2\default.xbe
```

---

# 4. Applications

### `Applications`

Applications are essentially everything that isn't an Xbox game.

Examples include:

- XBMC
- XBMC4Gamers
- DVD2Xbox
- Chimp
- XBlast
- FTP utilities
- Diagnostic tools
- Other homebrew applications

A typical application directory might look like:

```text
E:\Apps\DVD2Xbox\
    default.xbe
```

UnleashX can detect the XBE and add the application to its menu.

---

# 5. Emulators

### `Emulators`

Emulators work similarly to applications.

For example:

```text
E:\Emulators
    SNES
    NES
    Genesis
    MAME
```

A typical emulator installation might look like:

```text
E:\Emulators\SNES\
    default.xbe
    roms\
    ...
```

UnleashX can launch the emulator from the Emulators menu.

---

# 6. File Manager

The File Manager is one of the most useful features of UnleashX.

It allows you to browse the Xbox's FATX filesystem.

You will typically see:

```text
C:\
E:\
F:\
G:\
```

The exact partitions available depend on your Xbox, HDD, BIOS, and configuration.

You can use the File Manager to:

- Browse files and folders
- Copy files
- Move files
- Delete files
- Rename files
- Create directories
- Launch XBE files
- Inspect the filesystem

---

# 7. Understanding the Xbox Partitions

## C:

C: contains important system and dashboard files.

You may see files such as:

```text
C:\
    xboxdash.xbe
    evoxdash.xbe
    default.xbe
    config.xml
```

**Be extremely careful here.**

On a softmodded Xbox especially, deleting or replacing the wrong files on C: can prevent the Xbox from booting.

---

## E:

E: is traditionally used for user data, saves, applications, and other Xbox data.

You may see:

```text
E:\Apps
E:\Games
E:\Emulators
E:\Saves
```

The exact layout varies by installation.

The stock Xbox also uses E: for game saves and other data, so don't casually wipe the partition.

---

## F:

On many upgraded Xboxes, F: is where a large portion of the game library is stored.

For example:

```text
F:\Games
```

If your Xbox has a large HDD, F: may contain hundreds of gigabytes of content.

---

## G:

Some configurations also use:

```text
G:\
```

for additional storage.

Whether G: exists and how much space it has depends on your HDD, BIOS, partitioning, and configuration.

With CerBIOS and large HDDs, pay particular attention to how F: and G: are configured.

---

# 8. The White Button: Your Friend

When you're in File Manager, highlight a file or folder and press **White**.

You'll generally get a context menu containing operations such as:

```text
Copy
Move
Delete
Rename
Create Folder
Launch
Properties
```

The exact options depend on what you've selected.

### Example

Suppose you have:

```text
E:\Apps\MyApp\
```

and want to copy it to F:.

You could:

1. Highlight `MyApp`.
2. Press **White**.
3. Select **Copy**.
4. Navigate to `F:\Apps`.
5. Complete the copy operation.

---

# 9. Don't Confuse Copy and Move

This matters when you're working with large Xbox games.

## Copy

```text
E:\Games\Halo
        ↓
F:\Games\Halo
```

The original remains intact.

## Move

```text
E:\Games\Halo
        ↓
F:\Games\Halo
```

The original is removed after the move.

For important files, **copy first**.

Especially when you're working on the dashboard itself.

---

# 10. FTP — The Best Way to Manage a Modded Xbox

If your Xbox is connected to your network, UnleashX can provide an FTP server. This allows your PC to browse the Xbox's filesystem over the network.

The basic setup looks like:

```text
PC
 │
 │ FTP
 ▼
Original Xbox
 ├── C:\
 ├── E:\
 ├── F:\
 └── G:\
```

Your PC can then be used to transfer files to and from the Xbox.

FTP is generally much easier than using the controller for large file transfers.

## Good Uses for FTP

- Installing games
- Installing applications
- Installing skins
- Copying large files
- Backing up Xbox files
- Editing `config.xml`
- Managing a large game library

---

# 11. Finding the Xbox's IP Address

Go into the network settings, usually through something similar to:

```text
System
    Settings
        Network
```

Depending on your UnleashX configuration, you may see:

```text
IP Address: 192.168.1.150
Subnet:     255.255.255.0
Gateway:    192.168.1.1
DNS:        ...
```

Your PC's FTP client can then connect to the Xbox's IP address.

If you change network settings, UnleashX may have a **Reset Network** option so the new configuration takes effect.

---

# 12. FTP Credentials

The default FTP credentials on many UnleashX installations are:

```text
Username: xbox
Password: xbox
Port:     21
```

**However, don't assume these are correct for every installation.**

Some modern softmods or custom configurations use different credentials or FTP behavior.

---

# 13. Network FTP vs. File Manager

A good rule of thumb:

## Use UnleashX File Manager for:

- Quick file operations
- Renaming something
- Launching an XBE
- Checking a directory
- Small changes

## Use FTP for:

- Installing games
- Installing applications
- Installing skins
- Copying large files
- Backing up the Xbox
- Editing `config.xml`
- Managing hundreds of files

For regular Xbox management, **FTP should generally be your primary management method**.

---

# 14. Settings

Go to:

```text
System
    Settings
```

This is where you'll find UnleashX's configuration.

Depending on your version and configuration, you may find settings for:

- Video
- Network
- System
- Audio
- Date and time
- Xbox name
- Dashboard behavior

## Video Settings

Depending on your Xbox's video hardware and configuration, you may see options related to:

- 480i
- 480p
- 720p
- 1080i
- Widescreen

Available options depend on the Xbox's video setup and connected display.

---

# 15. System Settings

System settings can provide useful information about your Xbox and UnleashX installation.

You may find:

```text
Xbox Name
Date
Time
Network
Video
Audio
```

You can also typically see the installed UnleashX version.

---

# 16. Game Saves Manager

UnleashX includes a game-save manager.

You can use it to manage save data for your games.

You may see something like:

```text
Game Saves
    Halo 2
    Halo
    Star Wars Battlefront
    ...
```

Depending on your version/configuration, you can:

- View saves
- Copy saves
- Move saves
- Delete saves
- Manage save data

---

# 17. Launching the Original Microsoft Dashboard

A modded Xbox can often still launch the original Microsoft Dashboard if the required dashboard files are present.

Your UnleashX menu may contain something such as:

```text
MS Dashboard
```

or:

```text
Microsoft Dashboard
```

The original dashboard is commonly associated with:

```text
C:\xboxdash.xbe
```

However, modern softmods may use shadow C: partitions or other configurations.

**Do not move or replace dashboard files based solely on this path.**

---

# 18. `config.xml` — The Secret Sauce

One of the most important files for customizing UnleashX is:

```text
config.xml
```

This file controls much of the dashboard's menu structure and behavior.

You can use it to create menu structures such as:

```text
Games
    Xbox Games
    Homebrew

Applications
    XBMC
    DVD2Xbox
    Chimp

Emulators
    Nintendo
    Sega

Utilities
    File Manager
    Network
```

Before modifying `config.xml`, make a backup.

A malformed configuration can cause dashboard problems.

---

# 19. Example Custom Menu

A menu item can point directly to an executable.

For example:

```xml
<Item Action="E:\Apps\XBMC\default.xbe">XBMC</Item>
```

This could produce a menu entry such as:

```text
Applications
    XBMC
```

Selecting it launches:

```text
E:\Apps\XBMC\default.xbe
```

This is one reason UnleashX is so flexible.

---

# 20. Skins

UnleashX is highly customizable and supports skins.

A skin can change the dashboard's appearance without replacing its underlying functionality.

You might have skins such as:

```text
Default
Xbox
Halo
Retro
Synthwave
Minimal
```

For a JB Old Skool Games setup, a custom skin could incorporate:

- Original Xbox styling
- Cyan/magenta accents
- Dark background
- CRT-inspired elements
- Retro game artwork
- JB Old Skool Games branding

---

# 21. Dashboard vs. Game

This is an important concept when working with a modded Xbox.

Think of the Xbox roughly like this:

```text
                   XBOX
                    │
                    ▼
              BIOS / Mod
                    │
                    ▼
                DASHBOARD
                    │
          ┌─────────┼──────────┐
          ▼         ▼          ▼
        Games      Apps     Emulators
          │         │          │
          ▼         ▼          ▼
        XBE       XBE         XBE
```

**UnleashX is not the Xbox's underlying operating system.**

It is a dashboard/launcher application.

That is why you can have multiple dashboards installed, such as:

```text
UnleashX
XBMC
XBMC4Gamers
EvolutionX
Avalaunch
```

and launch one from another.

---

# 22. A Good Layout for Your Xbox

For a modern large-HDD Xbox, a reasonable organization is:

```text
C:\
└── System / Dashboard files

E:\
├── Apps
│   ├── XBMC
│   ├── DVD2Xbox
│   ├── Chimp
│   └── Utilities
│
├── Emulators
│   ├── NES
│   ├── SNES
│   ├── Genesis
│   └── ...
│
└── Saves

F:\
└── Games
    ├── Halo
    ├── Halo 2
    ├── Fable
    ├── Morrowind
    └── Star Wars Battlefront
```

Your exact F:/G: arrangement can differ, especially with CerBIOS and large HDD configurations.

---

# 23. Things I Would NOT Do From UnleashX

This is particularly important if you're working on Xboxes for other people.

## Don't randomly delete files from C:

C: can contain boot-critical files.

## Don't overwrite dashboard files without a backup.

Before changing files such as:

```text
config.xml
default.xbe
evoxdash.xbe
xboxdash.xbe
```

make a backup.

## Don't assume every Xbox uses the same dashboard path.

You could have configurations such as:

```text
C:\Dashboard
E:\Dashboard
E:\Dash\UnleashX
C:\UnleashX
```

and others.

## Don't assume F: and G: are configured identically.

BIOS and HDD configuration matter.

---

# 24. The Three Tools I'd Learn First

If you're new to UnleashX, focus on these three areas.

## 1. File Manager

Learn:

```text
C:
E:
F:
G:
Copy
Move
Delete
Rename
Launch XBE
```

This gives you an understanding of the Xbox filesystem.

## 2. FTP

Learn how to manage:

```text
PC
 ↓
FTP
 ↓
Xbox
```

Once you can do this, managing an Xbox becomes dramatically easier.

## 3. `config.xml`

Once you understand this file, you can customize UnleashX into essentially whatever launcher you want.

---

# 25. Ripping an Original Xbox Game to the HDD

One of the most useful features in your UnleashX configuration is the ability to copy an original Xbox game directly from the DVD drive to the internal hard drive.

Your dashboard exposes this directly as:

```text
System
    └── Copy Disc to HDD
```

This is the primary procedure for your setup.

## What You Need

- A modded original Xbox
- UnleashX
- An original Xbox game disc
- Enough free space on the HDD

## Step 1 — Insert the Game

Insert the original Xbox game into the Xbox DVD drive.

## Step 2 — Open the Copy Function

From the UnleashX main menu:

```text
System
    └── Copy Disc to HDD
```

Select **Copy Disc to HDD**.

## Step 3 — Select the Destination

When prompted for the destination, select the location where your games are stored.

For many large-HDD configurations this will be:

```text
F:\Games
```

However, your particular CerBIOS configuration may use F:, G:, or another configured location.

## Step 4 — Let the Xbox Copy the Disc

The Xbox will read the game from the DVD drive and copy it to the HDD.

The process may take a while because the original Xbox DVD drive is relatively slow.

**Do not turn off or reset the Xbox while the copy is in progress.**

Do not remove the disc during the operation.

## Step 5 — Return to Games

When the copy is complete, return to:

```text
Games
```

The newly copied game should appear in the game list.

Select it and press **A** to launch it.

---

# 26. What Happens During a Disc Rip?

The basic process is:

```text
Original Xbox Game Disc
          │
          ▼
     Xbox DVD Drive
          │
          ▼
      UnleashX
  Copy Disc to HDD
          │
          ▼
       Xbox HDD
          │
          ▼
      F:\Games
          │
          ▼
       UnleashX
        Games
          │
          ▼
      Launch Game
```

The game is copied as an extracted Xbox game directory rather than simply leaving an ISO file on the Xbox.

A typical result may look something like:

```text
F:\Games\Halo 2\

    default.xbe
    maps\
    sounds\
    videos\
    textures\
    ...
```

The important file is:

```text
default.xbe
```

UnleashX launches the game's XBE directly from the HDD.

---

# 27. Why Rip Games to the HDD?

There are several advantages.

## Faster and More Convenient Loading

The HDD can provide faster access than the original DVD drive for many operations.

## Less DVD Drive Wear

Instead of continually reading the physical disc:

```text
DVD → Laser → Game
```

the Xbox can run the game from:

```text
HDD → Game
```

This is particularly useful for an aging original Xbox DVD drive.

## Build a Local Game Library

Instead of swapping discs:

```text
Remove disc
↓
Insert another disc
↓
Wait for it to load
```

you can simply:

```text
UnleashX
   ↓
Games
   ↓
Select Game
   ↓
Launch
```

---

# 28. How Much Space Does a Game Need?

Original Xbox games vary considerably in size.

A game may occupy several gigabytes on the HDD.

Examples might range from:

```text
2 GB
3 GB
4 GB
5 GB
6 GB+
```

depending on the game and its contents.

This is one reason a modern HDD upgrade is so useful.

Before starting a copy, make sure you have enough free space on the destination partition.

---

# 29. Check Free Space Before Ripping

Before starting a large game copy, check your available storage.

For example:

```text
F:

Free Space:
487 GB

Used:
213 GB

Total:
700 GB
```

Do not start a multi-gigabyte copy if there is insufficient free space.

---

# 30. Where Should Games Go?

For a typical upgraded Xbox:

```text
F:\Games\
```

is a good location.

For example:

```text
F:\Games\
├── Halo
├── Halo 2
├── Fable
├── Morrowind
├── Star Wars Battlefront
└── Star Wars Knights of the Old Republic
```

If your particular configuration uses G: for games, use the location configured for your dashboard.

The important thing is that **UnleashX is configured to scan the directory where the games are stored**.

---

# 31. Ripping vs. FTP Transfer

There are two common ways to get a game onto a modded Xbox.

## Method A — Copy the Original Disc

```text
Original Disc
      ↓
UnleashX
Copy Disc to HDD
      ↓
Xbox HDD
```

This is the simplest method when you have the original physical game.

## Method B — Transfer an Existing Backup

```text
PC
 │
 │ FTP
 ▼
Xbox HDD
```

An appropriately extracted Xbox game directory can be transferred to the Xbox's game storage location.

For example:

```text
F:\Games\Halo 2\
```

with:

```text
default.xbe
```

and the rest of the game files.

UnleashX can then detect the game.

---

# 32. Don't Interrupt a Game Copy

While **Copy Disc to HDD** is running:

**Do not:**

- Turn off the Xbox
- Reset the Xbox
- Remove the disc
- Disconnect power
- Start another application

If something goes wrong and an incomplete game directory is left behind, remove the incomplete copy and restart the process.

---

# 33. Verify the Game After Ripping

Make verification part of your normal workflow.

After the copy finishes:

1. Return to UnleashX.
2. Go to **Games**.
3. Launch the copied game.
4. Verify that it reaches the title/menu screen.
5. Play for a few minutes.
6. Test enough gameplay to confirm the HDD copy works correctly.

This is especially useful when you're servicing or preparing an Xbox for someone else.

---

# 34. Recommended Workflow for Your Xbox Collection

For a physical game you own, a good workflow is:

```text
        ORIGINAL GAME
              │
              ▼
       Inspect / Clean
              │
              ▼
       Insert into Xbox
              │
              ▼
           System
              │
              ▼
      Copy Disc to HDD
              │
              ▼
       F:\Games\Title
              │
              ▼
          UnleashX
              │
              ▼
        Launch / Test
              │
              ▼
       Verify Gameplay
```

The physical game can then remain stored safely while the HDD copy is used for convenient play.

---

# 35. Ripping vs. ISO/XISO Files

It is important to distinguish the Xbox's HDD game format from ISO/XISO files commonly encountered on a PC.

### On the Xbox HDD

You generally have an extracted directory:

```text
F:\Games\Game Name\
    default.xbe
    ...
```

### On a PC

You may encounter:

```text
Game.xiso.iso
Game.iso
```

Those are different representations of the game.

The Xbox does not need a conventional ISO sitting in `F:\Games` in order to launch an extracted HDD game.

---

# 36. The Big Picture

The easiest way to understand UnleashX is:

```text
                    ORIGINAL XBOX
                         │
                         ▼
                  BIOS / MODCHIP
                         │
                         ▼
                    UNLEASHX
                    DASHBOARD
                         │
       ┌─────────────────┼──────────────────┐
       │                 │                  │
       ▼                 ▼                  ▼
     GAMES              APPS             EMULATORS
       │                 │                  │
       ▼                 ▼                  ▼
      XBE               XBE                XBE


              ┌─────────────────────┐
              │      FILESYSTEM     │
              ├─────────────────────┤
              │ C: System           │
              │ E: Data / Apps      │
              │ F: Games / Storage  │
              │ G: Storage          │
              └─────────────────────┘
                         ▲
                         │
                         │ FTP
                         │
                    ┌────┴────┐
                    │   PC    │
                    └─────────┘


       ORIGINAL GAME DISC
              │
              ▼
           UnleashX
              │
       Copy Disc to HDD
              │
              ▼
          HDD Game
              │
              ▼
        UnleashX Games
              │
              ▼
          Play Game
```

## Quick Reference

| Task | UnleashX Location |
|---|---|
| Launch physical game | `Launch DVD` |
| Launch HDD game | `Games` |
| Launch homebrew | `Applications` |
| Launch emulator | `Emulators` |
| Browse files | `File Manager` |
| Copy a disc | `System → Copy Disc to HDD` |
| Network settings | `System → Settings → Network` |
| Dashboard settings | `System → Settings` |
| Manage saves | `Game Saves Manager` |
| Customize menus | `config.xml` |
| Transfer files from PC | FTP |

## Golden Rules

1. **Back up before modifying dashboard files.**
2. **Treat C: as potentially boot-critical.**
3. **Use FTP for large file transfers.**
4. **Use File Manager for quick local changes.**
5. **Know where F: and G: are configured to store games.**
6. **Don't interrupt a disc-to-HDD copy.**
7. **Test a game after ripping it.**
8. **Don't assume every Xbox has the same filesystem or dashboard layout.**
9. **Keep your original game discs if you are using HDD copies.**
10. **When in doubt, make a backup before changing anything.**
