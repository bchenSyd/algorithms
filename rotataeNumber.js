const input = 169;
function isGoodNumber(number) {
    const map = [
        [0, 0],
        [1, 1],
        [2, 5],
        [5, 2],
        [6, 9],
        [8, 8],
        [9, 6]
    ];
    const arr1 = [], arr2 = [];
    let tmp = number;
    while (tmp !== 0) {
        arr1.unshift(tmp % 10);
        tmp = parseInt(tmp / 10);
    }
    for (var i in arr1) {
        var entry = map.find(e => e[0] === arr1[i]);
        if (!entry) {
            return false;
        }
        arr2.push(entry[1]);
    }
    let rotated = 0;
    for (var i in arr2) {
        rotated = rotated * 10 + arr2[i];
    }
    return rotated !== number;
}
function rotateNumbers(number) {
    let result = 0;
    for (var i = 0; i <= number; i++) {
        if (isGoodNumber(i)) {
            console.log(i);
            result++;
        }
    }
    return result;
}

console.log(rotateNumbers(10));