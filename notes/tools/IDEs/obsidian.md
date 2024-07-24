# Obsidian.md

<https://obsidian.md/>

## Docs

* [Custom hotkeys](https://help.obsidian.md/Customization/Custom+hotkeys)
* [Themes](https://help.obsidian.md/Extending+Obsidian/Themes)
* [Plugin security](https://help.obsidian.md/Extending+Obsidian/Plugin+security)
* [Basic formatting syntax](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code%20blocks)
  * [Prism](https://prismjs.com/#supported-languages)

## Plugins

* [Quick Switcher++](https://github.com/darlal/obsidian-switcher-plus)
* [obsidian-git](https://github.com/denolehov/obsidian-git) - Backup your Obsidian.md vault with git
* [obsidian-editor-shortcuts](https://github.com/timhor/obsidian-editor-shortcuts) - Obsidian plugin to add keyboard shortcuts commonly found in code editors such as Visual Studio Code (vscode) or Sublime Text

## Plugin Docs

* [Create your first plugin](https://marcus.se.net/obsidian-plugin-docs/getting-started/create-your-first-plugin)
* [Svelte](https://marcus.se.net/obsidian-plugin-docs/getting-started/svelte)

## Hotkeys

* Ctrl + Shift P -> Command Palette
* Ctrl + P -> QuickSwitcher++

## Questions

* Don't center Text

  Settings > Editor > Disable "Readable Line Length"

* [Line numbers in edit mode](https://forum.obsidian.md/t/line-numbers-in-edit-mode-core-function-or-css-theme/21403)

  Settings > Editor > Show Line Number

* [Always open file in new tab](https://www.reddit.com/r/ObsidianMD/comments/10k4011/always_open_file_in_new_tab/)

  Use [**Quick Switcher++**](https://github.com/darlal/obsidian-switcher-plus)

  **See Also**: [Click links/files to open in new tab by default](https://forum.obsidian.md/t/click-links-files-to-open-in-new-tab-by-default/7347)

* Custom Spellcheck Dictionary

  ```none
  C:\Users\<username>\AppData\Roaming\obsidian\Custom Dictionary.txt
  ```

  ```none
  %AppData%\obsidian\Custom Dictionary.txt
  ```

  ```none
  checksum_v1 = 72638e9d188dde714de51f3a82a1ff1d
  ```
  
  Settings > Editor > Behavior > Spellcheck > Cog

  * [Adding Custom Dictionaries to Spellcheck](https://forum.obsidian.md/t/adding-custom-dictionaries-to-spellcheck/5221)
  * [Where is the user spell check dictionary file located?](https://forum.obsidian.md/t/where-is-the-user-spell-check-dictionary-file-located/35714)
  * [Terrible spellcheck/Custom dictionaries/Improving spellcheck](https://forum.obsidian.md/t/terrible-spellcheck-custom-dictionaries-improving-spellcheck/32302)

* Spellcheck to respect camelCase

* Change Font
  * Settings > Appearance > Font > Text Font
  * Settings > Appearance > Font > Monospace Font

* [Share .obsidian between vault?](https://forum.obsidian.md/t/share-obsidian-between-vault/12224)

  [Working with multiple vaults](https://help.obsidian.md/How+to/Working+with+multiple+vaults)

* [How to customize your own Obsidian theme with CSS in 3 steps | by Project Eme | Medium](https://projecteme.medium.com/how-to-customise-your-own-obsidian-css-in-3-steps-ae319e53f5d4)

* [Indent using spaces](https://forum.obsidian.md/t/use-tabs-off-only-replaces-tabs-with-spaces-in-lists/3583)

  Settings > Editor > Disable "Indent using tabs"

* [Column Selection and Editing Mode](https://forum.obsidian.md/t/column-selection-and-editing-mode/32191)

  Use [obsidian-editor-shortcuts](https://github.com/timhor/obsidian-editor-shortcuts)

  **See Also**: [Multiple cursors](https://help.obsidian.md/Editing+and+formatting/Multiple+cursors) (but only for mouse)

* [Add Selection to next find match hotkey](https://forum.obsidian.md/t/add-selection-to-next-find-match-hotkey/2226)

  Use [obsidian-editor-shortcuts](https://github.com/timhor/obsidian-editor-shortcuts)

* [How to type only one * at a time](https://www.reddit.com/r/ObsidianMD/comments/sz402s/how_to_type_only_one_at_a_time/)

  Settings > Editor > Auto pair Markdown syntax (pair symbols automatically for bold and italic)


* [Automatically insert markdown formatted link if text is selected when pasting](https://forum.obsidian.md/t/automatically-insert-markdown-formatted-link-if-text-is-selected-when-pasting/3646)


  Can use <kbd>Ctrl</kbd> + <kbd>K</kbd> to "Insert Link"

  Use [Paste URL into selection](https://github.com/denolehov/obsidian-url-into-selection)

* [Obsidian: How can I paste image into dir "images", not root.](https://www.reddit.com/r/ObsidianMD/comments/rvkhj9/obsidian_how_can_i_paste_image_into_dir_images/?utm_source=share&utm_medium=web2x&context=3)

  Settings > Files & Links > Default location for new attachments

  ```json
  {
    "attachmentFolderPath": "/Assets/obsidian"
  }
  ```
  
  See Also: [Choose path when pasting images](https://forum.obsidian.md/t/choose-path-when-pasting-images/738)

* [Rename image when pasting](https://www.reddit.com/r/ObsidianMD/comments/u75xqu/introducing_paste_image_rename_plugin/)

  Use [obsidian-paste-image-rename](https://github.com/reorx/obsidian-paste-image-rename) - Renames pasted images and all the other attachments added to the vault

* [How to add your theme to the community theme store](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/How+to+add+your+theme+to+the+community+theme+store)

* Syncing across devices

  * [Syncthing](https://syncthing.net/)
  * [Obsidian Sync](https://obsidian.md/sync)
  * [denolehov/obsidian-git: Backup your Obsidian.md vault with git](https://github.com/denolehov/obsidian-git)
  * [Working Copy, Git on iOS](https://workingcopy.app/)

* [Context Menu (aka right click menu) Hotkey](https://forum.obsidian.md/t/context-menu-aka-right-click-menu-hotkey/22059)

  <kbd>Ctrl</kbd> + <kbd>.</kbd> - Show context menu under cursor


* [Add option to automatically “Reveal file in navigation” when you open a note](https://forum.obsidian.md/t/add-option-to-automatically-reveal-file-in-navigation-when-you-open-a-note/9429)

  * Hotkey > `Files: Reveal current file in navigation`
  * Right Click Tab > `Reveal current file in navigation`
  * Use [obsidian-reveal-active-file](https://github.com/shichongrui/obsidian-reveal-active-file)
    * BUT... [Active pane loses focus when opening a file in Obsidian 0.15.3 #11](https://github.com/shichongrui/obsidian-reveal-active-file/issues/11)

* [Exclude specific folders from "quick switcher"](https://www.reddit.com/r/ObsidianMD/comments/nr22jo/exclude_specific_folders_from_quick_switcher/)

  You can go to **Options > Files & Links > Excluded Files**

  * [Exclude all paths containing "attachments" from Quick Switcher](https://www.reddit.com/r/ObsidianMD/comments/vqdf4m/exclude_all_paths_containing_attachments_from/)
  * [Config to ignore/hide select files and folders](https://forum.obsidian.md/t/config-to-ignore-hide-select-files-and-folders/4186)

* [Use asterisk for list format when pasting rich text](https://forum.obsidian.md/t/use-asterisk-for-list-format-when-pasting-rich-text/77035)

* Open file in new tab

  Use <kbd>Ctrl</kbd> + Click

  * **Plugin**: [obsidian-open-in-new-tab](https://github.com/patleeman/obsidian-open-in-new-tab)
    * [can't open new tab when open tab from search · Issue #11 · patleeman/obsidian-open-in-new-tab](https://github.com/patleeman/obsidian-open-in-new-tab/issues/11)

  * Threads
    * [Click links/files to open in new tab by default - Feature requests - Obsidian Forum](https://forum.obsidian.md/t/click-links-files-to-open-in-new-tab-by-default/7347)
    * [When I open a note that overwrites my current TAB, where do I set the default to open a new TAB for display? - Help - Obsidian Forum](https://forum.obsidian.md/t/when-i-open-a-note-that-overwrites-my-current-tab-where-do-i-set-the-default-to-open-a-new-tab-for-display/55914/2)
    * [Search results are opened in new tabs - how to stop? - Help - Obsidian Forum](https://forum.obsidian.md/t/seach-results-are-opened-in-new-tabs-how-to-stop/62842/3)

* [Easy removal of empty ‘Untitled’ notes](https://forum.obsidian.md/t/ease-removal-of-empty-untitled-notes/4120)

  * **Plugin**: [obsidian-janitor](https://github.com/Canna71/obsidian-janitor)
    * [Feature Request: Option for delete selection (obsidian trash vs system) when Ask Confirmation disabled · Issue #24 · Canna71/obsidian-janitor](https://github.com/Canna71/obsidian-janitor/issues/24)

* [Aliases](https://help.obsidian.md/Linking+notes+and+files/Aliases)

    ```yaml
    ---
    aliases:
      - Doggo
      - Woofer
      - Yapper
    ---
    ```

* Show outline of current document
  * [Outline](https://help.obsidian.md/Plugins/Outline) core plugin


* [Toggle Outline View](https://forum.obsidian.md/t/keyboard-shortcut-to-toggle-outline-instead-of-opening-a-new-outline-pane/12438/2)

  * <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> - Open Outline
  * <kbd>Ctrl</kbd> + <kbd>\</kbd> - Toggle Right Sidebar
