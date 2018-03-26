// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	return str.split("").reduce((rev, chr) => chr + rev, "");
}

module.exports = reverse;

/*************method 1**************/
// return str
// 		.split("")
// 		.reverse()
// 		.join("");

/********method 2****************/
// let reversed = "";

// 	for (let char of str) {
// 		reversed = char + reversed;
// 	}
// 	return reversed;
