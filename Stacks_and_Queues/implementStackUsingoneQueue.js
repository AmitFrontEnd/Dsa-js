//using one queue only
var MyStack = function () {
  this.q1 = []
};
MyStack.prototype.push = function (x) {
  this.q1.push(x)
};

MyStack.prototype.pop = function () {
  let n = this.q1.length
  for (let i = 0; i < n - 1; i++) {
    this.q1.push(this.q1.shift())
  }
  return this.q1.shift()
};

MyStack.prototype.top = function () {
  let n = this.q1.length
  for (let i = 0; i < n - 1; i++) {
    this.q1.push(this.q1.shift())
  }

  let top = this.q1.shift()
  this.q1.push(top)
  return top
};

MyStack.prototype.empty = function () {
  return !this.q1.length
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