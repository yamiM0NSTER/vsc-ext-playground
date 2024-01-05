import * as vscode from 'vscode';

const selectDirectoryOptions: vscode.OpenDialogOptions = {
  canSelectMany: false,
  openLabel: 'Select',
  canSelectFiles: false,
  canSelectFolders: true,
};

export async function selectDirectory() {
  const result = await vscode.window.showOpenDialog(selectDirectoryOptions);

  if (result === undefined) {
    return '';
  }

  return result[0].fsPath;
}

const selectOneFileOptions: vscode.OpenDialogOptions = {
  canSelectMany: false,
  openLabel: 'Open',
  filters: {
    //'Text files': ['txt'],
    'All files': ['*'],
  },
  title: 'Select a file:',
};

export async function selectOneFile(props?: {
  openLabel?: string;
  filters?: { [key: string]: string[] };
}) {
  let options = {
    ...selectOneFileOptions,
    ...props,
  };

  const selectedFiles = await vscode.window.showOpenDialog(options);

  if (selectedFiles === undefined || selectedFiles.length < 1) {
    return '';
  }

  return selectedFiles[0].fsPath;
}

const selectManyFilesOptions: vscode.OpenDialogOptions = {
  canSelectMany: false,
  openLabel: 'Open',
  filters: {
    //'Text files': ['txt'],
    'All files': ['*'],
  },
  title: 'Select files:',
};

export async function selectManyFiles(props?: {
  openLabel?: string;
  filters?: { [key: string]: string[] };
}) {
  let options = {
    ...selectManyFilesOptions,
    ...props,
  };

  const selectedFiles = await vscode.window.showOpenDialog(options);

  if (selectedFiles === undefined || selectedFiles.length < 1) {
    return [];
  }

  return selectedFiles?.map((fileUri) => {
    return fileUri.fsPath;
  });
}
