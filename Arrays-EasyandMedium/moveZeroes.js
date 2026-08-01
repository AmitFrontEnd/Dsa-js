const moveZeroesToEndBrute = arr => {
  let temp = []
  for (const elem of arr) {
    if (elem !== 0)
      temp.push(elem)
  }
  for (let i = temp.length; i < arr.length; i++) {
    temp[i] = 0
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i]
  }
}
// let arr = [0, 0, 12, 0, 5, 3]
// moveZeroesToEndBrute(arr)
const moveZeroesToEndOptimal = arr => {
  let i, j = null;
  for (j = 0; j < arr.length; j++) {
    if (arr[j] === 0)
      break;
  }
  i=j+1
  while (i < arr.length) {
    if (arr[i] === 0)
      i++
    else {
      let temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
      j++;
    }
  }

}
let arr = []
moveZeroesToEndOptimal(arr)

console.log(arr)