let num = 10
const printNums = n => {
  if (n > num) return
  console.log(n)
  printNums(++n)
}

printNums(1)