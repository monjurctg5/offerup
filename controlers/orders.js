const OrderModel = require("../models/Orders");
const Product = require("../models/ProductModels");


const addOrder = async (req, res) => {
  if(req.body.product){
    console.log(req.body,"body")
    try {
      const newProduct =  new Product(req.body); // console.log('newProduct :>> ', newProduct);
     await  newProduct.save().then((doc) =>
    
        res.json({
          message: "product added successfully",
          data: doc,
        })
      );
    } catch (err) {
      console.log(err)
      res.json({
        status: "error",
        message: err,
      });
    }
    
  }
  else{
    const newOrder = new OrderModel({
      ...req.body,
    });
    try {
      await newOrder.save().then((doc) => {
        res.status(200).json({ message: "order add successfully", data: doc });
      });
    } catch (err) {
      console.log(err)
      res.json({ err });
    }
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
