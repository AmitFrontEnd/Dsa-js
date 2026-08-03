// Brute
const getMaxProfitBrute = arr => {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff = arr[j] - arr[i]
      if (diff > 0 && maxProfit < diff)
        maxProfit = diff
    }
  }
  if (maxProfit == 0) return 0;
  return maxProfit
}

const getMaxProfitOptimal = arr => {
  if(arr.length===0) return 0
  let maxProfit = 0, min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - min > maxProfit)
      maxProfit = arr[i] - min

    if (arr[i] < min)
      min = arr[i]
  }
  return maxProfit
}

// Optimal
const arr= [7,1,5,6,23]
console.log(getMaxProfitOptimal(arr))