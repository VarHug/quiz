import { less, swap, sortColors } from '../index';

test('less', () => {
  expect(less(1, 10)).toBe(-1);
  expect(less(1, '10')).toBe(-1);
  expect(less(1, 1)).toBe(0);
  expect(less('100', '10')).toBe(1);
  expect(less(3, 2)).toBe(1);
});

test('swap', () => {
  const list1 = [1, 2, 3, 4];
  swap(list1, 1, 2);
  expect(list1).toEqual([1, 3, 2, 4]);

  const list2 = [1, 2, 3, 4];
  swap(list2, 0, 3);
  expect(list2).toEqual([4, 2, 3, 1]);

  const list3 = [1, 2, 3, 4];
  swap(list3, -1, 3);
  expect(list3).toEqual([1, 2, 3, 4]);

  const list4 = [1, 2, 3, 4];
  swap(list4, 1, 5);
  expect(list4).toEqual([1, 2, 3, 4]);
});

test('sortColors', () => {
  const list1 = [2, 0, 2, 1, 1, 0];
  sortColors(list1);
  expect(list1).toEqual([0, 0, 1, 1, 2, 2]);
  const list2 = [2, 0, 1];
  sortColors(list2);
  expect(list2).toEqual([0, 1, 2]);
  const list3 = [0];
  sortColors(list3);
  expect(list3).toEqual([0]);
});
