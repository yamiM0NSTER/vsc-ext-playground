import * as vscode from 'vscode';

export async function showNotificationWithOptions() {
  const choice = await vscode.window.showInformationMessage(
    'This notification with options! OwO <3',
    ...['Hey', 'cutie']
  );

  await vscode.window.showInformationMessage(`Chosen option: ${choice}`);
}
