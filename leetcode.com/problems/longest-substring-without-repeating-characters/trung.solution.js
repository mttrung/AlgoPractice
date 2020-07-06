/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let mapCharToPos = {}
    let startPos = 0;
    let length = 0;
    const arr = s.split('');
    arr.forEach((char, pos) => {
        // console.log('char', char, 'pos', pos)
        if (mapCharToPos[char] === undefined || mapCharToPos[char] < startPos) {
            length += 1;
            maxLength = Math.max(maxLength, length);
            // console.log('not existed', startPos, length, maxLength)
        } else {
            startPos = mapCharToPos[char] + 1;
            length = pos - startPos + 1;
            // console.log('existed', startPos, length, maxLength)
        }
        mapCharToPos[char] = pos;
    })

    return maxLength;
};