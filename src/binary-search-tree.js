const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

	constructor() {
		this.root_ = null;
	}

	root() {
		return this.root_;
	}

	add(data) {
		let newNode = new Node(data);
		if (this.root_ === null) {
			this.root_ = newNode;
		} else {
			this.addNode(this.root_, newNode);
		}
	}

	addNode(node, newNode) {
		if (newNode.data < node.data) {

			if (node.left === null) {
				node.left = newNode;
			} else {
				this.addNode(node.left, newNode);
			}

		} else {
			if (node.right === null) {
				node.right = newNode;
			}
			else {
				this.addNode(node.right, newNode);
			}
		}
	}

	has(data) {
		return !(this.find(data) === null);
	}

	find(data) {
		return this.findNode(this.root_, data);
	}

	findNode(node, data) {
		if (node === null) {
			return null;
		} else if (data < node.data) {
			return this.findNode(node.left, data);
		} else if (data > node.data) {
			return this.findNode(node.right, data);
		} else {
			return node;
		}
	}

	remove(data) {
		this.root_ = this.removeNode(this.root_, data);
	}

	removeNode(node, key) {

		if (node === null) {
			return null;
		} else if (key < node.data) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.data) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			// deleting node with no children
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}

			// deleting node with one children
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}

			let minChild = this.minNode(node.right);
			node.data = minChild.data;

			node.right = this.removeNode(node.right, minChild.data);
			return node;
		}

	}

	min() {
		if (this.root_ === null) {
			return null;
		} else {
			return this.minNode(this.root_).data;
		}
	}

	minNode(node) {
		if (node.left === null) {
			return node;
		} else {
			return this.minNode(node.left);
		}
	}

	max() {
		if (this.root_ === null) {
			return null;
		} else {
			return this.maxNode(this.root_).data;
		}
	}

	maxNode(node) {
		if (node.right === null) {
			return node;
		} else {
			return this.maxNode(node.right);
		}
	}
}

module.exports = {
	BinarySearchTree
};