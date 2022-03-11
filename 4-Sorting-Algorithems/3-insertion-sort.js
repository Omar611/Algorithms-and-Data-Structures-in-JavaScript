function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
console.log(insertionSort([2,1,9,76,4]));
console.log(insertionSort([9, 5, 7, 3, 8, 2, 2]));
console.log(insertionSort([9, 8, 7, 6, 4, 2, 1]));
console.log(insertionSort([1, 2, 3, 4, 5]));