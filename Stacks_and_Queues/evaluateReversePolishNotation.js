const evalRPN = (tokens) => {
  let stack = []
  for (let i = 0; i < tokens.length; i++) {
    if (["+", "-", "*", "/"].includes(tokens[i])) {
      let num1 = stack.pop()
      let num2 = stack.pop()
      let result;
      if (tokens[i] === "+") result = num2 + num1
      else if (tokens[i] === "-") result = num2 - num1
      else if (tokens[i] === "*") result = num2 * num1
      else result = Math.trunc(num2 / num1)

      stack.push(result)
    } else stack.push(+tokens[i])
  }
  return stack.pop()
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))