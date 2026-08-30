function Node(val) {
  this.val = val;
  this.next = null;
}

function myLinkedList() {
  this.head = null;
  this.size = 0;

  this.addAtHead = function (val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  };
  this.addAtTail = function (val) {
    const newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = newNode;
    }
    this.size++;
    return newNode;
  };
  this.insertatIndex = function (index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    const newNode = new Node(val);

    let tempNode = this.head;
    let count = 0;
    while (count < index - 1) {
      count++;
      tempNode = tempNode.next;
    }
    newNode.next = tempNode.next;
    tempNode.next = newNode;
    this.size++;
  };

  this.get = function (index) {
    if (index < 0 || index >= this.size || this.head === null) return -1;
    let tempNode = this.head;
    let count = 0;
    while (count < index) {
      tempNode = tempNode.next;
      count++;
    }
    return tempNode.val;
  };
  this.delete = function (index) {
    if (index < 0 || index >= this.size || this.head === null) return;
    if (index === 0) {
      this.size--;
      return (this.head = this.head.next);
    }
    let tempNode = this.head;
    let count = 0;
    while (count < index - 1) {
      tempNode = tempNode.next;
      count++;
    }
    tempNode.next = tempNode.next.next;
    this.size--;
  };
  this.display = function () {
    let tempNode = this.head;
    while (tempNode) {
      console.log(tempNode.val);
      tempNode = tempNode.next;
    }
  };
  this.swapNodesInPairIterativeWay = function () {
    if (!this.head) return
    let dummyNode = new Node(0);
    let prev = dummyNode;
    let current = this.head;
    let next = this.head.next;
    while (current && next) {
      prev.next = next;
      current.next = next.next;
      next.next = current;
      prev = current;
      current = current.next;
      next = current && current.next;
    }
    return dummyNode.next
  };
  this.swapNodesInPairRecursiveWay = function (head) {
    if (head === null || head.next === null) return head
    let left = head, right = head.next
    left.next = this.swapNodesInPairRecursiveWay(right.next)
    right.next = left
    return right
  };
}

const myLL1 = new myLinkedList();
myLL1.addAtHead(1);
myLL1.addAtTail(2);
myLL1.addAtTail(3);
myLL1.addAtTail(4);

let newHead = myLL1.swapNodesInPairRecursiveWay(myLL1.head)
while (newHead) {
  console.log(newHead.val)
  newHead = newHead.next
}