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

  this.getIntersectionBrute = function (headA, headB) {
    while (headA) {
      let tempB = headB
      while (tempB) {
        if (headA === tempB) return tempB
        tempB = tempB.next
      }
      headA = headA.next
    }
    return null
  }
  this.getIntersectionOptimal = function (headA, headB) {
    let hashSet = new Set()
    while (headB) {
      hashSet.add(headB)
      headB = headB.next
    }
    while (headA) {
      if (hashSet.has(headA)) return headA
      headA = headA.next
    }
    return null
  }
}

const myLL = new myLinkedList()

myLL.addAtHead("a1")
myLL.addAtTail("a2")
let c1 = myLL.addAtTail("c1")
myLL.addAtTail("c2")
myLL.addAtTail("c3")

const myLL2 = new myLinkedList()
myLL2.addAtHead("b1")
myLL2.addAtTail("b2")
let b3 = myLL2.addAtTail("b3")
b3.next = c1
console.log(myLL.getIntersectionBrute(myLL.head, myLL2.head))