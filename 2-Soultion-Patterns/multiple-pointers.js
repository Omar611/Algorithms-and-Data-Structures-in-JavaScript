/* 
 * ================================================
 * Write a function called "averagePair".
 * Given a sorted array of integers and a target average.
 * Determine if there is a pair of values in the array where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.
 * ================================================
 */

function averagePair(arr, avg) {
  if (!arr.length) return false;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let currentAvg = (arr[end] + arr[start]) / 2;
    if (currentAvg == avg) return true;
    else if (currentAvg < avg) start++;
    else end--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));

/* 
 * ================================================
 * Write a function called "isSubsequence". 
 * Which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
 * ""without their order changing.""
 * ================================================
 */

function isSubsequence(sub, main) {
  let subIndex = 0;
  let mainIndex = 0;
  while (mainIndex < main.length) {
    if(sub[subIndex] == main[mainIndex]) subIndex++;
    if(subIndex == sub.length) return true;
    mainIndex++;
  }
  return false
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));