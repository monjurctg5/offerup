const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema({
    productName:String,
    title:String,
    sortTitle:String,
    price:Number,
    description:String,
    image1:String,
    image2:String,
    image3:String,
    image4:String,
    condition:String,
    category:String,
    shippingCost:String,
    place:String,
    active:{
        type:Boolean,default:false
    }
 
   
},{
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
      }
})
const Product = mongoose.model('Products',ProductSchema);

module.exports = Product