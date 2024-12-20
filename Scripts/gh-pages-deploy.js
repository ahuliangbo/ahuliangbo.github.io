/* eslint-disable no-console */
import { execa } from "execa";
import { existsSync } from "fs";
import { platform } from "os";
(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "portfolio"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "portfolio"]);
    console.log("Pushing to portfolio...");
    await execa("git", ["push", "origin", "HEAD:portfolio", "--force"]);

    if (platform() === "win32") {
        await execa("cmd", ["/c", "del", "/s", "/q", folderName]);
        await execa("cmd", ["/c", "rmdir", "/s", "/q", folderName]);
      } else {
        // Assuming Unix-based system
        await execa("rm", ["-rf", folderName]);
      }
  
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "portfolio"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();