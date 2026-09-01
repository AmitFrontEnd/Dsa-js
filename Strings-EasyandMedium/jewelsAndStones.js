const getJewelsNumberInStones = (jewels, stones) => {
  let length = 0;
  const jewelSet = new Set()

  for (let i = 0; i < jewels.length; i++) {
    jewelSet.add(jewels[i])
  }
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i]))
      length++;
  }
  return length;
};

const jewels = "aA", stones = "aAAbbbb"

console.log(getJewelsNumberInStones(jewels, stones))