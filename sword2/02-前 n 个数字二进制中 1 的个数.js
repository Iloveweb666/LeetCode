/**
 * @param {number} n
 * @return {number[]}
 * 给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。
 */
// 理解为动态规划题 算法复杂度为o(n)
// 数学规律题，二进制表示中，若为偶数 n中1的个数跟n/2的1的个数相同；若为奇数 则为上一个数加一
var countBits = function (n) {
  let dp = [0];
  for (let i = 1; i <= n; ++i) {
    if (i % 2 == 0) {
      dp[i] = dp[i / 2];
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return dp;
};
