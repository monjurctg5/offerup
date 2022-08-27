const {
  addProduct,
  allProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
} = require("../controlers/productControler");
const multiUpload = require("../middleware/addSingleImage");
const ProductValidation = require("../middleware/productvalidation");

const router = require("express").Router();



router.post("/add-product",multiUpload, addProduct);
router.get("/all-product", allProduct);
router.get("/singleProduct/:id", singleProduct);

router.put("/update-product/:id", updateProduct);

router.delete("/delete-product/:id", deleteProduct);

router.get("/", (req, res) => {
  res.send("hello route");
});

module.exports = router;
