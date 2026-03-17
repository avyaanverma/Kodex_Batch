# Clipboard Image Paste Helper

Files in this folder:
- `clipboard-image-paste.exe`: double-click launcher.
- `run-clipboard-image-paste.cmd`: double-click fallback launcher.
- `clipboard-image-paste.ps1`: main helper script.
- `clipboard-image-paste.log`: log file created while the helper runs.

## Best way to start

Double-click `clipboard-image-paste.exe`.

If Windows blocks the EXE or it does not open, double-click `run-clipboard-image-paste.cmd`.

## How it works

When the helper window opens, keep it running.

1. Take a screenshot with `Win + Shift + S`.
2. Open the destination folder in File Explorer.
3. Press `Ctrl + V`.
4. The helper saves the clipboard image as a PNG in that folder.

## Important warning

While this helper is running, `Ctrl + V` is captured globally by the helper.
That means normal paste may stop working in:
- browsers
- editors
- chat apps
- other apps

To restore normal `Ctrl + V`, click `Exit Helper` or close the helper window.

## Works for

- clipboard images
- screenshots copied with `Win + Shift + S`
- saving into the currently active File Explorer folder

## Does not work for

- text clipboard content
- normal file copy/paste
- apps other than File Explorer
