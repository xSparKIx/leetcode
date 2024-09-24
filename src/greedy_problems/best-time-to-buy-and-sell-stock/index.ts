/**
 * 121. Лучшее время для покупки и продажи акций
Легкий
Темы
Компании
Вам дан массив, pricesгде prices[i]— цена определенной акции на день.ith

Вы хотите максимизировать свою прибыль, выбрав один день для покупки одних акций и другой день в будущем для продажи этих акций.

Верните максимальную прибыль, которую вы можете получить от этой транзакции . Если вы не можете получить никакой прибыли, верните 0.

 

Пример 1:

Вход: цены = [7,1,5,3,6,4]
 Выход: 5
 Объяснение: Купить на 2-й день (цена = 1) и продать на 5-й день (цена = 6), прибыль = 6-1 = 5.
Обратите внимание, что покупка во второй день и продажа в первый день не допускаются, поскольку перед продажей необходимо сначала купить.
Пример 2:

Вход: цены = [7,6,4,3,1]
 Выход: 0
 Пояснение: В этом случае транзакции не совершаются, а максимальная прибыль = 0.
 

Ограничения:

1 <= prices.length <= 105
0 <= prices[i] <= 104

@see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
*/
function maxProfit(prices: number[]): number {
  let minBuy = prices[0];
  let maxProfit = 0;

  for (let i = 1, length = prices.length; i < length; i++) {
    minBuy = Math.min(minBuy, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minBuy);
  }

  return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));

/**
 * Самое быстрое решение:
 */
// function maxProfit(prices: number[]): number {
//   let profit: number = 0;
//   let min: number = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//       if (prices[i] - min > profit) {
//           profit = prices[i] - min;
//       }
//       if (prices[i] < min) {
//           min = prices[i];
//       }
//   }

//   return profit;
// };