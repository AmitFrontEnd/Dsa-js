var MyStack = function () {
  this.q1 = []
  this.q2 = []
};
MyStack.prototype.push = function (x) {
  this.q1.push(x)
};
MyStack.prototype.pop = function () {
  let n = this.q1.length
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift())
  }
  let elem = this.q1.shift()
  let temp = this.q1
  this.q1 = this.q2
  this.q2 = temp
  return elem
};

MyStack.prototype.top = function () {
  let n = this.q1.length
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift())
  }

  let top = this.q1.shift()
  this.q2.push(top)
  let temp = this.q1
  this.q1 = this.q2
  this.q2 = temp
  return top
};

MyStack.prototype.empty = function () {
  return !this.q1.length ? true : false
};
MyStack.prototype.display = function () {
  return this.q1
};


const stack = new MyStack()

stack.push(5)
stack.push(10)
stack.pop()
console.log(stack.top())
stack.push(12)

console.log(stack.display())