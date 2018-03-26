// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	//crete placeholder array
	let result = [];
	let rowInd = 0,
		colInd = 0;

	for (let i = 1; i <= n; i++) {
		let row = [];
		for (let j = 1; j <= n; j++) {
			row.push(1);
		}
		result.push(row);
	}
	// console.log("result placeholder: ", result);

	let k = 1;
	let m = 1;
	do {
		console.log("k is: ", k);

		for (let p = k; p <= n - k + 1; p++) {
			if (k > Math.floor((n + 1) / 2)) return result;
			result[rowInd][p - 1] = m;
			console.log(result);
			m = m + 1;
			if (m > n * n) return result;
		}
		console.log("result after first for: ", result);

		colInd = n - k;
		for (let q = k + 1; q <= n - k + 1; q++) {
			if (k > Math.floor(n / 2)) return result;
			result[q - 1][colInd] = m;
			m = m + 1;
			if (m > n * n) return result;
		}
		console.log("result after second for: ", result);
		rowInd = n - k;
		for (let r = n - k; r >= k; r--) {
			if (k > Math.floor(n / 2)) return result;
			// console.log("indices being populated: ", rowInd, r - 1);
			result[rowInd][r - 1] = m;
			m = m + 1;
			if (m > n * n) return result;
		}
		console.log("result after third for: ", result);
		colInd = k - 1;
		// console.log("fourth for loop ends: ", n - k, k);
		for (let s = n - k; s >= k + 1; s--) {
			// if (k > Math.floor(n / 2)) return result;
			// console.log("indices being populated: ", s - 1, colInd);
			result[s - 1][colInd] = m;
			// console.log(result);
			m = m + 1;
			if (m > n * n) return result;
		}
		rowInd = k;
		// colInd = k;
		console.log("result after fourth for: ", result);
		k = k + 1;
		if (m > n * n) return result;
	} while (m <= n * n);

	return result;
}

matrix(15);
module.exports = matrix;
