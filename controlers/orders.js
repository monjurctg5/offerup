// add product

const Product = require("../models/ProductModels");
// const addProduct = async (req, res) => {
//   // const files = req.files;
//   // let image1 =url+ files["image1"][0].path;
//   // let image2 =url+ files["image2"][0].path;
//   // let image3 = url2+files["image3"][0].path;

//   // let image4 =url+ files["image4"][0].path;
// console.log(req.body,"body")
//   try {
//     const newProduct = await new Product(req.body); // console.log('newProduct :>> ', newProduct);
//    await  newProduct.save().then((doc) =>
  
//       res.json({
//         message: "product added successfully",
//         data: doc,
//       })
//     );
//   } catch (err) {
//     console.log(err)
//     res.json({
//       status: "error",
//       message: err,
//     });
//   }
// };

// get products

const addp = async (req, res) => {
  console.log(req.body);
  const newOrder = new Product({
    ...req.body,
  });
  try {
    await newOrder.save().then((doc) => {
      res.status(200).json({ message: "add successfully", data: doc });
    });
  } catch (err) {
    console.log(err)
    res.json({ err });
  }
};

let allProduct = async (req, res) => {
  try{
    await Product.find({}).then((doc) => res.send(doc));
  }
  catch(err){
    console.log(err)
    res.json({
      status: "error",
      message: err,})

    
  }
};
// single product
let singleProduct = async (req, res) => {
  const id = req.params.id;
  let doc = await Product.find({ _id: id }).then((doc) => res.send(doc));
};

const makeActive = async (req, res) => {
  const { currentActive, newActive } = req.body;
  let updateDoc = await Product.updateMany(
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
  addp,
  allProduct,
  singleProduct,
  activeProduct,
  deleteProduct,
  makeActive,
};
