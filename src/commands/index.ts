import * as vscode from "vscode";

import { openFileDialog } from "./openFileDialog";
import { selectDirectoryDialog } from "./selectDirectoryDialog";

export function registerCommands(context: vscode.ExtensionContext) {
  let cmd = vscode.commands.registerCommand(
    "vsc-ext-playground.openFileDialog",
    openFileDialog
  );
  context.subscriptions.push(cmd);

  cmd = vscode.commands.registerCommand(
    "vsc-ext-playground.selectDirectoryDialog",
    selectDirectoryDialog
  );
  context.subscriptions.push(cmd);
}

export function unregisterCommands() {}
