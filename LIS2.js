const input = [6, 5, 4, 7, 2, 1, 9];

/**
 * @param {*} arr : arr to deal with 
 * @param {*} position  : the position LIS must ends with
 */
function findLIS(arr, position) {
    if (position === 0) {
        return 1;
    }
    let _max = 1; // default to 1, in which case position is smaller than all its precedence
    for (var i = 0; i < position; i++) {
        if (arr[position] > arr[i]) {
            var lis = findLIS(arr, i);
            _max = Math.max(_max, lis + 1);
        }
    }
    console.log(`lis for arr[${position}] is ${_max}`);
    return _max;
}

console.log(findLIS(input, input.length-1));