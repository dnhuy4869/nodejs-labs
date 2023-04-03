const express = require("express");
const { addNewProduct, editProduct, deleteProduct } = require("../controller/APIController");
const { upload } = require("../configs/multer");

const router = express.Router();

const initAPIRoute = (app)=> {
    router.post('/add-product', upload.single("img"), addNewProduct);
    router.post('/edit-product/:id', editProduct);
    router.get('/delete-product/:id', deleteProduct);

    return app.use('/api',router);
}

module.exports = { initAPIRoute };