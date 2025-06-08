import { showHUD } from "@raycast/api";
import { exec } from "child_process";

export default async function Command() {
  // The osascript command you discovered
  const script = `tell application "System Events" to tell application "Docker Desktop" to reopen`;

  exec(`osascript -e '${script}'`, async (error) => {
    if (error) {
      await showHUD("❌ Failed to open Docker Desktop");
      console.error(`exec error: ${error}`);
      return;
    }
    await showHUD("✅ Docker Dashboard is opening...");
  });
}
