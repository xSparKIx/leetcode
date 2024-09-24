/**
 * 5. Longest Palindromic Substring
Medium
Topics
Companies
Hint
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

@see https://leetcode.com/problems/longest-palindromic-substring/description/
@todo Доделать
 */

function longestPalindrome(s: string): string {
  let start = 0;
  let end = 1;
  let currentString = s[start];
  let maxPolindrom = '';

  while (start < s.length) {
    currentString += s[end];
    console.log(currentString);
    start++;
  }

  return '';
};