function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id);
}

function sortAccountsByLastName(accounts) {
  let results = accounts.sort((accountOne, accountTwo) => {
    return accountOne.name.last < accountTwo.name.last ? -1 : 1;
  });
  return results;
}

function numberOfBorrows(account, books) {
  let num = 0;
  books.forEach(book => { // look for only cases that match my codtion 
    return book.borrows.filter(({ id }) => {if(id ==  account.id){ num++ }}); 
  });
  
  return num;
}

function getBooksPossessedByAccount(account, books, authors) {
    let arr = books.filter(book =>{ // arr will be the array of checked out books for that account 
      const last = book.borrows[0]; // from the data set only the frist index determines checked out status 
      return last.returned == false && last.id == account.id; // check whether or not the book is checked out by accoutn 
    }); 
    return arr.map((book) =>{
      const author = authors.find(author => author.id === book.authorId);// find me the case where the id's match = author
      return {...book,author} // return 
    });
    }
 
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
