/**
 * Задача:
 * 
 * Дана последовательность неотрицательных целых чисел,
 * нужно переставить 0 в конец с сохранением порядка остальных чисел.
 * 
 * Пример:
 * 
 * 0 1 0 2 0 3 => 1 2 3 0 0 0
 * 
 * @see https://www.youtube.com/watch?v=R6lJTheHJGo&list=WL&index=22&t=135s
 */
function sortZeroes(nums: number[]): number[] {
	const result = [...nums];
	return result.sort((a: number, b: number) => {
		if (a === 0) {
			return 1;
		} else if (b === 0) {
			return -1;
		}
	})
}

/**
 * Тут пользуемся методом 2х указателей и начинаем перемещаться по массиву с двух сторон.
 * Если находим 0 то удаляем его из массива и вставляем в конец.
 * Сложность временная: O(logN)
 * Сложность по памяти: O(1)
 * 
 * @todo Большой минус в том, что мы изменяем наш массив, а он будет переиндексовываться, за счет этого будем терять скорость.
 * @param nums 
 * @returns 
 */
function sortZeroes2(nums: number[]): number[] {
	const result = [...nums];
	let start = 0;
	let end = result.length - 1;

	while (start <= end) {
		if (result[end] === 0) {
			result.splice(end, 1);
			result.push(0);
		}

		if (result[start] === 0) {
			result.splice(start, 1);
			result.push(0);
			start--;
			end--;
		}

		start++;
		end--;
	}

	return result;
}

/**
 * Просто итерируем по массиву и меняем местами элементы если элемент не нулевой.
 * Сложность временная: O(n)
 * Сложность по памяти: O(1)
 * @param nums 
 * @returns 
 */
function sortZeroes3(nums: number[]): number[] {
	const result = [...nums];
	let start = 0;

	for (let i = 0, length = result.length; i < length; i++) {
		if (!result[i]) {
			continue;
		}

		[result[start], result[i]] = [result[i], result[start]];
		start++;
	}

	return result;
}

const t = [0, 0, 1, 0, 2, 0, 3, 4, 0];

console.log(sortZeroes(t), t);
console.log(sortZeroes2(t), t);
console.log(sortZeroes3(t), t);
