// Here we will make the schema and model for User.

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    bio: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default: "",
    },
    nativeLanguage: {
      type: String,
      default: "",
    },
    learningLanguage: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    isOnboarded: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

// Hash the password before saving the user
userSchema.pre("save", async function (next) { // pre is mongoose middleware that runs before saving of document.
  if (!this.isModified("password")) return next(); // Only hash if password is modified or new

  try {
    const salt = await bcrypt.genSalt(10); //this 10 is complexity level. higher means more secure but slower.
    this.password = await bcrypt.hash(this.password, salt); // 
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  const isPasswordCorrect = await bcrypt.compare(enteredPassword, this.password);
  return isPasswordCorrect;
};
const User = mongoose.model("User", userSchema); // creating user model using the schema.

export default User;