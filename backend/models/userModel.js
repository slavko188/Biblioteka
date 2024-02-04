import mongoose from "mongoose";
import { roles } from "../config/config.js";
import roles from "../config/config.js";

const UserSchema = mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  mobile: { type: String, default: "" },
  email: { type: String, required: [true, "Email is required"] },
  password: { type: String, required: [true, "Password is required"] },
  description: { type: String, default: null },
  gender: { type: String, default: null },
  address: { type: String, default: null },
  role: { type: String, default: roles.USER },
  image: { type: String, default: DEFAULT_USER_IMAGE },
  joiningDate: { type: String, default: () => new Date().getTime().toString() },
});

export const User = mongoose.model("User", UserSchema);
