import { Router } from "express";
import { Book } from "../models/book.model.js";
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
} from "../services/books.service.js";

const bookRouter = new Router();

bookRouter.get("/", async (req, res) => {
  // const bookList = [
  //   { name: "Harry Potter", author: "J.K Rollings" },
  //   { name: "Think like a man", author: "Steve Harvey" },
  // ];
  // const bookList = await Book.findAll();
  const bookList = await getBooks();
  res.json(bookList);
});

bookRouter.post("/", async (req, res) => {
  //validation
  // const { name, author, pages } = req.body;
  // const book = { name, author, pages };
  // const createdBook = await Book.create(book);
  const createdBook = await createBook(req.body);
  res.json(createdBook);
});

bookRouter.get("/:id", async (req, res) => {
  // const id = req.params.id;
  // const book = await Book.findOne({ id });
  const book = getBookById(id);
  res.json(book);
});

//delete
bookRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  // const book = await Book.destroy({ where: { id } });
  const result = await deleteBook(id);
  res.json(result);
});

//update
bookRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const bookToUpdate = req.body;
  const book = await Book.update(bookToUpdate, { where: { id } });
  res.json(book);
});

export { bookRouter };
