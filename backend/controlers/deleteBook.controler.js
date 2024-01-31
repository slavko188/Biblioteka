import { BookLibrary } from "../models/bookModel.js";

export const DeleteBookControler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await BookLibrary.deleteOne({ _id: req.params.id });

    if (!deleteBook) {
      return res.status(404).json({ message: "Book not faund" });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
