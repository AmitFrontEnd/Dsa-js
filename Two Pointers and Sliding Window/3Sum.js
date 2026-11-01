const threeSum = (nums) => {
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    twoSum(nums, ans, i);
  }
  return ans;
};

const twoSum = (nums, ans, a) => {
  let i = a + 1,
    j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j] + nums[a];
    if (sum > 0) {
      j--;
    } else if (sum < 0) i++;
    else {
      ans.push([nums[a], nums[i], nums[j]]);
      i++;
      j--;
      while (i < j && nums[i] === nums[i - 1]) i++;
    }
  }
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))