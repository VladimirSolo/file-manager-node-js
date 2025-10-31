import * as fs from 'fs';
import * as zlib from 'zlib';
import { currentDirectory, invalidCommandMsg, resolveDestinationPath } from '../utils';

export const decompress = async (sourcePath: string, destinationPath: string): Promise<void> => {
  try {
    await fs.promises.access(sourcePath);

    destinationPath = await resolveDestinationPath(sourcePath, destinationPath, false);

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);
    const brotli = zlib.createBrotliDecompress();

    await new Promise<void>((resolve, reject) => {
      readStream
        .pipe(brotli)
        .pipe(writeStream);

      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
      readStream.on('error', reject);
      brotli.on('error', reject);
    });

    console.log('\x1b[32m%s\x1b[0m', 'File decompressed successfully.');
    currentDirectory();
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error decompressing file: ${error.message}`);
    invalidCommandMsg();
  }
};