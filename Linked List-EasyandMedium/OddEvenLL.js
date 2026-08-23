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
  this.arrangeOddEvenBrute = function () {
    if (this.head === null) return null
    let temp1 = this.head
    let odd = [], even = []
    while (temp1 && temp1.next !== null) {
      odd.push(temp1.val)
      temp1 = temp1.next.next
    }
    if (temp1) {
      odd.push(temp1.val)
    }
    let temp2 = this.head.next
    while (temp2 && temp2.next != null && temp2.next.next !== null) {
      even.push(temp2.val)
      temp2 = temp2.next.next
    }
    temp2 && even.push(temp2.val)

    let newArr = [...odd, ...even]
    let count = 0
    let temp3 = this.head
    while (temp3) {
      temp3.val = newArr[count]
      count++
      temp3 = temp3.next
    }
  }
  this.arrangeOddEvenOptimal = function () {
    if (this.head === null) return []
    let oddNode = this.head, evenNode = this.head.next, evenHead = this.head.next
    while (oddNode.next && evenNode.next) {
      oddNode.next = oddNode.next.next
      oddNode = oddNode.next
      evenNode.next = evenNode.next.next
      evenNode = evenNode.next
    }
    oddNode.next = evenHead
    // return head
  }
}
const myLL = new myLinkedList()
myLL.addAtHead(1)
myLL.addAtTail(2)
myLL.addAtTail(3)
// myLL.addAtTail(4)
// myLL.addAtTail(5)
myLL.display()
myLL.arrangeOddEvenOptimal()
myLL.display()

