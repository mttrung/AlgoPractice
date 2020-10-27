/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const start = new ListNode(0);
    let p = start;
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 101;
        const val2 = l2 ? l2.val : 101;
        if (val1 < val2) {
            p.next = new ListNode(val1);
            l1 = l1.next;
        } else {
            p.next = new ListNode(val2);
            l2 = l2.next;
        }
        p = p.next
    }
    return start.next;
};