function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let partition = [];
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      return partition.push(book);
    }
  });
  return partition.length;
}

function getMostCommonGenres(books) {
  let mostCommon = [];
  let list = books.map((book) => book.genre);
  let TheGenres = new Set(list);
  let values = [];

  TheGenres.forEach((genre) => {
    let count = 0;
    list.filter((names) => {
      if (genre === names) {
        count++;
      }
    });
    values.push({ name: genre, count: count });
  });

  mostCommon = values.sort((objA, objB) => {
    return objA.count > objB.count ? -1 : 1;
  });

  while (mostCommon.length >= 6) {
    mostCommon.pop();
  }
  return mostCommon;
}

function getMostPopularBooks(books) {
  let bestBooks = [];
  let borrowCount = books.map((book) => book.borrows.length);

  let list = books.map((book) => book.title);

  let count = 0;
  list.forEach((title) => {
    bestBooks.push({ name: title, count: borrowCount[count] });
    count++;
  });

  bestBooks.sort((objA, objB) => {
    return objA.count > objB.count ? -1 : 1;
  });

  while (bestBooks.length >= 6) {
    bestBooks.pop();
  }
  return bestBooks;
}

function getMostPopularAuthors(books, authors) {
  let names = authors.map((author) => { // list of author names with the authors id
    return { name: `${author.name.first} ${author.name.last}`, id: author.id };
  });
  let count = 0; // count that will incremet if book's author id  matches author id 
  let values = books.map((book) => { // values is an array of objects what returns 
    if (book.authorId == names[count].id) {
      return { name: names[count++].name, count: book.borrows.length }; // returns {"Name", }
    }
  });

  values.sort((objA, objB) => { // sort by values of property count 
    return objA.count > objB.count ? -1 : 1;
  });
  while (values.length >= 6) {
    values.pop();
  }
  return values;
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


