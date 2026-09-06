const longestCommonPrefix = strs => {
  let commonPrefix = ""
  // i for base string current position char
  for (let i = 0; i < strs[0].length; i++) {
    // j for each string current char
    let j = 1;
    for (j; j < strs.length; j++) {
      if (!strs[j][i] || strs[j][i] !== strs[0][i]) return commonPrefix;
    }
    if (j === strs.length) commonPrefix += strs[0][i]
    else break
  }
  return commonPrefix
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))