const input = [1, 0, 1, 0, 0];
function minRabbitNumber(arr) {
    let total = 0;
    const hash = {};
    for (var i = 0; i < arr.length; i++) {
        const tmp = arr[i];
        hash[tmp] = (hash[tmp] || 0) + 1;
        if (hash[tmp] === tmp + 1) {
            total += tmp + 1;
            hash[tmp] = 0;
        }
    }

    for (var k in hash) {
        if (hash[k] !== 0) {
            total += parseInt(k) + 1;
        }
    }

    return total;
}

console.log(minRabbitNumber(input))