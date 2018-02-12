function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}
//   1
//    \
//     2
//    /
//   3
const root = new Node(1, new Node(2, null, new Node(3)), new Node(2, new Node(3)));


function Traverse(node) {
    const result = [];
    if(!node){
        return result;
    }
    const stack = [node];
    while (stack.length > 0) {
        
        if (stack[0].left && !stack[0].leftChecked) {
            // if node has left tree, push
            stack[0].leftChecked = true;  // space requirement O(n)
            stack.unshift(stack[0].left);
        } else {
            var _node = stack.splice(0, 1)[0]; // pop;
            delete _node.leftChecked
            result.push(_node.val);
            if (_node.right) {
                stack.unshift(_node.right);
            }
        }
    }
    return result;
}

console.log(Traverse(root));