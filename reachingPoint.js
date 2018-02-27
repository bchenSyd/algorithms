function reachingPoint(start, target) {
    var dp = [start];
    while (dp.length > 0) {
        var next = [];
        for (var i = 0; i < dp.length; i++) {
            var tmp = dp[i][0] + dp[i][1];
            if ((tmp === target[0] && dp[i][1] === target[1])
                || (dp[i][0] === target[0] && tmp === target[1])) {
                return true;
            }
            if (tmp <= target[0]) {
                next.push([tmp, dp[i][1]]);
            }
            if (tmp <= target[1]) {
                next.push([dp[i][0], tmp]);
            }
        }
        dp = next;
    }
    return false;
}

console.log(reachingPoint([2, 1], [2, 2]));