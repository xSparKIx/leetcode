/**
 * 11. Контейнер с наибольшим количеством воды
 * 
 * Вам дан целочисленный массив heightдлины n. Нарисованы nвертикальные линии, две конечные точки которых — и .ith(i, 0)(i, height[i])
 * Найдите две линии, которые вместе с осью x образуют емкость, такую, чтобы емкость содержала наибольшее количество воды.
 * Укажите максимальный объем воды, который может храниться в контейнере .
 * 
 * Обратите внимание , что наклонять емкость нельзя.
 * 
 * Пример 1:
 * 
 * Вход: высота = [1,8,6,2,5,4,8,3,7]
 * Выход: 49
 * Пояснение: Вышеуказанные вертикальные линии представлены массивом [1,8,6,2,5,4,8,3,7].
 * В этом случае максимальная площадь воды (синяя секция), которую может содержать контейнер, составляет 49.
 * 
 * Пример 2:
 * 
 * Вход: высота = [1,1]
 * Выход: 1
 * 
 * Ограничения:
 * 
 * n == height.length
 * 2 <= n <= 105
 * 0 <= height[i] <= 104
 * 
 * @see https://leetcode.com/problems/container-with-most-water/description/
 */

function maxArea(height: number[]): number {
  let maxArea = 0;
  let start = 0;
  let end = height.length-1;
  let flag = true;

  while (start < end) {
    const currentArea = Math.min(height[start], height[end]) * (end - start);
    maxArea = Math.max(maxArea, currentArea);
    
    if (flag) {
      start++;
    } else {
      end--;
    }

    flag = !flag;
  }

  return maxArea;
}

/**
 * Решение O(n^2)
 */
// function maxArea(height: number[]): number {
//   let maxArea = 0;
  
//   for (let i = 0, length = height.length; i < length; i++) {
//     for (let k = length - 1; k > i; k--) {
//       const currentArea = Math.min(height[i], height[k]) * (k - i);
//       maxArea = Math.max(maxArea, currentArea);
//     }
//   }

//   return maxArea;
// }

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// Решение, надо разобрать:

// function maxArea(height: number[]): number {
//   // we'll use the 2 pointer approach to solve the problem
//   // as we need to the maximum amount of water the container
//   // can store, we'll have the pointers from 0 till n-1
//   let low = 0;
//   let high = height.length - 1;
//   let ans = 0;

//   while (low <= high) {
//     // we'll calcuate the length and breadth of the container
//     // and then we'll keep track of the highest value

//     // as the note in the problem says that we cannot slant
//     // the container, so for length we need to take the lowest
//     // value else the line will not be parallel to the x-axis
//     // and we'll have a slant
//     const length = Math.min(height[low], height[high]);

//     // for breadth we need to find the distance between the 2 pointers
//     const breadth = high - low;
//     const area = length * breadth;

//     // store the highest value
//     ans = Math.max(ans, area);

//     // now we need to move either the i pointer or j pointer
//     // as we require the container to be max, we need to move
//     // the smallest value between low and high pointer
//     if (height[low] < height[high]) low++;
//     else high--;
//   }
//   return ans;
// };