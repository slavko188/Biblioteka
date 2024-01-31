import { BookLibrary } from "../models/bookModel.js";

export const NewBookControler = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title,author,publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const saveBook = await BookLibrary.create(newBook);
    return res.status(201).send(saveBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
