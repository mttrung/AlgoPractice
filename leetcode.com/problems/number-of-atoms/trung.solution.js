/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    formula = `(${formula})`;
    const mapEleCount = {};
    const stack = [];
    const isLowerCaseAlphaBet = (char) => char >= 'a' && char <= 'z';
    const isUpperCaseAlphaBet = (char) => char >= 'A' && char <= 'Z';
    const isDigitCharacter = (char) => char >= '0' && char <= '9';

    let currentEleName = '';
    let currentCount = 0;

    const finalizeCurrentEle = (ce, cmec, cc) => {
        cmec[ce] = cmec[ce] || 0;
        cmec[ce] += cc;
    }

    const mergeMap = (map1, map2) => {
        for (let key in map2) {
            map1[key] = map1[key] || 0;
            map1[key] += map2[key];
        }
    }
    for (let i = 0; i < formula.length; i++) {
        const currMapEle = stack[stack.length - 1];

        if (isDigitCharacter(formula[i])) {
            currentCount = currentCount * 10 + parseInt(formula[i]);

            if (!isDigitCharacter(formula[i + 1])) {
                if (currentEleName) {
                    finalizeCurrentEle(currentEleName, currMapEle, currentCount);
                    currentEleName = '';
                    currentCount = 0;
                } else {
                    for (let key in currMapEle)
                        currMapEle[key] *= currentCount;
                    stack.pop();
                    mergeMap(stack[stack.length - 1], currMapEle);
                    currentCount = 0;
                }
            }

        }
        else if (isUpperCaseAlphaBet(formula[i])) {
            if (currentEleName) {
                finalizeCurrentEle(currentEleName, currMapEle, 1);
            }
            currentEleName = formula[i];

        }
        else if (isLowerCaseAlphaBet(formula[i])) {
            currentEleName += formula[i];

        } else if (formula[i] === '(') {
            if (currentEleName) {
                finalizeCurrentEle(currentEleName, currMapEle, 1);
                currentEleName = '';
            }
            stack.push({});

        } else if (formula[i] === ')') {
            if (currentEleName) {
                finalizeCurrentEle(currentEleName, currMapEle, 1);
                currentEleName = '';
            }
            if (!isDigitCharacter(formula[i + 1])) {
                stack.pop();
                if (stack.length === 0) {
                    mergeMap(mapEleCount, currMapEle);
                } else {
                    mergeMap(stack[stack.length - 1], currMapEle);
                }
            }

        }
    }

    return Object.keys(mapEleCount).sort().map(ele => `${ele}${mapEleCount[ele] > 1 ? mapEleCount[ele] : ''}`).join('');
};