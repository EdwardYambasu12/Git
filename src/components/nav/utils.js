/**
 * Sorts an array of objects by a given key in ascending order.
 * @param {Array} array - The array to be sorted.
 * @param {string} key - The key to sort by.
 * @returns {Array} - The sorted array.
 */
export const sortByKey = (array, key) => {
    return array.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    });
};

/**
 * Sorts an array of objects by a given key in ascending order.
 * This is a wrapper for `sortByKey` but ensures that sorting is done in ascending order.
 * @param {Array} array - The array to be sorted.
 * @param {string} key - The key to sort by.
 * @returns {Array} - The sorted array.
 */
export const sortByKeyAsc = (array, key) => {
    return sortByKey(array, key); // Since `sortByKey` already sorts in ascending order.
};

/**
 * Groups an array of objects by a specified key.
 * @param {Array} array - The array to be grouped.
 * @param {string} key - The key to group by.
 * @returns {Object} - An object where each key is a unique value of the specified key,
 * and the value is an array of objects that have that key value.
 */
export const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
        // Get the key value
        const groupKey = currentValue[key];
        
        // Initialize the group if it doesn't exist
        if (!result[groupKey]) {
            result[groupKey] = [];
        }

        // Add the current item to the group
        result[groupKey].push(currentValue);
        
        return result;
    }, {}); // Initialize the result as an empty object
};
