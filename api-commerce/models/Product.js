const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  categorie: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true,
    min: 0
  },
  quantiteStock: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);