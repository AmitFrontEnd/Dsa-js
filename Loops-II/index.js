// const elemSearch=(elem,arr)=>{
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==elem) return i
//   }
//   return -1
// }

// const arr=[10,24,2,45,6]

// console.log(elemSearch(435,arr))

// const countNegativeNumbers = arr => {
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) count++
//   }
//   return count
// }

// const arr = [2, -3, -60, 2, -19,-10]

// console.log(countNegativeNumbers(arr))


// const largestNumber = arr => {

//   let largest=arr[0]

//   for (let i = 1; i < arr.length; i++) {
//     if (largest<arr[i]) largest=arr[i]
//   }
//   return largest
// }

// const arr = [4,53,5,35,5]
// console.log(largestNumber(arr))


const smallestNumber = arr => {

  let smallestNum = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (smallestNum < arr[i]) continue
    else
      smallestNum = arr[i]
  }
  return smallestNum
}

const arr = [4, 53, 5, 3, 35, 5]
console.log(smallestNumber(arr))