import * as os from 'os';
import { invalidCommandMsg } from '../utils';

export const osInfo = (flag: string): void => {
  try {
    switch (flag) {
      case '--EOL':
        console.log('\x1b[36m%s\x1b[0m', `EOL: ${JSON.stringify(os.EOL)}`);
        break;

      case '--cpus':
        const cpus = os.cpus();
        console.log('\x1b[36m%s\x1b[0m', `Overall CPUs: ${cpus.length}`);
        cpus.forEach((cpu, index) => {
          console.log(
            '\x1b[36m%s\x1b[0m',
            `CPU ${index + 1}: ${cpu.model}, ${(cpu.speed / 1000).toFixed(2)} GHz`
          );
        });
        break;

      case '--homedir':
        console.log('\x1b[36m%s\x1b[0m', `Home directory: ${os.homedir()}`);
        break;

      case '--username':
        console.log('\x1b[36m%s\x1b[0m', `Username: ${os.userInfo().username}`);
        break;

      case '--architecture':
        console.log('\x1b[36m%s\x1b[0m', `Architecture: ${os.arch()}`);
        break;

      default:
        invalidCommandMsg();
        break;
    }
  } catch (error: any) {
    console.log('\x1b[31m%s\x1b[0m', `Error: ${error.message}`);
    invalidCommandMsg();
  }
};