// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		// this.Lsize = 0;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		return this.getAt(this.size() - 1);
		// if (!this.head) return null;
		// let node = this.head;
		// while (node) {
		// 	if (!node.next) return node;
		// 	node = node.next;
		// }
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) return;
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) return;
		if (!this.head.next) {
			this.head = null;
			return;
		}
		let prev = this.head;
		let node = prev.next;

		while (node.next) {
			prev = node;
			node = node.next;
		}
		prev.next = null;
	}

	insertLast(data) {
		if (this.getLast()) {
			this.getLast().next = new Node(data);
		} else this.head = new Node(data);
	}

	getAt(integer) {
		if (!this.head) return null;

		let node = this.head;
		let counter = 0;

		if (counter === integer) return node;

		while (node.next) {
			counter++;
			if (counter === integer) return node.next;
			node = node.next;
		}

		return null;
	}

	removeAt(integer) {
		if (!this.size() || integer > this.size() - 1) return;
		if (integer === this.size() - 1) {
			this.removeLast();
			return;
		}

		if (integer === 0) {
			this.head = this.head.next;
			return;
		}

		let counter = 1;
		let prev = this.head;
		let node = prev.next;
		let nextNode = node.next;
		while (nextNode.next) {
			if (integer === counter) {
				prev.next = nextNode;
				return;
			}
			counter++;
			prev = node;
			node = nextNode;
			nextNode = nextNode.next;
		}
	}

	insertAt(data, integer) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (integer > this.size() - 1) {
			this.insertLast(data);
			return;
		}

		if (this.size() === 1 || integer === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const node = new Node(data, this.getAt(integer));
		this.getAt(integer - 1).next = node;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter);
			node = node.next;
			++counter;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
