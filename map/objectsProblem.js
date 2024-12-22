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
console.log("expected : ",[true, false]);

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
  })
};

console.log("actual : ", abbreviations([{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }]));
console.log("expected : ", ["NY, USA", "LA, USA"]);