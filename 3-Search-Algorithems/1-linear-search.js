function linearSearch(arr, val) {
  let i = 0;
  for (let v of arr) {
    if (v === val) return i;
    i++;
  }
  return -1;
}

arr = [1, 3, 'hh', 23, 'ddd', [1]];

console.log(linearSearch(arr, [1]));