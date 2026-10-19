const twoSum = (arr, target)=> {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i
  }

  for (let i = 0; i < arr.length; i++) {
    if (map[target - arr[i]] && map[target - arr[i]] !== i) return [i, map[target - arr[i]]]
  }
};

console.log(twoSum([3,5,4,19,2],21))