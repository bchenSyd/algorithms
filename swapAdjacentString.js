const input1 = 'RXXLRXRRXL';
const input2 = 'XRXLXRRXRR';

/**
 * return whether arr2 can be the result of swapping chars in arr1
 * @param {string} arr1 
 * @param {string} arr2 
 */
function canBeSwapped(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) {
        return true;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }

    let i = 0, n = arr1.length;
    while (i < n) {
        if (arr1[i] === arr2[i]) {
            // arr1 and arr2 have same char at position i;
            i++;
        } else if (arr1[i] === arr2[i + 1] && arr1[i + 1] === arr2[i]) {
            // not the same, but can be swapped
            i += 2;
        } else {
            return false;
        }
    }
    return true;

}

console.log(canBeSwapped(input1, input2))