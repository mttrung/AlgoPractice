/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    const map = [];
    for (let n of arr) {
        if (map[n * 2] || (n % 2 == 0 && map[n / 2]))
            return true;
        map[n] = true;
    }
    return false;
};