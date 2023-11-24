const { request } = require("express");
const Product = require("../models/productModel");


//Create Product

exports.createProduct = async(req,res,next) =>{
    
const product = await Product.create(req.body);

    res.status(201).json({
        succes:true,
        product
    })

}

// Get all product
exports.getAllProducts = async(req,res)=>{

    const product = await Product.find();

    res.status(200).json({ 
        succes:true,
        product});
}

//Update Product -- ADMIN

exports.updateProduct = async (req,res,next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Cannot Find"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body,
        {
            new:true,
            runValidators:true,
            useFindAndModify:false
        });
        res.status(200).json({
            success:true,
            product
        })
}

// Delete

exports.deleteProduct = async(req,res,next) => {

    const product = await product.findById(req.params.id);


    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not Found"
        })
    }
    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product Delete Successfuly"
    })

}