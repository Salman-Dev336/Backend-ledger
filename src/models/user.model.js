const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email is required"],
      trim: true,
      unique: [true, "email already exist"],
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email Address",
      ],
    },
    name: {
      type: String,
      required: [true, "name is required for creating account"],
    },

    password: {
      type: String,
      required: [true, "password is required for creating account"],
      minlength: [6, "password should be atleast 6 character"],
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const hash = await bcrypt.hash(this.password, 10);
  this.password= hash

  return next()
});

userSchema.method.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)


}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
