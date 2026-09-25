const dailyTemperatures = (temperatures) => {
  let ans = []
  let stack = []
  stack.push(temperatures.length - 1)
  ans.push(0)
  for (let i = temperatures.length - 2; i >= 0; i--) {
    let isFound = false
    while (stack.length) {
      let index = stack.pop()
      if (temperatures[index] > temperatures[i]) {
        ans.push(index - i)
        stack.push(index)
        isFound = true
        break
      }
    }
    if (!isFound) ans.push(0)
    stack.push(i)
  }
  return ans.reverse()
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))