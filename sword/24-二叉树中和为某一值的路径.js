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
 * @param {number} target
 * @return {number[][]}
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点。
 */
var pathSum = function (root, target) {
  if (!root) return [];
  let result = [];
  deepSum(root, [], target, result);
  return result;
};

var deepSum = function (node, sumArr, target, result) {
  sumArr = [...sumArr, node.val];
  if (node.left != null) {
    deepSum(node.left, sumArr, target, result);
  }
  if (node.right != null) {
    deepSum(node.right, sumArr, target, result);
  }
  if (node.left == null && node.right == null) {
    if (sumArr.reduce((a, b) => a + b, 0) == target) {
      result.push(sumArr);
    }
  }
};
