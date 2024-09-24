/**
 * 12. Integer to Roman
 * @see https://leetcode.com/problems/integer-to-roman/description/
 * @todo Решить
 */
function intToRoman(num: number): string {
  const map = {
    0: [
      { value: 1, num: 'I' },
      { value: 5, num: 'V' },
    ],
    1: [
      { value: 1, num: 'X' },
      { value: 5, num: 'L' },
    ],
    2: [
      { value: 1, num: 'C' },
      { value: 5, num: 'D' },
    ],
    3: [
      { value: 1, num: 'M' },
    ],
  }
  const n = num.toString();
  const length = n.length;
  let result = '';

  for (let i = length - 1; i >= 0; i--) {
    const raz = length - 1 - i;
    const value = +n[i];

    if (value === 4) {
      result = `${map[raz][0].num}${map[raz][1].num}${result}`;
    } else if (value === 9) {
      result = `${map[raz][0].num}${map[raz+1][0].num}${result}`;
    } else if (value < 5) {
      result = `${map[raz][0].num.repeat(value)}${result}`;
    } else {
      const v = value - map[raz].at(-1).value;
      result = `${map[raz].at(-1).num}${map[raz][0].num.repeat(v)}${result}`;
    }
  }

  return result;
};

console.log(intToRoman(649));


/**
 * Решения:
 */

// function intToRoman(num: number): string {
//   return itor(num, 0);
// };

// const c = 'IVXLCDM';

// function itor(n: number, l: number, x = '', e = n % 10, t = e % 5) {
//   if (n === 0) { return x; }

//   const m = e == 4 ? 1 : ~~((e-1)/4);
//   const r = c[l];
//   const v = c[l + m];

//   if (t == 4) {
//       return itor(((n - e)/10), l + 2, r.concat(v, x));
//   }

//   return itor(
//       ((n - e)/10), l + 2, (m > 0 ? v : '').concat(r.repeat(t), x));
// }

// function intToRoman(num: number): string {
// 	let index = 0;
// 	let map: {[key: string]: number} = {
// 		"M": 1000,
// 		"CM": 900,
// 		"D": 500,
// 		"CD": 400,
// 		"C": 100,
// 		"XC": 90,
// 		"L": 50,
// 		"XL": 40,
// 		"X": 10,
// 		"IX": 9,
// 		"V": 5,
// 		"IV": 4,
// 		"I": 1,
// 	}
//     let result = '';
// 	const keys = Object.keys(map);
// 	while(index < 13) {
// 		let count = Math.floor(num / map[keys[index]]);
// 		result += keys[index].repeat(count);
// 		num %= map[keys[index]];
// 		index++;
// 	}
//     return result;
// };

// Самый ходовой вариант:
// function intToRoman(num: number): string {
//   let values  = [1000, 900, 500, 400, 100, 90, 50 , 40, 10 , 9 , 5, 4, 1]
//   let symbols = ["M", "CM", "D", "CD", "C", "XC", "L" , "XL", "X", "IX", "V", "IV", "I"]
//   let result = "";
//   for(let i =0 ; i < values.length ; i++){
//       while(num >= values[i]){
//         result  += symbols[i]
//         num -= values[i]
//       }
//   }
//   return result;
// };