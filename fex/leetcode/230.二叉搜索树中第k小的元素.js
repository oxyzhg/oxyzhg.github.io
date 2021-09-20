/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let result = null;

  const traverse = (node) => {
    if (node === null) return;

    if (node.left) traverse(node.left);
    k--;
    if (k === 0) {
      result = node.val;
      return;
    }
    if (node.right) traverse(node.right);
  };

  traverse(root);

  return result;
};
// @lc code=end

/**
 * 思路：
 * 1. 中序遍历的结果是有序的
 */
