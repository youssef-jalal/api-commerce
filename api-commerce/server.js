const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/auth", authRoutes);

// Protected routes - require authentication
const auth = require("./middleware/auth");
app.use("/api/clients", auth, clientRoutes);
app.use("/api/products", auth, productRoutes);
app.use("/api/orders", auth, orderRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API Commerce is working!" });
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Error:", err));

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});