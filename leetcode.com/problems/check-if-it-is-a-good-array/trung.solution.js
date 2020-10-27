/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function (nums) {
    let currentGCD = nums[0];
    for (let num of nums) {
        currentGCD = gcd(currentGCD, num);
        if (currentGCD == 1)
            return true;
    }
    return false;
};

var gcd = (a, b) => b == 0 ? a : gcd(b, a % b)