function toKebabCase(str) {
    // Handle edge cases
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    
    // Check if input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Handle empty string
    if (str.trim() === '') {
        throw new Error('Input cannot be empty or whitespace only');
    }
    
    // Extract numbers from the end
    const numberMatch = str.match(/(\d+)$/);
    const numbers = numberMatch ? numberMatch[1] : '';
    const textPart = numberMatch ? str.slice(0, -numbers.length) : str;
    
    // Convert to kebab-case
    const kebabText = textPart
        .trim()
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
        .replace(/[\s_]+/g, '-') // spaces and underscores to hyphens
        .replace(/[^a-zA-Z0-9-]/g, '') // remove special characters
        .toLowerCase()
        .replace(/-+/g, '-') // remove duplicate hyphens
        .replace(/^-|-$/g, ''); // remove leading/trailing hyphens
    
    // Combine text and numbers
    const result = kebabText + numbers;
    
    // Display result with prefixed message
    console.log(`Converted to kebab-case: ${result}`);
    
    return result;
}