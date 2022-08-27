const OrderModel = require("../models/Orders");

const addOrder = async (req, res) => {
  const newOrder = new OrderModel({
    ...req.body,
  });
  try {
    await newOrder.save().then((doc) => {
      res.status(200).json({ message: "order add successfully", data: doc });
    });
  } catch (err) {
    res.json({ err });
  }
};

const allOrder = async (req, res) => {
  try {
    await OrderModel.find({}).then((data) => {
      res.status(200).json({ data: data });
    });
  } catch (err) {
    res.json({ err });
  }
};

const deleteOrder = async (req, res) => {
  const id = req.params.id;
  try {
    await OrderModel.deleteOne({ _id: id }).then(() => {
      res.status(201).json({ message: "delete successfully" });
    });
  } catch (err) {
    res.json({ err });
  }
};

module.exports = {
  addOrder,
  deleteOrder,
  allOrder,
};
