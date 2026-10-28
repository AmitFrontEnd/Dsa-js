const maxArea = (height) => {
  let maxWater = 0;
  let i = 0,
    j = height.length - 1;
  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    maxWater = Math.max(maxWater, area);
    if (height[i] > height[j]) j--;
    else i++;
  }
  return maxWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))