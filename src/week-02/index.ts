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
