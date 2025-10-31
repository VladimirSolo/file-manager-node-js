import * as fs from 'fs';
import * as readline from 'readline';
import { currentDirectory, invalidCommandMsg } from "../utils";

export const cat = (filePath: string): void => {
  const readStream = fs.createReadStream(filePath);

  readStream.on('error', (error: any) => {
    console.log('\x1b[31m%s\x1b[0m', `Error reading file: ${error.message}`);
    invalidCommandMsg();
  });

  const rl = readline.createInterface({
    input: readStream,
    output: process.stdout,
    terminal: false
  });

  rl.on('close', () => {
    currentDirectory();
  });
};
