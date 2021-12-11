function findLongestSubstring(str) {
  let chars = {};
  for (let ch of str) {
    chars[ch] = (chars[ch] || 0) + 1;
    console.log(chars);
  }

  return Object.keys(chars).length;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('bbbbbbb')); // 3
