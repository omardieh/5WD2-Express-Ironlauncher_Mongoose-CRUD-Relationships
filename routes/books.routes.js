const router = require("express").Router();
const Book = require("../models/Book.model");

router.get("/", (req, res) => {
  Book.find()
    .then((resp) => res.render("books/books-list.hbs", { books: resp }))
    .catch((err) => console.error(err));
});

module.exports = router;
