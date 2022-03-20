/**
 * @param {number[]} nums
 * @return {number[]}
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 */
var exchange = function (nums) {
  // 降低一半的时间复杂度，且无空间复杂度
  let i = 0,
    j = nums.length - 1; //左指针i用来找到一个偶数，右指针j用来找到一个奇数。然后交换
  while (i < j) {
    while (i < j && nums[i] % 2 == 1) i++;
    while (i < j && nums[j] % 2 == 0) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]]; //es6解构语句实现交换
  }
  return nums;
};
