function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 342;
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
// 4
const l2 = new ListNode(4);


/**
 * add 2 listNode, return a new listNode representing the add result
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 */
function addListNodes(l1, l2) {
    let overflow = 0;
    let i = l1, j = l2;
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    while (i || j) {
        var sum = (i && i.val) + (j && j.val) + overflow;
        overflow = parseInt(sum / 10);
        var node = new ListNode(sum % 10);
        i = i && i.next;
        j = j && j.next;
        current.next = node;
        current = node;
    }
    if (overflow) {
        current.next = new ListNode(overflow);
    }
    return dummyHead.next;
}


const _result = addListNodes(l1, l2);
// 7->0->8

let result = 0;
let i = _result;
let weight = 1;
//  递归只适用于collection，不适应于LinkedList;
//  LinkedList 只能顺序遍历
while (i) {
    result += i.val * weight;
    console.log(`${result} += ${i.val} * ${weight}`);
    weight *= 10;
    i = i.next;
}
console.log(result);