function listNode(val) {
    this.val = val;
    this.next = null;
}

function swap(head) {
    var dummyHead = new listNode(0);
    var old_head = dummyHead;
    while (head) {
        var _tmp = head;
        if (head.next) {
            _tmp = head.next;
            head.next = _tmp.next;
            _tmp.next = head;
        }
        old_head.next = _tmp;
        old_head = head;
        head = head.next;
    }
    return dummyHead.next;
}

const head = new listNode(1);
head.next = new listNode(2);
head.next.next = new listNode(3);
head.next.next.next = new listNode(4);
head.next.next.next.next = new listNode(5);

let _result = swap(head);
const result = [];
while (_result) {
    result.push(_result.val);
    _result = _result.next;
}
console.log(result)