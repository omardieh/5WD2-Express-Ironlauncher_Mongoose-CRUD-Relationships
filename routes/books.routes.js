const router = require("express").Router();
const Book = require("../models/Book.model");

const getAllBooks = () => {
  return Book.find()
    .then((resp) => resp)
    .catch((err) => err);
};

router.get("/", async (req, res, next) => {
  try {
    const books = await getAllBooks();
    res.render("books/books-list.hbs", { books: books });
    next();
  } catch (err) {
    next(err);
  }
});

router.get("/create", (req, res) => res.render("books/book-create.hbs"));
router.post("/create", (req, res, next) => {
  const { title, author, description, rating } = req.body;
  Book.create({ title, author, description, rating })
    .then((bookFromDB) => {
      console.log(bookFromDB, res.redirect("/books"));
    })
    .catch((error) => next(error));
});

router.get("/:bookId", (req, res, next) => {
  const { bookId } = req.params;
  Book.findById(bookId)
    .then((resp) => res.render("books/book-details.hbs", { book: resp }))
    .catch((error) => {
      console.log("Error while retrieving book details: ", error);
      next(error);
    });
});

module.exports = router;
