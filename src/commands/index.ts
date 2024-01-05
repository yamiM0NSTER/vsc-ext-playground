import { openFileDialog } from './openFileDialog';
import { selectDirectoryDialog } from './selectDirectoryDialog';

const commands: { [key: string]: () => Promise<void> } = {
  'Open File Dialog': openFileDialog,
  'Select Directory Dialog': selectDirectoryDialog,
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
      commands[pickedCommand]();
    }
  );
  context.subscriptions.push(cmd);
}

export function unregisterCommands() {}
