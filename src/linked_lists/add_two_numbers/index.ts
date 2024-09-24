/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * 
 * @see https://leetcode.com/problems/add-two-numbers/
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head: ListNode = new ListNode()
  let currentL1: ListNode | null = l1;
  let currentL2: ListNode | null = l2;
  let digit: number = 0;
  let current: ListNode = head;

  while(currentL1 || currentL2 || digit) {
    let sum = digit;

    if (currentL1) {
      sum += currentL1.val;
      currentL1 = currentL1.next;
    }

    if (currentL2) {
      sum += currentL2.val;
      currentL2 = currentL2.next;
    }

    if (sum > 9) {
      digit = 1;
      sum -= 10;
    } else {
      digit = 0;
    }

    current.next = new ListNode(sum);
    current = current.next;
  }

  return head.next;
}