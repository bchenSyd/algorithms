function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function BFT(root) {
    if (!root) {
        return [];
    }
    const queue = [], result = [];
    queue.push(root);
    while (queue.length > 0) {
        const fe = queue.splice(0, 1)[0];
        result.push(fe.val);
        if(fe.left){
            queue.push(fe.left)
        }
        if(fe.right){
            queue.push(fe.right);
        }
    }
    return result;
}

function minDistance(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    if (arr.length <= 1) {
        return min;
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === null) {
            continue;
        }
        var _min=Number.MAX_SAFE_INTEGER;
        for (var j = 0; j < i; j++) {
            if (arr[j] === null) {
                continue;
            }
            _min=Math.min(_min, Math.abs(arr[i] -  arr[j]));
        }
        min = Math.min(min, _min);
    }
    return min;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

const arr= BFT(root);
console.log(arr);
//const arr=[78146,60934,90289,46205,69871,87288,92385,16893,49537,69239,74726,79056,89751,91083,95965,15730,38670,47372,52835,67514,null,71209,75753,78423,86136,null,90287,null,null,93924,96320,368,16474,18200,41604,null,49234,50067,59569,60982,null,69905,74136,74745,77611,null,null,85148,86972,null,null,93727,95318,null,96436,null,2060,null,null,17375,33092,41319,45993,47947,null,null,50894,null,null,null,62903,null,null,null,null,null,null,76036,null,81998,85952,null,null,null,null,null,null,null,null,753,15230,null,null,19189,34697,40931,null,43413,null,null,null,null,51559,null,null,null,76158,80273,82373,null,null,null,906,9706,null,18720,26449,33470,36540,null,null,42842,45928,null,null,null,null,null,80542,null,82979,null,null,6815,15080,null,null,21301,32248,null,null,35540,null,42065,43244,null,null,null,null,82391,null,6169,9301,14703,null,null,25260,31157,null,null,null,null,null,null,null,null,null,2948,null,7122,null,13272,null,21444,null,27478,null,null,null,null,null,12473,13495,null,null,26921,null,12353,null,13273,14436,null,null,11614,null,null,null,null,null,null,null]
console.log(minDistance(arr));

