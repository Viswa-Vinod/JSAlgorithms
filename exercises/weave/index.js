// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
	const resultq = new Queue();

	while (sourceOne.peek() || sourceTwo.peek()) {
		if (sourceOne.peek()) {
			resultq.add(sourceOne.peek());
			sourceOne.remove();
			if (sourceTwo.peek()) {
				resultq.add(sourceTwo.peek());
				sourceTwo.remove();
			}
		} else if (sourceTwo.peek()) {
			resultq.add(sourceTwo.peek());
			sourceTwo.remove();
		}
	}
	// console.log(resultq);
	return resultq;
}

// let q1 = new Queue();
// let q2 = new Queue();
// q1.add(3);
// q1.add(2);
// q1.add(1);
// q2.add("three");
// q2.add("two");
// q2.add("one");
// weave(q1, q2);
module.exports = weave;
