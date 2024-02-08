import mongoose from "mongoose";
import rolesUser from "../config/config.js";
import DEFAULT_USER_IMAGE from "../config/config.js";

const UserSchema = mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  mobile: { type: String, default: "" },
  email: { type: String, required: [true, "Email is required"] },
  password: { type: String, required: [true, "Password is required"] },
  gender: { type: String, default: null },
  address: { type: String, default: null },
  role: { type: String, default: rolesUser.USER },
  image: { type: String, default: DEFAULT_USER_IMAGE },
  joiningDate: { type: String, default: () => new Date().getTime().toString() },
});

export const UserModel = mongoose.model("User", UserSchema);
