/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      ans = Math.min(ans, i - start + 1);
      sum -= nums[start++];
    }
  }

  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};
// @lc code=end

/**
 * 思路：滑动窗口
 * 1. 右指针对应元素每次遍历加和
 * 2. 如果累计超过target，更新符合条件的数组长度，并尝试移除先加入的元素，直到加和不再大于target
 */
