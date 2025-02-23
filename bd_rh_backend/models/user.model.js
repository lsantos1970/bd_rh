const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nap_id: { type: Number, required: true, unique: true },
  nome: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["admin", "colaborador"],
    default: "colaborador",
  },
});

module.exports = mongoose.model("User", UserSchema);