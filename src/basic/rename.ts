import * as fs from 'fs';
import { currentDirectory, invalidCommandMsg } from '../utils';

export const rename = async (oldPath: string, newFileName: string): Promise<void> => {
  try {
    await fs.promises.rename(oldPath, newFileName);
    console.log('\x1b[32m%s\x1b[0m', 'File renamed successfully.');
    currentDirectory();
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error renaming file: ${error.message}`);
    invalidCommandMsg();
  }
};
