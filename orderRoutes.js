const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Create an order
router.post("/create", async (req, res) => {
    const { userId, items, totalPrice } = req.body;
    const order = await Order.create({ user: userId, items, totalPrice });

    res.status(201).json(order);
});

// Get user orders
router.get("/:userId", async (req, res) => {
    const orders = await Order.find({ user: req.params.userId });
    res.json(orders);
});

module.exports = router;
