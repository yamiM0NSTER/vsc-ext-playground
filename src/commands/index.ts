import * as vscode from 'vscode';

import { openFileDialog } from './openFileDialog';
import { selectDirectoryDialog } from './selectDirectoryDialog';
import { showNotification } from './showNotification';
import { showNotificationWithOptions } from './showNotificationWithOptions';
import { openWebview } from './openWebview';
import { openWizardWebview } from './openWizardWebview';

const commands: {
  [key: string]: (context: vscode.ExtensionContext) => Promise<void>;
} = {
  'Open File Dialog': openFileDialog,
  'Select Directory Dialog': selectDirectoryDialog,
  'Show Notification': showNotification,
  'Show Notification with options': showNotificationWithOptions,
  'Open Webview': openWebview,
  'Open Wizard Webview': openWizardWebview,
};

const commandKeys = Object.keys(commands);

export function registerCommands(context: vscode.ExtensionContext) {
  let cmd = vscode.commands.registerCommand(
    'vsc-ext-playground.openFileDialog',
    openFileDialog
  );
  context.subscriptions.push(cmd);

  cmd = vscode.commands.registerCommand(
    'vsc-ext-playground.selectDirectoryDialog',
    selectDirectoryDialog
  );
  context.subscriptions.push(cmd);

  cmd = vscode.commands.registerCommand(
    'vsc-ext-playground.playgroundRun',
    async () => {
      const pickedCommand = await vscode.window.showQuickPick(commandKeys, {
        title: 'Pick a command:',
        canPickMany: false,
      });

      if (pickedCommand === undefined) {
        return;
      }

      console.log('pickedCommand:', pickedCommand);
      commands[pickedCommand](context);
    }
  );
  context.subscriptions.push(cmd);
}

export function unregisterCommands() {}
