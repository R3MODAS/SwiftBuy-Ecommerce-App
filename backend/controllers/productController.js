const Product = require("../models/productModel")
const ApiErrorHandler = require("../utils/ApiErrorhandler")
const ApiFeatures = require("../utils/apiFeatures")
const asyncHandler = require("../utils/asyncHandler")

// Create Product -- Admin
exports.createProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
})

// Get All Products
exports.getAllProducts = asyncHandler(async (req, res, next) => {
    const apiFeature = new ApiFeatures(Product.find(), req.query).search()
    const products = await apiFeature.query
    res.status(200).json({
        success: true,
        products
    })
})

// Update Product -- Admin
exports.updateProduct = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    let product = await Product.findById(id)

    if (!product) {
        return next(new ApiErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        success: true,
        product
    })
})

// Delete Product
exports.deleteProduct = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    await Product.findByIdAndDelete(id)

    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
    })
})

// Get Product Details
exports.getProductDetails = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    let product = await Product.findById(id)

    if (!product) {
        return next(new ApiErrorHandler("Product not found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
})