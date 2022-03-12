/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 */
var levelOrder = function (root) {
  let queue = new Array();
  let res = new Array();
  if (!root) {
    return [];
  }
  queue.push(root);
  while (queue.length !== 0) {
    let node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};
