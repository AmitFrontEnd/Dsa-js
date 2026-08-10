const selectionSort = arr => {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minIndex])
        minIndex = j
    }

    // * little optimization

    if (i !== minIndex) {
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
}

const arr = [4, 1, 3, 2, 5]
selectionSort(arr)

console.log(arr)