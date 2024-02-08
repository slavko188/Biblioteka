import { UserModel } from "../../models/userModel.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    try {
      let isExist = await UserModel.count({ email: email });
      if (isExist === 0) {
        bcrypt.hash(password, saltRounds, async (err, hashPassword) => {
          if (err) {
            res.render("error", { error: err.message });
            return;
          }
          const newUser = new UserModel({ email, password: hashPassword });
          await newUser.save();
        });
      } else {
        res.render("error", { error: "User with this email exist" });
      }
    } catch (err) {
      console.log(err);
      res.render("error", { err: err.message });
    }
  } else {
    res.render("Doslo je do greske");
  }
};
