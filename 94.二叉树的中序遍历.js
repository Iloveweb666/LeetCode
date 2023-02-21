/*
 * @Author: tongzijie
 * @Date: 2023-02-21 16:06:07
 * @LastEditors: tongzijie
 * @FilePath: /LeetCode/94.二叉树的中序遍历.js
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  const stack = [];
  let cur = root;
  const res = [];
  while (stack.length || cur) {
    // 左节点都先压入栈
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    res.push(node.val);
    if (node.right != null) {
      cur = node.right;
    }
  }
  return res;
};
// @lc code=end
