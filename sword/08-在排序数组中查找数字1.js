/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 统计一个数字在排序数组中出现的次数。
 */

// 二分法
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let mid;
//   let index = -1;
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       index = mid;
//       break;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     }
//   }
//   if (index === -1) {
//     return 0;
//   } else {
//     left = index - 1;
//     right = index + 1;
//     while (nums[left] === target) {
//       --left;
//     }
//     while (nums[right] === target) {
//       ++right;
//     }
//     return right - left - 1;
//   }
// };

// 优化第一个while
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      if (nums[right] != target) right--;
      else if (nums[left] != target) left++;
      else break;
    }
  }
  return right - left + 1;
};

console.log(search([5, 7, 7, 8, 8, 10], 6));
