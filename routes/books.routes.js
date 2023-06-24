const router = require("express").Router();

const {
  getAllBooks,
  createNewBook,
  editBookById,
  updateExistingBook,
  findBookById,
  deleteBookById,
} = require("../controllers/books.controller");

router.get("/", getAllBooks);
router.get("/create", (req, res) => res.render("books/book-create.hbs"));
router.post("/create", createNewBook);
router.get("/:bookId/edit", editBookById);
router.post("/:bookId/edit", updateExistingBook);
router.post("/:bookId/delete", deleteBookById);
router.get("/:bookId", findBookById);

module.exports = router;
