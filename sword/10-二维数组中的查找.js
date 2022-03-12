/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) {
    return false;
  }
  // 不断的从右上往左下找就可以 算法复杂度O(m+n)
  let m = matrix.length,
    n = matrix[0].length;
  let row = 0,
    col = n - 1;
  while (row < m && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return true;
    }
  }
  return false;
};
