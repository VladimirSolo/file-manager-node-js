import * as readline from 'readline';
import { goodbyeMsg, invalidCommandMsg, welcomeMsg } from './utils';
import { changeDirectory, goUp, listDirectoryContents } from './nwd';
import { add, cat, copy, move, remove, rename } from './basic';
import { osInfo } from './os';
import { hash } from './hash';
import { compress, decompress } from './compress';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const startProgram = (): void => {
  welcomeMsg();

  rl.on('line', (input: string) => {
    const command: string[] = input.trim().split(' ');

    switch (command[0]) {
      case 'up':
        goUp();
        break;
      case 'cd':
        changeDirectory(command[1]);
        break;
      case 'ls':
        listDirectoryContents();
        break;
      case 'cat':
        cat(command[1]);
        break;
      case 'add':
        add(command[1]);
        break;
      case 'rn':
        if (command.length >= 3) {
          rename(command[1], command[2]);
        } else {
          invalidCommandMsg();
        }
        break;
      case 'cp':
        copy(command[1], command[2]);
        break;
      case 'mv':
        move(command[1], command[2]);
        break;
      case 'rm':
        remove(command[1]);
        break;
      case '.exit':
        rl.close();
      case 'os':
        osInfo(command[1]);
        break;
      case 'hash':
        hash(command[1]);
        break;
      case 'compress':
        compress(command[1], command[2]);
        break;
      case 'decompress':
        decompress(command[1], command[2]);
        break;
      default:
        invalidCommandMsg();
        break;
    }
  }).on('close', (): void => {
    goodbyeMsg();
    process.exit();
  });
};

startProgram();
