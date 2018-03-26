// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let obj = {};
	for (let chr of str) {
		obj[chr] = obj[chr] + 1 || 1;
	}

	let maxKeyVal = 0,
		maxchar = "";
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (obj[key] > maxKeyVal) {
				maxKeyVal = obj[key];
				maxchar = key;
			}
		}
	}

	return maxchar;
}

module.exports = maxChar;
