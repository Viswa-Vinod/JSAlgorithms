// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let arrWidth = [],
		temp = [],
		tempChildren = [];

	temp.push(root);
	while (temp.length) {
		arrWidth.push(temp.length);
		temp.forEach(node => {
			tempChildren.push(...node.children);
		});
		temp = tempChildren.slice();
		tempChildren.length = 0;
	}
	return arrWidth;
}

module.exports = levelWidth;
