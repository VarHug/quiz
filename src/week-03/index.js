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
export const less = (a, b) => {

};

/**
 * @description 交换函数，交换数组中两个元素的位置。可以选择是否原地交换，默认是原地交换
 * @sig Array -> Number -> Number -> Boolean -> Array
 * @param {Array} list
 * @param {Number} i
 * @param {Number} j
 * @param {Boolean} inplace 是否原地（改变原数组）交换
 * @returns {void|Array}
 * @example
 *      const list = [1, 2, 3, 4];
 *      swap(list, 0, 1);                   //=> list:[2, 1, 3, 4]
 *      swap([1, 2, 3, 4], 0, 1, false);    //=> [2, 1, 3, 4]
 * @score 20
 */
export const swap = (list, i, j, inplace) => {

};
