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

console.log(nextGreaterElementBrute([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))