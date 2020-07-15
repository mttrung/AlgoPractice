/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
    let result = mat.map(row => row.map(num => 0));
    let N = result.length;
    let M = result[0].length;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            console.log(i, j)
            for (let k = 0; k <= K; k++) {
                for (let m = Math.max(j - k, 0); m <= Math.min(M - 1, j + k); m++) {
                    if (m == j - k || m == j + k) {
                        for (let n = Math.max(i - k, 0); n <= Math.min(N - 1, i + k); n++) {
                            result[i][j] += mat[n][m]
                        }
                    } else {
                        if (i - k >= 0) {
                            result[i][j] += mat[i - k][m]
                        }
                        if (i + k < N) {
                            result[i][j] += mat[i + k][m]
                        }
                    }
                }
            }
        }
    }

    return result;
};