import childProcess from 'child_process';

const defaults = {
  stdout: true,
  stderr: true,
  stdio: 'inherit'
};

export default async (cmd, args = [], options = {}) => {
  options = { ...defaults, ...options };
  if (!options.stdout || !options.stderr) {
    options.stdio = 'pipe';
  }
  if (cmd.indexOf(' ') > -1) {
    const cmdArray = cmd.split(' ');
    args = [...cmdArray.slice(1), ...args];
    [cmd] = cmdArray;
  }
  return new Promise((resolve, reject) => {
    try {
      const proc = childProcess.spawn(cmd, args, options);
      if (options.stdout && proc.stdout) {
        proc.stdout.on('data', data => {
          process.stdout.write(data.toString());
        });
      }
      if (options.stderr && proc.stderr) {
        proc.stderr.on('data', data => {
          process.stderr.write(data.toString());
        });
      }
      return proc.on('close', () => {
        resolve(proc);
      });
    } catch (err) {
      return reject(err);
    }
  });
};
