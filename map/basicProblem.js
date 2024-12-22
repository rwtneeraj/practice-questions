const isEven = function (num) {
  return num % 2 === 0;
};

const reverse = function (string) {
  let rev = [];

  for (let i = 0; i < string.length; i++) {
    rev.unshift(string[i]);
  }

  return rev.join("");
};

// squares of [1, 2, 3] => [1, 4, 9]
const squaresOf = function (numbers) {
  return numbers.map(function (x) { return Math.pow(x, 2); });
};

console.log(squaresOf([1, 2, 3]));

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthsOf = function (strings) {
  return strings.map(function (string) { return string.length; });
};

console.log(lengthsOf(["apple", "banana", "kiwi"]));

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const uppercaseOf = function (strings) {
  return strings.map(function (string) { return string.toUpperCase(); });
};

console.log(uppercaseOf(["hello", "world"]));

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharactersOf = function (strings) {
  return strings.map(function (string) { return string[0]; });
};

console.log(firstCharactersOf(["apple", "banana", "kiwi"]));

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthValuesOf = function (numbers) {
  return numbers.map(function (number) { return number !== 0; });
};

console.log(truthValuesOf([0, 1, 2, 3]));

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reversedStringsOf = function (strings) {
  return strings.map(function (string) { return reverse(string); });
};

console.log(reversedStringsOf(["hello", "world"]));


// double letters of ["cat", "dog", "bat"] => ["ccaatt", "ddoogg", "bbaatt"]
const duplicatesCharString = function (string, times) {
  const duplicates = [];
  for (let index = 0; index < string.length; index++) {
    duplicates.push(string[index].repeat(times));
  }
  return duplicates.join("");
};

const doubleLettersOf = function (strings) {
  return strings.map(function (string) { return duplicatesCharString(string, 2); });
};

console.log(doubleLettersOf(["cat", "dog", "bat"]));


// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map(function (boolean) { return !boolean; });
};

console.log(negatedBooleansOf([true, false, true]));


// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const charCodesOf = function (strings) {
  return strings.map(function (string) { return string.charCodeAt(); });
};

console.log(charCodesOf(["a", "b", "c"]));

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const domainNamesOf = function (emails) {
  return emails.map(function (email) { return email.slice(email.indexOf("@") + 1, email.length); });
};

console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map(function (string) { return string.split(" "); });
};

console.log(splitWordsOf(["hello world", "goodbye moon"]));



// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(function (array) { return array.join(""); });
};

console.log(joinedArraysOf([["a", "b"], ["c", "d"]]));


// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(function (string) { return string.repeat(2); });
};

console.log(repeatedStringsOf(["hi", "bye"]));

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const countVowels = function (string) {
  const vowels = "aeiouAIEOU";
  const convertToArray = string.split("");
  return convertToArray.reduce(function (acc, char) {
    acc += vowels.includes(char) ? 1 : 0;
    return acc;
  }, 0);

};
const countVowelsOf = function (strings) {
  return strings.map(function (string) { return countVowels(string); });
};

console.log(countVowelsOf(["apple", "banana", "grape"]));


// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map(function (array) { return array.reverse(); });
};

console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]

const removeVowels = function (array) {
  const vowels = "aeiouAIEOU";

  return array.filter(function (element) {
    if (!(vowels.includes(element))) { return element; }
  });

};

const withoutVowelsOf = function (strings) {
  return strings.map(function (string) {
    return removeVowels(string.split("")).join("");
  });
};

console.log(withoutVowelsOf(["apple", "banana", "grape"]));


// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const sumOFArrays = function (array) {
  const sum = array.reduce(function (acc, element) {
    const sum = acc.at(-1) + element;
    acc.push(sum);
    return acc;

  }, [0]);

  sum.shift();
  return sum;
};

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]

const cumulativeSumsOf = function (arrays) {
  return arrays.map(function (array) {
    return sumOFArrays(array);
  });
};

console.log(cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));


// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reversedWordsOf = function (strings) {
  return strings.map(function (string) { return reversedStringsOf(string.split(" ")); });
};

console.log(reversedWordsOf(["hello world", "goodbye moon"]));

// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const capitalize = function (string) {
  return string.split(" ").map(function (word) { return word[0].toUpperCase() + word.slice(1, word.length); });
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(function (string) { return capitalize(string); });
};

console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const getLengthOfWord = function (string) {
  return string.split(" ").map(function (word) { return word.length; });
};

const wordLengthsOf = function (strings) {
  return strings.map(function (string) { return getLengthOfWord(string); });
};

console.log(wordLengthsOf(["apple pie", "banana split"]));

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenedArraysOf = function (arrays) {
  return arrays.map(function (array) { return array.flat(); });
};

console.log(flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortedLettersOf = function (strings) {
  return strings.map(function (string) {
    return string.split("").sort().join("");
  });
};

console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrappedStringsOf = function (strings) {
  return strings.map(function (string) { return [string]; });
};

console.log(wrappedStringsOf(["apple", "banana"]));

// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const percentageContributions = function (numbers) {
  const sumOfNumbers = numbers.reduce(function (sum, number) { return sum + number; }, 0);
  return numbers.map(function (number) { return (number * 100) / sumOfNumbers; });
};

console.log("actual : ", percentageContributions([10, 20, 30]));
console.log("expected : ", [16.67, 33.33, 50]);


// subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]

const getSmallest = function (numbers) {
  return numbers.reduce(function (smallest, number) {
    return smallest < number ? smallest : number;
  }, Infinity);
};

const subtractMin = function (numbers) {
  const smallestNumber = getSmallest(numbers);
  console.log(smallestNumber);
  return numbers.map(function (number) { return number - smallestNumber; });
};

console.log("actual : ", subtractMin([3, 8, 1]));
console.log("expected : ", [2, 7, 0]);

// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat     ", "elephant", "dog     "]
// (pad with spaces to match the longest length)
const getLongest = function (strings) {
  return strings.reduce(function (length, string) { return length < string.length ? string.length : length; }, -Infinity);
};

const normalizeStringLengths = function (strings) {
  const longestLength = getLongest(strings);
  return strings.map(function (string) { return string.padEnd(longestLength); });
};

console.log("actual : ", normalizeStringLengths(["cat", "elephant", "dog"]));
console.log("expected : ", ["cat     ", "elephant", "dog     "]);

// normalize strings by centering them based on the longest string length in ["cat", "elephant", "dog"] => ["  cat   ", "elephant", "  dog   "]
// (pad with spaces to justify to the center)

const centerJustifyStrings = function (strings) {
  const longestLength = getLongest(strings);

  return strings.map(function (string) {
    const requireGap = (longestLength + string.length) / 2;
    return (string.padStart(requireGap)).padEnd(longestLength);
  });
};

console.log("actul : ", centerJustifyStrings(["cat", "elephant", "dog"]));
console.log("expected : ", ["  cat   ", "elephant", "  dog   "]);

// scale all numbers proportionally so the largest number becomes 100 in [20, 50, 80] => [25, 62.5, 100]
const getLargest = function (numbers) {
  return numbers.reduce(function (largest, number) { return largest < number ? number : largest; }, -Infinity);
};

const scaleToMax100 = function (numbers) {
  const largest = getLargest(numbers);
  const percentageRequire = ((100 - largest) * 100) / largest;
  return numbers.map(function (number) { return number + (number * percentageRequire) / 100; });
};

console.log("actual : ", scaleToMax100([20, 50, 80]));
console.log("expected : ", [25, 62.5, 100]);

// map each number to the difference between it and the average of the array in [10, 20, 30] => [-10, 0, 10]
const getAverage = function (numbers) {
  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }

  return sum / numbers.length;
};

const differencesFromMean = function (numbers) {
  const average = getAverage(numbers);
  return numbers.map(function (number) { return number - average; });
};

console.log("actual : ", differencesFromMean([10, 20, 30]));
console.log("expected : ", [-10, 0, 10]);

// map each string to its frequency in ["apple", "banana", "apple", "apple", "banana"] => [3, 2, 3, 3, 2]

const getFrequency = function (strings, occurence) {
  return strings.reduce(function (noOfOccurence, string) {
    noOfOccurence += string === occurence ? 1 : 0;
    return noOfOccurence;
  }, 0);
};
const stringFrequencies = function (strings) {
  return strings.map(function (string) {
    return getFrequency(strings, string);
  });
};

console.log("actual : ", stringFrequencies(["apple", "banana", "apple", "apple", "banana"]));
console.log("expected : ", [3, 2, 3, 3, 2]);

// mark the largest number in an array as true, others as false in [1, 3, 2] => [false, true, false]
const markLargestNumber = function (numbers) {
  const largest = getLargest(numbers);
  return numbers.map(function (number) { return number === largest; });
};

console.log("actual : ", markLargestNumber([1, 3, 2]));
console.log("expected : ", [false, true, false]);

// extract unique characters from ["apple", "banana", "grape"] => ["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string
const removeDuplicate = function (word) {
  let uniqueChars = word[0];

  for (let i = 0; i < word.length; i++) {
    if (!(uniqueChars.includes(word[i]))) {
      uniqueChars += word[i];
    }
  }
  return uniqueChars;

};

const uniqueCharactersOf = function (strings) {
  return strings.map(function (string) { return removeDuplicate(string); });
};

console.log("actual : ", uniqueCharactersOf(["apple", "banana", "grape"]));
console.log("expected : ", ["aple", "ban", "grape"]);

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const generateRange = function (size) {
  const range = [];
  for (let i = 0; i < size; i++) {
    range.push(i);
  }

  return range;
};

const rangesOf = function (numbers) {
  return numbers.map(function (size) {
    return generateRange(size);
  });
};

console.log("actual : ", rangesOf([3, 5, 2]));
console.log("expected : ", [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]);

// sort strings by length first, and then alphabetically if lengths are equal in ["cat", "banana", "apple", "kiwi"] => ["cat", "kiwi", "apple", "banana"]
// Steps: Sort by length, then by lexicographical order.
const lenghtComparator = function (a, b) {
  return a.length - b.length;
};

const sortByLengthAndAlphabet = function (strings) {
  return strings.sort(lenghtComparator);
};

console.log("actual : ", sortByLengthAndAlphabet(["cat", "banana", "apple", "kiwi"]));
console.log("expected : ", ["cat", "kiwi", "apple", "banana"]);


// find the difference between the max and min values, and then normalize the array based on this range in [10, 20, 30, 5] => [0.25, 0.75, 1, 0]
// Steps: Find min, max, calculate range, then normalize each value.
const normalizeByRange = function (numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return numbers.map(function (number) {
    return (number - min) / (max - min);
  });
};

console.log("actual : ", normalizeByRange([10, 20, 30, 5]));
console.log("Expected : ", [0.2, 0.6, 1, 0]);

// calculate the percentage of each number relative to the total sum of the array, and then sort the percentages in descending order in [100, 200, 50, 25] => [50, 25, 12.5, 12.5]
// Steps: Calculate sum, find percentage of each number, sort in descending order.
const addNums = function (a, b) {
  return a + b;
};

const percentageOfTotalSorted = function (numbers) {
  const sum = numbers.reduce(addNums, 0);
  const descendingNumbers = numbers.sort(function (a, b) { return b - a; });
  return descendingNumbers.map(function (number) { return (number * 100) / sum; });
};

console.log("actual : ", percentageOfTotalSorted([100, 200, 50, 25]));


// map a list of numbers to their corresponding binary representation and then group them into arrays of equal lengths in [1, 2, 3, 4, 5] => [["1"], ["10"], ["11"], ["100"], ["101"]]
// Steps: Convert numbers to binary, then group them into arrays.

const mapToBinaryAndGroup = function (numbers) {
  return numbers.map(function (number) { return [number.toString(2)]; });
};

console.log("actual : ", mapToBinaryAndGroup([1, 2, 3, 4, 5]));
console.log("expected : ", [["1"], ["10"], ["11"], ["100"], ["101"]]);

// flatten an array of arrays into a single array and then filter out only the even numbers in [[1, 2, 3], [4, 5], [6, 7, 8]] => [2, 4, 6, 8]
// Steps: Flatten the arrays into one, then filter for even numbers.
const flattenAndFilterEven = function (arrays) {
  return arrays.map(function (numbers) {
    numbers.filter(function (number) {
      return isEven(number);
    });
  }).flat();
};

console.log("actual : ", flattenAndFilterEven([[1, 2, 3], [4, 5], [6, 7, 8]]));
console.log("expected : ", [2, 4, 6, 8]);

// flatten a list of arrays representing orders, where each order contains items, and return a single array of item names in [["item1", "item2"], ["item3", "item4"]] => ["item1", "item2", "item3", "item4"]
// Steps: Use `flatMap` to flatten the arrays into a single array of items.
const flattenOrderItems = function (orders) {
  return orders.flatMap(function (element) { return element; });
};

console.log("actual : ", flattenOrderItems([["item1", "item2"], ["item3", "item4"]]));
console.log("expected : ", ["item1", "item2", "item3", "item4"]);

// given an array of numbers, return a new array where each number is multiplied by its index in [2, 4, 6] => [0, 4, 12]
// Steps: Use the index parameter in the `map` function to multiply the number by its index.
const multiplyByIndex = function (numbers) {
  return numbers.map(function (number, index) { return number * index; });
};

console.log("Actual : ", multiplyByIndex([2, 4, 6]));
console.log("expected : ", [0, 4, 12]);


const addtion = function (a, b) {
  return a + b;
};
const product = function (a, b) {
  return a * b;
};

const getDivision = function (a, b) {
  return a / b;
};

const subtract = function (a, b) {
  return a - b;
};

const concat = function (string1, string2) {
  return string1 + " " + string2;
};

const operate = function (operands, operator) {
  return function (base) {
    return operands.map(function (element) { return operator(base, element); });
  };
};


// given two arrays, one of numbers and one of multipliers, create closures to multiply the base by the multiplier, then use flatMap to multiply each number in the base array by each multiplier
// [1, 2], [1, 2, 3] => [1, 2, 3, 2, 4, 6]
const multiply = function (bases, multipliers) {
  const multiplication = operate(multipliers, product);
  return bases.map(multiplication).flatMap(function (element) { return element; });
};

console.log("actual : ", multiply([1, 2], [1, 2, 3]));
console.log("expected : ", [1, 2, 3, 2, 4, 6]);

// given two arrays, one of numbers and one of addends, create closures to add the base number to the addend, then use flatMap to apply each addend to each number
// [1, 2], [5, 10] => [6, 11, 7, 12]
const add = function (bases, addends) {
  const addition = operate(addends, addtion);
  return bases.map(addition).flatMap(function (element) { return element; });
};

console.log("actual : ", add([1, 2], [5, 10]));
console.log("expected : ", [6, 11, 7, 12]);

// given two arrays, one of numbers and one of divisors, create closures to divide the base number by the divisor, then use flatMap to divide each number by each divisor
// [10, 20], [2, 5] => [5, 2, 10, 4]
const divide = function (bases, divisors) {
  const division = operate(divisors, getDivision);
  return bases.map(division).flatMap(function (element) { return element; });;
};

console.log("actual : ", divide([10, 20], [2, 5]));
console.log("expected : ", [5, 2, 10, 4]);
// given two arrays, one of numbers and one of exponents, create closures to raise the base number to the exponent, then use flatMap to raise each number by each exponent
// [2, 3], [2, 3] => [4, 8, 9, 27]
const power = function (bases, exponents) {
  const exponent = operate(exponents, Math.pow);
  return bases.map(exponent).flatMap(function (element) { return element; });;
};

console.log("actual : ", power([2, 3], [2, 3]));
console.log("expected : ", [4, 8, 9, 27]);


// given two arrays, one of prices and one of discounts, create closures to apply the discount to the price, then use flatMap to apply each discount to each price
// [100, 200], [0.1, 0.2] => [90, 180, 160, 240]

const getDiscount = function (price, discount) {
  return price - (price * discount);
};

const applyDiscount = function (prices, discounts) {
  const discount = (discounts, getDiscount);
  return prices.map(discount);
};

console.log("actual : ", applyDiscount([100, 200], [0.1, 0.2]));
console.log("expected : ", [90, 180, 160, 240]);

// given two arrays, one of names and one of titles, create closures that combine each name with each title, then use flatMap to generate all combinations of names and titles
// ["Alice", "Bob"], ["Developer", "Manager"] => ["Alice Developer", "Alice Manager", "Bob Developer", "Bob Manager"]
const combineNameAndTitle = function (names, titles) {
  const operationOnNameTitle = operate(titles, concat);
  return names.map(operationOnNameTitle).flatMap(function (element) { return element; });
};

console.log("actual : ", combineNameAndTitle(["Alice", "Bob"], ["Developer", "Manager"]));
console.log("expected  : ", ["Alice Developer", "Alice Manager", "Bob Developer", "Bob Manager"]);

// given two arrays, one of numbers and one of multipliers, create closures that multiply the base number by the corresponding multiplier at the same index, then return the results
// [1, 2, 3], [2, 3, 4] => [2, 6, 12]
const multiplyByCorresponding = function (bases, multipliers) {
  return bases.map(function (element, index) { return element * multipliers[index]; });
};

console.log("actual : ", multiplyByCorresponding([1, 2, 3], [2, 3, 4]));
console.log("expected : ", [2, 6, 12]);

// given two arrays, one of people’s names and one of ages, create closures to generate a message indicating whether each person is an adult (18 or older), then use flatMap to apply the closure to each person
// ["Alice", "Bob"], [20, 17] => ["Alice is an adult", "Bob is not an adult"]
const checkAdultStatus = function (names) {
  const adult = " is an adult";
  const notAdult = " is not an adult";
  let index = -1;

  return function (age) {
    index++;
    return age > 18 ? names[index] + adult : names[index] + notAdult;
  };
};

console.log("actual : ", [20, 17].map(checkAdultStatus(["Alice", "Bob"])));
console.log("expected : ", ["Alice is an adult", "Bob is not an adult"]);


// given an array of strings representing messages and an array of punctuation marks, create closures that append each punctuation mark to each message, then use flatMap to create all possible combinations of messages with punctuation
// ["Hello", "Goodbye"], ["!", "?"] => ["Hello!", "Hello?", "Goodbye!", "Goodbye?"]

const concatPunctation = function (operands) {
  return function (base) {
    return operands.map(function (element) { return base + element; });
  };
};

const addPunctuation = function (messages, punctuations) {
  return messages.map(concatPunctation(punctuations)).flatMap(function (element) { return element; });
};

console.log("actual : ", addPunctuation(["Hello", "Goodbye"], ["!", "?"]));
console.log("expected : ", ["Hello!", "Hello?", "Goodbye!", "Goodbye?"]);
