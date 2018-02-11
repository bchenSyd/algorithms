const input=[87,6,-100,-19,10,-8,-58,56,14,-1,-42,-45,-17,10,20,-4,13,-17,0,11,-44,65,74,-48,30,-91,13,-53,76,-69,-19,-69,16,78,-56,27,41,67,-79,-2,30,-13,-60,39,95,64,-12,45,-52,45,-44,73,97,100,-19,-16,-26,58,-61,53,70,1,-83,11,-35,-7,61,30,17,98,29,52,75,-73,-73,-23,-75,91,3,-57,91,50,42,74,-7,62,17,-91,55,94,-21,-36,73,19,-61,-82,73,1,-10,-40,11,54,-81,20,40,-29,96,89,57,10,-16,-34,-56,69,76,49,76,82,80,58,-47,12,17,77,-75,-24,11,-45,60,65,55,-89,49,-19,4]
const target=-275

function ThreeSumClosest(arr, target) {
    if (arr.length < 3) {
        return undefined;
    }

    arr = arr.sort((a1, a2) => a1 - a2);
    console.log(arr);
    let diff = Number.MAX_SAFE_INTEGER;
    let diffSum = Number.MAX_SAFE_INTEGER;
    for (var p = 0; p < arr.length - 2; p++) {
        let i = p + 1, j = arr.length - 1;
        var _diffMinSum = 0;
        var _diffMin = Number.MAX_SAFE_INTEGER;

        while (i < j) {
            var _tmp = arr[p] + arr[i] + arr[j] - target;
            if (_tmp === 0) {
                console.log(`${arr[p]} + ${arr[i]} + ${arr[j]} =  ${target}`);
                return target;
            } else {
                if (Math.abs(_tmp) < _diffMin) {
                    _diffMin = Math.abs(_tmp);
                    _diffMinSum = _tmp + target;
                    console.log(` closest is in iteration arr[${p}]=${arr[p]} + arr[${i}]=${arr[i]} +  arr[${j}]=${arr[j]} = 
                    sum =${ _diffMinSum} ;   diff=${_diffMin},`)
                }
                if (_tmp > 0) {
                    // greater, decrement j
                    j--;
                } else {
                    // lesser , increment i
                    i++;
                }

            }
        }

        if (_diffMin < diff) {
            diff = _diffMin;
            diffSum = _diffMinSum;
        }

    }
    return diffSum;
}

console.log(ThreeSumClosest(input, target));