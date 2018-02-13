const input = [1, 1, 3, 5, 6, 6, 9, 12, 12, 12, 25, 29];
const target = 12;

function binarySearch(arr, low, high, target) {
    if (low > high) {
        return -1;
    }
    console.log(`low=${low}  high=${high}`)
    var mid = parseInt( (low+ high) /2)
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, low, mid - 1, target);
    } else {
        return binarySearch(arr, mid + 1, high, target)
    }
}

function findRange(arr, target) {
    const position = binarySearch(arr, 0, arr.length - 1, target);
    if (position === -1) {
        return [-1, -1]
    }
    var i = position, j = position;
    while (arr[i] === target) {
        i--;
    }
    while (arr[j] === target) {
        j++;
    }
    return [i + 1, j - 1];
}

console.log(findRange(input, target));