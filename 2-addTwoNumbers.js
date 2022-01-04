// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let targetList = new ListNode(); //目标链表
    let node = targetList; //链表节点占位
    let carry = 0; //是否进位符

    //当l1节点与l2节点均为完结时循环
    while (l1 !== null || l2 !== null) {
        let sum = 0;
        //l1存在时 累加到sum，节点进一位
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        //l2存在时 累加到sum，节点进一位
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        //当存在进位符 或 sum需要进位时
        if (sum > 9 || carry) {
            sum += carry;
            carry = Math.floor(sum / 10);
        }
        //占位节点的下一位为sum对10 取余
        node.next = new ListNode(sum % 10)
        //进位用于下次循环
        node = node.next;
    }
    //判断下是否需要最终进位
    if (carry > 0) {
        node.next = new ListNode(carry);
    }
    //返回的是占位节点的next
    return targetList.next;
};

let list = addTwoNumbers(l1, l2);
console.log(list);