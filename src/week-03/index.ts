/**
 * @description 比较函数，判断第一个值是否小于第二个值，小于返回 -1 ，等于返回 0 ，大于返回 1 （ 1 和 -1 并不严谨，大于小于 0 即可）
 * @sig (String|Number) -> (String|Number) -> Number
 * @param {String|Number} a
 * @param {String|Number} b
 * @returns {Number}
 * @example
 *      less(1, 10);          //=> -1
 *      less(1, '10');        //=> -1
 *      less(1, 1);           //=> 0
 *      less('100', '10');    //=> 1
 *      less(3, 2);           //=> 1
 * @score 20
 */
export function less(a: number | string, b: number | string): number {
  const _a: string = a + '';
  const _b: string = b + '';
  return _a.localeCompare(_b);
}

/**
 * @description 交换函数，原地交换数组中两个元素的位置。
 * @sig Array -> Number -> Number -> Array
 * @param {Array} list
 * @param {Number} i
 * @param {Number} j
 * @returns {void|Array}
 * @example
 *      const list = [1, 2, 3, 4];
 *      swap(list, 0, 1);                   //=> list:[2, 1, 3, 4]
 *      swap([1, 2, 3, 4], 0, 1, false);    //=> [2, 1, 3, 4]
 * @score 20
 */
export function swap(list: any[], i: number, j: number): void {
  if (!(i < 0 || j < 0 || i >= list.length || j >= list.length)) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
}

/**
 * @description 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * @sig Array -> Array
 * @param {Array} nums
 * @returns {void}
 * @example
 *      const colors = [2,0,2,1,1,0]; // 原地排序，之后一样，改变入参
 *      sortColors(colors);      //=> colors:[0,0,1,1,2,2]
 *      sortColors([2,0,1]);     //=> [0,1,2]
 *      sortColors([0]);         //=> [0]
 *      sortColors([1]);         //=> [1]
 * @score 60（不使用原生的 sort 方法 20 分，遍历两次数组 20 分，只遍历一次数组 20 分）
 */
export function sortColors(nums: number[]): void {
  const WHITE: number = 1;
  let red: number = 0,
    white: number = 0,
    blue: number = nums.length - 1;
  while (white <= blue) {
    if (nums[white] < WHITE) {
      swap(nums, red, white);
      red++;
      white++;
    } else if (nums[white] > WHITE) {
      swap(nums, white, blue);
      blue--;
    } else {
      white++;
    }
  }
}
