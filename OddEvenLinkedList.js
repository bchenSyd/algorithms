function ListNode(val) {
    this.val = val;
    this.next = null;
}

function oddEvenList(listNode) {
    var current = listNode;
    var lastOdd = null, firstEven = null, lastEven = null, count = 0;
    while (current) {
        var _next = current.next;
        count++;
        var isOdd = count % 2 === 1;
        if (isOdd) {
            if (lastEven) {
                lastEven.next = current.next;
                current.next = firstEven;
            }
            if (lastOdd) {
                lastOdd.next = current;
            }
            lastOdd = current;
        } else {
            if (!firstEven) {
                firstEven = current;
            }
            lastEven = current;
        }
        current = _next;
    }
}

var dummyHead = new ListNode(0);
var curr = dummyHead;
for (var i = 0; i < 10; i++) {
    curr.next = new ListNode(i + 1);
    curr = curr.next;
}

oddEvenList(dummyHead.next);
curr = dummyHead.next;
while (curr) {
    console.log(curr.val + ',');
    curr = curr.next;
}