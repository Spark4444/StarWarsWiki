// Save a key-value pair to local storage
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

// Retrieve a value from local storage by its key
const getFromLocalStorage = key => {
    return localStorage.getItem(key);
};

// Replace the last character of a string with a new character
const replaceLastChar = (str, newChar) => {
    return str.length > 0 ? str.slice(0, -1) + newChar : newChar;
};

// Extract all numbers from a string and return them as a comma-separated string
const getNumbersFromString = str => {
    return (str.match(/\d+/g) || []).join(', ');
};

// Format a date string into a locale-specific format
const formatDate = dateString => {
    return new Date(dateString).toLocaleString();
};

// Convert a date string from "YYYY-MM-DD" format to "DD.MM.YYYY" format
const convertDateFormat = dateStr => {
    return dateStr.split('-').reverse().join('.');
};

// Decrement the last character of a string if it's a digit
const decrementLastCharacter = input => {
    let lastChar = input.slice(-1);
    if (!isNaN(lastChar)) {
        let decrementedChar = (Number(lastChar) - 1).toString();
        return input.slice(0, -1) + decrementedChar;
    } else {
        return "The last character is not a digit.";
    }
};

// Remove the 'page' search parameter from a URL
const removePageParameter = url => {
    let parsedUrl = new URL(url);
    parsedUrl.searchParams.delete('page');
    return parsedUrl.toString();
};
