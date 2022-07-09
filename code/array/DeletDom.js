/*
 * @Author: XINYUAN CHEN 2766799927@qq.com
 * @Date: 2022-07-09 21:52:33
 * @LastEditors: XINYUAN CHEN 2766799927@qq.com
 * @LastEditTime: 2022-07-09 22:36:56
 * @FilePath: \algorithm\code\array\DeletDom.js
 * @Description:给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/remove-element
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*
 */

// 使用双指针判断并对元素进行替换
var removeElement = function (nums, val) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};
