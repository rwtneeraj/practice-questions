const isEven = function (num) {
  return num % 2 === 0;
};

// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce(function (acc, number) {
    return acc + number;
  }, 0);
};

console.log("actual  : ", sumOf([1, 2, 3, 4]));
console.log("expected : ", 10);

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce(function (accumulator, element) {
    return accumulator * element;
  }, 1);
};

console.log("actual  : ", productOf([1, 2, 3, 4]));
console.log("expected : ", 24);

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return (
    numbers.reduce(function (accumulator, element) {
      return accumulator + element;
    }) / numbers.length
  );
};

console.log("actual  : ", averageOf([1, 2, 3, 4, 5]));
console.log("expected : ", 3);

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce(function (acc, element) {
    return Math.min(acc, element);
  }, Infinity);
};

console.log("actual  : ", minOf([3, 1, 4, 1, 5, 9, 2]));
console.log("expected : ", 1);

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce(function (acc, element) {
    return Math.max(acc, element);
  }, -Infinity);
};

console.log("actual : ", maxOf([3, 1, 4, 1, 5, 9, 2]));
console.log("expected : ", 9);

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  return numbers.reduce(function (acc, element) {
    return element > 0 ? acc + element : acc;
  }, 0);
};

console.log("actual : ", sumPositiveNumbers([1, -2, 3, -4]));
console.log("expected : ", 4);

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  return numbers.reduce(function (acc, element) {
    return acc + element * element;
  }, 0);
};

console.log("actual : ", sumOfSquares([1, 2, 3, 4]));
console.log("expected : ", 30);

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isodd = function (num) {
  return num % 2 !== 0;
};

const sumOfOddNumbers = function (numbers) {
  return numbers.reduce(function (acc, number) {
    return isodd(number) ? acc + number : acc;
  });
};

console.log("actual : ", sumOfOddNumbers([1, 2, 3, 4, 5]));
console.log("expected : ", 9);

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.reduce(function (counter, element) {
    counter += element < 0 ? 1 : 0;
    return counter;
  }, 0);
};

console.log("actual : ", countNegativeNumbers([1, -2, 3, -4]));
console.log("expected : ", 2);

// findSumOfEvenSquares([1, 2, 3, 4]) => 20

const findSumOfEvenSquares = function (numbers) {
  return numbers.reduce(function (accumulator, element) {
    return isEven(element) ? accumulator + element * element : accumulator;
  }, 0);
};

console.log("actual : ", findSumOfEvenSquares([1, 2, 3, 4]));
console.log("expected : ", 20);

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(function (accumulator, word) {
    return accumulator + word;
  }, "");
};

console.log("actual : ", concatenateWords(["hello", "world"]));
console.log("expected : ", "helloworld");

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce(function (longest, element) {
    return element.length > longest.length ? element : longest;
  }, "");
};
console.log("actual : ", longestWord(["apple", "banana", "cherry", "kiwi"]));
console.log("expected : ", "banana");

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce(function (shortest, word) {
    return shortest.length > word.length ? word : shortest;
  }, words[0]);
};

console.log("actual : ", shortestWord(["apple", "banana", "cherry", "kiwi"]));
console.log("expected : ", "kiwi");

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.reduce(function () {
    return words.join(",");
  });
};

console.log("actual : ", joinWithComma(["apple", "banana", "cherry"]));
console.log("expected : ", "apple,banana,cherry");

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reduce(function () {
    return words.reverse().join(" ");
  });
};

console.log("actual : ", reverseWords(["hello", "world"]));
console.log("expected : ", "world hello");

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce(function () {
    return words.join(" ");
  });
};

console.log("actual : ", joinWordsWithSpace(["apple", "banana", "cherry"]));
console.log("expected : ", "apple banana cherry");

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce(function (acc, word) {
    return acc + word;
  }, "");
};

console.log("actual : ", concatenateNames(["John", "Jane", "Doe"]));
console.log("expected : ", "JohnJaneDoe");

// countVowelsInWords(["hello", "world"]) => "eoo"
const getVowels = (word) => {
  const vowel = "aeiou";
  return word.split("").filter((char) => vowel.includes(char));
};

const countVowelsInWords = function (words) {
  return words.reduce(function (vowels, word) {
    vowels += getVowels(word).join("");
    return vowels;
  }, "");
};

console.log("actual : ", countVowelsInWords(["hello", "world"]));
console.log("expected : ", "eoo");

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {};

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {};

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  arrays.reduce();
};

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) {};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {
  
};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1,1,1], [2,2], [5]]
const equalChunksOfAtLeast = function (numbers) {
  
};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }

const groupByType = (array) => {
  return array.reduce((result, element) => {
      const type = isNaN(+element) ? "string" : "number";
      result[type].push(element);
      return result;
    },
    { number: [], string: [] }
  );
};

console.log(groupByType([1, "a", 2, "b", 3, "c", 4]));

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {
  return numbers.reduce(
    ([avg, sum], number) => {
      sum = sum + number;
      avg.push(sum / number);
      return [avg, sum];
    },
    [[], 0]
  )[0];
};

console.log(runningAverages([1, 2, 3, 4]));

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }

const flattenObject = function (init, obj) {};

console.log(flattenObject({ a: { b: { c: 1 } }, d: { e: 2 } }));

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {
  return arr.reduce(
    (subArrays, element) => {
      if (subArrays.at(-1).length === size) {
        subArrays.push([element]);
        return subArrays;
      }

      subArrays.at(-1).push(element);
      return subArrays;
    },
    [[]]
  );
};

console.log(splitIntoSubarrays([1, 2, 3, 4, 5, 6, 7], 3));

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {
  return words.reduce((result, word) => {
    result[word[0]] = [word];
    return result;
  }, {});
};

console.log(groupByFirstLetter(["apple", "banana", "cherry", "date"]));
// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3

const findFirstNonRepeated = function (numbers) {
  return numbers.reduce((result, number) => {
    if (numbers.indexOf(number) === numbers.lastIndexOf(number)) {
      result = result || number;
    }

    return result;
  }, 0);
};

console.log(findFirstNonRepeated([1, 2, 3, 4, 2, 1, 5]));

// countVowels(["apple", "banana", "grape"]) => { a: 5, e: 2, i: 0, o: 0, u: 0 }

const getCountVowels = (listOfVowel) => {
  return listOfVowel.reduce(
    (freq, vowel) => {
      freq[vowel] = (freq[vowel] || 0) + 1;
      return freq;
    },
    { a: 0, e: 0, i: 0, o: 0, u: 0 }
  );
};

const countVowels = function (words) {
  const extractedVowels = words.reduce((extractVowels, word) => {
    extractVowels.push(getVowels(word));
    return extractVowels.flat();
  }, []);

  return getCountVowels(extractedVowels);
};

console.log(countVowels(["apple", "banana", "grape"]));

const getUniqueElements = (array) => {
  return array.reduce((uniqueElements, element) => {
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element);
    }

    return uniqueElements;
  }, []);
};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {
  const uniqueElements = getUniqueElements(array);
  return uniqueElements.sort((a, b) => a - b);
};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {
  const uniqueNumbers = getUniqueElements(numbers);
  return uniqueNumbers.sort((a, b) => a - b);
};

console.log(longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]));
// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]

// [1, 1, 1, 2, 2, 3] => { "1" : }

const getFrequency = (elements) => {
  return elements.reduce((freq, element) => {
    freq[element] = (freq[element] || 0) + 1;
    return freq;
  }, {});
};

const topKFrequent = function (numbers, k) {
  const frequency = getFrequency(numbers);
  return Object.entries(frequency)
    .filter((element) => element[1] >= k)
    .map((element) => +element[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4

const getAverage = (numbers) => {
  return numbers.reduce((sum, number) => sum + number) / numbers.length;
};

const nestedAverage = function (nestedNumbers) {
  const listfOfNumbers = nestedNumbers.flat(Infinity);
  return getAverage(listfOfNumbers);
};

console.log(nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]));

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

const getCartesianProduct = (array) => {
  return (value1) => {
    return array.map((value2) => [value1, value2]);
  };
};

const cartesianProduct = function (arr1, arr2) {
  return arr1.flatMap(getCartesianProduct(arr2));
};

console.log(cartesianProduct([1, 2], ["a", "b"]));
// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }

const groupByDate = function (records) {
  return records.reduce((result, { date, value }) => {
    if (result[date]) {
      result[date].push(value);
      return result;
    }

    result[date] = [value];
    return result;
  }, {});
};

console.log(
  groupByDate([
    { date: "2024-01-01", value: 10 },
    { date: "2024-01-01", value: 20 },
    { date: "2024-01-02", value: 30 },
  ])
);

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  return numbers.reduce(
    function ({ min, max }, number) {
      return { min: Math.min(min, number), max: Math.max(max, number) };
    },
    { min: Infinity, max: -Infinity }
  );
};

console.log(findMinMax([1, 2, 3, 4, 5]));

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }

const sumByCategory = function (items) {
  return items.reduce(function (sum, { value, category }) {
    sum[category] = sum[category] ? sum[category] + value : value;
    return sum;
  }, {});
};

console.log(
  "actual : ",
  sumByCategory([
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "C", value: 10 },
    { category: "A", value: 30 },
  ])
);

console.log("expected : ", { A: 40, B: 20, C: 10 });
