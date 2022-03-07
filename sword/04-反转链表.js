/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let newNodeList = null;
  while (head) {
    let node = head.next;
    head.next = newNodeList;
    newNodeList = head;
    head = node;
  }
  return newNodeList;
};
