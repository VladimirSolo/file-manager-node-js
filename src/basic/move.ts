import * as fs from 'fs/promises';
import { currentDirectory, invalidCommandMsg } from '../utils';
import { copy } from './copy';

export const move = async (sourcePath: string, destinationPath: string): Promise<void> => {
  try {
    await fs.access(sourcePath);

    const destinationStats = await fs.stat(destinationPath);
    if (destinationStats.isDirectory()) {
      const fileName = sourcePath.split('/').pop() || sourcePath.split('\\').pop();
      destinationPath = destinationPath + '/' + fileName;
    }

    await copy(sourcePath, destinationPath);

    await fs.unlink(sourcePath);

    console.log('\x1b[32m%s\x1b[0m', 'File moved successfully.');
    currentDirectory();
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error moving file: ${error.message}`);
    invalidCommandMsg();
  }
};
