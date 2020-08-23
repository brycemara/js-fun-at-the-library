var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;




class Librarian {

  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(name2, morning) {
    this.name2 = name2;
    this.morning = morning;
    if ( this.morning === true ) {
      return `Good morning, ${this.name2}!`;
    } else {
    return `Hello, ${this.name2}!`;
  }
}
findBook(book) {
  for ( var i = 0; i < this.library.shelves.fantasy.length; i++) {
    if (this.library.shelves.fantasy[i].title === book) {
    this.library.shelves.fantasy.splice(i,1);
    return `Yes, we have ${book}` }
  }
  for (var i = 0; i < this.library.shelves.nonFiction.length; i++) {
    if (this.library.shelves.nonFiction[i].title === book) {
    this.library.shelves.nonFiction.splice(i,1);
    return `Yes, we have ${book}` }
  }
  for (var i=0; i < this.library.shelves.fiction.length; i++) {
    if (this.library.shelves.fiction[i].title === book) {
    this.library.shelves.fiction.splice(i,1);
    return `Yes, we have ${book}` }
  }
  return `Sorry, we do not have ${book}`;
}
  calculateLateFee(daysLate) {
      return Math.ceil(daysLate * 0.25);
  }
}

// findBook(bookTitle) {
//   var genres = Object.keys(this.library.shelves);
//   for (var i = 0; i < genres.length; i++) {
//     for (var j = 0; j < this.library.shelves[genres[i]].length; j++) {
//       if (bookTitle === this.library.shelves[genres[i]][j].title) {
//         this.library.shelves[genres[i]].splice(i, 1);
//         return `Yes, we have ${bookTitle}`;
//       }
//     }
//   }
// return `Sorry, we do not have ${bookTitle}`;
// }




module.exports = Librarian;
