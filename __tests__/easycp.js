import easycp from '../src';

test('runs command', () =>
  easycp('echo hi').then(result => expect(!!result).toBe(true)));
