const { makeActive } = require("../controlers/productControler");
const { activeProduct } = require("../controlers/productControler");
const cors = require('cors')
const {
  addProduct,
  allProduct,
  singleProduct,

  deleteProduct,
} = require("../controlers/productControler");
const multiUpload = require("../middleware/addSingleImage");
const ProductValidation = require("../middleware/productvalidation");
const Product = require("../models/ProductModels");

const router = require("express").Router();
const headers = (req, res, next) => {
	const origin = (req.headers.origin == 'http://localhost:3000') ? 'http://localhost:3000' : 'https://mywebsite.com'
	res.setHeader('Access-Control-Allow-Origin', origin)
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
}


const newAddProduct = async (req, res) => {
  const newProdut = new Product({
    ...req.body,
  });
  try {
    await newProdut.save().then((doc) => {
      res.status(200).json({ message: "new add  add successfully", data: doc });
    });
  } catch (err) {
    console.log(err)
    res.json({ err });
  }
};

router.post("/post-product",cors(),newAddProduct)
router.get("/all-product", allProduct);

router.get("/singleProduct/:id", singleProduct);
router.put("/make-active", makeActive);


router.get("/active-product", activeProduct);

router.delete("/delete-product/:id", deleteProduct);

router.get("/", (req, res) => {

 

  res.send('cors :)');
});

module.exports = router;
