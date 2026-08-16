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

  //* Brute Approach
  this.findMiddleBrute = function () {
    if (this.head === null) return
    let temp = []
    let tempNode = this.head;
    while (tempNode.next !== null) {
      temp.push(tempNode.val)
      tempNode = tempNode.next
    }
    temp.push(tempNode.val)
    return temp[Math.floor(temp.length / 2)]
  }
  //* Optimal Approach using two pointer slow and fast
  this.findMiddleOptimal = function () {
    let slow = this.head
    let fast = this.head
    while (fast && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }

}

const myLL = new myLinkedList()
// myLL.addAtHead(2)
// myLL.addAtTail(3)
// myLL.addAtTail(10)
// myLL.addAtTail(11)
// myLL.addAtTail(14)
// myLL.addAtTail(16)
console.log(myLL.findMiddleBrute())
console.log(myLL.findMiddleOptimal())

// console.log(myLL)