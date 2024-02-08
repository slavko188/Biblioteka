import { BookLibrary } from "../../models/bookModel.js";

export const UpdateBookControler = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "send all fields:title,author,publishYear" });
    }
    const { id } = req.params;
    const result = await BookLibrary.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(400).json({ message: "Book not faund" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
