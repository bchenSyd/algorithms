//based on formular C(i, j) =  C(i-1, j-1) + C(i-1, j)

function calculateCombination(n, k) {
    if (n < 1 || k < 1 || k > n) {
        return 0;
    }

    const result = [[]];
    result[0][0] = 0;
    result[0][1] = 0;
    for (var i = 1; i <= n; i++) {
        result.push([]);
        result[i][0] = 0;
        for (var j = 1; j <= Math.min(i, k); j++) {
            if (j === 1) {
                result[i][1] = i;
            } else if (j === i) {
                result[i][i] = 1;
            } else {
                result[i][j] = result[i - 1][j - 1] + result[i][j - 1];
            }
        }
    }
    return result;
}

console.log(findCombinations(6, 2))