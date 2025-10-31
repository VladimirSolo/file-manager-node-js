import * as fs from 'fs';
import * as crypto from 'crypto';
import { currentDirectory, invalidCommandMsg } from '../utils';

export const hash = async (filePath: string): Promise<void> => {
  try {
    const readStream = fs.createReadStream(filePath);
    const hashSum = crypto.createHash('sha256');

    await new Promise<void>((resolve, reject) => {
      readStream.on('data', (chunk) => {
        hashSum.update(chunk);
      });

      readStream.on('end', () => {
        const hash = hashSum.digest('hex');
        console.log('\x1b[36m%s\x1b[0m', `Hash: ${hash}`);
        resolve();
      });

      readStream.on('error', reject);
    });

    currentDirectory();
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error calculating hash: ${error.message}`);
    invalidCommandMsg();
  }
};