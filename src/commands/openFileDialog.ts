import { selectOneFile } from '../utils/dialogUtils';

export async function openFileDialog() {
  const selectedFile = await selectOneFile();
  console.log('Selected File:', selectedFile);
}
