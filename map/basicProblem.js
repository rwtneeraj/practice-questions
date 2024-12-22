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
const withoutVowelsOf = function (strings) {
  const vowels = "aeiouAIEOU";
  return strings.map(function (string) {
    return string.split("").filter(function (char) {
      if (!vowels.includes(char)) {
        return char;
      }
    }).join("");
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