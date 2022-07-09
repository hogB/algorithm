/*
 * @Author: XINYUAN CHEN 2766799927@qq.com
 * @Date: 2022-07-08 20:38:04
 * @LastEditors: XINYUAN CHEN 2766799927@qq.com
 * @LastEditTime: 2022-07-09 09:09:18
 * @FilePath: \algorithm\code\array\OrderlyArray.js
 * @Description:给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 * 由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
 * 将最终结果插入 nums 的前 k 个位置后返回 k 。不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/*
 * 对数组进行遍历，，通过控制索引来比较前后相同关系
 * 如果相同则控制索引保持不变
 * 如果不同那么继续遍历
 */

let array = [0, 0, 1, 1, 1];
var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
/*
 * 双指针法
 * 定义low和fast两个指针
 * 如果相等，fast前进
 * 如果不等，low+1 = fast ， low+1
 * 循环结束返回low+1即可
 */
var removeDuplicates = function (nums) {
  if (nums && nums.length < 0) {
    return 0;
  }
  let low = 0,
    fast = 1;
  while (fast < nums.length) {
    if (nums[low] !== nums[fast]) {
      nums[low + 1] = nums[fast];
      low++;
    }
    fast++;
  }
  return low + 1;
};
