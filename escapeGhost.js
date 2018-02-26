/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
    var distance = Math.abs(target[0]) + Math.abs(target[1]);
    var min = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < ghosts.length; i++) {
        var ghost = ghosts[i];
        min = Math.min(min, Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1]));
    }
    return distance < min;
};