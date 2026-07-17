// const getSecondLargest = arr => {
  //  if (arr.length === 0) return null
  // if (arr.length < 3) return 'Array should have at least 2 elements'
//   let largest = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest)
//       largest = arr[i]
//   }
//   let secondLargest = -Infinity
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= largest && secondLargest < arr[i])
//       secondLargest = arr[i]
//   }
//   return secondLargest
// }

const getSecondLargest = arr => {
  let first_Largest = -Infinity
  let second_Largest = -Infinity
  if (arr.length === 0) return null
  if (arr.length < 2) return 'Array should have at least 2 elements'
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first_Largest) {
      second_Largest = first_Largest;
      first_Largest = arr[i]
    }
    else if (second_Largest < arr[i] && arr[i] !== first_Largest)
      second_Largest = arr[i]
  }
  return second_Largest === -Infinity ? null : second_Largest

}

const arr = [23, 23, 10]

console.log(getSecondLargest([23, 23]))
console.log(getSecondLargest([23, 3, 5, 3]))
console.log(getSecondLargest([]))