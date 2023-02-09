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
  const step = 1;
  while (step < intervals.length) {
    for (let i = 0; i < intervals.length; i += 1) {
      const i1 = i;
      const i2 = i + step;
      if (i2 >= intervals.length) {
        step += 1;
        break;
      } // i2越界结束循环
      // 取两个值，保证升序
      const arr1 = intervals[i1][0] < intervals[i2][0] ? intervals[i1] : intervals[i2];
      const arr2 = intervals[i1][0] < intervals[i2][0] ? intervals[i2] : intervals[i1];
      const newArr = [];
      if (arr1[1] < arr2[0]) {
        // 无交集 下次循环
        step += 1;
        continue;
      } else {
        // 合并区间
        newArr.push(arr1[0], arr2[1]);
        //  修改intervals - i1位置替换为newArr，i2位置删除
      }
    }
  }
};
// @lc code=end
