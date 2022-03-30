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
  // 允许走过的节点数（可以用visited.size()替代）
  let count = 0;
  // 走过的节点
  let visited = new Set(['0,0']);
  // 需要确定的节点队列（DFS处理）
  let queue = [[0, 0]];
  // 循环结束条件：没有待确认的节点队列
  while (queue.length) {
    // 当前节点
    const current = queue.shift();
    // 当前节点符合要求
    if (getSum(current, k)) {
      // 计数+1
      count++;
      // 非最后一行时 把当前节点下面推入队列
      if (current[1] < m - 1) {
        const bottom = [current[0], current[1] + 1];
        if (!visited.has(bottom.toString())) {
          visited.add(bottom.toString());
          queue.push(bottom);
        }
      }
      // 非最后一列时 把当前节点右边推入队列
      if (current[0] < n - 1) {
        const right = [current[0] + 1, current[1]];
        if (!visited.has(right.toString())) {
          visited.add(right.toString());
          queue.push(right);
        }
      }
    }
  }
  return count;
};

// 获取数组数位和是否小于等于k
var getSum = function (current, k) {
  const sum = numSum(current[0]) + numSum(current[1]);
  return sum <= k;
};

// 获取单个数字数位和
var numSum = function (num) {
  let s = 0;
  while (num != 0) {
    s += num % 10;
    num = Math.floor(num / 10);
  }
  return s;
};
