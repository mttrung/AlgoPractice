/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = [];
    nums.forEach(num => {
        map[num] = map[num] ? map[num] + 1 : 1;
    });
    for (let num in map)
        if (map[num] === 1)
            return num;
};