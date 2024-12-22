// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) {
  return objects.map(function (object) { return object.name; });
};

console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) {
  return objects.map(function (object) { return object.age; });
};

console.log(extractAges([{ age: 25 }, { age: 30 }]));

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLettersOfNames = function (objects) {
  return objects.map(function (object) { return object.name[0]; });
};

console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const calculateAreas = function (rectangles) {
  return rectangles.map(function (rectangle) { return rectangle.width * rectangle.height; });
};

console.log("actual : ", calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]));
console.log("expected : ", [6, 20]);

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (objects) {
  return objects.map(function (object) { return object.active; });
};

console.log("actual : ", extractFlags([{ active: true }, { active: false }]));
console.log("expected : ", [true, false]);

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) {
  return objects.map(function (object) { return object.firstName + " " + object.lastName; });
};

console.log("actual : ", fullNames([{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }]));
console.log("expected : ", ["Alice Smith", "Bob Brown"]);

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrices = function (objects) {
  return objects.map(function (object) { return object.price * object.quantity; });
};

console.log("actual : ", totalPrices([{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }]));
console.log("expected : ", [20, 20]);

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) {
  return objects.map(function (object) { return object.age >= 18; });
};

console.log("actual : ", isAdult([{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }]));
console.log("expected :", [false, true]);


// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) {
  return objects.map(function (object) {
    const city = object.city.split(" ").map(function (word) { return word[0].toUpperCase(); }).join("");
    return [city, object.country].join(" ");
  });
};

console.log("actual : ", abbreviations([{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }]));
console.log("expected : ", ["NY, USA", "LA, USA"]);

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) {
  return objects.map(function (object) { return object.scores.math; });
};

console.log("actual : ", mathScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));
console.log("expected : ", [90, 80]);

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) {
  return objects.map(function (object) {
    return [object.x, object.y];
  });
};

console.log("actual : ", extractCoordinates([{ x: 1, y: 2 }, { x: 3, y: 4 }]));
console.log("expected : ", [[1, 2], [3, 4]]);


// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) {
  return objects.map(function (object) {
    return [object.firstName + " " + object.lastName, object.age];
  });
};

console.log("actual : ", fullNameAndAge([{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }]));
console.log("expected : ", [["Alice Smith", 25], ["Bob Brown", 30]]);

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) {
  return objects.map(function (object) { return [object.scores.math, object.scores.english]; });
};

console.log("actual : ", extractScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));
console.log("expected : ", [[90, 85], [80, 75]]);


// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) {
  return objects.map(function (object) { return [object.key, object.value]; });
};

console.log("actual : ", keyValuePairs([{ key: "a", value: 1 }, { key: "b", value: 2 }]));
console.log("expected : ", [["a", 1], ["b", 2]]);


// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (objects) {
  return objects.map(function (object) {
    return object.name.split(" ");
  });
};

console.log("actual : ", splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]));
console.log("expected : ", [["Alice", "Smith"], ["Bob", "Brown"]]);

// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]
const normalizeScores = function (objects) {
  return objects.map(function (object) {
    return object.score / 100;
  });
};

console.log("actual : ", normalizeScores([{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }]));
console.log("expected : ", [0.8, 1]);

// group students by their grades: first categorize them into A, B, C, and so on, then map each student to their respective category in [{ name: "Alice", grade: 85 }, { name: "Bob", grade: 92 }] => [['Alice', 'B'], ['Bob', 'A']]
// Steps: Categorize grades, then group students by category.
const groupByGrade = function (objects) {
  return objects.map(function (student) {
    if (student.grade > 90) {
      return [student.name, "A"];
    }

    if (student.grade > 75) {
      return [student.name, "B"];
    }

    return [student.name, "C"];
  });

};

console.log("actual : ", groupByGrade([{ name: "Alice", grade: 85 }, { name: "Bob", grade: 92 }]));
console.log("expected : ", [['Alice', 'B'], ['Bob', 'A']]);