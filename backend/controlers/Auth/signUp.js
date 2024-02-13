import { UserModel } from "../../models/userModel.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    try {
      let isExist = await UserModel.findOne({ email });
      if (isExist === 0) {
        bcrypt.hash(password, saltRounds, async (err, hashPassword) => {
          if (err) {
            res.send("error", { error: err.message });
            return;
          }
          const newUser = new UserModel({
            email,
            password: hashPassword,
            ...req.body,
          });
          await newUser.save();
        });
      } else {
        return res.status(200).send({ message: "user is successful" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  } else {
    res.send({ message: "Doslo je do greske" });
  }
};
