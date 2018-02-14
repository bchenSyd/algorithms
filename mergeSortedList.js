function ListNode(val) {
    this.val = val;
    this.next = null;
}

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(5);
list1.next.next.next = new ListNode(12);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(8);
list2.next.next.next = new ListNode(9);

function mergeSortedList(l1, l2) {
    var i = l1, j = l2;
    var dummyHead = new ListNode(0);
    var curr = dummyHead;
    while (i || j) {
        var val_i = i ? i.val : Number.MAX_SAFE_INTEGER;
        var val_j = j ? j.val : Number.MAX_SAFE_INTEGER;
        var _tmp = null;
        if (val_i <= val_j) {
            _tmp = i;
            i = i.next;
        }else{
            _tmp = j;
            j=j.next;
        }
        curr.next = _tmp;
        curr = _tmp;
    }
    return dummyHead.next;
}


function printList(node){
    const result = [];
    var curr = node;
    while(curr){
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}

const result_list = mergeSortedList(list1, list2);
console.log(printList(result_list))