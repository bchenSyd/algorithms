const input = 'aababaacfa';

var start = 0, end = 0;
for (var i = 0; i < input.length; i++) {
    var len1 = expandAroundCenter(input, i, i); // center is on arr[i]
    var len2 = expandAroundCenter(input, i, i + 1); // center is between arr[i] and arr[i+1], e.g. (ab)|(ba)
    var len = Math.max(len1, len2);
    if (len > end - start) { // always take the last max leng palindrom
        start = i - (len - 1) / 2;
        end = i + len / 2;
    }
}

function expandAroundCenter(arr, left, right) {
    let l = left, r = right;
    while (l >= 0 && r < arr.length && arr[l] === arr[r]) {
        l--;
        r++
    }
    return r - l - 1;  // length of palindrom found;
}

console.log(input.substr(start, end-start+1));