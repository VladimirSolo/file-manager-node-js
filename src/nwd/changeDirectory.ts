import { currentDirectory, invalidCommandMsg } from "../utils";

export const changeDirectory = (path: string | undefined): void => {
  if (path) {
    try {
      process.chdir(path);
      currentDirectory();
    } catch (error: any) {
      console.log('\x1b[31m%s\x1b[0m', `Error changing directory: ${error.message}`);
    }
  } else {
    invalidCommandMsg();
  }
};