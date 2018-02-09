const input = 'cbaebabacd';
const p = 'abc';

function findAnagrams(arr, p) {
    const hash = {};
    for (var i in p) {
        hash[p[i]] = (hash[p[i]] || 0) + 1; // if has['a'] exist before, just increment by 1
    }
    console.log(hash);

    var i = 0, j = 0, count = 0;
    var result = [];
    while (j < arr.length) {
        // if (hash[arr[j]] === 0) is the case where  arr = 'aaaaaaaaaaaaaaa' , p = 'abc' (while 'a' is in 'abc', you can't find 'b' or 'c' 
        // so it's not a anagram)
        if (typeof (hash[arr[j]]) !== 'undefined') {
            if (hash[arr[j]] >= 1) { // collect an expected number
                count++;
            }
            // hash['a']: 1  means there is 1 'a' still missing
            // hash['a']: 0  means we have collect all execpted 'a'
            // hash['a']: -1 means there is an oversupply of 'a' by 1;; tricky case
            hash[arr[j]]--; // everytime encounter a char, decrease the demand
        }

        j++;
        if (count === p.length) {
            result.push(i);
        }
        if (j - i === p.length) {
            // sliding window too wide, needs to take off i
            if (typeof (hash[arr[i]]) !== 'undefined') {
                if (hash[arr[i]] >= 0) {
                    count--;
                }
                hash[arr[i]]++; // increment the demand;
            }
            i++;
        }
    }
    return result
}

console.log(findAnagrams(input, p))