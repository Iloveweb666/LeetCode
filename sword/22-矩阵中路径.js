/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
 * 如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word.charAt(0)) {
        if (dfs(board, word, [i, j])) {
          return true;
        }
      }
    }
  }
  return false;
};
function dfs(board, word, start) {
  if (word.length === 1) {
    return true;
  }
  let [i, j] = start;
  if (i > 0 && board[i - 1][j] === word.charAt(1)) {
    board[i][j] = "0";
    if (dfs(board, word.substring(1), [i - 1, j])) {
      return true;
    } else {
      board[i][j] = word.charAt(0);
    }
  }
  if (j > 0 && board[i][j - 1] === word.charAt(1)) {
    board[i][j] = "0";
    if (dfs(board, word.substring(1), [i, j - 1])) {
      return true;
    } else {
      board[i][j] = word.charAt(0);
    }
  }
  if (i < board.length - 1 && board[i + 1][j] === word.charAt(1)) {
    board[i][j] = "0";
    if (dfs(board, word.substring(1), [i + 1, j])) {
      return true;
    } else {
      board[i][j] = word.charAt(0);
    }
  }
  if (j < board[0].length - 1 && board[i][j + 1] === word.charAt(1)) {
    board[i][j] = "0";
    if (dfs(board, word.substring(1), [i, j + 1])) {
      return true;
    } else {
      board[i][j] = word.charAt(0);
    }
  }
  return false;
}
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
