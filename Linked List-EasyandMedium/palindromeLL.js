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
  this.isPalindromeBrute = function () {
    let arr = []
    let temp = this.head
    while (temp) {
      arr.push(temp.val)
      temp = temp.next
    }
    let start = 0, end = arr.length - 1
    while (start < end) {
      if (arr[start] !== arr[end]) return false
      start++
      end--
    }
    return true
  }
  this.display = function () {
    let tempNode = this.head
    while (tempNode) {
      tempNode = tempNode.next
    }
  }
  this.isPalindromeOptimal = function () {
    let slow = this.head, fast = this.head
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    let prev = null, current = slow
    while (current) {
      let next = current.next
      current.next = prev
      prev = current
      current = next
    }
    let temp = this.head
    while (temp !== slow) {
      if (temp.val !== prev.val) return false
      temp = temp.next
      prev = prev.next
    }
    return true
  }

}

const myLL = new myLinkedList()
myLL.addAtHead(1)
myLL.addAtTail(2)
console.log(myLL.isPalindromeOptimal())