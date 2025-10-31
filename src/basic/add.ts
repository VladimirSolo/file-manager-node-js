import * as fs from 'fs';
import { currentDirectory } from "../utils";

export const add = async (fileName: string): Promise<void> => {
  try {
    await fs.promises.writeFile(fileName, '');
    currentDirectory();
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error creating file: ${error.message}`);
  }
};

