const express = require("express");
const { 
    getHomepage,
    getPageWithCategory,
    getAddProductPage,
    getAdminPage,
    getEditProductPage, 
    getProductDetailPage} = require('../controller/homeController.js');

const router = express.Router();

const initWebRoute = (app) => {
    router.get('/admin', getAdminPage);
    router.get('/admin/add-product', getAddProductPage);
    router.get('/admin/edit-product/:id', getEditProductPage);
    router.get('/admin/product-detail/:id', getProductDetailPage);

   // router.get('/', getHomepage);
    //router.get('/:id', getPageWithCategory);

    return app.use('/', router);
}

module.exports = { initWebRoute };