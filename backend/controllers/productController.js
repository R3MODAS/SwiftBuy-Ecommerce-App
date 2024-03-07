const Product = require("../models/productModel")

// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

// Get All Products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    })
}

// Update Product -- Admin
exports.updateProduct = async (req, res, next) => {
    const id = req.params.id
    let product = await Product.findById(id)

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        success: true,
        product
    })
}

// Delete Product
exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id
    await Product.findByIdAndDelete(id)

    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
    })
}

// Get Product Details
exports.getProductDetails = async (req, res, next) => {
    const id = req.params.id
    let product = await Product.findById(id)

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    res.status(200).json({
        success: true,
        product
    })
}