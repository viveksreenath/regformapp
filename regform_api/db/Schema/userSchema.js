import { Schema, model } from "mongoose";
const UserSchema = Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  pincode: { type: String, required: true },
});
const User = model("User", UserSchema);
export default User;
