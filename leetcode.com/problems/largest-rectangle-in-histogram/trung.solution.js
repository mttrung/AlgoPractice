/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = [];
    let max = 0;
    let topStack = 0;
    let areaWithTop = 0;

    let i = 0;
    while (i < heights.length) {
        if (!stack.length || heights[stack[stack.length - 1]] <= heights[i])
            stack.push(i++);
        else {
            topStack = stack.pop();
            areaWithTop = heights[topStack] * (!stack.length ? i :
                i - stack[stack.length - 1] - 1);
            if (max < areaWithTop)
                max = areaWithTop;
        }
    }

    while (stack.length) {
        topStack = stack.pop();

        areaWithTop = heights[topStack] * (!stack.length ? i :
            i - stack[stack.length - 1] - 1);
        if (max < areaWithTop)
            max = areaWithTop;
    }

    return max;
};