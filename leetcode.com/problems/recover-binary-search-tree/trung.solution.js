/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {

    let arrayValue = addValueToArray(root, []);
    let x = -1, y = -1;
    let prev = arrayValue[0];

    for (let i = 0; i < arrayValue.length; i++) {
        if (prev > arrayValue[i]) {
            if (x === -1) {
                x = i - 1;
                y = i;
            } else {
                y = i;
            }
        }
        prev = arrayValue[i];
    }

    let valueX = arrayValue[x];
    let valueY = arrayValue[y];

    let NodeChangeToY = (searchNode(root, valueX))
    let NodeChangeToX = (searchNode(root, valueY))

    NodeChangeToY.val = valueY;
    NodeChangeToX.val = valueX;
    return root;
};

function addValueToArray(root, arrayValue) {

    if (root.left) {
        addValueToArray(root.left, arrayValue);
    }
    arrayValue.push(root.val)
    if (root.right) {
        addValueToArray(root.right, arrayValue);

    }
    return arrayValue;
}
function searchNode(root, value) {
    if (root) {
        if (root.val === value) {
            return root;
        }
        else {
            return searchNode(root.left, value) || searchNode(root.right, value)
        }
    }
    return null;
}
