import { less, swap } from '../index';

test('less', () => {
  expect(less(1, 10)).toBe(-1);
  expect(less(1, '10')).toBe(-1);
  expect(less(1, 1)).toBe(0);
  expect(less('100', '10')).toBe(1);
  expect(less(3, 2)).toBe(1);
});

test('swap', () => {
  const list = [1, 2, 3, 4];
  swap(list, 1, 2, true);
  expect(list).toEqual([1, 3, 2, 4]);
  expect(swap([1, 2, 3, 4], 0, 1, false)).toEqual([2, 1, 3, 4]);
});
