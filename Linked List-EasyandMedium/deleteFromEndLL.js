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
  this.deleteFromEndBetter = function (n) {
    let sentinelNode = new Node()
    sentinelNode.next = this.head
    let length = 0
    while (this.head) {
      length++
      this.head = this.head.next
    }
    let prev = length - n
    let temp = sentinelNode
    for (let i = 0; i < prev; i++) {
      temp = temp.next
    }
    temp.next = temp.next.next
    this.head = sentinelNode.next
  }
  this.deleteFromEndOptimal = function (n) {
    let sentinelNode = new Node()
    sentinelNode.next = this.head
    let slow = fast = sentinelNode
    for (i = 0; i < n; i++) {
      fast = fast.next
    }
    while (fast.next != null) {
      slow = slow.next
      fast = fast.next
    }

    slow.next = slow.next.next
    this.head = sentinelNode.next
  }
}

const myLL = new myLinkedList()
myLL.addAtHead(5)
myLL.addAtTail(4)
myLL.addAtTail(7)
myLL.addAtTail(16)
myLL.addAtTail(8)
myLL.display()
// myLL.deleteFromEndBetter(5)
myLL.deleteFromEndOptimal(3)
myLL.display()

