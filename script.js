function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = '';

  for (let key in obj) {
    const [numeral, value] = obj[key];
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

// Test case
console.log(convertToRoman(36)); // Output: XXXVI
