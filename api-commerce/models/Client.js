const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  nomComplet: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  telephone: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema);