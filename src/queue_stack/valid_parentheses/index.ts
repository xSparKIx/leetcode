/**
 * 20. Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * @todo Закидываем в очередь (массив) скобки и если у нас будет }, ], ) то сравниваем с последним элементом
 */

function isValid(s: string): boolean {
  const closureBrakets = [')', '}', ']'];
  const openBrakets = ['(', '{', '['];

  if (closureBrakets.includes(s[0]) || openBrakets.includes(s[s.length - 1])) {
    return false;
  }

  const list = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];

  for (let i = 0, length = s.length; i < length; i++) {
    const bracket = s[i];

    if (openBrakets.includes(bracket)) {
      stack.push(bracket);
    } else {
      const lastBracket = stack.pop();
      if (list[lastBracket] !== bracket) {
        return false;
      }
    }
  }

  return !stack.length;
}

console.log(isValid('[()]()'));

// Самое быстрое решение:

// function isValid(s: string): boolean {
//   const map = new Map([
//    ['(', ')'],
//    ['{', '}'],
//    ['[', ']'],
//   ])

//   const stack: string[] = [];
//   for(const char of s) {
//    if (map.has(char)) {
//        stack.push(map.get(char))
//    } else {
//        if(stack.pop() !== char) return false
//    }
//   }
//    return stack.length === 0;
// };