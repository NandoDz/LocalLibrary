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
  

  let list = books.map((book) => book.genre);
  let TheGenres = list.reduce((acc, genre)=>{
    if(acc.indexOf(genre)===-1){
      acc.push(genre)
    }
    return acc
  },[])

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

  console.log(values);

 
  console.log(values);

  values.sort((objA, objB) => {
    return objA.count > objB.count ? -1 : 1;
  });

  while (values.length >= 6) {
    values.pop();
  }
  return values;
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

  return format(bestBooks)
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

 return format(values)
}

function format(array){ /// help function to format the Most popluar lists
  array.sort((objA, objB) => {
    return objA.count > objB.count ? -1 : 1;
  });
  while (array.length >= 6) {
    array.pop();
  }
  return array
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


