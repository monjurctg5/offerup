// add product

const Product = require("../models/ProductModels");

const addProduct = async (req, res) => {
  const files = req.files;
  let image1 = files["image1"][0].path;
  let image2 = files["image2"][0].path;
  let image3 = files["image3"][0].path;

  let image4 = files["image4"][0].path;

  try {
    const newProduct = new Product({
      ...req.body,
      image1,
      image2,
      image3,
      image4,
    });
    newProduct.save().then((doc) =>
      res.json({
        message: "product added successfully",
        data: doc,
      })
    );
  } catch (err) {
    res.json({
      status: "error",
      message: err,
    });
  }
};

// get products

let allProduct = async (req, res) => {
  await Product.find({}).then((doc) => res.send(doc));
};
// single product
let singleProduct = async (req, res) => {
  const id = req.params.id;
  let doc = await Product.find({ _id: id }).then((doc) => res.send(doc));
};

const makeActive = async (req, res) => {
  const { currentActive, newActive } = req.body;
  let updateDoc = await Product.findByIdAndUpdate(
    { _id: currentActive },
    { active: false }
  ).then((oldActive) => {
    Product.findByIdAndUpdate({ _id: newActive }, { active: true }).then(
      (doc) => {
        res.json({ message: "active successfully", data: doc, oldActive });
      }
    );
  });
};

// delete product
let activeProduct =async (req, res) => {
await Product.find({active:true}).then(doc=>res.send(doc))
};
// update product
let deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deleteDoc = await Product.deleteOne({ _id: id }).then(() =>
    res.status(201).json({ message: "delete successfully" })
  );
};

module.exports = {
  addProduct,
  allProduct,
  singleProduct,
  activeProduct,
  deleteProduct,
  makeActive,
};
