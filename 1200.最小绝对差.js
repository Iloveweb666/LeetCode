/*
 * @Author: tongzijie
 * @Date: 2023-02-06 13:14:54
 * @LastEditors: tongzijie
 * @FilePath: /LeetCode/1200.最小绝对差.js
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let resultArr = [];
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      //在冒泡排序中处理数组
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      const differ = arr[j + 1] - arr[j]; // 绝对差
      if (differ < min) {
        min = differ;
        // 有新的最小绝对差，替换原数组
        resultArr = [[arr[j], arr[j + 1]]];
      } else if (differ === min) {
        // 等于最小绝对差
        resultArr.push([arr[j], arr[j + 1]]);
      }
    }
  }
  return resultArr;
};
// @lc code=end
