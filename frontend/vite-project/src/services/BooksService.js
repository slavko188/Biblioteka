import axios from "axios";

class BookService {
  static getAllBooks = () => axios.get("/books");
  static showOneBook = (bookId) => axios.get(`books/${bookId}`);
  static createNewBook = (body) => axios.post("/books", body);
  static deleteBook = (dataId) => axios.delete(`/books/${dataId}`);
}

export default BookService;
