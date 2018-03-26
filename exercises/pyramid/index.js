// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1, stair = "") {
	if (n + 1 === row) return;
	if (stair.length === 2 * n - 1) {
		console.log(stair);
		return pyramid(n, row + 1);
	}

	lowerHashRange = n - (row - 1);
	upperHashRange = n + (row - 1);
	const add =
		stair.length + 1 >= lowerHashRange && stair.length + 1 <= upperHashRange
			? "#"
			: " ";
	pyramid(n, row, stair + add);
}

module.exports = pyramid;
