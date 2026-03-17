using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

internal static class Program
{
    [STAThread]
    private static void Main()
    {
        var baseDir = AppDomain.CurrentDomain.BaseDirectory;
        var scriptPath = Path.Combine(baseDir, "clipboard-image-paste.ps1");

        if (!File.Exists(scriptPath))
        {
            MessageBox.Show(
                "clipboard-image-paste.ps1 was not found next to this launcher.",
                "Clipboard Image Paste Helper",
                MessageBoxButtons.OK,
                MessageBoxIcon.Error);
            return;
        }

        var powershellPath = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.Windows),
            "System32",
            "WindowsPowerShell",
            "v1.0",
            "powershell.exe");

        var startInfo = new ProcessStartInfo
        {
            FileName = powershellPath,
            Arguments = "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File \"" + scriptPath + "\"",
            UseShellExecute = false,
            CreateNoWindow = true,
            WorkingDirectory = baseDir
        };

        try
        {
            Process.Start(startInfo);
        }
        catch (Exception ex)
        {
            MessageBox.Show(
                "Could not launch the helper.\n\n" + ex.Message,
                "Clipboard Image Paste Helper",
                MessageBoxButtons.OK,
                MessageBoxIcon.Error);
        }
    }
}
