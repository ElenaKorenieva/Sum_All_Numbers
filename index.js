// Thursday: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// function sumAll(arr) {
//   // You can do this!
// }
// sumAll([1, 4]);

// The lowest number will not always come first.

// sumAll([1, 4])  // should return a number.
// sumAll([1, 4])  // should return 10.
// sumAll([4, 1])  // should return 10.
// sumAll([5, 10])  // should return 45.

//Pseudocode
// 1. Create a function with array as a paramether;
// 2. Create variables to store the minimum and maximum values in the array;
// 3. Initialize a variable to store the sum;
// 4. Use a for loop to sum all numbers between min and max (inclusive);
// 5. Return the result from the function;
// 6. Call function with necessary argument inside console.log.


function sumAll(arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
  
    let sum = 0;
  
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  console.log(sumAll([1, 4])); 
  console.log(sumAll([5, 10])); 
  console.log(sumAll([4, 1])); 
  