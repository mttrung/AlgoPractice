/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let freshOrangeNumber = 0;
    let queue = []
    let step = 0;
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                freshOrangeNumber++;
            } else if (grid[i][j] === 2) {
                if (grid[i + 1] && grid[i + 1][j] == 1) queue.push([i + 1, j]);
                if (i > 0 && grid[i - 1][j] == 1) queue.push([i - 1, j]);
                if (grid[i][j + 1] == 1) queue.push([i, j + 1]);
                if (grid[i][j - 1] == 1) queue.push([i, j - 1]);
            }
        }
    while (queue.length) {
        if (freshOrangeNumber === 0)
            return step;
        step++;
        const currentQueueLength = queue.length
        for (let k = 0; k < currentQueueLength; k++) {
            const [i, j] = queue.shift();
            if (grid[i][j] === 1)
                freshOrangeNumber--;
            grid[i][j] = 2
            if (grid[i + 1] && grid[i + 1][j] == 1) queue.push([i + 1, j]);
            if (i > 0 && grid[i - 1][j] == 1) queue.push([i - 1, j]);
            if (grid[i][j + 1] == 1) queue.push([i, j + 1]);
            if (grid[i][j - 1] == 1) queue.push([i, j - 1]);

        }
    }
    return freshOrangeNumber === 0 ? step : -1;
};