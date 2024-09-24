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
 */
class ListNode2 {
  val: number
  next: ListNode2 | null
  constructor(val?: number, next?: ListNode2 | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode2 | null, list2: ListNode2 | null): ListNode2 | null {
  const head: ListNode2 = new ListNode2()
  let currentL1: ListNode2 | null = list1;
  let currentL2: ListNode2 | null = list2;
  let current: ListNode2 = head;

  while (currentL1 || currentL2) {
    if (!currentL1) {
      current.val = currentL2.val;
      currentL2 = currentL2.next;
    } else if (!currentL2) {
      current.val = currentL1.val;
      currentL1 = currentL1.next;
    } else if (currentL1.val < currentL2.val) {
      current.val = currentL1.val;
      currentL1 = currentL1.next;
    } else {
      current.val = currentL2.val;
      currentL2 = currentL2.next;
    }

    if (currentL1 || currentL2) {
      current.next = new ListNode2();
      current = current.next;
    }
  }

  return head;
};

const l1 = new ListNode2(1, new ListNode2(2, new ListNode2(4)));
const l2 = new ListNode2(1, new ListNode2(3, new ListNode2(5)));

console.log(mergeTwoLists(l1, l2));