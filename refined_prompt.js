/**
 * Converts a string to camelCase format.
 * 
 * This function takes an input string and converts it to camelCase by:
 * - Splitting the string by common delimiters (spaces, underscores, hyphens, dots)
 * - Making the first word lowercase
 * - Capitalizing the first letter of subsequent words
 * - Joining all words together without separators
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The input string converted to camelCase format
 * @throws {Error} Throws an error if input is null or undefined
 * @throws {Error} Throws an error if input is not a string
 * 
 * @example
 * // Convert space-separated words
 * toCamelCase("hello world"); // returns "helloWorld"
 * 
 * @example
 * // Convert underscore-separated words
 * toCamelCase("user_name_field"); // returns "userNameField"
 * 
 * @example
 * // Convert hyphen-separated words
 * toCamelCase("my-variable-name"); // returns "myVariableName"
 * 
 * @example
 * // Handle mixed delimiters
 * toCamelCase("first.second_third-fourth"); // returns "firstSecondThirdFourth"
 * 
 * @example
 * // Handle empty string
 * toCamelCase(""); // returns ""
 */

/**
 * Converts a string to dot.case format.
 * 
 * This function takes an input string and converts it to dot.case by:
 * - Splitting the string by common delimiters (spaces, underscores, hyphens, dots)
 * - Converting all words to lowercase
 * - Joining all words together with dots as separators
 * 
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The input string converted to dot.case format
 * @throws {Error} Throws an error if input is null or undefined
 * @throws {Error} Throws an error if input is not a string
 * 
 * @example
 * // Convert space-separated words
 * toDotCase("Hello World"); // returns "hello.world"
 * 
 * @example
 * // Convert underscore-separated words
 * toDotCase("USER_NAME_FIELD"); // returns "user.name.field"
 * 
 * @example
 * // Convert hyphen-separated words
 * toDotCase("my-variable-name"); // returns "my.variable.name"
 * 
 * @example
 * // Handle mixed delimiters
 * toDotCase("First Second_Third-Fourth"); // returns "first.second.third.fourth"
 * 
 * @example
 * // Handle empty string
 * toDotCase(""); // returns ""
 */

function toCamelCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    
    // Handle non-string types (including numbers)
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Handle empty string
    if (input.length === 0) {
        return '';
    }
    
    // Split by common delimiters: spaces, underscores, hyphens, dots
    const words = input
        .split(/[\s_\-\.]+/)
        .filter(word => word.length > 0);
    
    // Handle case where no valid words found
    if (words.length === 0) {
        return '';
    }
    
    // Convert to camelCase
    return words
        .map((word, index) => {
            // First word stays lowercase
            if (index === 0) {
                return word.toLowerCase();
            }
            // Subsequent words: first letter uppercase, rest lowercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

function toDotCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    
    // Handle non-string types (including numbers)
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Handle empty string
    if (input.length === 0) {
        return '';
    }
    
    // Split by common delimiters: spaces, underscores, hyphens, dots
    const words = input
        .split(/[\s_\-\.]+/)
        .filter(word => word.length > 0);
    
    // Handle case where no valid words found
    if (words.length === 0) {
        return '';
    }
    
    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

