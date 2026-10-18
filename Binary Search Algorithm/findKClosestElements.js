const findClosestElements = (arr, k, x)=> {
    let left = 0, right = arr.length - k;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (x - arr[mid] <= arr[mid + k] - x) right = mid
        else left = mid + 1
    }
    return arr.slice(left, left + k)
};

console.log(findClosestElements([1,2,3,4,5],3,2))