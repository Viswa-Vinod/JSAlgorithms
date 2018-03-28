// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data, node = this) {
		if (data >= node.data) {
			return node.right
				? node.insert(data, this.right)
				: (node.right = new Node(data));
		} else {
			return node.left
				? node.insert(data, this.left)
				: (node.left = new Node(data));
		}
	}

	contains(data) {
		if (data >= this.data) {
			if (data === this.data) {
				return this;
			} else return this.right ? this.right.contains(data) : null;
		} else {
			return this.left.contains(data);
		}
	}
}

module.exports = Node;
