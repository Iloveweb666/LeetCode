/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，
 * 因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。
 * 请问该机器人能够到达多少个格子？
 */
var movingCount = function (m, n, k) {
  let count = 0;
  let visited = new Set(['0,0']);
  let queue = [[0, 0]];
  while (queue.length) {
    const current = queue.shift();
    if (getSum(current, k)) {
      count++;
      if (current[1] < m - 1) {
        const bottom = [current[0], current[1] + 1].toString();
        if (!visited.has(bottom)) {
          visited.add(bottom);
          queue.push([current[0], current[1] + 1]);
        }
      }
      if (current[0] < n - 1) {
        const right = [current[0] + 1, current[1]].toString();
        if (!visited.has(right)) {
          visited.add(right);
          queue.push([current[0] + 1, current[1]]);
        }
      }
    }
  }
  return count;
};

var getSum = function (current, k) {
  const sum = numSum(current[0]) + numSum(current[1]);
  return sum <= k;
};

var numSum = function (num) {
  let s = 0;
  while (num != 0) {
    s += num % 10;
    num = Math.floor(num / 10);
  }
  return s;
};
