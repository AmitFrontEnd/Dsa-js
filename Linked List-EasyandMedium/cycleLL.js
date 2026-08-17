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
    return newNode
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
  this.hasCycleBrute = function () {
    const visitedNodes = new Set()
    let tempNode = this.head
    while (tempNode) {
      if (visitedNodes.has(tempNode)) {
        return true
      }
      visitedNodes.add(tempNode)
      tempNode = tempNode.next
    }
    return false
  }
  this.hasCycleOptimal = function () {
    if(this.head===null) return
    let slow = this.head, fast = this.head.next
    while (fast && fast.next) {
      if (slow === fast) {
        return true
      }
      slow = slow.next
      fast = fast.next.next
    }
    return false
  }

}

const myLL = new myLinkedList()
let n1 = myLL.addAtTail(2)
myLL.addAtTail(4)
myLL.addAtTail(6)
let n3 = myLL.addAtTail(8)
n3.next = n1

console.log(n1)
console.log(myLL.hasCycleOptimal())