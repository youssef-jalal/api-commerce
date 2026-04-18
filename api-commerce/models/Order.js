const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true
  },
  produits: [{
    produit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    quantite: {
      type: Number,
      required: true,
      min: 1
    }
  }],
  montantTotal: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);