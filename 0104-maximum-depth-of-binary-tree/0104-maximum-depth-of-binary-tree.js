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
 * @return {number}
 */
function maxDepth(root) {
    if (root === null) return 0;

    const left_depth = maxDepth(root.left);
    const right_depth = maxDepth(root.right);

    return Math.max(left_depth, right_depth) + 1;
}