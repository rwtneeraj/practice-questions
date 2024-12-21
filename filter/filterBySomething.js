// filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) {
  return products.filter(function (product) {
    return product.price < price;
  });
};

console.log(filterByPrice([{ name: "item1", price: 20 }, { name: "item2", price: 50 }, { name: "item3", price: 10 }], 30));

// filter people older than a certain age [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 22}] => [{name: "Bob", age: 30}]
const filterByAge = function (people, age) {
  return people.filter(function (person) {
    return person.age > age;
  });
};

console.log(filterByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 22 }], 25));

// filter students who scored above a certain grade in Math [{name: "John", grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}] => [{name: "John", grades: {math: 80, science: 90}}]
const filterByMathGrade = function (students, grade) {
  return students.filter(function (student) {
    return student.grades.math > grade;
  });
};

console.log(filterByMathGrade([{ name: "John", grades: { math: 80, science: 90 } }, { name: "Jane", grades: { math: 70, science: 85 } }], 70));

// filter employees who earn more than a certain salary [{name: "Alice", salary: 5000}, {name: "Bob", salary: 7000}] => [{name: "Bob", salary: 7000}]
const filterBySalary = function (employees, salary) {
  return employees.filter(function (employee) {
    return employee.salary > salary;
  });
};

console.log(filterBySalary([{ name: "Alice", salary: 5000 }, { name: "Bob", salary: 7000 }], 5000));

// filter orders with a quantity greater than a given number [{orderId: 1, quantity: 10}, {orderId: 2, quantity: 5}] => [{orderId: 1, quantity: 10}]
const filterByQuantity = function (orders, quantity) {
  return orders.filter(function (order) {
    return order.quantity > quantity;
  });
};

console.log(filterByQuantity([{ orderId: 1, quantity: 10 }, { orderId: 2, quantity: 5 }], 5));

// filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) {
  return books.filter(function (book) {
    return book.year > year;
  });
};

console.log(filterByYear([{ title: "Book1", year: 2020 }, { title: "Book2", year: 2022 }], 2020));

// filter students with a grade higher than a given threshold in a specific subject [{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}] => [{name: "Alice", grades: {math: 90, science: 80}}]
const filterBySubjectGrade = function (students, subject, threshold) {
  return students.filter(function (student) {
    return student.grades[subject] > threshold;
  });
};

console.log(filterBySubjectGrade([{ name: "Alice", grades: { math: 90, science: 80 } }, { name: "Bob", grades: { math: 70, science: 85 } }], "science", 80));

// filter photos with a minimum number of likes [{id: 1, likes: 100}, {id: 2, likes: 50}] => [{id: 1, likes: 100}]
const filterByLikes = function (photos, likes) {
  return photos.filter(function (photo) {
    return photo.likes < likes;
  });
};

console.log(filterByLikes([{ id: 1, likes: 100 }, { id: 2, likes: 50 }], 90));

// filter users who have made a certain number of posts [{username: "Alice", posts: 10}, {username: "Bob", posts: 5}] => [{username: "Alice", posts: 10}]
const filterByPostCount = function (users, postCount) { 
  return users.filter(function(user){
    return user.posts === postCount;
  })
};

console.log(filterByPostCount( [{username: "Alice", posts: 10}, {username: "Bob", posts: 5}],10))