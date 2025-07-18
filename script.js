let library = [];

function addBook(book) {
  library.push(book);
}

function getAvailableBooks() {
  /*for (let i = 0; i < library.length; i++) {
    const book = library[i]
        if (book.borrowed === false) {
            return book;
            }
        }   */
  library.forEach((book) => {
    if (book.borrowed === false) {
      console.log(book);
    }
  });
}

function searchByTitle(title) {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.title.toLowerCase().trim() == title.toLowerCase().trim()) {
      return book;
    }
  }
}

function borrowedBooks(title) {
    const book = searchByTitle(title)
    if (book && book.borrowed === false) {
        book.borrowed = true; // On passe à true ici
        console.log(`tu peux prendre ${book.title} mais rends le après `);
    } else if (book) {
        console.log(`tu peux pas prendre ${book.title}`);
    } else {
        console.log(`Livre introuvable`);
    }
  };
function returnbooks(title) {
    const book = searchByTitle(title)
    if (book && book.borrowed === true) {
        book.borrowed = false; // On passe à false ici
      console.log(`merci d'avoir rendu ${book.title}`);
    } else if (book) {
      console.log(`tu peux pas rendre ${book.title}`);
    } else {
      console.log(`on a pas ce livre`);
    }
  };


addBook({
  title: "Blackwater",
  author: "Michael McDowell",
  publicationYear: 2022,
  borrowed: false,
});
addBook({
  title: "Comme l’exigeait la forêt",
  author: "Premee Mohamed",
  publicationYear: 2025,
  borrowed: true,
});
addBook({
  title: "Les Abysses",
  author: "Rivers Solomon",
  publicationYear: 2020,
  borrowed: true,
});

console.table(library);

console.log("Nos livres disponibles");
getAvailableBooks();

const searchedBook = searchByTitle("blackwater");
console.log(
  `Le livre que vous recherchez est ${searchedBook.title} de ${searchedBook.author}, publié en  ${searchedBook.publicationYear}.`
);

borrowedBooks('blackwater');


console.table(library); //doit passer en true 
returnbooks('blackwater');

console.table(library);
