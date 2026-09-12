const groupAnagramsBetter = (strs) => {
  let map = {}
  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("")
    if (!map[sortedStr]) map[sortedStr] = []
    map[sortedStr].push(strs[i])
  }
  return Object.values(map)
}


var groupAnagramsOptimal = function (strs) {
  let map = {}
  for (let i = 0; i < strs.length; i++) {
    let arr = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      arr[strs[i][j].charCodeAt() - 97]++
    }
    let key = ""
    for (let k = 0; k < arr.length; k++) {
      key += String.fromCharCode(97 + k) + arr[k]
    }
    if (!map[key]) map[key] = [strs[i]]
    else map[key].push(strs[i])
  }
  return Object.values(map)
}

console.log(groupAnagramsOptimal(["eat", "tea", "tan", "ate", "nat", "bat"]))