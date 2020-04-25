// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = {chi: 2700000};
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);

// Write a method that prints out every number from 1 to 100. 

// var index = 1;
// while (index <= 100) {
//     console.log(index);
//       index ++ ;
// }


// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// var index = 1;
// while (index <=100){
//   console.log(index);
//   index += 2;
// }

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.


// function ArrayCounter(array){
//   var count = 0 ;
//   var i = 0 ;
//   while (i < array.length){
//     if (array[i] === 55){
//       count++;
//     }
//     i++;
//   }
//   console.log(count);
// }
// ArrayCounter([2, 4, 6, 55, 67, 55, 55]);


// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].


// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].






// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].


function SelectEvenNumbers(strings) {
  result = []
  index = 0

  strings.forEach(Function(strings))
    if (index % 2 === 0 ){
      result.push("index");
    }
    index = index + 1
  console.log(result);
}

// SelectEvenNumbers(["a", "b", "c", "d", "e", "f"]);


function Factorial() {
for (var i = 5; i > 0 ; i--){
  aux *= i ;
}
  console.log(aux);
}

// Factorial(5);



// 1. Write a function that takes in an array of numbers and returns its sum.

function sum(array){

var total = 0;
for (var i = 0; i < array.length; i++){
  total += array[i];
}
return total;
}

// console.log(sum([2, 5 ,7]));

// // 2. Write a function that takes in an array of strings and returns the smallest string.


function smallest(array){

  var small = array[0]
  for (var i = 0; i < array.length; i++){
      if(small.length > array[i].length){
        small = (array[i]); 
      }

  }
  return small;
}

// console.log(smallest(["blue", "pink", "yellow"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reverse(array){

  var rev = [] 
  for (var i = (array.length - 1); i >=  0; i--){
     rev.push(array[i]);
  
  }
  return rev ;
}
 
// console.log(reverse(["green", "black", "white"]));


4. Write a function that takes in an array of words and returns the number of words that begin with the letter "a".
// // 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
// // 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 
// // 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
// // 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
// // 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// // 10. Write a function that takes in an array of words and returns the number of times the letter "a" appeared in total.
