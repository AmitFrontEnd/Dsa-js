// ! unoptimized code

// const bubbleSort = arr => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
// }

// * Optimized Code

const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSorted = true
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = false
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (isSorted) break
  }
};

let arr = [7, 3, 2, 9, 4, 1];


bubbleSort(arr);
console.log(arr);
