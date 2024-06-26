const mongoose = require("mongoose");

UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },

    password: {
      type: String,
      require: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
module.exports = UserModel;
