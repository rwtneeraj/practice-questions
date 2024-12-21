// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const filterRecentOrders = function (orders) {

  return orders.filter(function (order) {
    const date = order.orderDate.split("-");
    return date[1] === "12" || date[1] < "11" && date[2] > "21";
  });

};

console.log(filterRecentOrders([{ orderDate: "2024-11-01" }, { orderDate: "2024-12-01" }]));


// people whose birthday is this month [{name: "Alice", birthDate: "2024-12-01"}, {name: "Bob", birthDate: "2024-11-01"}] => [{name: "Alice", birthDate: "2024-12-01"}]
const filterBirthdaysThisMonth = function (people) {
  return people.filter(function (person) {
    const date = person.birthDate.split("-");
    return date[1] === "12";
  });
};

console.log(filterBirthdaysThisMonth([{ name: "Alice", birthDate: "2024-12-01" }, { name: "Bob", birthDate: "2024-11-01" }]));

// active users who posted in the last 7 days [{username: "alice", lastPostDate: "2024-12-01", active: true}, {username: "bob", lastPostDate: "2024-11-20", active: true}] => [{username: "alice", lastPostDate: "2024-12-01", active: true}]
const filterRecentActiveUsers = function (users) {
  return users.filter(function (user) {
    const date = user.lastPostDate.split("-");
    return user.active && (date[2] > 14 && date[1] === "12");

  });
};

console.log(filterRecentActiveUsers([{ username: "alice", lastPostDate: "2024-12-15", active: true }, { username: "bob", lastPostDate: "2024-11-20", active: true }]));

// filter events that occur before a certain date [{name: "Event1", date: "2024-12-01"}, {name: "Event2", date: "2024-11-15"}] => [{name: "Event2", date: "2024-11-15"}]
// const filterByDate = function (events, date) {
//   const certainDate = date.split("-");
//   return events.filter(function (event) {
//     const eventDate = event.date.split("-");
//     return eventDate[0] <= certainDate[0] && eventDate[1] <= certainDate[1] && (eventDate[1] === certainDate[1] && eventDate[2] > certainDate[2]);
//   }
//   );
// };

// console.log(filterByDate([{ name: "Event1", date: "2024-12-01" }, { name: "Event2", date: "2024-11-15" }], "2024-12-01"));

