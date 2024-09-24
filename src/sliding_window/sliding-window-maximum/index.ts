/**
 * 239. Sliding Window Maximum
 * @see https://leetcode.com/problems/sliding-window-maximum/description/
 * @param nums 
 * @param k
 * 
 * @todo не прошел по скорости выполнения - надо проверить
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
    const result = [];
    let start = 0;
    let end = k;

    while (end <= nums.length) {
        result.push(Math.max(...nums.slice(start, end)));
        start++;
        end++;
    }

    return result;
};

console.log(maxSlidingWindow([1], 1));