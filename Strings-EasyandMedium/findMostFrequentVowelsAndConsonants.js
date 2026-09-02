const maxFreqSumBrute = (s) => {
  let maxVowels = 0, maxConsonant = 0
  for (i = 0; i < s.length; i++) {
    if (s[i] !== 'a' && s[i] !== 'e' && s[i] !== 'i' && s[i] !== 'o' && s[i] !== 'u') continue;
    let vowelsCount = 0
    for (let j = 0; j < s.length; j++) {
      if (s[j] === s[i])
        vowelsCount++
    }
    maxVowels = maxVowels < vowelsCount ? vowelsCount : maxVowels
  }

  for (i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') continue;
    let consonantCount = 0
    for (let j = 0; j < s.length; j++) {
      if (s[j] === s[i])
        consonantCount++
    }
    maxConsonant = maxConsonant < consonantCount ? consonantCount : maxConsonant
  }
  return maxVowels + maxConsonant
};

const maxFreqSumOptimal = s => {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]))
      map.set(s[i], map.get(s[i]) + 1)
    else map.set(s[i], 1)
  }
  let maxVowels = 0, maxConsonant = 0
  const vowels = ["a", "e", "i", "o", "u"]
  for (const [key, value] of map) {
    if (vowels.includes(key))
      maxVowels = Math.max(maxVowels, value)
    else maxConsonant = Math.max(maxConsonant, value)
  }

  return maxVowels + maxConsonant
};

console.log(maxFreqSumOptimal("successes"))