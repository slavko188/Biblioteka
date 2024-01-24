import axios from "axios";

class BookService {
  static getAllBooks = () => axios.get("/books");
  static showOneBook = (bookId) => axios.get(`/books/${bookId}`);
  static createNewBook = (body) => axios.post("/books/", { body });
  static deleteBook = (deleteId) => axios.delete(`/books/${deleteId}`);
}

export default BookService;
