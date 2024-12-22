// filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) {
  return products.filter(function (product) {
    return product.price < price;
  });
};

console.log(filterByPrice([{ name: "item1", price: 20 }, { name: "item2", price: 50 }, { name: "item3", price: 10 }], 30));


// Apply a discount to each item's price, then filter for items under a certain price [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item2", price: 45}]
const filterDiscountedItems = function (items, discount, maxPrice) {
  const discountedItem = items.filter(function (item) { return item.price = item.price - (item.price * discount / 100); });
  return discountedItem.filter(function (item) {
    return item.price < maxPrice;
  });
};

console.log(filterDiscountedItems([{ name: "item1", price: 100 }, { name: "item2", price: 50 }], 10, 50));


// Calculate VAT-inclusive prices, then filter for those over a certain threshold [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item1", price: 120}]
const filterHighPriceWithVAT = function (products, vatRate, threshold) { };


// Filter products based on category and price threshold [{category: {type: "electronics"}, name: "Laptop", price: 800}, {category: {type: "furniture"}, name: "Chair", price: 150}] => [{category: {type: "electronics"}, name: "Laptop", price: 800}]
const filterByCategoryAndPrice = function (products, category, maxPrice) { };


// Filter orders where the customer's balance is above a certain threshold and the order total is under a certain amount [{customer: {name: "Alice", balance: 1000}, order: {total: 200}}] => [{customer: {name: "Alice", balance: 1000}, order: {total: 200}}]
const filterOrdersByBalanceAndTotal = function (orders, balanceThreshold, totalThreshold) { };

