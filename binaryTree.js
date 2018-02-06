function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var child1 = new Node(1, new Node(4), new Node(10))
var root = new Node(1, child1, new Node(22, new Node(3)));

function parseTree(node, arr) {
    var value = node ? node.val : '#';
    arr.push(value);
    if (node) {
        parseTree(node.left, arr);
        parseTree(node.right, arr);
    }
}

const arr = [];
parseTree(root, arr);
console.log(arr);

function deserializeTree(arr){
    const root = new Node(arr[0]);
    let i = 1;
    let node = root;
    while (i < arr.length) {
        const val = arr[i];
        if (val !== '#') {
            const child = new Node(val);
            child.parent= node;
            node[ typeof(node.left) === 'undefined' ? 'left' : 'right'] = child;
            node = child;
        }else{
            // '#' encountered;
            node[typeof(node.left) === 'undefined' ? 'left' : 'right'] = null;
            while(node && typeof(node.left) !== 'undefined' && typeof(node.right) !== 'undefined'){
                node = node.parent;
            }
        }
        i++;
    }
    return root;
}

const arr2=[]
parseTree(root, arr2);
console.log(arr2); //should be the same as previous result