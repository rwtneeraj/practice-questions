// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) {
  return books.filter(function (book) { return book.pages > 200; });
};

console.log(filterLongBooks([{ title: "Book 1", pages: 150 }, { title: "Book 2", pages: 250 }]));



// filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) {
  return books.filter(function (book) {
    return book.year > year;
  });
};

console.log(filterByYear([{ title: "Book1", year: 2020 }, { title: "Book2", year: 2022 }], 2020));

// Convert book publication dates, then filter for books published after a given year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterRecentBooks = function (books, yearThreshold) { 
  
};
