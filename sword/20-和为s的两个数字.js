/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可
 */
var twoSum = function (nums, target) {
  // let set = new Set();
  // for (let i = 0; i < nums.length; i++) {
  //     if (set.has(target - nums[i])) return [nums[i], target - nums[i]]
  //     set.add(nums[i])
  // }
  //排序数组所以可以双指针
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j--;
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else {
      return [nums[i], nums[j]];
    }
  }
};
