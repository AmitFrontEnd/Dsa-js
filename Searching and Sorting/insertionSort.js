const insertionSort = arr => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let value = arr[i + 1]
    let pos = i + 1
    for (let j = i + 1; j > 0; j--) {
      if (value < arr[j - 1]) {
        arr[j] = arr[j - 1]
        pos--
      }
      else break
    }
    arr[pos] = value
  }
}

const arr = [4, 1, 1, 1, 1, 3, 2, 5, 5, 5]
insertionSort(arr)

console.log(arr)