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
  this.addTwoNumbersMyWay = function (head1, head2) {
    let carry = 0
    let l1Head = head1
    let l2Head = head2

    while (l1Head && l2Head) {
      let sum = l1Head.val + l2Head.val + carry
      if (sum.toString().length > 1) {
        let secondDigit = sum % 10
        myLL3.addAtTail(secondDigit)
        carry = 1
      }
      else {
        myLL3.addAtTail(sum)
        carry = 0
      }
      l1Head = l1Head.next
      l2Head = l2Head.next
    }
    while (l1Head) {
      let sum = l1Head.val + carry
      if (sum.toString().length > 1) {
        let secondDigit = sum % 10
        myLL3.addAtTail(secondDigit)
        carry = 1
      }
      else {
        myLL3.addAtTail(sum)
        carry = 0
      }
      l1Head = l1Head.next
    }
    while (l2Head) {
      let sum = l2Head.val + carry
      if (sum.toString().length > 1) {
        let secondDigit = sum % 10
        myLL3.addAtTail(secondDigit)
        carry = 1
      }
      else {
        myLL3.addAtTail(sum)
        carry = 0
      }
      l2Head = l2Head.next
    }
    if (carry == 1) this.addAtTail(carry)
  }
  this.addTwoNumbersStandardWay = function (l1, l2) {
    let carry = 0
    let dummyNode = new Node(0)
    let current = dummyNode
    while (l1 || l2 || carry) {
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
      let digit = sum % 10
      carry = Math.floor(sum / 10)
      let newNode = new Node(digit)
      current.next = newNode
      current = current.next
      l1 = l1 && l1.next
      l2 = l2 && l2.next
    }
    return dummyNode.next
  }
}

const myLL1 = new myLinkedList()
myLL1.addAtHead(9)
myLL1.addAtHead(9)
myLL1.addAtHead(9)
myLL1.addAtHead(9)
myLL1.addAtHead(9)
myLL1.addAtHead(9)
myLL1.addAtHead(9)

const myLL2 = new myLinkedList()
myLL2.addAtHead(9)
myLL2.addAtHead(9)
myLL2.addAtHead(9)
myLL2.addAtHead(9)
let myLL3 = myLL2.addTwoNumbersStandardWay(myLL1.head, myLL2.head)

while (myLL3) {
  console.log(myLL3.val
  )
  myLL3=myLL3.next
}