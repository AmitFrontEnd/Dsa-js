const getMissingNumberBrute = arr => {
  for (let i = 0; i <= arr.length; i++) {
    let isMissing = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        isMissing = false
        break;
      }
    }
    if (isMissing)
      return i
  }
}

// using sum approach
const getMissingNumberOptimal1 = arr => {
  let arraySum = 0;
  for (const elem of arr) {
    arraySum += elem;
  }
  let n = arr.length
  let numbersSum = (n * (n + 1)) / 2
  return numbersSum - arraySum
}

// using xor approach
const getMissingNumberOptimal2 = arr => {
  let xor1 = 0
  let xor2 = 0

  for (let i = 0; i < arr.length; i++) {
    xor1^=arr[i]
    xor2^=i
  }
  return xor1 ^ xor2^arr.length
}

console.log(getMissingNumberOptimal2([0, 3, 5, 1, 2]))