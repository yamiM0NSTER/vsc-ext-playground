import * as vscode from "vscode";
import { openFileDialog } from "./openFileDialog";

export function registerCommands(context: vscode.ExtensionContext) {
  let cmd = vscode.commands.registerCommand(
    "vsc-ext-playground.openFileDialog",
    openFileDialog
  );
  context.subscriptions.push(cmd);
}

export function unregisterCommands() {}
