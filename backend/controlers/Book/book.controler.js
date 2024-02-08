import { BookLibrary } from "../../models/bookModel.js";

export const BookControler = async (req, res) => {
  try {
    const books = await BookLibrary.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
