const OrderModel = require("../models/Orders")



const addOrder =async (req,res)=>{
    const newOrder = new OrderModel({
        ...req.body
    })
    await newOrder.save().then((doc)=>{
        res.status(200).json({message:"order add successfully",data:doc})
    })
}

const allOrder =async (req,res)=>{
    
    await OrderModel.find({}).then((data)=>{
        res.status(200).json({data:data})
    })
}


const deleteOrder =async (req,res)=>{
    const id = req.params.id
    
    await OrderModel.deleteOne({_id:id}).then(()=>{
        res.status(201).json({message:"delete successfully"})
    })
}


module.exports = {
    addOrder,
    deleteOrder,
    allOrder
}