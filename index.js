function largestSubarraySum(arr) {
    let [currMax, currSum] = [0, 0];
    for (const num of arr) {
        if (currSum + num < 0) {
            currSum = 0;
        }
        else {
            currSum += num;
            if (currSum > currMax) {
                currMax = currSum;
            }
        }
    }
    return currMax;
}