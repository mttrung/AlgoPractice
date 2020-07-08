/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    const result = [[r0, c0]];
    for (let step = 1; result.length < R * C; step++) {
        for (let i = -step; i <= step; i++) {
            let k = step - Math.abs(i);
            if (i + c0 < C && i + c0 >= 0 && k + r0 < R && k + r0 >= 0)
                result.push([k + r0, i + c0]);
            if (k != 0 && i + c0 < C && i + c0 >= 0 && -k + r0 < R && -k + r0 >= 0)
                result.push([-k + r0, i + c0]);
        }
    }
    return result;
};
