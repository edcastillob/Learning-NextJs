import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, "Email not valid"],
  },
  password: {
    type: String,
    required: [true, "Password required"],
    select: false,
  },
  fullname: {
    type: String,
    required: [true, "Full Name Required"],
    minLenght: [3, "Fullname must be at least 3 characters"],
    maxLenght: [50, "Fullname must be at most 50 characters"],
  },
});

const User = models.User || model('User', userSchema);
export default User;