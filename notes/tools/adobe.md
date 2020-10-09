# Adobe Premier Pro

[How To Split Clips In Premiere Pro](https://www.youtube.com/watch?v=Y-MK1T99nsY)


* Select Razor
  * Window > Tools > Razor
* Split Entire Track by holding <kbd>Shift</kbd>
* Heal by selecting cut and hitting <kbd>Delete</kbd>


## Tools

* Selection Tool (<kbd>V</kbd>)
  * Trim In / Out on edges
* Ripple Edit Tool (<kbd>B</kbd>)
  * Closes gaps caused by the edit and preserves all edits to the left or right of the trimmed clip
  * Or Selection Tool + <kbd>Ctrl</kbd>
* Razor (<kbd>C</kbd>)

[How to Trim Clips](https://helpx.adobe.com/premiere-pro/using/trimming-clips1.html)

[How to Toggle Active Panel to take up full window](https://www.youtube.com/watch?v=BVj3pjZCqZw)

Double Click Panel Menu Bar - Toggle Active Panel
<kbd>~</kbd> - Toggle Active Panel


[Maximize Undocked Panel in Windows](https://forums.creativecow.net/docs/forums/post.php?forumid=3&postid=988471&univpostid=988471&pview=t) - NO

### Navigate Timeline

<kbd>🠘</kbd> / <kbd>🠚</kbd> - forward / backward frame
Shift <kbd>🠘</kbd> / <kbd>🠚</kbd> - step forward / backward 5 frames
<kbd>🠙</kbd> / <kbd>🠛</kbd> - forward / backward clip
<kbd>J</kbd> / <kbd>K</kbd> / <kbd>L</kbd> rewind / play / fastforward

Hover on Timeline + Scroll - Pan Timeline
<kbd>H</kbd> - Hand Tool - Pan Timeline

<kbd>-</kbd> / <kbd>=</kbd> - Zoom Timeline in / Out
<kbd>Alt</kbd> + Scroll - Zoom Timeline
Hover on Scroll Thumb + Scroll - Zoom Timeline

<kbd>Shift</kbd> + <kbd>-</kbd> / <kbd>=</kbd> - Expand/Collapse AV Tracks
<kbd>Ctrl</kbd> + <kbd>-</kbd> / <kbd>=</kbd> - Expand/Collapse Video Tracks
<kbd>Alt</kbd> + <kbd>-</kbd> / <kbd>=</kbd> - Expand/Collapse Audio Tracks

[Add Markers in Timeline](https://helpx.adobe.com/premiere-pro/using/markers.html)

<kbd>M</kbd> - Add Marker

[Can't drag video clip into timeline sequence](https://community.adobe.com/t5/premiere-pro/can-t-drag-video-into-timeline-premiere-cc/td-p/6000512?page=1)

* Make sure to select audio and video tracks first (ex. V1 & A1)

![Adobe premier timeline tracks](https://i.imgur.com/gMmwNSX.png)

[Rearrange clips in a Timeline panel](https://helpx.adobe.com/premiere-pro/using/rearranging-clips-sequence.html)

Drag + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> - Rearrange clip

[How to snap a clip](https://helpx.adobe.com/premiere-pro/using/clips-sequence.html)

In timeline panel, make sure snap button is selected

![Snap in Timeline](https://i.imgur.com/RNnTh6Y.png)

<kbd>S</kbd> - Snap in Timeline

[How to speed up clip](https://blog.hubspot.com/marketing/speed-up-video)

Clip > Speed/Duration
Right Click > Speed Duration
<kbd>Ctrl</kbd> + <kbd>R</kbd>

[Deleting multiple Gaps in Premiere Pro all at once](https://www.youtube.com/watch?v=I89jYuZYvP8)

1. Create Color Matte in project
   1. Project > New Item
2. Add to Timeline in Video Track
3. Marquee Select all clips
4. Drag Over Color Matte Track (which auto splits track)
5. Drag video clips back into their own track
6. Ripple delete matte track clips
   * <kbd>Shift</kbd> + <kbd>Del k</kbd>

or ...

Prevent them from happening in the first place with ripple cuts, ripple effects, etc

[organize clips in project panel](https://community.adobe.com/t5/premiere-pro/how-to-organize-clips-in-sequential-order/td-p/7160472?page=1)

1. Switch to Icon View
2. Select Sort Icons
3. Switch to User Order

![Custom Icon Sort](https://i.imgur.com/JZfE4fY.png)

[How to Sort Project Bin Clips by Creation Date](https://www.videolane.com/2172-2/)

1. Switch to List View
2. View or Edit any metadata attribute
3. Sort by column

![Custom List Sort](https://i.imgur.com/yL1tOQ3.png)

[Step forward / backward 1s](https://community.adobe.com/t5/premiere-pro/jog-forward-one-second/td-p/10728560?page=1)

Edit > Preferences > Playback > Step forward/backward many > 24

## Text

[How to Add Text](https://www.youtube.com/watch?v=Fk2XIJ56AAw)

1. Use Text Tool
2. Adjust with Effect Controls

[How to Move Text](https://larryjordan.com/articles/adobe-premiere-pro-the-new-text-title-tool/)

Use Move Tool <kbd>V</kbd>

[How to wrap text](https://community.adobe.com/t5/premiere-pro/word-wrap/m-p/9804372#M145054)

When creating text, instead of clicking, click + drag a text area

[Created countdown timer](https://www.youtube.com/watch?v=m1GCDVikIj0)

1. Project Panel > New > Transparent Video
2. Add transparent video over source video
3. Effects Panel > Video Effects > Video > Timecode
   * Drag onto transparent video
4. In Effects Control Panel
   1. Remove field symbol - gets rid of dot
   2. Set Opacity to zero - gets rid of box around numbers
5. Effects Panel > Video Effects > Transform > Crop
   * Drag onto transparent video
6. In Effects Control Panel, click crop
   * Blue lines will appear -> Mask countdown numbers we don't need
7. Reverse Transparent Video
   1. Right Click > Nest
   2. Right Click > Speed / Duration > Reverse Speed

[How to add vignette to color matte](https://www.youtube.com/watch?v=ZVdNNzqAPU0)

1. Open Color Workspace
2. Open Lumetri Color Panel
3. Go to Vignette option
4. Adjust Amount


### How to Export

File > Export > Media
<kbd>Ctrl</kbd> + <kbd>M</kbd>


[How To Change Video Export/Output Location](https://www.youtube.com/watch?v=J567Y2bjvPs)

In Export Settings, click "Output Name" link

![Output Name](https://i.imgur.com/93dVU2N.png)

[Sound not coming out of headphones](https://multimedia.journalism.berkeley.edu/wp-content/uploads/Adobe_AudioSettings-1.pdf)

Edit > Preferences > Audio hardware > Default Output

[How to Add Text Tracking](https://www.youtube.com/watch?v=5AlXMhXk-9A)

1. Select Text
2. Add positioning character (ex. 'x') on newline
3. Open Effect Controls
4. Select Transform > Position > Click Clock
5. Add keyframe for first and last frame
6. Add middle keframes where needed
7. Delete the positioning character


[How to Fake Hyperlapse](https://www.youtube.com/watch?v=PixilHDkhEQ)

1. Effects > Video > Posterize Time
2. Effect Controls > Posterize > Framerate


* [How To Remove Creative Cloud Files From The File Explorer Sidebar In Windows](https://www.techjunkie.com/remove-creative-cloud-files-file-explorer-sidebar/)
