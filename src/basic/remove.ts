import * as fs from 'fs';
import { currentDirectory, invalidCommandMsg } from "../utils";

export const remove = async (filePath: string): Promise<void> => {
  try {
    await fs.promises.unlink(filePath);
    console.log('\x1b[32m%s\x1b[0m', 'File deleted successfully.');
    currentDirectory();
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error deleting file: ${error.message}`);
    invalidCommandMsg();
  }
};