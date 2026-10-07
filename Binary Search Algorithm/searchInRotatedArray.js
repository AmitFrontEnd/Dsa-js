const search = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (arr[mid] === target) return mid
    else if (arr[mid] >= arr[left]) {
      if (target < arr[mid] && target >= arr[left])
        right = mid - 1
      else left = mid + 1
    }
    else {
      if (target > arr[mid] && target <= arr[right])
        left = mid + 1
      else right = mid - 1
    }
  }
  return -1
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))