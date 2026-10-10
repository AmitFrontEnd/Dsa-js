const findPeakElement = (nums)=> {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < nums[mid + 1]) left = mid + 1
        else right = mid;
    }
    return left;
};

console.log(findPeakElement([1,2,1,3,5,6,4]))