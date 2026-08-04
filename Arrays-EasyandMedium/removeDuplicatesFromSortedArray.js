const removeFromSortedArrays = arr => {
  if (arr.length === 0) return 0
  let ptr = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      arr[ptr] = arr[i]
      ptr++
    }
  }
  return ptr
}

// const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const arr = []
console.log(removeFromSortedArrays(arr))