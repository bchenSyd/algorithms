/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var positive = x>0;
    var abs= Math.abs(x);
    const result=[];
    var weight = 1;
    while( parseInt(abs/weight) >0 ){
        var tmp = parseInt(abs/weight);
        result.push(tmp %10);
        weight *= 10;
    }
    weight = 1;
    var val = 0;
    for(var i=result.length -1; i >= 0; i--){
        val += result[i] * weight;
        weight *=10;
    }
    if( val >=  Math.pow(2,31)-1){
        return 0;
    }
    return positive ? val : -1 * val;
};