// const removeElement = (arr, val) => {
//   let i = 0, j = 0;
//   for (i; i < arr.length; i++) {
//     if (arr[i] === val) {
//       j = i
//       break;
//     }
//   }
//   i = j + 1
//   while (i < arr.length) {
//     while (arr[i] === val) {
//       i++
//     }
//     if (i < arr.length) {
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//       j++
//       i++
//     }
//   }
//   let count = 0;
//   for (let k = 0; k < arr.length; k++) {
//     if (arr[k] != val)
//       count++
//     else
//       arr[k] = '_'
//   }
//   return count
// }

const removeElement = (arr, val) => {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[k] = arr[i]
      k++
    }
  }
  return k
}
const arr = [3,2,4,2,2]
count = removeElement(arr, 3)
console.log(count)