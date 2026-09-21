const removeOuterParentheses = (s) => {
  let stack = []
  let ans = ""

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i])
      if (stack.length > 1)
        ans += s[i]
    }
    else {
      if (stack.length > 1) ans += s[i]
      stack.pop()
    }
  }

  return ans
}

const removeOuterParenthesesOptimal = (s) => {
  // Optimised
  let count = 0
  let ans = ""

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++
      if (count !== 1) ans += s[i]
    }
    else {
      count--
      if (count !== 0) ans += s[i]
    }
  }

  return ans
}

console.log(removeOuterParenthesesOptimal("(()())(())"
))