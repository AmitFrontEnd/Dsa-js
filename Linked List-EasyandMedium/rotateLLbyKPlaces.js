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
  this.rotateByKPlaces = function (k) {
    if (this.head === null || k === 0 || !this.head.next) return this.head
    let length = 0;
    let temp = this.head
    while (temp) {
      length++
      temp = temp.next
    }
    k = k % length
    let slow = fast = this.head
    let count = 0
    while (count < k) {
      fast = fast.next
      count++
    }
    while (fast.next) {
      slow = slow.next
      fast = fast.next
    }
    fast.next = this.head
    this.head = slow.next
    slow.next = null
  }
}

const myLL1 = new myLinkedList()

myLL1.addAtHead(1)
myLL1.addAtTail(2)
myLL1.addAtTail(3)
myLL1.addAtTail(4)
myLL1.addAtTail(5)
myLL1.rotateByKPlaces(100)
myLL1.display()