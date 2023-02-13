/*
 * @Author: tongzijie
 * @Date: 2023-02-09 13:42:21
 * @LastEditors: tongzijie
 * @FilePath: /LeetCode/56.合并区间.js
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  let len = intervals.length;
  for (let i = 1; i < len; i++) {
    if (intervals[i][0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};
// @lc code=end
