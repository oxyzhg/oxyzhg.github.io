/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
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
  let mergedList = new ListNode(0);
  let head = mergedList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }

    head = head.next;
  }

  head.next = l1 || l2;

  return mergedList.next;
};
// @lc code=end
