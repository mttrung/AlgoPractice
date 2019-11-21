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
    var result;
    var p;
    var remember = 0;
    while (l1 || l2 || remember == 1) {

        if (result) {
            p.next = new ListNode(remember);
            p = p.next;
            remember = 0;
        } else {
            result = new ListNode(0);
            p = result;
        }
        var val1, val2;
        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        } else {
            val1 = 0;
        }
        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        } else {
            val2 = 0;
        }

        if (p.val + val1 + val2 > 9)
            remember = 1;
        p.val = (p.val + val1 + val2) % 10;
    }
    return result;
};