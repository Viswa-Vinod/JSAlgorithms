// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
	const cache = {};

	return function(...args) {
		if (cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	};
}

function slowFib(n) {
	if (n < 2) return n;

	return fib(n - 1) + fib(n - 2);

	// n = fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib);

module.exports = fib;

// if (n === 1) return 1;
// 	if (n === 2) return 1;

// 	let result = 0,
// 		prevOne = 1,
// 		prevTwo = 0,
// 		temp;
// 	for (let i = 3; i <= n + 1; i++) {
// 		result = prevOne + prevTwo;
// 		prevTwo = prevOne;
// 		prevOne = result;
// 	}
// 	console.log(result);
// 	return result;
