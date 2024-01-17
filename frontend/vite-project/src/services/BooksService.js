import axios from "axios";

class BookService {
  static getAllBooks = () => axios.get("/books");
  static showOneBook = (bookId) => axios.get(`books/${bookId}`);
  static createNewBook = (data) => axios.post("/books/", data);
}

export default BookService;
