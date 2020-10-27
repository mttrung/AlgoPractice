var path = require('path');
var fs = require('fs');
var filePath = process.argv[2];
var solutionName = process.argv[3] || 'solution';
if (path.basename(filePath) === 'input') {
    filePath = path.join(
        path.dirname(filePath),
        fs.readdirSync(path.dirname(filePath), 'utf8').find(fileName => fileName.includes(solutionName) && fileName.includes('.js'))
    )
}
var fileContent = fs.readFileSync(filePath, 'utf8');
let functionName = fileContent.match(/(?<=var )(.*)(?= = function)/)[0]

var inputPath = path.join(path.dirname(filePath), 'input');
var inputContent = fs.readFileSync(inputPath, 'utf8');

console.log('Debug log:')
eval(fs.readFileSync(filePath) + '');
eval(`console.log('Output:', JSON.stringify(${functionName}(${inputContent.split('\n').toString()})))`)
