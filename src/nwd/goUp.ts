import { currentDirectory, invalidCommandMsg } from "../utils";
import os from 'os';

export const goUp = (): void => {
  try {
    const currentDir = process.cwd();

    if (currentDir === os.homedir()) {
      console.log('\x1b[33m%s\x1b[0m', 'Cannot go upper than root directory.');
      return;
    }

    process.chdir('..');
    currentDirectory();
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      console.log('\x1b[33m%s\x1b[0m', 'Cannot go upper than root directory.');
    } else {
      console.log('\x1b[31m%s\x1b[0m', `Error going up: ${error.message}`);
    }
    invalidCommandMsg();
  }
};
