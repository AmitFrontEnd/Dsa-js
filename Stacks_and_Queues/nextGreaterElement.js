var nextGreaterElementBrute = function (nums1, nums2) {
  let ans = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        let greaterElement = 0
        for (let k = j + 1; k < nums2.length; k++) {
          if (nums2[k] > nums2[j]) {
            greaterElement = nums2[k]
            break
          }
        }

        if (greaterElement !== 0) ans.push(greaterElement)
        else ans.push(-1)
      }
    }
  }
  return ans
}

const nextGreaterElementOptimal = (nums1, nums2) => {
  let stack = []
  let ans = []
  let ngElemMap = {}
  stack.push(nums2[nums2.length - 1])
  ngElemMap[nums2[nums2.length - 1]] = -1

  for (let i = nums2.length - 2; i >= 0; i--) {
    while (stack.length) {
      let num = stack.pop()
      if (nums2[i] < num) {
        ngElemMap[nums2[i]] = num
        stack.push(num)
        break
      }
    }
    if (!ngElemMap[nums2[i]]) {
      ngElemMap[nums2[i]] = -1
    }
    stack.push(nums2[i])
  }
  for (let i = 0; i < nums1.length; i++) {
    ans.push(ngElemMap[nums1[i]])
  }
  return ans
}

console.log(nextGreaterElementOptimal([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))