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
