
function createLibrary(libName) {
  return   {
    name: libName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
};

function addBook(libName, book) {
  libName.shelves[book.genre].push(book);
};

function checkoutBook(libName, book) {
//   for ( var i = 0; i < libName.shelves.fantasy.length; i++) {
//     if (libName.shelves.fantasy[i].title === book) {
//     libName.shelves.fantasy.splice(i,1);
//     return `You have now checked out ${book} from the ${libName.name}` }
//   }
//   for (var i = 0; i < libName.shelves.nonFiction.length; i++) {
//     if (libName.shelves.nonFiction[i].title === book) {
//     libName.shelves.nonFiction.splice(i,1);
//     return `You have now checked out ${book} from the ${libName.name}` }
//   }
//   for (var i=0; i < libName.shelves.fiction.length; i++) {
//     if (libName.shelves.fiction[i].title === book) {
//     libName.shelves.fiction.splice(i,1);
//     return `You have now checked out ${book} from the ${libName.name}` }
//   }
//   return `Sorry, there are currently no copies of ${book} available at the ${libName.name}`
// }


for (var genre in libName.shelves) {
  console.log(genre);
  for ( var i = 0; i < libName.shelves[genre].length; i++) {
      if (libName.shelves[genre][i].title === book) {
      libName.shelves[genre].splice(i,1);
      return `You have now checked out ${book} from the ${libName.name}` }
    }
} return `Sorry, there are currently no copies of ${book} available at the ${libName.name}`
};




// const object = { a: 1, b: 2, c: 3 };
//
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
//





module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
