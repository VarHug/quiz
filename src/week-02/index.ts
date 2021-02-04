/**
 * @description 去除16进制的前缀，并转换为小写
 * @sig String -> String
 * @param {String} hex
 * @returns {String}
 * @example
 *      removeHexPrefix("0x031262");      //=> "031262"
 *      removeHexPrefix("0xA6");          //=> "a6"
 * @score 20
 */
export const removeHexPrefix: (hex: string) => string = (hex: string): string => {
  return hex.replace('0x', '').toLowerCase();
};

/**
 * @description 为16进制字符串添加 "0x" 前缀，为了看起来便于直观理解，需要要求位数为偶数位
 * @sig String -> String
 * @param {String} hex
 * @returns {String}
 * @example
 *      sanitizeHex("31262");     //=> "0x031262"
 *      sanitizeHex("12");        //=> "0x12"
 * @score 40
 */
export const sanitizeHex: (hex: string) => string = (hex: string): string => {
  let _hex: string = hex.replace('0x', '');
  _hex = _hex.length % 2 ? `0${_hex}` : _hex;
  return `0x${_hex}`;
};

/**
 * @description 左边补位
 * @sig String | Number -> Number -> String -> String
 * @param {String|Number} n 待补位字符串或数字
 * @param {String} width 长度
 * @param {String} z 选传，补位字符，如果没传，用 0 占位
 * @returns {String}
 * @example
 *      padLeft('111', 5, 'a');     //=> "aa111"
 *      padLeft("123", 5);          //=> "00123"
 *      padLeft(123, 5);            //=> "00123"
 * @score 40
 */
export const padLeft = (n: string|number, width: number, z?: string): string => {
  const _z: string = z || '0';
  const _n: string = n + '';
  return width < _n.length ? _n : new Array(width - _n.length + 1).join(_z) + _n;
};
