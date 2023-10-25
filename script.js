// function convertToRoman(num) {
//   const obj = {
//     0: ['M', 1000],
//     1: ['D', 500],
//     2: ['C', 100],
//     3: ['L', 50],
//     4: ['X', 10],
//     5: ['V', 5],
//     6: ['I', 1]
//   };

//   let result = '';

//   for (let key in obj) {
//     const [numeral, value] = obj[key];
//     while (num >= value) {
//       result += numeral;
//       num -= value;
//     }
//   } 

//   alert(result);
// }

// // Take input from the user
// const userInput = prompt("Enter a number between 0 and 100000:");
// const inputNumber = parseInt(userInput, 10);

// // Check if the input is a valid number
// if (!isNaN(inputNumber) && inputNumber >= 0 && inputNumber <= 100000) {
//   const romanNumeral = convertToRoman(inputNumber);
//   console.log(`Roman Numeral: ${romanNumeral}`);
// } else {
//   console.log("Invalid input. Please enter a number between 0 and 100000.");
// }
