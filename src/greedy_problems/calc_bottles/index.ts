/**
 * Дана последовательность емкостей и объем бидонов, нужно определить сколько бидонов нужно, чтобы опустошить все емкости. 
* 
 * На конвейр поступают емкости с жидкостями неотрицательного объема (порядок поступления менять нельзя).
 * Дано неограниченное количество бидонов некоторого положительного объема куда нужно сливать эти жидкости.
 * Емкость нужно вылить целиком, то есть если в текущем бидоне недостаточно места, нужно взять следующий бидон.
 * 
 * !Если объем емкости превышает объем бидона то необходимо вернуть -1. Так как невозможно полностью вылить емкость в один бидон.
 * 
 * Пример:
 * Емкости: 1,3,2,4,10,8,4,2,5,3
 * Вместимость бидона: 12
 * 
 * Сложность решения: O(n)
 *  
 * @param bottles Массив объемов емкостей
 * @param bottleSize Объем
 * @returns 
 */
function calcBottles(bottles: number[], bottleSize: number): number {
  let bottleCol = 0;
  let bottleFillness = 0;

  for (let i = 0, length = bottles.length; i < length; i++) {
    if (bottles[i] > bottleSize) {
      return -1;
    }

    bottleFillness += bottles[i];

    if (bottleFillness >= bottleSize) {
      bottleCol++;
      bottleFillness = bottleFillness === bottleSize ? 0 : bottles[i];
    }
  }

  if (bottleFillness > 0) {
    bottleCol++;
  }

  return bottleCol;
}

/**
 * Дана последовательность емкостей, нужно определить минимально возможный размер бидонов, чтобы опустошить все емкости в заданное количество бидонов.
 * 
 * На конвейр поступают емкости с жидкостями неотрицательного объема (порядок поступления менять нельзя).
 * Дано неограниченное количество бидонов некоторого положительного объема куда нужно сливать эти жидкости.
 * Емкость нужно вылить целиком, то есть если в текущем бидоне недостаточно места, нужно взять следующий бидон.
 * 
 * Пример:
 * Емкости: 1,3,2,4,|10,|8,4,|2,5,3
 * Количество бидонов: 4
 * Тогда нам достаточно сделать бидоны размером 12.
 * 
 * 
 * Решаем задачу бинарным поиском. Максимальное число бинарного поиска - сумма всех элементов массива (слить все емкости в один бидон).
 * Предыдущая функция выступает показателем в какую сторону смотреть в большую или меньшую и соответсвенно куда смещаться и когда прудыдущая
 * функция вернет количество бидонов равное заданному то это и будет ответ. Если не найдет то просто возвращаем -1.
 * 
 * Сложность решения: O(n log m), где m - сумма всех n
 * 
 * @param bottles Массив объемов емкостей
 * @param bottleCol Количетсво бидонов
 * @see https://www.youtube.com/watch?v=R6lJTheHJGo&list=WL&index=22&t=135s
 */
function calcBottlesMinimalSize(bottles: number[], bottlesCol: number): number {
  let start = Math.max(...bottles);
  let end = bottles.reduce((acc, item) => acc += item);
  let result = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const count = calcBottles(bottles, mid);

    if (count === bottlesCol) {
      result = mid;
    }
    
    // Делаем такое условие потому что нам надо смещать конец.
    // Так как мы не возвращаем найденное значение и ищем минимальное подходящее значение.
    // А меньшие значения у нас соответсвенно находятся слева.
    // Мы каждый раз сужаем круг подходящих значений все больше его уменьшая (смещая end влево).
    if (count > bottlesCol) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

	return result;
}

/**
 * 10 42
 * mid 26
 * count 2
 * 
 * 10 25
 * mid 17
 * count 4
 * 
 * 10 16
 * mid 13
 * count 4
 * 
 * 10 12
 * mid 11
 * count 5
 * 
 * 12 12
 * mid 12
 * count 4
 */
console.log(calcBottles([1,3,2,4,10,8,4,2,5,3], 12));
console.log(calcBottlesMinimalSize([1,3,2,4,10,8,4,2,5,3], 4));