import * as vscode from "vscode";

export async function openFileDialog() {
  const dialogOptions: vscode.OpenDialogOptions = {
    canSelectMany: true,
    openLabel: "Hi",
    filters: {
      "Text files": ["txt"],
      "All files": ["*"],
    },
  };

  const selectedFiles = await vscode.window.showOpenDialog(dialogOptions);

  if (selectedFiles === undefined) {
    console.log("No files selected");
    return;
  }

  for (let i = 0; i < selectedFiles.length; i++) {
    console.log("File:", selectedFiles[i].path);
  }
}
