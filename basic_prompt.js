/**
 * Converts a given string to camelCase.
 * Example: camelCaseConvert("My work TODAY;") returns "myWorkToday"
 * @param {string} str - The input string to convert.
 * @returns {string} - The camelCase version of the input.
 */
function camelCaseConvert(str) {
    return str
        .replace(/[^a-zA-Z0-9 ]/g, '') // Remove non-alphanumeric characters except spaces
        .split(' ')
        .filter(Boolean)
        .map((word, idx) =>
            idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

// Example usage:
let s = "My work TODAY;";
console.log(camelCaseConvert(s)); // Output: "myWorkToday"