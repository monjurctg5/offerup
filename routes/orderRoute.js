const { addOrder, allOrder, deleteOrder } = require("../controlers/orders");
const { makeActive } = require("../controlers/productControler");
const { activeProduct } = require("../controlers/productControler");


const router = require("express").Router();



router.post("/add-order", addOrder);
router.get("/all-order", allOrder);






router.delete("/delete-order/:id", deleteOrder);

router.get("/", (req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader.Accept('application/json');

  res.setHeader.post['Content-Type'] ='application/json;charset=utf-8'; // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); 

  res.send('cors problem fixed:)');

});

module.exports = router;
