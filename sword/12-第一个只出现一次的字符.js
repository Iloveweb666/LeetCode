/**
 * @param {string} s
 * @return {character}
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 */

// 遍历算法复杂度O（n）
var firstUniqChar = function (s) {
  if (!s.length) {
    return " ";
  }
  let setObj = {};
  for (let i = 0; i < s.length; i++) {
    if (setObj.hasOwnProperty(s[i])) {
      setObj[s[i]]++;
    } else {
      setObj[s[i]] = 1;
    }
  }
  let target = Object.keys(setObj).filter((i) => setObj[i] === 1);
  if (target.length) {
    return target[0];
  } else {
    return " ";
  }
};
