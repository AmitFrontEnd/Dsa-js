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

