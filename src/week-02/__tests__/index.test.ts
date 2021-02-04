import { removeHexPrefix } from '../index';

test('removeHexPrefix', () => {
  expect(removeHexPrefix('0x031262')).toBe('031262');
  expect(removeHexPrefix('0xA6')).toBe('a6');
});
