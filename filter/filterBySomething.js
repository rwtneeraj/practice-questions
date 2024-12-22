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