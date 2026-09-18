
function MinStack() {
  this.stack = []
  this.minStack = []
};

MinStack.prototype.push = function (value) {
  if (this.minStack.length === 0) {
    this.minStack.push(value)
  }
  else {
    if (this.minStack[this.minStack.length - 1] >= value) this.minStack.push(value)
  }
  this.stack.push(value)
};
MinStack.prototype.pop = function () {
  if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
    this.stack.pop()
    this.minStack.pop()
  } else {
    this.stack.pop()
  }
};
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
};

const s1 = new MinStack()

s1.push(23)
s1.push(13)
s1.push(6)
s1.push(10)
console.log(s1.getMin())