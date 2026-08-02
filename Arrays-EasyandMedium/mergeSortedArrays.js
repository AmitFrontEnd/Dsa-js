//Better approach using an extra space of o(m)
// const mergeSortedArrayBetter = (nums1, m, nums2, n) => {
//   let ptr1 = 0, ptr2 = 0;
//   const nums1Copy = nums1.slice(0, m)
//   for (let i = 0; i < m + n; i++) {
//     if (ptr1 >= m) {
//       nums1[i] = nums2[ptr2]
//       ptr2++
//     }
//     else if (ptr2 >= n) {
//       nums1[i] = nums1Copy[ptr1]
//       ptr1++
//     }
//     else if (nums1Copy[ptr1] < nums2[ptr2]) {
//       nums1[i] = nums1Copy[ptr1]
//       ptr1++
//     }
//     else {
//       nums1[i] = nums2[ptr2]
//       ptr2++
//     }
//   }


const mergeSortedArrayOptimal = (nums1, m, nums2, n) => {
  let ptr1 = m - 1, ptr2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (ptr2 < 0) break;
    else if (ptr1 < 0) {
      nums1[i] = nums2[ptr2]
      ptr2--;
    }
    else if (nums1[ptr1] < nums2[ptr2]) {
      nums1[i] = nums2[ptr2];
      ptr2--
    }
    else if (nums1[ptr1] >= nums2[ptr2]) {
      nums1[i] = nums1[ptr1]
      ptr1--
    }
  }
}

const nums1 = [2, 3, 6, 0, 0, 0, 0, 0, 0]
const nums2 = [4, 5, 6, 7, 19, 34]

mergeSortedArrayOptimal(nums1, 3, nums2, 6)

console.log(nums1)