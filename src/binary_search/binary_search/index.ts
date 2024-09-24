/**
 * 704. Binary Search
 * 
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @see https://leetcode.com/problems/binary-search/description/
 */

function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      end = middle - 1;
    } else if (nums[middle] < target) {
      start = middle + 1;
    }
  }

  return -1;
}