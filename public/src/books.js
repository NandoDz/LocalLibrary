function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let inStock = [];
  books.forEach((book) => {
    if (book.borrows[0].returned === true) {
      return inStock.push(book);
    }
  });

  let partition = [];
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      return partition.push(book);
    }
  });

  return [partition, inStock];
}

function makeNewTransaction(id, returned, picture, age, name, company, email, registered) {
  this.id = id;
  this.returned = returned;
  this.picture = picture;
  this.age = age;
  this.name = name;
  this.company = company;
  this.email = email;
  this.registered = registered;
}

function getBorrowersForBook(book, accounts) {
  let transactions = book.borrows.filter((transaction) => transaction);

  let list = [];
  transactions.forEach((transaction) => {
    let person = accounts.find((account) => account.id === transaction.id);
    let temp = new makeNewTransaction(
      transaction.id,
      transaction.returned,
      person.picture,
      person.age,
      person.name,
      person.company,
      person.email,
      person.registered
    );
    while(list.length < 10){
      return list.push(temp)
    }
    
  });
  return list;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
