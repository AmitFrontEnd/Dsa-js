const findMin = nums => {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    if (nums[left] <= nums[right]) return nums[left]
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid - 1]) return nums[mid]
    else if (nums[left] <= nums[mid]) left = mid + 1
    else right = mid - 1
  }
};

console.log(findMin([2, 3, 4, 8, 1]))