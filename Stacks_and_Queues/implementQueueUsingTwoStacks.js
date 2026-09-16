var MyQueue = function () {
  this.s1 = []
  this.s2 = []
};

MyQueue.prototype.push = function (x) {
  this.s1.push(x)
};

MyQueue.prototype.pop = function () {
  if (this.s2.length) {
    return this.s2.pop()
  }
  while (this.s1.length) {
    this.s2.push(this.s1.pop())
  }
  return this.s2.pop()
}
MyQueue.prototype.peek = function () {
  if (!this.s2.length)
    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }
  return this.s2[this.s2.length - 1]
};

MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0
};

const queue=new MyQueue()

queue.push(2)
queue.push(4)
queue.push(10)

console.log(queue.peek())