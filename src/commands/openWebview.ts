import * as vscode from 'vscode';

export async function openWebview() {
  const panel = vscode.window.createWebviewPanel(
    'playgroundPanel',
    'Playground Webview',
    {
      viewColumn:
        vscode.window.activeTextEditor?.viewColumn || vscode.ViewColumn.One,
    },
    {}
  );

  panel.webview.html = getWebviewContent();
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}
