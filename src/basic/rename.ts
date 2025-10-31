import * as fs from 'fs';
import { currentDirectory } from '../utils';

export const rename = async (oldPath: string, newFileName: string): Promise<void> => {
  try {
    await fs.promises.rename(oldPath, newFileName);
    currentDirectory();
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error renaming file: ${error.message}`);
  }
};
