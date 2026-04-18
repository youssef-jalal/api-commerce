const Order = require("../models/Order");
const Product = require("../models/Product");
const Client = require("../models/Client");

// CREATE order
exports.createOrder = async (req, res) => {
  try {
    const { client, produits } = req.body;

    // Verify client exists
    const clientExists = await Client.findById(client);
    if (!clientExists) {
      return res.status(404).json({ error: "Client not found" });
    }

    let montantTotal = 0;

    // Verify products exist and calculate total
    for (const item of produits) {
      const product = await Product.findById(item.produit);
      if (!product) {
        return res.status(404).json({ error: `Product ${item.produit} not found` });
      }
      if (product.quantiteStock < item.quantite) {
        return res.status(400).json({ error: `Insufficient stock for product ${product.nom}` });
      }
      montantTotal += product.prix * item.quantite;

      // Update stock
      product.quantiteStock -= item.quantite;
      await product.save();
    }

    const order = new Order({
      client,
      produits,
      montantTotal
    });

    await order.save();
    await order.populate('client', 'nomComplet email');
    await order.populate('produits.produit', 'nom prix');

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('client', 'nomComplet email')
      .populate('produits.produit', 'nom prix');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET single order
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('client', 'nomComplet email')
      .populate('produits.produit', 'nom prix');
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE order - simplified, only allow updating quantities if stock allows
exports.updateOrder = async (req, res) => {
  try {
    const { produits } = req.body;
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (produits) {
      let montantTotal = 0;
      // Restore stock first
      for (const item of order.produits) {
        const product = await Product.findById(item.produit);
        product.quantiteStock += item.quantite;
        await product.save();
      }

      // Check new quantities and calculate total
      for (const item of produits) {
        const product = await Product.findById(item.produit);
        if (!product) {
          return res.status(404).json({ error: `Product ${item.produit} not found` });
        }
        if (product.quantiteStock < item.quantite) {
          return res.status(400).json({ error: `Insufficient stock for product ${product.nom}` });
        }
        montantTotal += product.prix * item.quantite;

        // Update stock
        product.quantiteStock -= item.quantite;
        await product.save();
      }

      order.produits = produits;
      order.montantTotal = montantTotal;
    }

    await order.save();
    await order.populate('client', 'nomComplet email');
    await order.populate('produits.produit', 'nom prix');

    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE order
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Restore stock
    for (const item of order.produits) {
      const product = await Product.findById(item.produit);
      if (product) {
        product.quantiteStock += item.quantite;
        await product.save();
      }
    }

    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};