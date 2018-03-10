import { readcp } from '../src';

describe('readcp(cmd, args, options)', () => {
  it('should read from stdout', async () => {
    const result = await readcp('echo hi');
    expect(result).toBe('hi\n');
  });
});
