function generateParentheses(number) {
    var dp = ['()'];
    if (number <= 2) {
        return dp;
    }
    for (var i = 2; i <= number; i++) {
        var _tmp = [];
        for (var j = 0; j < dp.length; j++) {
            _tmp.push('(' + dp[j] + ')'); // wrap;
            var _left = '()' + dp[j];
            var _right = dp[j] + '()';
            if(_left !== _right){
                _tmp.push('()' + dp[j]);
            }
            _tmp.push(dp[j]+ '()');
        }
        dp= _tmp;
    }
    return dp;
}

console.log( generateParentheses(4));