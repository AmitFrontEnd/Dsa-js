const singleNonDuplicate = arr => {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) return arr[mid]
    else if (mid % 2 === 1 && arr[mid - 1] === arr[mid]) left = mid + 1
    else if (mid % 2 === 0 && arr[mid + 1] === arr[mid]) left = mid + 1
    else right = mid - 1
  }
  return arr[left]
};

console.log(singleNonDuplicate([2, 2, 3, 3, 4]))