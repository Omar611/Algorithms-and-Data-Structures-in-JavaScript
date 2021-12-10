
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