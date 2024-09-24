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

class ListNode3 {
	val: number
	next: ListNode3 | null
	constructor(val?: number, next?: ListNode3 | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

function reverseList(head: ListNode3 | null): ListNode3 | null {
	if (!head) {
		return null;
	}

	const stack = [];
	let currentNode = head;

	while (currentNode) {
		stack.push(currentNode);
		currentNode = currentNode.next;
	}

	for (let i = stack.length - 1; i >= 0; i--) {
		stack[i].next = stack[i - 1] || null; 
	}

	return stack.at(-1);
}

const testData = new ListNode3(1, new ListNode3(2, new ListNode3(3, new ListNode3(4, new ListNode3(5)))));

// Самое быстрое
// todo: Разобрать
// function reverseList(head: ListNode | null): ListNode | null {
// 	if (head == null) return head

// 	return swapper(null, head);
// };

// function swapper(prevNode: ListNode | null, node: ListNode | null) {
// 	if (node == null) return prevNode;
// 	else {
// 			const nextNode = node.next;
// 			node.next = prevNode;
// 			return swapper(node, nextNode)
// 	}
// }