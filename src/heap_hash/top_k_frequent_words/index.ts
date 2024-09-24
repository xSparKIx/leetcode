/**
 * 692. Top K Frequent Words
 *
 * Given an array of strings words and an integer k, return the k most frequent strings.
 * Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
 * 
 * Example 1:
 * 
 * Input: words = ["i","love","leetcode","i","love","coding"], k = 2
 * 
 * Output: ["i","love"]
 * Explanation: "i" and "love" are the two most frequent words.
 * Note that "i" comes before "love" due to a lower alphabetical order.
 * 
 * Example 2:
 * 
 * Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
 * Output: ["the","is","sunny","day"]
 * Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 * 
 * Constraints:
 * 
 * 1 <= words.length <= 500
 * 1 <= words[i].length <= 10
 * words[i] consists of lowercase English letters.
 * k is in the range [1, The number of unique words[i]]
 *
 * Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?
 * 
 * @see https://leetcode.com/problems/top-k-frequent-words/description/
 */

function topKFrequent(words: string[], k: number): string[] {
  const keys = new Map<string,number>();

  for (let i = 0, length = words.length; i < length; i++) {
    if (keys.has(words[i])) {
      keys.set(words[i], keys.get(words[i]) + 1);
    } else {
      keys.set(words[i], 1);
    }
  }

  return Array.from(keys).sort((a: [string, number], b: [string, number]) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, k).map((item) => item[0]);
};

topKFrequent(["i","love","leetcode","i","love","coding"], 2);