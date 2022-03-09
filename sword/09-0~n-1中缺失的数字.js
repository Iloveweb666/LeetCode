/**
 * @param {number[]} nums
 * @return {number}
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 */

// 遍历耗时巨高
// var missingNumber = function (nums) {
//   for (let i = 0; i <= nums.length; i++) {
//     if (nums.indexOf(i) === -1) {
//       return i;
//     }
//   }
// };

// 二分法
var missingNumber = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (mid == nums[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};
