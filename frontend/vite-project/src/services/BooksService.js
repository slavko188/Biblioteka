import axios from "axios";

class BookService {
  static getAllBooks = () => axios.get("/book");
  static showOneBook = (id) => axios.get("book/:id");
}

export default BookService;
