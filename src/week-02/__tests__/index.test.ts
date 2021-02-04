import { removeHexPrefix, sanitizeHex } from '../index';

test('removeHexPrefix', () => {
  expect(removeHexPrefix('0x031262')).toBe('031262');
  expect(removeHexPrefix('0xA6')).toBe('a6');
});

test('sanitizeHex', () => {
  expect(sanitizeHex('31262')).toBe('0x031262');
  expect(sanitizeHex('12')).toBe('0x12');
});
