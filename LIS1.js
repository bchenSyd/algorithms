const input = [6, 5, 4, 7, 2, 1, 9];

function longestIncreasingSubSequence(arr) {
    if (arr.length <= 1) {
        return arr.length;
    }
    var dp = [];
    dp[0] = 1; // longest increasing subsequence for [6] is 1 (itself)
    let max = 1; // global longest, set to 1
    for (var i = 1; i < arr.length; i++) {
        let _max = 1;  //iteration max, default to 1 (arr[i] itself)
        // now build it up
        for (var j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                _max = Math.max(dp[j] + 1, _max); // now _max is set to greatest possible value
            }
        }
        dp[i] = _max;
        console.log(`dp[${i}] = ${dp[i]}`)
        max=Math.max(dp[i], max); // pick the biggest as global max among iteration _max;
    }
    return max;
}

console.log( longestIncreasingSubSequence(input));