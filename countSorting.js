const input = [1, 3, 2, 2, 3, 3, 1, 1, 3, 3, 2]

function countSorting(arr, max) {
    const hash = {};
    for (var i in arr) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1;
    }

    const result = [];
    for (var i = 1; i <= max; i++) {
        for (var j = 0; j < hash[i]; j++) {
            result.push(i);
        }
    }
    return result;
}

console.log(countSorting(input, 3));