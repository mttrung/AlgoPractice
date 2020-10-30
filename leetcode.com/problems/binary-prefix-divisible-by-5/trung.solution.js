/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    // Long version
    // let currentBinary = '';
    // let result = [];
    // let currentRemaining = 0;
    // for (let bit of A) {
    //     if (bit) {
    //         currentRemaining = currentRemaining * 2 + 1;
    //     } else {
    //         currentRemaining = currentRemaining * 2;
    //     }
    //     result.push(currentRemaining % 5 === 0);
    //     currentRemaining %= 5;
    // }
    // return result;

    // Short version
    let currentRemaining = 0;
    return A.map(bit => {
        currentRemaining %= 5
        currentRemaining = currentRemaining * 2 + bit;
        return currentRemaining % 5 === 0;
    })
};
