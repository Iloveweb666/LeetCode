/*
 * @Author: tongzijie
 * @Date: 2023-02-09 13:16:23
 * @LastEditors: tongzijie
 * @FilePath: /LeetCode/49.字母异位词分组.js
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const keyMap = new Map();
  keyMap.set('a', 2n);
  keyMap.set('b', 3n);
  keyMap.set('c', 5n);
  keyMap.set('d', 7n);
  keyMap.set('e', 11n);
  keyMap.set('f', 13n);
  keyMap.set('g', 17n);
  keyMap.set('h', 19n);
  keyMap.set('i', 23n);
  keyMap.set('j', 29n);
  keyMap.set('k', 31n);
  keyMap.set('l', 37n);
  keyMap.set('m', 41n);
  keyMap.set('n', 43n);
  keyMap.set('o', 47n);
  keyMap.set('p', 53n);
  keyMap.set('q', 59n);
  keyMap.set('r', 61n);
  keyMap.set('s', 67n);
  keyMap.set('t', 71n);
  keyMap.set('u', 73n);
  keyMap.set('v', 79n);
  keyMap.set('w', 83n);
  keyMap.set('x', 89n);
  keyMap.set('y', 97n);
  keyMap.set('z', 101n);
  const targetMap = new Map();
  const result = [];
  for (let i = 0; i < strs.length; i += 1) {
    let mul = BigInt(1);
    for (let j = 0; j < strs[i].length; j += 1) {
      mul = mul * keyMap.get(strs[i][j]);
    }
    if (targetMap.has(mul)) {
      result[targetMap.get(mul)].push(strs[i]);
    } else {
      targetMap.set(mul, targetMap.size);
      result[targetMap.get(mul)] = [strs[i]];
    }
  }
  return result;
};
// @lc code=end
