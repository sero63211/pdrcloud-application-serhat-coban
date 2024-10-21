//task: 1 - Functions & Typing
/**
 * Calculates the area of a rectangle based on the given width and height values.
 *
 * @param width - The width of the rectangle
 * @param height - The height of the rectangle
 * @returns The calculated area of the rectangle
 */
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Example usage of Task 1:
const width = 5;
const height = 10;
const area = calculateArea(width, height);
console.log(`The area of the rectangle is: ${area}`);

//task: 2 - Interfaces and Objects

//User interface
interface User {
  name: string;
  age: number;
  email?: string;
}

//Array of three items using User-Interface
const userArray: User[] = [
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
//output of userArray
console.log(userArray);

//task: 3 - Generics

/**
 * A generic function that reverses the elements of an array.
 *
 * @param arr - The array of any data type.
 * @returns A new array with the elements in reverse order.
 */
function reverseArray<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}

// Example usage of Task 3:
const numberArray = [1, 2, 3, 4, 5];
const reversedNumberArray = reverseArray(numberArray);
console.log("Reversed number array:", reversedNumberArray);

const stringArray = ["a", "b", "c", "d"];
const reversedStringArray = reverseArray(stringArray);
console.log("Reversed string array:", reversedStringArray);
