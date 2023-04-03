const { pool } = require("../configs/connectDB");

const getHomepage = async (req, res) => {
    const [catalogs] = await pool.execute(`SELECT * FROM catalog`);
    const [products] = await pool.execute(`SELECT * FROM products`);

    return res.render('home.ejs', { catalogs: catalogs, products: products });
}

const getPageWithCategory = async (req, res) => {
    const id = req.params.id;

    const [catalogs] = await pool.execute(`SELECT * FROM catalog`);
    const [products] = await pool.execute(`SELECT * FROM products where idCategory=${id}`);

    return res.render('home.ejs', { catalogs: catalogs, products: products });
}

const getAddProductPage = async (req, res) => {
    return res.render('add-product.ejs');
}

const getAdminPage = async (req, res) => {
    const [products] = await pool.execute(`SELECT * FROM products`);

    return res.render('admin.ejs', { products: products });
}

const getEditProductPage = async (req, res) => {
    const id = req.params.id;

    const [products] = await pool.execute(`SELECT * FROM products where idProduct=${id}`);
    //console.log(products[0]);

    return res.render('edit-product.ejs', { currProduct: products[0] });
}

const getProductDetailPage = async (req, res) => {
    const id = req.params.id;

    const [products] = await pool.execute(`SELECT * FROM products where idProduct=${id}`);
    //console.log(products[0]);

    return res.render('product-detail.ejs', { currProduct: products[0] });
}

module.exports = {
    getHomepage,
    getPageWithCategory,
    getAddProductPage,
    getAdminPage,
    getEditProductPage,
    getProductDetailPage
}
