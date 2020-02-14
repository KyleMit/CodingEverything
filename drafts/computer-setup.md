---
title: 'My Computer Setup'
summary: 'List of tools, configurations, and setup steps to my workstation for maximal productivity'
tags: ['post', 'workstation']
authors: ['Kyle']
date: 2020-02-14
draft: true
---

## Hardware

[`msinfo32`](https://www.computerhope.com/issues/ch000497.htm)
[`wmic MemoryChip get BankLabel, Capacity, MemoryType, Speed, Tag`](https://www.tenforums.com/tutorials/66809-determine-system-memory-size-speed-type-windows-10-a.html)

### Work

* **Machine**: [HP ProBook 650 G2](https://support.hp.com/us-en/document/c04912074)
* **OS**: Windows 10 Enterprise - 19041.21
* **RAM**: 16GB
* **Processor**: [i7-6600U](https://ark.intel.com/content/www/us/en/ark/products/88192/intel-core-i7-6600u-processor-4m-cache-up-to-3-40-ghz.html)
* **Storgae**: 256 SSD SATA ([MTFDDAV256TBN-1AR1ZABHA](https://www.mouser.com/ProductDetail/Micron/MTFDDAV256TBN-1AR1ZABHA?qs=%2Fha2pyFaduhEEHYsFTy9MIocInvUb7egkZywWZBMG4001i3WuMr1qLFbQ55M%252BzVW))

### Home

* **Machine**: [Surface Pro 6](https://www.microsoft.com/en-us/p/surface-pro-6/8zcnc665slq5)
* **OS**: Windows 10 Professional - 19041.21
* **RAM**: 8 GB
* **Processor**: [i5-8250U](https://ark.intel.com/content/www/us/en/ark/products/124967/intel-core-i5-8250u-processor-6m-cache-up-to-3-40-ghz.html)
* **Storgae**: 256 SSD

## Programs

### Code

* Visual Studio Code
* Visual Studio 2019
* ReSharper
* SSMS 2019
* Notepad++
* SourceTree
* WinMerge
* KDiff

### SDKS

* Node
* DotNet
* Chocolatey?
* CLIs?

### Image Editing

* MS Paint
* Paint.NET
* Gimp
* Inkscape


### Browsers

* Chrome
* Chrome Canary
* Firefox
* Firefox Dev Edition
* Edge
* Edge Dev
* IE

### Office Work

* Outlook
* Skype
* Teams
* OneNote
* Active Directory

## Remote Work

* Remote Desktop Connection
* vSphere
* Remote Desktop
* OpenVPN

## CLIs


* Windows Terminal
* Bash
* Powershell

## Utilities

* AutoHotKey
* 7-Zip
* MalwareBytes

## Windows

* Auto Night/Dark Mode
* 7 Taskbar Tweaker

## Media

* VLC Media Player
* LiceCap
* OBS Studio

## Configuration

### VS Code Config

#### VS Code Extensions

#### VS Code Settings

### Visual Studio Extensions

### SSMS Settings

[Tab Name](https://stackoverflow.com/a/24653276/1366033)

### Notepad++ Settings

### Windows Terminal Config

### Bash Config

### Powershell Profile

### Auto Hot Key Scripts

### Chrome Extensions

#### Stylus Settings

#### Tampermonkey Settings

### Windows Settings

### Fonts

Fira Code

#### Immersive Search

[How to Enable or Disable Floating Immersive Search Bar in Windows 10](https://www.tenforums.com/tutorials/98610-enable-disable-floating-immersive-search-bar-windows-10-a.html)

```ini file:ImmersiveSearch.reg
Windows Registry Editor Version 5.00

; Created by: Shawn Brink
; Created on: May 4th 2019
; Tutorial: https://www.tenforums.com/tutorials/98610-enable-disable-floating-immersive-search-bar-windows-10-a.html


[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Search]
"ImmersiveSearch"=dword:00000001

[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Search\Flighting\Override]
"CenterScreenRoundedCornerRadius"=dword:00000009
"ImmersiveSearchFull"=dword:00000001
```

#### Scripts


[archive.ps1](https://gist.github.com/KyleMit/978086ae267ff5be17811e99c9607986)