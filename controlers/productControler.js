



// add product

const Product = require("../models/ProductModels")

const addProduct = async(req,res)=>{
    const files = req.files
    let image1 = files["productImage"][0].path
    let image2 =files["image2"][0].path
    let image3 =files["image3"][0].path

    let image4 =files["image4"][0].path
    console.log(productImage,image2,image3,"hello")


  try{
    const newProduct = new Product({
        ...req.body,
        image1,
        image2,
        image3,
        image4

    }) 
    newProduct.save().then(doc=>res.json({
        message:"product added successfully",
        data:doc
    }))
  }
  catch(err){
    res.json({
        status:"error",
        message:err
    })
  }

}


// get products 

let allProduct =async( req,res)=>{
     await Product.find({}).then(doc=>res.send(doc))

}
// single product
let singleProduct=(req,res)=>{

}


// delete product
let updateProduct=(req,res)=>{

}
// update product
let deleteProduct=(req,res)=>{

}


module.exports={
    addProduct,
    allProduct,singleProduct,
    updateProduct,
    deleteProduct
}