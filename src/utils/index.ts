export const username: string = process.argv[4];

export const welcomeMsg = (): void => {
  console.log('\x1b[32m%s\x1b[0m', `Welcome to the File Manager, ${username ? username : 'No Name'}!`);
  currentDirectory();
};

export const currentDirectory = (): void => {
  console.log(`You are currently in ${process.cwd()}\n`)
};

export const invalidCommandMsg = (): void => {
  console.log('\x1b[33m%s\x1b[0m', 'Invalid input. Please enter a valid command.');
};

export const failureMsg = (): void => {
  console.log('\x1b[33m%s\x1b[0m', 'Operation failed. Please try again.');
};

export const goodbyeMsg = (): void => {
  console.log(`\x1b[2m\x1b[31m\x1b[44mThank you for using File Manager, ${username ? username : 'No Name'}, goodbye!\x1b[0m`);
};