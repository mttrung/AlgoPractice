/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const map = [];

    nums.forEach(num => {
        if (num >= 1)
            map[num] = map[num] || 1;
    })
    let i = 1;
    while (map[i++]);
    return i - 1;
};