const getRabbitCount = (pairInput, count = 0) => {
  if (count >= pairInput) return 1
  return 2 * getRabbitCount(pairInput, count + 1)
}

console.log(getRabbitCount(5))