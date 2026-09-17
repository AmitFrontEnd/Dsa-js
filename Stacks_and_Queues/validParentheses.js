const isValid = str => {
  let maps = { "}": "{", ")": "(", "]": "[" }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "(" || str[i] === "[")
      stack.push(str[i])
    else if (maps[str[i]] !== stack.pop()) return false
  }
  return stack.length === 0
};


console.log(isValid("[()]()"))
console.log(isValid("[()]()}"))