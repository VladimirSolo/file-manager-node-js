import * as fs from 'fs';
import * as readline from 'readline';
import { currentDirectory } from "../utils";

export const cat = (filePath: string): void => {
  try {
    const readStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: readStream,
      output: process.stdout,
    });

    rl.on('close', () => {
      currentDirectory();
    });
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error reading file: ${error.message}`);
  }
};
