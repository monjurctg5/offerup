const mongoose = require('mongoose')
const { Schema } = mongoose;

const orderSchema = new Schema({
    name:String,
    email:{type:String,require:true,unique:true},
    phone:Number,
    address:String,
    city:String,
    state:String,
    zip:Number,
 
 
   
},{
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
      }
})
const OrderModel = mongoose.model('Order',orderSchema);

module.exports = OrderModel