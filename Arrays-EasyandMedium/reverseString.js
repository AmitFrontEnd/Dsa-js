const reverseString = (arr) => {
  let i = 0,
  j = arr.length - 1;
  while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
};

const arr = ["h", "e", "l", "l", "o"];
reverseString(arr)
console.log(arr)