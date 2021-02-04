
interface IAdjustFunc {
  (idx: number, fn: Function, list: any[]): any[]
}

/**
 * @description 将数组中指定索引处的值替换为经函数变换的值。
 * @sig Number -> (a -> a) -> [a] -> [a] (curry)
 * @param {Number} idx
 * @param {Function} fn
 * @param {Array} list
 * @returns {Array}
 * @example
 *      adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
 *      adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
 * @score 50
 */
export const adjust: IAdjustFunc = (idx: number, fn: Function, list: any[]): any[] => {
  if (idx < -list.length || idx >= list.length) {
    return list;
  }
  const start: number = idx < 0 ? list.length : 0;
  const _idx: number = start + idx;
  const _list: any[] = list.slice();
  _list[_idx] = fn(_list[_idx]);
  return _list;
};

/**
 * @description 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * @sig Array -> Array
 * @param {Array} strs
 * @returns {Array}
 * @example
 *      groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);      //=> [["ate","eat","tea"],["nat","tan"],["bat"]]
 * @score 50
 */
export const groupAnagrams: (strs: string[]) => string[][] = (strs: string[]): string[][] => {
  const dic: {
    [propName: string]: number
  } = {};
  const ret: string[][] = [];
  let counter: number = 0;
  strs.forEach((str: string): void => {
    const key: string = str.split('').sort().join('');
    if (typeof dic[key] !== 'number') {
      dic[key] = counter;
      ret[counter] = [];
      counter++;
    }
    ret[dic[key]].push(str);
  });
  return ret;
};
