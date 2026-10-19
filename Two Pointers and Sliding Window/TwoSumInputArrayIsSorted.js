
var twoSum = (arr, target) => {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [i + 1, j + 1]
    }
    else if (target > arr[i] + arr[j]) i++
    else j--
  }
};

console.log(twoSum([2, 3, 4], 6))