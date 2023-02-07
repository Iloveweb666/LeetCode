/*
 * @Author: tongzijie
 * @Date: 2023-02-07 13:20:40
 * @LastEditors: tongzijie
 * @FilePath: /LeetCode/88.合并两个有序数组.js
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index1 = 0,
    index2 = 0; // 两个数组下标
  const _nums1 = Array.from(nums1);
  const result = [];
  while (index1 < m || index2 < n) {
    let pushOne = _nums1[index1] <= nums2[index2];
    pushOne = index1 >= m ? false : pushOne;
    pushOne = index2 >= n ? true : pushOne;
    result.push(pushOne ? _nums1[index1] : nums2[index2]);
    pushOne ? index1++ : index2++;
  }
  const length = m + n;
  for (let i = 0; i < length; i++) {
    nums1.shift();
    nums1.push(result[i]);
  }
};
// @lc code=end
