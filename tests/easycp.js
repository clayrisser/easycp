import { readcp } from '~';

describe('easycp(cmd, args, options)', () => {
  it('should return modified promise', async () => {
    const result = readcp('echo hi');
    expect(!!result.process && !!result.cmd && !!result.args).toBe(true);
  });
  it('should parse cmd from cmd string', async () => {
    const result = readcp('echo "hello world" \'howdy texas\'');
    expect(result.cmd).toBe('echo');
  });
  it('should parse args from cmd string', async () => {
    const result = readcp('echo "hello world" \'howdy texas\'');
    expect(result.args).toEqual(['hello world', 'howdy texas']);
  });
});

describe('readcp(cmd, args, options)', () => {
  it('should read from stdout', async () => {
    const result = await readcp('echo hi');
    expect(result).toBe('hi\n');
  });
  it('should have access to process', async () => {
    const cp = readcp('sh -c "echo a && sleep 1 && echo b"');
    setTimeout(() => cp.process.kill(), 0);
    const result = await cp.then();
    expect(result).toBe('a\n');
  });
});
