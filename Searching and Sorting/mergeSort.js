const mergeSort = arr => {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

const merge = (leftArr, rightArr) => {
  let i = 0, j = 0;
  let temp = []
  for (let k = 0; k < leftArr.length + rightArr.length; k++) {
    if (i >= leftArr.length) {
      temp.push(rightArr[j])
      j++
    }
    else if (j >= rightArr.length) {
      temp.push(leftArr[i])
      i++
    }
    else if (leftArr[i] < rightArr[j]) {
      temp.push(leftArr[i])
      i++
    }
    else {
      temp.push(rightArr[j])
      j++
    }
  }
  return temp
}

let arr = [82, 4, 5, 6, 3]

console.log(mergeSort(arr))