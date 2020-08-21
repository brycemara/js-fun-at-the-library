function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
   }
  return mainCharacter;
};

function saveReview(reviewText, reviews) {
  if(!reviews.includes(reviewText)) {
  reviews.push(reviewText);
}
};

function calculatePageCount(title) {
  return (title.length * 20);
};

function writeBook(bookTitle, bookCharacter, genre) {
  var newbook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: (bookTitle.length * 20),
    genre: genre,
  }
  return newbook
}

function editBook(book) {
  book.pageCount = ( book.pageCount * .75 )
  return book.pageCount
};

module.exports = {
  createTitle: createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
