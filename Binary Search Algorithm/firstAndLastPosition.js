const searchRange = (nums, target) => {
  let ans = []
  let leftF = 0; rightF = nums.length - 1;
  while (leftF < rightF) {
    let mid = leftF + Math.floor((rightF - leftF) / 2);
    if (nums[mid] === target) rightF = mid;
    else if (nums[mid] > target) rightF = mid - 1;
    else leftF = mid + 1
  }
  if (nums[leftF] === target) ans.push(leftF)
  else ans.push(-1)

  let leftR = 0; rightR = nums.length - 1;
  while (leftR < rightR) {
    let mid = leftR + Math.ceil((rightR - leftR) / 2);
    if (nums[mid] === target) leftR = mid;
    else if (nums[mid] > target) rightR = mid - 1;
    else leftR = mid + 1
  }
  if (nums[rightR] === target) ans.push(rightR)
  else ans.push(-1)
  return ans;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 10))