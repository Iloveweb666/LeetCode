/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 */
var addBinary = function (a, b) {
  if (a == '0' && b == '0') return '0';
  let aArr = a.split('');
  let bArr = b.split('');
  let aIndex = aArr.at(-1);
  let bIndex = bArr.at(-1);
  let resArr = [];
  let p = 0; // 进位
  while (aIndex != undefined || bIndex != undefined || p) {
    let res = (Number(aIndex) || 0) + (Number(bIndex) || 0) + p;
    if (res === 1) {
      p = 0;
    } else if (res === 2) {
      res = 0;
      p = 1;
    } else if (res === 3) {
      res = 1;
      p = 1;
    }
    resArr.unshift(res);
    if (aArr.length) aArr.pop();
    aIndex = aArr.at(-1);
    if (bArr.length) bArr.pop();
    bIndex = bArr.at(-1);
  }
  return resArr.join('');
};
