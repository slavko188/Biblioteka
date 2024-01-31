import { BookLibrary } from "../models/bookModel.js";

export const GetOneBookControler = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookLibrary.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
