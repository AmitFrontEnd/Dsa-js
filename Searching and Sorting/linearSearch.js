
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target)
      return i
  }

  return -1;
}

let arr = [3, 4, 10, 2, 43, 10, 24, 2]

for(let i=0;i<100000000;i++){
  if(i==100) continue
  arr.push(i)
}

arr[3]=100

console.log(linearSearch(arr,100))