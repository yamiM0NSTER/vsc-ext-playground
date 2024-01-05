import * as vscode from 'vscode';

export async function showNotification() {
  const content = await vscode.window.showInputBox({
    title: 'Notification text:',
  });

  if (content === undefined) {
    return;
  }

  await vscode.window.showInformationMessage(content);
}
