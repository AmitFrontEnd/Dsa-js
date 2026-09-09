const isIsomorphic = (s, t) => {
  let mapS = {}, mapT = {}
  for (let i = 0; i < s.length; i++) {
    mapS[s[i]] = t[i]
    mapT[t[i]] = s[i]
  }
  for (let i = 0; i < s.length; i++) {
    if (mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false
  }
  return true
};


console.log(isIsomorphic("baba", "bacd"))