/**
 * 56. Merge Intervals
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * Example 1:
 * 
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 * 
 * Example 2:
 *
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 * Constraints:
 * 
 * 1 <= intervals.length <= 104
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 104
 * 
 * @see https://leetcode.com/problems/merge-intervals/description/
 */

function merge(intervals: number[][]): number[][] {
    const arr = intervals.sort((a, b) => a[0] - b[0]);
    let start = 0;
    let end = 1;

    while(end < arr.length) {
        const firstItem = arr[start];
        const secondItem = arr[end];
        const firstIncluded = secondItem[0] <= firstItem[1];

        if (firstIncluded) {
            arr[start] = [Math.min(firstItem[0], secondItem[0]), Math.max(firstItem[1], secondItem[1])];
            arr.splice(end, 1);
        } else {
            start++;
            end++;
        }
    }

    return arr;
};

/**
 * Самый быстрый вариант:
 */

// function merge(intervals: number[][]): number[][] {
//     intervals.sort((a, b) => a[0] - b[0]);

//     const merged = [];
//     let previous = intervals[0];

//     for (let i = 1; i < intervals.length; i++) {
//         if (previous[1] >= intervals[i][0]) {
//             previous[1] = Math.max(previous[1], intervals[i][1]);
//         } else {
//             merged.push(previous);
//             previous = intervals[i];
//         }
//     }

//     merged.push(previous);
//     return merged;
// };