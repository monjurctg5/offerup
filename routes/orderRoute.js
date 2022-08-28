const { addOrder, allOrder, deleteOrder } = require("../controlers/orders");
const { makeActive } = require("../controlers/productControler");
const { activeProduct } = require("../controlers/productControler");


const router = require("express").Router();



router.post("/add-order", addOrder);
router.get("/all-order", allOrder);






router.delete("/delete-order/:id", deleteOrder);

router.get("/", (req, res) => {

  res.send('cors problem :)');

});

module.exports = router;
