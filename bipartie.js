const input = [[1, 3], [0, 2], [1, 3], [0, 2]]

function division(left, right) {
    this.left = left;
    this.right = right;
    this.merge = function (index, val) {
        // [].forEach() is not breakable; it WILL ALWAYS iterate through all elements, there is no way to short circuit it
        // there are 2 alternatives to short circuit
        // alternative one: use for(var i in []) -- recommended ( the other way is to use [].some, which is not obvious)
        var parts = ['left', 'right'];
        for (var i in parts) {
            var part = parts[i];
            if (this[part].lastIndexOf(index) !== -1) {
                fount = true;
                var otherPart = part === 'left' ? 'right' : 'left';
                for (var j in val) {
                    var v = val[j]
                    if (this[part].lastIndexOf(v) !== -1) {
                        return 1; // found i in division array, but there is conflicts identified;
                    }
                    if (this[otherPart].lastIndexOf(v) === -1) {
                        this[otherPart].push(v);
                    }
                }
                return 0; // found i in division array, everything happend smoothly
            }
        }
        return -1;
    }
}

function isBipartite(arr) {
    const divisions = [new division([0], arr[0])];
    for (var i = 1; i < arr.length; i++) {
        var found = false;
        for (var j = 0; j < divisions.length; j++) {
            var mergeResult = divisions[j].merge(i, arr[i]);
            if (mergeResult === 0) {
                found = true;
            } else if (mergeResult === 1) {
                // duplciation found
                return false;
            }
        }
        if (!found) {
            divisions.push(new division([i], arr[i]));
        }
    }
    return true;
}

console.log(isBipartie(input));