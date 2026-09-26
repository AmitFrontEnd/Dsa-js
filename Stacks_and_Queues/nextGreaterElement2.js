const nextGreaterElements = (nums) => {
  let n = nums.length
  let ans = []
  let stack = []
  stack.push(nums[nums.length - 1])
  ans.push(-1)
  for (let i = 2 * nums.length - 2; i >= 0; i--) {
    let isFound = false
    while (stack.length) {
      let num = stack.pop()
      if (nums[i % n] < num) {
        ans[i % n] = num
        stack.push(num)
        isFound = true
        break
      }
    }
    if (!isFound) ans[i % n] = -1
    stack.push(nums[i % n])
  }
  return ans
};

console.log(nextGreaterElements([1,2,3,4,3]))