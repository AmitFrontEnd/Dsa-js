// Better
// const singleNumberBrute = arr => {
//   let hash = {}
//   for (const elem of arr) {
//     if (!hash[elem])
//       hash[elem] = 1
//     else
//       hash[elem]++
//   }

//   for (const key in hash) {
//     if (hash[key] == 1)
//       return key
//   }
// }

// // Optimal
const singleNumber=arr=>{
  let xor=0
  for(let i=0;i<arr.length;i++){
    xor^=arr[i]
  }
  return xor
}

let arr = [2, 4, 2, 4, 1, 1, 5]

console.log(singleNumber(arr))