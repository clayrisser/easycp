import childProcess from 'child_process';

const defaults = {
  stdout: true,
  stderr: true,
  stdio: 'inherit',
  read: false
};

async function easycp(cmd = 'echo', args = [], options = {}) {
  if (options.read && !options.stdio) {
    options.stdio = 'pipe';
    if (options.stdout !== true) options.stdout = false;
    if (options.stderr !== true) options.stderr = false;
  }
  if (options.stdio === false) {
    options.stdio = 'ignore';
    if (options.stdout !== true) options.stdout = false;
    if (options.stderr !== true) options.stderr = false;
  } else if (options.stdio === true) {
    options.stdio = 'inherit';
    if (options.stdout !== false) options.stdout = true;
    if (options.stderr !== false) options.stderr = true;
  }
  options = { ...defaults, ...options };
  if ((!options.stdout || !options.stderr) && options.stdio === 'inherit') {
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
      let combinedOutput = '';
      if (proc.stdout) {
        proc.stdout.on('data', data => {
          const output = data.toString();
          combinedOutput += output;
          if (options.stdout) {
            process.stdout.write(output);
          }
        });
      }
      if (proc.stderr) {
        proc.stderr.on('data', data => {
          const output = data.toString();
          combinedOutput += output;
          if (options.stderr) {
            process.stderr.write(output);
          }
        });
      }
      return proc.on('close', () => {
        if (options.read) {
          return resolve(combinedOutput);
        }
        return resolve(proc);
      });
    } catch (err) {
      return reject(err);
    }
  });
}

export async function readcp(cmd = 'echo', args = [], options = {}) {
  return easycp(cmd, args, { ...options, read: true });
}

export async function silentcp(cmd = 'echo', args = [], options = {}) {
  return easycp(cmd, args, { ...options, stdio: false });
}

export default easycp;
