const binarySearch = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) return mid
    else if (arr[mid] > target) right = mid - 1
    else left = mid + 1
  }
  return -1
}
let arr = [1, 2, 2, 2, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7]

console.log(binarySearch(arr, 5))