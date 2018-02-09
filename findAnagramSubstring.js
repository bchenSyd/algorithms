const input = 'bacdbadcaabc';
const p = 'bac';

function findAnagrams(arr, p) {
    const hash = {};
    for (var i in p) {
        hash[p[i]] = true; // or hash[p[i]] = 1
    }
    console.log(hash);

    var i = 0, j = 0, unmatched = p.length;
    var result = [];
    while (j < arr.length) {
        if (hash[arr[j]]) { // find j within p
            unmatched--;
        }
        j++;
        if (unmatched === 0) {
            result.push(i);
        }
        if (j - i === p.length) {
            // sliding window too wide
            if (hash[arr[i]]) {
                unmatched++;
            }
            i++;
        }
    }
    return result
}

console.log(findAnagrams(input, p))