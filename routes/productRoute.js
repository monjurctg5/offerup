const { makeActive } = require("../controlers/productControler");
const { activeProduct } = require("../controlers/productControler");
const {
  addProduct,
  allProduct,
  singleProduct,

  deleteProduct,
} = require("../controlers/productControler");
const multiUpload = require("../middleware/addSingleImage");
const ProductValidation = require("../middleware/productvalidation");

const router = require("express").Router();


router.post("/post-product",addProduct)
router.get("/all-product", allProduct);

router.get("/singleProduct/:id", singleProduct);
router.put("/make-active", makeActive);


router.get("/active-product", activeProduct);

router.delete("/delete-product/:id", deleteProduct);

router.get("/", (req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true); 
  res.setHeader('Accept','application/json');

  res.setHeader('Content-Type','application/json;charset=utf-8') // If needed

  res.send('cors problem :)');
});

module.exports = router;
