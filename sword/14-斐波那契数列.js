/**
 * @param {number} n
 * @return {number}
 */
// 递归的时间复杂度高（O(2^n)），动态规划计算
var fib = function (n) {
  if (n == 0 || n == 1) return n;
  let a = 1,
    b = 0;
  for (let i = 1; i < n; i++) {
    a = a + b;
    b = a - b;
    a %= 1000000007;
  }
  return a;
};
