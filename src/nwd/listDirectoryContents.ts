import { currentDirectory, failureMsg } from "../utils";
import { readdir } from 'fs/promises';

export const listDirectoryContents = async (): Promise<void> => {
  try {
    const currentDir = process.cwd();
    const filesInDir = await readdir(currentDir, { withFileTypes: true });
    const sortedFiles = filesInDir
      .map(file => ({ name: file.name, type: file.isFile() ? 'file' : 'directory' }))
      .sort((a, b) => {
        if (a.type > b.type) return 1;
        if (a.type < b.type) return -1;
        return a.name.localeCompare(b.name);
      });

    console.table(sortedFiles);
    currentDirectory();
  } catch (err) {
    failureMsg();
  }
};