/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    return mat.map((row, rowIndex) => ({ rowIndex, total: row.reduce((a, b) => a + b, 0) }))
        .sort((a, b) => a.total - b.total)
        .map(row => row.rowIndex)
        .slice(0, k);
};