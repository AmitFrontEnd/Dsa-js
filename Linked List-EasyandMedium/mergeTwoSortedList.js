function Node(val) {
  this.val = val
  this.next = null
}

function myLinkedList() {
  this.head = null
  this.size = 0

  this.addAtHead = function (val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.size++
  }
  this.addAtTail = function (val) {
    const newNode = new Node(val)
    if (this.head === null) this.head = newNode
    else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = newNode
    }
    this.size++
    return newNode
  }
  this.insertatIndex = function (index, val) {
    if (index < 0 || index > this.size) return
    if (index === 0) return this.addAtHead(val)
    const newNode = new Node(val)

    let tempNode = this.head
    let count = 0
    while (count < index - 1) {
      count++
      tempNode = tempNode.next
    }
    newNode.next = tempNode.next
    tempNode.next = newNode
    this.size++
  }

  this.get = function (index) {
    if (index < 0 || index >= this.size || this.head === null) return -1
    let tempNode = this.head
    let count = 0
    while (count < index) {
      tempNode = tempNode.next
      count++
    }
    return tempNode.val
  }
  this.delete = function (index) {
    if (index < 0 || index >= this.size || this.head === null) return
    if (index === 0) {
      this.size--
      return this.head = this.head.next
    }
    let tempNode = this.head
    let count = 0
    while (count < index - 1) {
      tempNode = tempNode.next
      count++
    }
    tempNode.next = tempNode.next.next
    this.size--
  }
  this.display = function () {
    let tempNode = this.head
    while (tempNode) {
      console.log(tempNode.val)
      tempNode = tempNode.next
    }
  }
  this.mergeTwoSortedList = function (l1, l2) {
    let dummyNode = new Node(0)
    let start = dummyNode
    while (l1 && l2) {
      if (l1.val < l2.val) {
        dummyNode.next = l1
        l1 = l1.next
      }
      else {
        dummyNode.next = l2
        l2 = l2.next
      }
      dummyNode = dummyNode.next
    }
    if (!l1) dummyNode.next = l2
    if (!l2) dummyNode.next = l1
    return start.next
  }
}

const myLL1 = new myLinkedList()
myLL1.addAtTail(1)
myLL1.addAtTail(2)
myLL1.addAtTail(4)
const myLL2 = new myLinkedList()
myLL2.addAtTail(1)
myLL2.addAtTail(3)
myLL2.addAtTail(4)

let newHead = (new myLinkedList).mergeTwoSortedList(myLL1.head, myLL2.head)

while (newHead) {
  console.log(newHead.val)
  newHead = newHead.next
}