function Node(val, left, right){
    this.val= val;
    this.left=left;
    this.right=right;
}
//   1
//    \
//     2
//    /
//   3
const root = new Node(1, undefined, new Node(2, new Node(3)));

const result = [];
function InOrderTraverse(node){

    if(node.left){
        InOrderTraverse(node.left);
    }
    result.push(node.val);
    if(node.right){
        InOrderTraverse(node.right);
    }
}
InOrderTraverse(root);
console.log(result);


