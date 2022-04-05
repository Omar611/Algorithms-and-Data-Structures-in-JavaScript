

// -----> Easy Questions <------- \\

/* 
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
 */

function power(base, expo) {
  if (expo === 0) return 1;
  return base * power(base, expo - 1);
}


// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4));// 16

/* 
 * Write a function  factorial which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it; 
 * e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.   
 * factorial zero (0!) is always 1.
*/

function factorial(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040


/* 
 * Write a function called productOfArray;
 * Which takes in an array of numbers and returns the product of them all.
 */
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10]));// 60


/* 
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10));// 55 


/* 
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers 
 * 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(5)); // 3
// console.log(fib(10));// 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465


// -----> Tough Questions <------- \\

/* 
 * Write a recursive function called reverse 
 * Which accepts a string and returns a new string in reverse.
 */
function reverse(str) {
  if (str === '') return '';
  return str.substring(str.length - 1, str.length) + reverse(str.substring(0, str.length - 1));
}

// console.log(reverse('awesome'));// 'emosewa'
// console.log(reverse('rithmschool'));// 'loohcsmhtir'

/* 
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */


function isPalindrome(str) {
  function reverse(str) {
    if (str === '') return '';
    return str.substring(str.length - 1, str.length) + reverse(str.substring(0, str.length - 1));
  }
  return str === reverse(str);
}

// console.log(isPalindrome('awesome'));// false
// console.log(isPalindrome('foobar'));// false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium'));// false

/* 
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 */

function someRecursive(arr, fun) {
  if (!arr.length) return false;
  if (fun(arr[0])) return true;
  return someRecursive(arr.slice(1), fun);
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd));// false
// console.log(someRecursive([4, 6, 8], val => val > 10));// false

/* 
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

function flatten(oldArr) {
  var newArr = []
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5]]));// [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]]));// [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

/* 
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 */

function capitalizeFirst(arr) {
  if (!arr.length) return [];
  let newArr = [];
  newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

// console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']


/* 
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: 'car' }
// };
// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

/* 
 * Write a recursive function called capitalizeWords. 
 * Given an array of words, return a new array containing each word capitalized.
 */

function capitalizedWords(arr) {
  if (!arr.length) return [];
  let newArr = [];
  newArr.push(arr[0].toUpperCase());
  return newArr.concat(capitalizedWords(arr.slice(1)));
}

// Method Two
/* 
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
*/

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// let wo = ['dddd', 'sss'];
// console.log(wo[0].toUpperCase());

/* 
 * Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
 */

function stringifyNumbers(obj, newObj = {}) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}


// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66
//     }
//   }
// }
// console.log(stringifyNumbers(obj));
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

/* 
 * Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
 */

function collectStrings(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      collectStrings(obj[key], arr);
    } else if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    }
  }
  return arr;
}

// Another method
/* 
function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}
*/

// Using Helper
/* 
function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}
*/

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}
console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
