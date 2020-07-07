/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = '';
  // Manacher's algorithm
  const t = `|${s.split('').join('|')}|`;
  let C = 0, R = -1, rad;
  let P = [];

  for (var i = 0; i < t.length; i++) {
    if (i <= R) {
      rad = Math.min(P[2 * C - i], R - i);
    } else {
      rad = 0;
    }
    while (i + rad < t.length && i - rad >= 0 && t.charAt(i - rad) == t.charAt(i + rad)) {
      rad++;
    }
    P[i] = rad;
    if (i + rad - 1 > R) {
      C = i;
      R = i + rad - 1;
    }
  }
  let maxPos = -1;
  let maxLength = 0;
  for (let j = 0; j <= P.length; j++) {
    if (P[j] > maxLength) {
      maxLength = P[j];
      maxPos = j;
    }
  }
  result = t[maxPos];
  for (let k = 1; k < maxLength; k++) {
    result = t[maxPos - k] + result + t[maxPos + k]
  }
  return result.replace(/\|/g, '');
};