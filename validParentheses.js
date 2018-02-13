/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(arr) {
    var hash={
        '(':')',
        '{':'}',
        '[':']'
    }
    var stack = [];
    for(var i=0;i< arr.length; i++){
        var _char= arr[i];
        if( _char === '{' || _char === '(' || _char==='['){
            stack.unshift(_char);
            console.log(`push  length=${stack.length}`)
        }else{
            var top = stack.splice(0,1)[0];
            console.log(`top: ${top} , hash[${top}] : ${hash[top]}   _char : ${_char}`)
            if( hash[top] !== _char){
                return false; //invalid syntax
            }
            console.log(` pop length=${stack.length}`);

        }
    }
    return stack.length ===0;
};

console.log( isValid('([)]'));