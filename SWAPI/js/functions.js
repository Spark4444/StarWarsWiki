// Save a key-value pair to local storage
const saveToLocalStorage = (key, value) => localStorage.setItem(key, value);

// Retrieve a value from local storage by its key
const getFromLocalStorage = key => localStorage.getItem(key);

// Replace the last character of a string with a new character
const replaceLastChar = (str, newChar) => str.length > 0 ? str.slice(0, -1) + newChar : newChar;

// Extract all numbers from a string and return them as a comma-separated string
const getNumbersFromString = str => (str.match(/\d+/g) || []).join(', ');

// Format a date string into a locale-specific format
const formatDate = dateString => new Date(dateString).toLocaleString();

// Convert a date string from "YYYY-MM-DD" format to "DD.MM.YYYY" format
const convertDateFormat = dateStr => dateStr.split('-').reverse().join('.');

// Decrement the last character of a string if it's a digit
const decrementLastCharacter = input => {
    // Get the last character of the string
    let lastChar = input.slice(-1);
    
    // Check if the last character is a digit
    if (!isNaN(lastChar)) {
        // Convert the last character to a number, decrement it, and convert it back to a string
        let decrementedChar = (Number(lastChar) - 1).toString();
        
        // Replace the last character with the decremented character
        return input.slice(0, -1) + decrementedChar;
    } else {
        return "The last character is not a digit.";
    }
};

function removePageParameter(url) {
    // Use the URL API to parse the URL
    let parsedUrl = new URL(url);
    
    // Remove the 'page' search parameter
    parsedUrl.searchParams.delete('page');
    
    // Return the updated URL as a string
    return parsedUrl.toString();
}


