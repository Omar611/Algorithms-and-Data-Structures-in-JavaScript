/* 
 * ================================================
 * Given an array of integers and a number, write a function called maxSubarraySum which finds the maximum sum of a subarray with the length of the number passed to the function.
 * Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 * ================================================
 */

/* 
//.. Bad Solution ..
function maxSubarraySum(arr, len) {
  if (arr.length < len) return null;
  let biggestSum = 0;
  let start = 0;
  let sum = 0;

  while (start < arr.length) {
    let nxt = start;
    while (nxt < len + start) {
      sum += arr[nxt];
      nxt++;
    }
    if (sum > biggestSum) biggestSum = sum;
    start++;
    sum = 0;
  }

  return biggestSum;
} */

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let total = 0;

  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }

  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));

/* 
 * ================================================
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. 
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead:
 * ================================================
 */

/*
// .. Bad Solution ..
function minSubArrayLen(arr, target) {
  if (!arr.length) return 0;

  let st = 0;
  let end = 1;
  let sum = 0;
  let counter = 0;

  while (st < arr.length) {
    if (arr[st] >= target) return 1;
    st++;
  }

  while (counter < arr.length) {
    counter++;
    st = 0;
    end = counter;
    while (end < arr.length) {
      let sub = arr.slice(st, end + 1);
      st++;
      end++;
      for (let el of sub) {
        sum += el;
        if (sum >= target) return counter + 1;
      }
      sum = 0;
    }
  }

  return 0;
} */


function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3

/* 
* Write a function called <b>findLongestSubstring, </b>which accepts a string and returns the length of the longest substring with all distinct characters.
*
*/
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('bbbbbbb')); // 3
