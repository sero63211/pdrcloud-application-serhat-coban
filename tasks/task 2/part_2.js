//task: 1 - Functions & Typing
/**
 * Calculates the area of a rectangle based on the given width and height values.
 *
 * @param width - The width of the rectangle
 * @param height - The height of the rectangle
 * @returns The calculated area of the rectangle
 */
function calculateArea(width, height) {
  return width * height;
}
// Example usage of Task 1:
var width = 5;
var height = 10;
var area = calculateArea(width, height);
console.log("The area of the rectangle is: ".concat(area));
//Array of three items using User-Interface
var userArray = [
  {
    name: "Max Mustermann",
    age: 30,
    email: "max.mustermann@gmail.com",
  },
  {
    name: "Jane Smith",
    age: 39,
    email: "jane.smith@example.com",
  },
  {
    name: "James Johnson",
    age: 36,
    email: "james.johnson@example.com",
  },
];
console.log(userArray);
//task: 3 - Generics
/**
 * A generic function that reverses the elements of an array.
 *
 * @param arr - The array of any data type.
 * @returns A new array with the elements in reverse order.
 */
function reverseArray(arr) {
  return arr.slice().reverse();
}
// Example usage of Task 3:
var numberArray = [1, 2, 3, 4, 5];
var reversedNumberArray = reverseArray(numberArray);
console.log("Reversed number array:", reversedNumberArray);
var stringArray = ["a", "b", "c", "d"];
var reversedStringArray = reverseArray(stringArray);
console.log("Reversed string array:", reversedStringArray);
