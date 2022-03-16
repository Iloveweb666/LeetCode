/**
 * @param {number[][]} grid
 * @return {number}
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 * 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
 * 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 */
var maxValue = function (grid) {
  // 递归方程 f(x,y) = Math.max(f(x-1,y),f(x,y-1)) + grid[x,y]

  let result = grid[0][0];
  //line 行 list 列
  let line = grid[0].length,
    list = grid.length;
  for (let i = 0; i < list; i++) {
    for (let j = 0; j < line; j++) {
      if (j > 0 && i > 0) {
        grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
      }

      if (i === 0 && j > 0) {
        grid[i][j] += grid[i][j - 1];
      }

      if (j === 0 && i > 0) {
        grid[i][j] += grid[i - 1][j];
      }

      result = Math.max(result, grid[i][j]);
    }
  }

  return result;
};
