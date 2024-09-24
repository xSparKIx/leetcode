/**
 * 977. Квадраты отсортированного массива
 *
 * Сложность: Легкий
 * 
 * Дан массив целых чисел , nums отсортированный в неубывающем порядке.
 * Вернуть массив квадратов каждого числа, отсортированный в неубывающем порядке.
 * 
 * Пример 1:
 * Ввод: nums = [-4,-1,0,3,10]
 * Вывод: [0,1,9,16,100]
 * 
 * Пояснение: После возведения в квадрат массив становится равным [16,1,0,9,100].
 * После сортировки получается [0,1,9,16,100].
 * 
 * Пример 2:
 * Ввод: числа = [-7,-3,2,3,11]
 * Вывод: [4,9,9,49,121]
 * 
 * Ограничения:
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums сортируется в неубывающем порядке.
 * 
 * Продолжение: Возведение каждого элемента в квадрат и сортировка нового массива — очень простая задача.
 * Не могли бы вы найти O(n)решение, используя другой подход?
 * 
 * @see https://www.youtube.com/watch?v=tfvm2k5c9JI
 * @see https://leetcode.com/problems/squares-of-a-sorted-array/description/
 * @param nums Массив чисел
 * @returns Отсортированный массив чисел возведенных в квадрат
 */
function sortedSquares(nums: number[]): number[] {
  let start = 0;
  let end = nums.length - 1;
  const result = [];

  while (start <= end) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      result.unshift(Math.pow(nums[start++], 2));
    } else {
      result.unshift(Math.pow(nums[end--], 2));
    }
  }

  return result;
}

console.log(sortedSquares([-7, -7, -6, -3, 2, 4]));

