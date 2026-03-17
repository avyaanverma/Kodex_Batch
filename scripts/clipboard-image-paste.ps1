Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

if ([System.Threading.Thread]::CurrentThread.ApartmentState -ne 'STA') {
    powershell -NoProfile -STA -ExecutionPolicy Bypass -File $PSCommandPath
    exit $LASTEXITCODE
}

$script:LogPath = Join-Path $PSScriptRoot 'clipboard-image-paste.log'
$script:IsClosing = $false

function Write-Log {
    param([string]$Message)

    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    "$timestamp $Message" | Add-Content -Path $script:LogPath
}

$signature = @"
using System;
using System.Runtime.InteropServices;
using System.Windows.Forms;

public static class Win32 {
    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool RegisterHotKey(IntPtr hWnd, int id, uint fsModifiers, uint vk);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool UnregisterHotKey(IntPtr hWnd, int id);

    [DllImport("user32.dll")]
    public static extern IntPtr GetForegroundWindow();

    [DllImport("user32.dll")]
    public static extern IntPtr GetAncestor(IntPtr hWnd, uint gaFlags);
}

public class HotkeyForm : Form {
    public event EventHandler HotkeyPressed;

    protected override void WndProc(ref Message m) {
        if (m.Msg == 0x0312 && HotkeyPressed != null) {
            HotkeyPressed(this, EventArgs.Empty);
        }

        base.WndProc(ref m);
    }
}
"@

Add-Type -TypeDefinition $signature -ReferencedAssemblies System.Windows.Forms

$MOD_CONTROL = 0x0002
$VK_V = 0x56
$HOTKEY_ID = 9001
$GA_ROOT = 2

function Get-ActiveExplorerPath {
    $foregroundHandle = [Win32]::GetForegroundWindow()
    if ($foregroundHandle -eq [IntPtr]::Zero) {
        Write-Log 'No foreground window found.'
        return $null
    }

    $rootHandle = [Win32]::GetAncestor($foregroundHandle, $GA_ROOT)
    if ($rootHandle -eq [IntPtr]::Zero) {
        $rootHandle = $foregroundHandle
    }

    $shell = New-Object -ComObject Shell.Application

    foreach ($window in $shell.Windows()) {
        try {
            if ([IntPtr]$window.HWND -ne $rootHandle) {
                continue
            }

            $folder = $window.Document.Folder
            if ($null -ne $folder -and $null -ne $folder.Self) {
                Write-Log ("Matched Explorer folder: " + $folder.Self.Path)
                return $folder.Self.Path
            }
        } catch {
            Write-Log ("Explorer match skipped: " + $_.Exception.Message)
        }
    }

    Write-Log 'Foreground window is not a standard Explorer folder window.'
    return $null
}

function Get-NextImagePath {
    param([string]$FolderPath)

    $timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
    $baseName = "screenshot-$timestamp"
    $candidate = Join-Path $FolderPath "$baseName.png"
    $index = 1

    while (Test-Path -LiteralPath $candidate) {
        $candidate = Join-Path $FolderPath ('{0}-{1}.png' -f $baseName, $index)
        $index++
    }

    return $candidate
}

function Save-ClipboardImageToFolder {
    param([string]$FolderPath)

    if (-not (Test-Path -LiteralPath $FolderPath -PathType Container)) {
        throw "Folder not found: $FolderPath"
    }

    if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) {
        Write-Log 'Clipboard does not currently contain an image.'
        return $null
    }

    $image = [System.Windows.Forms.Clipboard]::GetImage()
    if ($null -eq $image) {
        Write-Log 'Clipboard reported an image, but GetImage returned null.'
        return $null
    }

    $outputPath = Get-NextImagePath -FolderPath $FolderPath
    $bitmap = $null

    try {
        $bitmap = New-Object System.Drawing.Bitmap $image
        $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        Write-Log ("Saved clipboard image to: " + $outputPath)
    } finally {
        if ($null -ne $bitmap) {
            $bitmap.Dispose()
        }
        $image.Dispose()
    }

    return $outputPath
}

$form = New-Object HotkeyForm
$form.Text = 'Clipboard Image Paste Helper'
$form.StartPosition = 'CenterScreen'
$form.Size = New-Object System.Drawing.Size(640, 430)
$form.MinimumSize = New-Object System.Drawing.Size(640, 430)
$form.FormBorderStyle = 'FixedDialog'
$form.MaximizeBox = $false
$form.BackColor = [System.Drawing.Color]::FromArgb(247, 248, 250)

$titleLabel = New-Object System.Windows.Forms.Label
$titleLabel.Text = 'Screenshot Paste Helper'
$titleLabel.Font = New-Object System.Drawing.Font('Segoe UI', 16, [System.Drawing.FontStyle]::Bold)
$titleLabel.AutoSize = $true
$titleLabel.Location = New-Object System.Drawing.Point(20, 18)

$statusLabel = New-Object System.Windows.Forms.Label
$statusLabel.Text = 'Status: Starting helper...'
$statusLabel.Font = New-Object System.Drawing.Font('Segoe UI', 10)
$statusLabel.AutoSize = $true
$statusLabel.ForeColor = [System.Drawing.Color]::FromArgb(37, 99, 235)
$statusLabel.Location = New-Object System.Drawing.Point(22, 58)

$instructionsBox = New-Object System.Windows.Forms.TextBox
$instructionsBox.Multiline = $true
$instructionsBox.ReadOnly = $true
$instructionsBox.ScrollBars = 'Vertical'
$instructionsBox.BorderStyle = 'FixedSingle'
$instructionsBox.BackColor = [System.Drawing.Color]::White
$instructionsBox.Font = New-Object System.Drawing.Font('Consolas', 10)
$instructionsBox.Location = New-Object System.Drawing.Point(22, 92)
$instructionsBox.Size = New-Object System.Drawing.Size(578, 235)
$instructionsBox.Text = @"
How to use:
1. Take a screenshot with Win + Shift + S.
2. Open the target folder in File Explorer.
3. Press Ctrl + V.
4. The screenshot is saved there as a PNG file.

Important warning:
- While this helper is running, Ctrl + V is captured globally.
- Normal paste in browsers, editors, chat apps, and other windows may stop working.
- To get normal Ctrl + V back, click Exit Helper or close this window.

This helper works when:
- The clipboard contains an image.
- File Explorer is the active window.

This helper does not work for:
- Text clipboard data.
- Normal file copy/paste.
- Apps other than File Explorer.

If saving fails, check:
- File Explorer is active.
- The clipboard contains an image.
- The log file beside this script.
"@

$logLabel = New-Object System.Windows.Forms.Label
$logLabel.Text = "Log: $script:LogPath"
$logLabel.Font = New-Object System.Drawing.Font('Segoe UI', 9)
$logLabel.AutoSize = $true
$logLabel.Location = New-Object System.Drawing.Point(22, 342)

$minimizeButton = New-Object System.Windows.Forms.Button
$minimizeButton.Text = 'Minimize to Tray'
$minimizeButton.Size = New-Object System.Drawing.Size(140, 34)
$minimizeButton.Location = New-Object System.Drawing.Point(304, 334)
$minimizeButton.Add_Click({
    $form.WindowState = 'Minimized'
})

$exitButton = New-Object System.Windows.Forms.Button
$exitButton.Text = 'Exit Helper'
$exitButton.Size = New-Object System.Drawing.Size(120, 34)
$exitButton.Location = New-Object System.Drawing.Point(480, 334)
$exitButton.BackColor = [System.Drawing.Color]::FromArgb(220, 38, 38)
$exitButton.ForeColor = [System.Drawing.Color]::White
$exitButton.FlatStyle = 'Flat'
$exitButton.FlatAppearance.BorderSize = 0
$exitButton.Add_Click({
    $form.Close()
})

$form.Controls.AddRange(@($titleLabel, $statusLabel, $instructionsBox, $logLabel, $minimizeButton, $exitButton))

$notifyIcon = New-Object System.Windows.Forms.NotifyIcon
$notifyIcon.Icon = [System.Drawing.SystemIcons]::Information
$notifyIcon.Visible = $true
$notifyIcon.Text = 'Clipboard image paste helper'

$trayMenu = New-Object System.Windows.Forms.ContextMenuStrip
$null = $trayMenu.Items.Add('Show Window')
$null = $trayMenu.Items.Add('Exit Helper')
$trayMenu.Items[0].Add_Click({
    $form.Show()
    $form.WindowState = 'Normal'
    $form.Activate()
})
$trayMenu.Items[1].Add_Click({
    $form.Close()
})
$notifyIcon.ContextMenuStrip = $trayMenu
$notifyIcon.Add_DoubleClick({
    $form.Show()
    $form.WindowState = 'Normal'
    $form.Activate()
})

$form.Add_Resize({
    if ($form.WindowState -eq [System.Windows.Forms.FormWindowState]::Minimized) {
        $form.Hide()
        $notifyIcon.ShowBalloonTip(
            1500,
            'Helper still running',
            'Ctrl+V is still reserved by this helper. Reopen from the tray icon or exit it to restore normal paste.',
            [System.Windows.Forms.ToolTipIcon]::Info
        )
    }
})

$form.add_HotkeyPressed({
    Write-Log 'Ctrl+V hotkey received.'

    $folderPath = Get-ActiveExplorerPath
    if ([string]::IsNullOrWhiteSpace($folderPath)) {
        $statusLabel.Text = 'Status: Open File Explorer and keep it active, then press Ctrl + V again.'
        return
    }

    try {
        $savedPath = Save-ClipboardImageToFolder -FolderPath $folderPath
        if ($null -eq $savedPath) {
            $statusLabel.Text = 'Status: Clipboard image not found. Take a screenshot first.'
            return
        }

        $fileName = [System.IO.Path]::GetFileName($savedPath)
        $statusLabel.Text = 'Status: Saved ' + $fileName
        $notifyIcon.ShowBalloonTip(
            2000,
            'Screenshot saved',
            $fileName,
            [System.Windows.Forms.ToolTipIcon]::Info
        )
    } catch {
        Write-Log ('Save failed: ' + $_.Exception.Message)
        $statusLabel.Text = 'Status: Save failed. Check the log file.'
        $notifyIcon.ShowBalloonTip(
            2500,
            'Save failed',
            $_.Exception.Message,
            [System.Windows.Forms.ToolTipIcon]::Error
        )
    }
})

$form.Add_Shown({
    $registered = [Win32]::RegisterHotKey($form.Handle, $HOTKEY_ID, $MOD_CONTROL, $VK_V)
    if (-not $registered) {
        Write-Log 'Could not register Ctrl+V hotkey.'
        $statusLabel.Text = 'Status: Failed to register Ctrl + V.'
        [System.Windows.Forms.MessageBox]::Show(
            'Could not register Ctrl+V. Another app may already be blocking it.',
            'Clipboard Image Paste',
            [System.Windows.Forms.MessageBoxButtons]::OK,
            [System.Windows.Forms.MessageBoxIcon]::Error
        ) | Out-Null
        $form.Close()
        return
    }

    Write-Log 'Clipboard helper started successfully.'
    $statusLabel.Text = 'Status: Running. Press Ctrl + V in File Explorer.'
    $notifyIcon.ShowBalloonTip(
        2500,
        'Clipboard helper running',
        'Use Ctrl+V in File Explorer to save screenshots. Close the helper to restore normal Ctrl+V.',
        [System.Windows.Forms.ToolTipIcon]::Info
    )
})

$form.Add_FormClosing({
    if ($script:IsClosing) {
        return
    }

    $script:IsClosing = $true
    Write-Log 'Clipboard helper shutting down.'

    try {
        [Win32]::UnregisterHotKey($form.Handle, $HOTKEY_ID) | Out-Null
    } catch {
    }

    $notifyIcon.Visible = $false
    $notifyIcon.Dispose()
})

try {
    [void][System.Windows.Forms.Application]::Run($form)
} finally {
    if (-not $script:IsClosing) {
        try {
            [Win32]::UnregisterHotKey($form.Handle, $HOTKEY_ID) | Out-Null
        } catch {
        }
        $notifyIcon.Visible = $false
        $notifyIcon.Dispose()
        Write-Log 'Clipboard helper shut down from finally block.'
    }

    $form.Dispose()
}
