import { padLeft, removeHexPrefix, sanitizeHex } from '../index';

test('removeHexPrefix', () => {
  expect(removeHexPrefix('0x031262')).toBe('031262');
  expect(removeHexPrefix('0xA6')).toBe('a6');
});

test('sanitizeHex', () => {
  expect(sanitizeHex('31262')).toBe('0x031262');
  expect(sanitizeHex('12')).toBe('0x12');
});

test('padLeft', () => {
  expect(padLeft('111', 5, 'a')).toBe('aa111');
  expect(padLeft('123', 5)).toBe('00123');
  expect(padLeft(123, 5)).toBe('00123');
  expect(padLeft(123, 3)).toBe('123');
  expect(padLeft(123, 3, 'a')).toBe('123');
});
