/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * 
 * Output: 1
 * 
 * Example 2:
 * 
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * 
 * Output: 3
 * 
 * Constraints:
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 *
 * @see https://leetcode.com/problems/number-of-islands/
 */

function numIslands(grid: string[][]): number {
    let islandsCol = 0;

    for (let i = 0, length = grid.length; i < length; i++) {
        for (let k = 0, l = grid[i].length; k < l; k++) {

            if (+grid[i][k] === 0) {
                continue;
            }

            const hasCheckedNeigbour =
                (i > 0 && +grid[i - 1][k] === 1)
                || +grid[i][k - 1] === 1
                || (k === 0 && i > 0 && +grid[i][k+1] === 1)
                || (i === 0 && +grid[i+1][l] === 1);

            if (!hasCheckedNeigbour) {
                islandsCol++;
            }
        }
    }

    return islandsCol;
};

const grid = [
    ["1","0","1","1","1"],
    ["1","0","1","0","1"],
    ["1","1","1","0","1"],
];

console.log(numIslands(grid));