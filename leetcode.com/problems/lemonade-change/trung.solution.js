/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {

    const map = [];
    map[5] = 0; map[10] = 0; map[20] = 0;
    for (let bill of bills) {
        map[bill] += 1;
        const change = bill - 5;
        if (change === 0) {
            continue;
        }
        else if (change === 5) {
            map[5] -= 1;
            if (map[5] < 0)
                return false;
        } else {
            if (map[10] > 0) {
                map[10] -= 1;
                map[5] -= 1
                if (map[5] < 0)
                    return false;
            } else {
                map[5] -= 3
                if (map[5] < 0)
                    return false;
            }
        }
    }
    return true;
};