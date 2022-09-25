import { Book } from "../models/book.model.js";

// createBook
// getBookById
// getBooks //TODO: paginate
// deleteBook
// update

export async function createBook(body) {
  const { name, author, pages } = body;
  const createdBook = await Book.create({ name, author, pages });
  return createdBook;
}

export async function getBookById(id) {
  return await Book.findOne({ where: { id } });
}

export async function getBooks() {
  return await Book.findAll();
}

export async function updateBook(id, bookPartials) {
  await Book.update(bookPartials, { where: { id } });

  return await getBookById(id);
}

export async function deleteBook(id) {
  return !!(await Book.destroy({ where: { id } }));
}
