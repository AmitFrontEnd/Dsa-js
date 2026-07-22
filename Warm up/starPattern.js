// Pattern 1.
let n = 5;
// for (let i = 0; i < n; i++) {
//   let str = ""
//   for (let j = 0; j < n; j++) {
//     str += "* "
//   }
//   console.log(str)
// }

// Pattern 2

// for (let i = 0; i < n; i++) {
//   let str = ""
//   for (let j = 0; j <= i; j++) {
//     str += "* "
//   }
//   console.log(str)
// }

// Pattern 3

// for (let i = 0; i < n; i++) {
//   let str = ""
//   for (let j = 0; j <= i; j++) {
//     str += j+1 +" "
//   }
//   console.log(str)
// }

// Pattern 4

// for (let i = 0; i < n; i++) {
//   let str = ""
//   for (let j = 0; j <= i; j++) {
//     str += i+1 +" "
//   }
//   console.log(str)
// }

// Pattern 5

// for (let i = 0; i < n; i++) {
//   let str = ""
//   for (let j = 0; j <= n - 1 - i; j++) {
//     str += j + 1 + " "
//   }
//   console.log(str)
// }
// Pattern 6

// for (let i = 0; i < n; i++) {
//   let str = ""
//   for (let j = 0; j <= n - 1 - i; j++) {
//     str += "* "
//   }
//   console.log(str)
// }

// Pattern 7

// for (let i = 0; i < n; i++) {
//   let star = ""
//   let space = ""
//   for (let j = 0; j < n - 1 - i; j++) {
//     space += "  "
//   }
//   for (let k = 0; k < i+1; k++) {
//     star += "* "
//   }
//   space+=star
//   console.log(space)
// }

// Pattern 8

// for (let i = 0; i < n; i++) {
//   let flipbit = 1
//   let str = ""
//   for (let j = 0; j <= i; j++) {
//     str += flipbit + " "
//     flipbit = flipbit === 1 ? 0 : 1
//   }
//   console.log(str)
// }
// Pattern 9


// let flipbit = 1

// for (let i = 0; i < n; i++) {
//   let str = ""
//   for (let j = 0; j <= i; j++) {
//     str += flipbit + " "
//     flipbit = flipbit === 1 ? 0 : 1
//   }
//   console.log(str)
// }