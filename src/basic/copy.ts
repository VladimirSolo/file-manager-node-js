import * as fs from 'fs';
import * as path from 'path';
import { currentDirectory, invalidCommandMsg } from '../utils';

export const copy = async (sourcePath: string, destinationPath: string): Promise<void> => {
  try {
    await fs.promises.access(sourcePath);

    const destinationStats = await fs.promises.stat(destinationPath);
    if (destinationStats.isDirectory()) {
      const fileName = path.basename(sourcePath);
      destinationPath = path.join(destinationPath, fileName);
    }

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);

    await new Promise<void>((resolve, reject) => {
      readStream.pipe(writeStream);

      writeStream.on('close', () => resolve());
      writeStream.on('error', reject);
    });

    console.log('\x1b[32m%s\x1b[0m', 'File copied successfully.');
    currentDirectory();
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error copying file: ${error.message}`);
    invalidCommandMsg();
  }
};
