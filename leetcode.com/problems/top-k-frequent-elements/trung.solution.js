/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = [];
    nums.forEach(num => {
        map[num] = map[num] ? map[num] + 1 : 1;
    });

    const arrayForSorting = [];
    for (let num in map) {
        arrayForSorting.push({ val: num, fre: map[num] });
    }
    return arrayForSorting.sort((a, b) => b.fre - a.fre)
        .slice(0, k)
        .map(num => num.val);
};