import * as vscode from 'vscode';

import { selectDirectory } from '../utils/dialogUtils';

export async function selectDirectoryDialog() {
  const selectedDirectory = await selectDirectory();
  console.log('Selected directory:', selectedDirectory);
}
