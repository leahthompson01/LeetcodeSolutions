// 3Sum Closest

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Ex 1 :
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

var threeSumClosest = function (nums, target) {
  // nums = [1,2,3,4,5,6,7] =>
  //nums = [-1,2,1,-4] => -1+2+1 => -1+1+-4
  // want to find the 3 nums whose sum is closest to target
  //return the sum of those three nums
  let closest = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      //need to find the closest sum so add them all and then take abs value
      let sum = current + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum > target) right--;
      else left++;
    }
  }
  return closest;
};
