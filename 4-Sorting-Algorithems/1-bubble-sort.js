function bubble(arr) {
  let leng = arr.length - 1;
  while (leng) {
    let swap = false;
    for (let i = 0; i < leng; i++) {
      if (arr[i] > arr[i + 1]) {
        // --- Exchange positions --- //
        // let temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] = temp;
        // --- ES6 method --- //
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
    if (!swap) break; //check if array was sorted mid way throw
    swap = 0;
    leng--;
  }
  return arr;
}

console.log(bubble([9, 5, 7, 3, 8, 2, 2]));
console.log(bubble([9, 8, 7, 6, 4, 2, 1]));
console.log(bubble([1,2,3,4,5]));
