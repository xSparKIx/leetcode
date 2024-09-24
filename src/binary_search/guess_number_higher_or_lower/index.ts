/**
 * 374. Угадай число больше или меньше
Легкий
Темы
Компании
Мы играем в «Угадайку». Игра заключается в следующем:

Я выбираю число от 1до n. Вы должны угадать, какое число я выбрал.

Каждый раз, когда вы ошибаетесь, я сообщаю вам, больше или меньше выбранное мной число, чем ваша догадка.

Вы вызываете предопределенный API int guess(int num), который возвращает три возможных результата:

-1: Ваше предположение больше, чем выбранное мной число (т.е. num > pick).
1: Ваше предположение меньше выбранного мной числа (т.е. num < pick).
0: ваша догадка равна выбранному мной числу (т.е. num == pick).
Верните число, которое я выбрал .

 

Пример 1:

Вход: n = 10, выбор = 6
 Выход: 6
Пример 2:

Вход: n = 1, выбор = 1
 Выход: 1
Пример 3:

Вход: n = 2, выбор = 1
 Выход: 1
 

Ограничения:

1 <= n <= 231 - 1
1 <= pick <= n
@see https://leetcode.com/problems/guess-number-higher-or-lower/description/
 */

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
function guessNumber(n: number): number {
  let start = 1;
  let end = n;

  while (start <= end) {
    const middle = Math.floor((start+end)/2);
    const result = guess(middle);

    switch (result) {
      case 0:
        return middle;
      case -1:
        end = middle - 1;
        break;
      case 1:
        start = middle + 1;
    }

    // или:
    // if (result === 0) {
    //   return middle;
    // } else if (result === -1) {
    //   end = middle - 1;
    // } else {
    //   start = middle + 1;
    // }
  }

  return -1;
}

function guess(n): number {
  return 0;
}

console.log(guessNumber(10));