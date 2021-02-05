import * as R from 'ramda';
import { adjust } from '../index';

test('adjust', () => {
  const list: string[] = ['a', 'b', 'c', 'd'];
  expect(adjust(1, R.toUpper, list)).toEqual(['a', 'B', 'c', 'd']);
  expect(adjust(-1, R.toUpper, list)).toEqual(['a', 'b', 'c', 'D']);
});
