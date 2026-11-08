// SC O(N), TC O(N)
const trapBetterSolution = height => {
  let ans = 0, n = height.length, maxLeft = [], maxRight = [];
  maxLeft[0] = height[0]
  maxRight[n - 1] = height[n - 1]

  for (let i = 1; i < n; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i])
  }
  for (let i = n - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i])
  }

  for (let i = 0; i < n; i++) {
    let waterFilled = Math.min(maxLeft[i], maxRight[i]) - height[i]
    ans += Math.max(waterFilled, 0)
  }
  return ans
};


console.log(trapBetterSolution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))