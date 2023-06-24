const Book = require("../models/Book.model");

const getAllBooks = (req, res, next) => {
  Book.find()
    .then((books) => res.render("books/books-list.hbs", { books: books }))
    .catch((err) => next(err));
};

const createNewBook = (req, res, next) => {
  const { title, author, description, rating } = req.body;
  Book.create({ title, author, description, rating })
    .then((bookFromDB) => {
      console.log(bookFromDB, res.redirect("/books"));
    })
    .catch((error) => next(error));
};

const editBookById = (req, res, next) => {
  const { bookId } = req.params;

  Book.findById(bookId)
    .then((bookToEdit) => {
      // console.log(bookToEdit);
      res.render("books/book-edit.hbs", { book: bookToEdit }); // <-- add this line
    })
    .catch((error) => next(error));
};

const updateExistingBook = (req, res, next) => {
  const { bookId } = req.params;
  const { title, description, author, rating } = req.body;

  Book.findByIdAndUpdate(
    bookId,
    { title, description, author, rating },
    { new: true }
  )
    .then((updatedBook) => {
      console.log(updatedBook);
      res.redirect(`/books/${updatedBook.id}`);
    }) // go to the details page to see the updates
    .catch((error) => next(error));
};

const findBookById = (req, res, next) => {
  const { bookId } = req.params;
  Book.findById(bookId)
    .then((resp) => res.render("books/book-details.hbs", { book: resp }))
    .catch((error) => {
      console.log("Error while retrieving book details: ", error);
      next(error);
    });
};
module.exports = {
  getAllBooks,
  createNewBook,
  editBookById,
  updateExistingBook,
  findBookById,
};
