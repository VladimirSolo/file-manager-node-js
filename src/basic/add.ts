import * as fs from 'fs';
import { currentDirectory, invalidCommandMsg } from "../utils";

export const add = async (fileName: string): Promise<void> => {
  try {
    const writeStream = fs.createWriteStream(fileName);

    await new Promise<void>((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
      writeStream.end();
    });

    console.log('\x1b[32m%s\x1b[0m', 'File created successfully.');
    currentDirectory();
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error creating file: ${error.message}`);
    invalidCommandMsg();
  }
};
