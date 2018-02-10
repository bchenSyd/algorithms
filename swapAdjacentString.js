const input1 = 'XLLR'; // sort result should be 'LLRX'
const input2 = 'LXLX'; // sort result should be 'LLXX'

/**
 * return whether arr2 can be the result of swapping chars in arr1
 * @param {string} arr1 
 * @param {string} arr2 
 */
function canBeSwapped(str1, str2) {
    return sort(str1) === sort(str2);

}

function sort(str) {
    if (str.length < 2) {
        return str;
    }
    const result = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== 'X') {
            result.push(str[i]);
        }
    }
    const missing = str.length - result.length;
    for (var i = 0; i < missing; i++) {
        result.push('X');
    }
    return result.join('');
}
console.log(canBeSwapped(input1, input2))