/*
 * @Author: tongzijie
 * @Date: 2023-02-13 16:48:44
 * @LastEditors: tongzijie
 * @FilePath: /LeetCode/179.最大数.js
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
// var numberSort = function (a, b, beforeInt) {
//   const _a = String(a);
//   const _b = String(b);
//   const target1 = _a[0] === undefined ? beforeInt : _a[0];
//   const target2 = _b[0] === undefined ? beforeInt : _b[0];
//   if (target1 > target2) {
//     return -1;
//   } else if (target1 < target2) {
//     return 1;
//   } else if (target1 === target2) {
//     const next_a = String(a).slice(1, a.length);
//     const next_b = String(b).slice(1, b.length);
//     if (next_a === '' && next_b === '') return 0;
//     return numberSort(next_a, next_b, target1);
//   }
// };

var largestNumber = function (nums) {
  // nums = nums.sort(numberSort);
  let num = nums
    .map(r => r.toString())
    .sort((a, b) => parseInt(b + a) - parseInt(a + b))
    .join('');
  return parseInt(num) == 0 ? '0' : num;
  // return nums.join('');
};

// @lc code=end
