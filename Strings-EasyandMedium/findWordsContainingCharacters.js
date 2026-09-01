
const getWordsIndices = (words, x) => {
  const indices = []
  for (let i = 0; i < words.length; i++) {
    const str = words[i]
    for (let j = 0; j < str.length; j++) {
      if (str[j] === x) {
        indices.push(i)
        break;
      }
    }
  }
  return indices
}

const str = ["leet", "code"]

console.log(getWordsIndices(str, "e"))