/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n < 2) return 1;
  let first = 1;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    first = first + second;
    second = first - second;
    first = first >= 1000000007 ? first - 1000000007 : first;
  }
  return first % 1000000007;
};
