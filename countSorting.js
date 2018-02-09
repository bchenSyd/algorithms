const input = [1, 3, 2, 2, 3, 3, 1, 1, 3, 3, 2]

function countSorting(arr, max) {
    const hash = {};
    for (var i in arr) { // Time complexity: O(n)
        hash[arr[i]] = (hash[arr[i]] || 0) + 1;
    }

    const result = []; // space complexity: O(n)
    for (var i = 1; i <= max; i++) {
        for (var j = 0; j < hash[i]; j++) {
            result.push(i);
        }
    }
    return result;
}

console.log(countSorting(input, 3));