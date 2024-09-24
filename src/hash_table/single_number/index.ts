/**
 * 136. Single Number
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 * 
 * Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 * 
 * Constraints:
 * 
 * 1 <= nums.length <= 3 * 104
 * -3 * 104 <= nums[i] <= 3 * 104
 * 
 * Each element in the array appears twice except for one element which appears only once.
 * 
 * Необходимо решить за O(1) по памяти и O(n) сложности алгоритма
 * 
 * @see https://leetcode.com/problems/single-number/
 */

function singleNumber(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    const buffer: { [key: number]: number } = {};

    for (let i = 0, length = nums.length; i < length; i++) {
        const num = nums[i];

        if (!buffer[num]) {
            buffer[num] = 1;
        } else {
            delete buffer[num];
        }
    }

    return +Object.keys(buffer)[0];
}


// Их решение: разобраться
// function singleNumber(nums: number[]): number {
//     let result = 0;

//     for (let num of nums) {
//         result = result ^ num;
//     }
//     return result;
// }